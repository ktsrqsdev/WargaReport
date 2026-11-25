import { EVIDENCE_TEMPLATES, SAMPLE_PHOTOS } from "../constants/evidence";

export function buildEvidence(type, order) {
    const template = EVIDENCE_TEMPLATES[type];
    return {
        type,
        name: `${template.name}_${order}.${template.extension}`,
        info: template.info,
        note: template.note,
        ...(template.duration && { duration: template.duration }),
        ...(type === "photo" && { image: SAMPLE_PHOTOS[(order - 1) % SAMPLE_PHOTOS.length] }),
    };
}

export function summarizeEvidence(evidence) {
    const count = type => evidence.filter(item => item.type === type).length;
    const parts = [
        [count("photo"), "photo"],
        [count("audio"), "audio note"],
        [count("video"), "video clip"],
    ]
        .filter(([total]) => total)
        .map(([total, label]) => `${total} ${label}${total > 1 ? "s" : ""}`);
    return parts.join(", ") || "no files";
}

export function getThumbnail(report) {
    if (!report || !report.evidence) return null;

    for (const item of report.evidence) {
        if (item.type === "photo") {
            return item.image;
        }
    }

    return null;
}
