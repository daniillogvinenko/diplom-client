import { Text } from "@/shared/ui/Text";
import Marquee from "react-fast-marquee";
import cls from "./MyMarquee.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface MyMarqueeProps {
    className?: string;
}

export const MyMarquee = (props: MyMarqueeProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MyMarquee, {}, [className])}>
            <Marquee className={cls.marquee1} speed={100}>
                <Text tagType="span" color="main" textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" fillNone textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" color="main" textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" fillNone textType="marquee">
                    ADDIS FLAVORS
                </Text>
            </Marquee>
            <Marquee className={cls.marquee2} direction="right" speed={100}>
                <Text tagType="span" color="main" textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" fillNone textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" color="main" textType="marquee">
                    ADDIS FLAVORS
                </Text>
                <Text tagType="span" fillNone textType="marquee">
                    ADDIS FLAVORS
                </Text>
            </Marquee>
        </div>
    );
};
