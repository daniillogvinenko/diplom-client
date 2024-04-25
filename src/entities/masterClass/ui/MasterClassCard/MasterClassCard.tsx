import { Text } from "@/shared/ui/Text";
import cls from "./MasterClassCard.module.scss";
import { Button } from "@/shared/ui/Button";

interface MasterClassCardProps {
    title: string;
    price: string;
    date: string;
    img: string;
}

export const MasterClassCard = (props: MasterClassCardProps) => {
    const { date, price, title, img } = props;

    return (
        <div className={cls.MasterClassCard}>
            <div style={{ background: `url(${img}) center/cover` }} className={cls.img}></div>
            <div className={cls.infoWrapper}>
                <Text tagType="span" textType="cardHeader">
                    {title}
                </Text>
                <div className={cls.flex}>
                    <Text tagType="span" textType="cardPrice">
                        {price}
                    </Text>
                    <Text tagType="span" textType="text">
                        {date}
                    </Text>
                </div>
                <Button fullWidth>Подробнее</Button>
            </div>
        </div>
    );
};
