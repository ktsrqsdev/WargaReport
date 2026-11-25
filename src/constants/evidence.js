import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
export const MAX_EVIDENCE_FILES = 5;


export const PHOTO_SRC = { img1, img2, img3, img4, img5 };
export const SAMPLE_PHOTOS = Object.keys(PHOTO_SRC);

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
