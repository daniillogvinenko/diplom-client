export const menuCardHelper = (
    isNew: boolean,
    isHit: boolean,
    isSpicy: boolean,
    itemTabs: ("hit" | "spicy" | "new")[]
) => {
    if (isNew && !itemTabs.includes("new")) return false;
    if (isSpicy && !itemTabs.includes("spicy")) return false;
    if (isHit && !itemTabs.includes("hit")) return false;
    return true;
};
