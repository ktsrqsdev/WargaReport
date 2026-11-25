import { PHOTO_SRC } from "../constants/evidence";
import { Icon } from "./Icons";

export default function EvidenceCard({ item, onRemove, ratio = "aspect-video" }) {
    return (
        <article className="overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
            {item.type === "photo" && <img src={PHOTO_SRC[item.image]} alt="Evidence photo" className={`${ratio} w-full object-cover`} />}
            {item.type === "audio" && (
                <div className={`grid ${ratio} place-items-center bg-(--bg-received)`}>
                    <div className="flex flex-col items-center gap-2">
                        <Icon.Music />
                        <span className="font-(family-name:--font-pm) text-[11px] text-(--success)">Audio clip · {item.duration}</span>
                    </div>
                </div>
            )}
            {item.type === "video" && (
                <div className={`relative grid ${ratio} place-items-center bg-(--dark)`}>
                    <Icon.Play />
                    <span className="absolute bottom-2 right-2 rounded-md bg-(--dark-70) px-1.5 py-0.5 font-(family-name:--font-pm) text-[10px] text-(--light)">
                        {item.duration}
                    </span>
                </div>
            )}
            <div className="flex items-start justify-between gap-2 px-3.5 py-3">
                <div>
                    <p className="font-(family-name:--font-pm) text-[11px]">{item.name}</p>
                    <p className="mb-1 mt-0.5 font-(family-name:--font-pm) text-[10px] uppercase text-(--disabled)">{item.info}</p>
                    <p className="text-xs leading-relaxed text-(--disabled)">{item.note}</p>
                </div>
                {onRemove && (
                    <button type="button" aria-label="Remove file" className="shrink-0 cursor-pointer" onClick={onRemove}>
                        <Icon.Trash />
                    </button>
                )}
            </div>
        </article>
    );
}
