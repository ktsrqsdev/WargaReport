import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import EvidenceCard from "../components/EvidenceCard";
import { ErrorText } from "../components/Field";
import { Icon } from "../components/Icons";
import ReportStepLayout, { StepButtons } from "../components/ReportStepLayout";
import { MAX_EVIDENCE_FILES } from "../constants/evidence";
import { setDraft } from "../redux/slices/reportsSlice";
import { buildEvidence } from "../utils/evidence";

function evidenceReducer(state, action) {
    switch (action.type) {
        case "add": {
            const counter = state.counter + 1;
            return { items: [...state.items, buildEvidence(action.kind, counter)], counter };
        }
        case "remove":
            return { ...state, items: state.items.filter((_, index) => index !== action.index) };
        default:
            return state;
    }
}

const ADD_BUTTONS = [
    { kind: "photo", label: "Capture Photo", icon: <Icon.Photo /> },
    { kind: "audio", label: "Record Audio Memo", icon: <Icon.Mic /> },
    { kind: "video", label: "Attach Video Clip", icon: <Icon.Video /> },
];

export default function ReportProofPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const draft = useSelector(state => state.reports.draft);

    const saved = draft.evidence ?? [];
    const [evidence, dispatchEvidence] = useReducer(evidenceReducer, { items: saved, counter: saved.length });
    const [error, setError] = useState("");

    if (!draft.address) return <Navigate to="/report/topic" replace />;

    function handleAdd(kind) {
        if (evidence.items.length >= MAX_EVIDENCE_FILES) return setError(`Maximum ${MAX_EVIDENCE_FILES} evidence files.`);
        setError("");
        dispatchEvidence({ type: "add", kind });
    }

    function handleContinue() {
        if (evidence.items.length === 0) return setError("Please attach at least one evidence file.");
        dispatch(setDraft({ evidence: evidence.items }));
        navigate("/report/review");
    }

    return (
        <ReportStepLayout step={3} title="Attach evidence" subtitle="Reports with photographic proof or audio notes are prioritized by field dispatchers.">
            <StepButtons backTo="/report/location" onContinue={handleContinue}>
                <div className="flex flex-col items-center gap-1.5 rounded-2xl border-[1.5px] border-(--bd-primary) bg-(--bg-secondary) px-5 py-7 text-center">
                    <Icon.Upload />
                    <p className="text-sm font-semibold">Upload evidence files or use camera simulation</p>
                    <p className="text-xs leading-relaxed text-(--disabled)">Images, audio voice notes, inspection video clips (JPG, MP4, M4A)</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {ADD_BUTTONS.map(button => (
                            <button
                                key={button.kind}
                                type="button"
                                onClick={() => handleAdd(button.kind)}
                                className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                {button.icon}
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-2.5 mt-4.5 flex items-center justify-between">
                    <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">Attached evidence ({evidence.items.length})</p>
                </div>
                {evidence.items.length === 0 ? (
                    <p className="rounded-[14px] border border-dashed border-(--bd-primary) px-4 py-6 text-center text-xs text-(--disabled)">
                        No evidence attached yet. Use the buttons above to add a photo, audio memo, or video clip.
                    </p>
                ) : (
                    <div className="grid gap-3 sm:grid-cols-2">
                        {evidence.items.map((item, index) => (
                            <EvidenceCard key={item.name} item={item} onRemove={() => dispatchEvidence({ type: "remove", index })} />
                        ))}
                    </div>
                )}
                <ErrorText text={error} className="mt-4" />
            </StepButtons>
        </ReportStepLayout>
    );
}
