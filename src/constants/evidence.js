export const MAX_EVIDENCE_FILES = 5;

export const SAMPLE_PHOTOS = ["img1", "img2", "img3", "img4", "img5"];

export const EVIDENCE_TEMPLATES = {
    photo: {
        name: "incident_capture",
        extension: "jpg",
        info: "Image · 1.8 MB",
        note: "Photographed live on site by resident camera.",
    },
    audio: {
        name: "voice_memo",
        extension: "m4a",
        info: "Audio · 0.9 MB",
        note: "Voice note recorded on site.",
        duration: "0:15",
    },
    video: {
        name: "site_clip",
        extension: "mp4",
        info: "Video · 5.2 MB",
        note: "Short clip of the incident.",
        duration: "0:12",
    },
};
