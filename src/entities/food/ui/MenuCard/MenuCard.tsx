import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MenuCard.module.scss";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import SelectedIcon from "@/shared/assets/images/menu-page/selectedIcon.svg";
import DecrementIcon from "@/shared/assets/images/menu-page/DecrementIcon.svg";
import IncrementIcon from "@/shared/assets/images/menu-page/IncrementIcon.svg";

interface MenuCardProps {
    title: string;
    price: string;
    selected: boolean;
    selectedAmount?: number;
    img: string;
    className?: string;
}

export const MenuCard = (props: MenuCardProps) => {
    const { price, selected, title, selectedAmount = 1, img, className } = props;

    if (selected)
        return (
            <div className={classNames(cls.MenuCard, {}, [className])}>
                <div style={{ background: `url(${img}) center/cover` }} className={cls.img}>
                    <div className={cls.orangeTint}>
                        <img src={SelectedIcon} alt="" />
                    </div>
                </div>
                <div className={cls.infoWrapper}>
                    <Text tagType="span" textType="cardHeader">
                        {title}
                    </Text>
                    <div className={cls.flex}>
                        <Text tagType="span" textType="cardPrice">
                            {price}
                        </Text>
                    </div>
                    <Button fullWidth>
                        <div className={cls.counter}>
                            <img src={DecrementIcon} alt="" />
                            <Text tagType="span" textType="text">
                                {selectedAmount}
                            </Text>
                            <img src={IncrementIcon} alt="" />
                        </div>
                    </Button>
                </div>
            </div>
        );

    return (
        <div className={classNames(cls.MenuCard, {}, [className])}>
            <div style={{ background: `url(${img}) center/cover` }} className={cls.img}></div>
            <div className={cls.infoWrapper}>
                <Text tagType="span" textType="cardHeader">
                    {title}
                </Text>
                <div className={cls.flex}>
                    <Text tagType="span" textType="cardPrice">
                        {price}
                    </Text>
                </div>
                <Button fullWidth>В корзину</Button>
            </div>
        </div>
    );
};
