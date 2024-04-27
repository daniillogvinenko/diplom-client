import { itemByIdFromMenu } from "../itemByIdFromMenu/itemByIdFromMenu";

// функция находит стоимость итемов в коризне
export const totalByCart = (cart: Record<string, string>) => {
    let total = 0;
    Object.keys(cart).map((key) => {
        const item = itemByIdFromMenu(+key);
        total += +item.price!.slice(0, -3) * +cart[key];
    });
    return total;
};

export const itemAmountByCart = (cart: Record<string, string>) => {
    let total = 0;
    Object.keys(cart).map((key) => {
        total += +cart[key];
    });
    return total;
};
