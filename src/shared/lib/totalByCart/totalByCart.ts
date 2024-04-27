import { itemByIdFromMenu } from "../itemByIdFromMenu/itemByIdFromMenu";

// функция находит стоимость итемов в коризне
export const totalByCart = (cart: Record<string, string>) => {
    let total = 0;
    Object.keys(cart).map((key) => {
        const item = itemByIdFromMenu(+key);
        total += +item.price!.slice(0, -3) * +cart[key];
    });
    console.log(total);
    return total;
};
