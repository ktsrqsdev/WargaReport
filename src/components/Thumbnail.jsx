import { getThumbnail } from "../utils/evidence";
import { Icon } from "./Icons";

export default function Thumbnail({ report, size }) {
    const src = getThumbnail(report);
    const box = `${size} shrink-0 rounded-xl border border-(--bd-secondary)`;
    if (src) return <img src={src} alt="" className={`${box} object-cover`} />;

    const hasVideo = report.evidence?.some(item => item.type === "video");
    return <div className={`grid ${box} place-items-center bg-(--bg-received)`}>{hasVideo ? <Icon.Video /> : <Icon.Music />}</div>;
}
