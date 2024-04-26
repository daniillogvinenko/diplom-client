import { MenuItems } from "@/shared/const/MenuItems";

export const itemByIdFromMenu = (itemId: number) => {
    // из массива находится итем с нужным айдишником и именно он подставляется в модалку
    const section = MenuItems.find((section) => section.items.find((item) => item.id === itemId));
    const item = section?.items.find((item) => item.id === itemId);
    return { ...item };
};
