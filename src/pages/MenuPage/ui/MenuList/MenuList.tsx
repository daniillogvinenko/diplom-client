import { MenuCard } from "@/entities/food";
import { getProfileData } from "@/features/editableProfileCard";
import { MenuItems } from "@/shared/const/MenuItems";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { useSelector } from "react-redux";
import cls from "./MenuList.module.scss";

interface MenuListProps {
    className?: string;
    onOpenModal: (value: number) => void;
}

export const MenuList = (props: MenuListProps) => {
    const { className, onOpenModal } = props;
    const { cart } = useSelector(getProfileData);

    return (
        <div className={classNames(cls.MenuList, {}, [className])}>
            <div className="container">
                {MenuItems.map((section) => (
                    <div key={section.title}>
                        <Text tagType="h2" textType="h2">
                            {section.title}
                        </Text>
                        <div className={cls.cardsContainer}>
                            {section.items.map((item) => (
                                <MenuCard
                                    id={String(item.id)}
                                    key={item.id}
                                    onClick={() => onOpenModal(item.id)}
                                    img={item.img}
                                    price={item.price}
                                    // если айди итема есть в массиве cart, то selected
                                    selected={Object.keys(cart).includes(String(item.id))}
                                    title={item.title}
                                    selectedAmount={+cart[item.id]}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
