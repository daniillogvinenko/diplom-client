import { Text } from "@/shared/ui/Text";
import Marquee from "react-fast-marquee";
import cls from "./MyMarquee.module.scss";

interface MyMarqueeProps {
    marginTop?: number;
}

export const MyMarquee = (props: MyMarqueeProps) => {
    const { marginTop } = props;

    return (
        <div style={{ marginTop }} className={cls.MyMarquee}>
            <Marquee style={{ marginBottom: 30, height: 130 }} speed={100}>
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
            <Marquee style={{ height: 130, marginTop: -40 }} direction="right" speed={100}>
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
