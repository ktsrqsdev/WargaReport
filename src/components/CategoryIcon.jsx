import { Icon } from "./Icons";

const CATEGORY_ICONS = {
    "Roads & Transit": Icon.CatRoads,
    "Water & Sewage": Icon.CatWater,
    "Street Lighting": Icon.CatLighting,
    "Sanitation & Waste": Icon.CatSanitation,
    "Public Parks & Trees": Icon.CatParks,
    "Noise & Disturbance": Icon.CatNoise,
    "Building & Zoning": Icon.CatBuilding,
};

export default function CategoryIcon({ name }) {
    const CategoryGlyph = CATEGORY_ICONS[name] ?? Icon.CatRoads;
    return <CategoryGlyph />;
}
