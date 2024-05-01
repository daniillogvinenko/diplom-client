import { Text } from "@/shared/ui/Text";
import cls from "./Footer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface FooterProps {
    noMargin?: boolean;
    className?: string;
}

export const Footer = ({ noMargin, className }: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, { [cls.noMargin]: noMargin }, [className])}>
            <div className="container">
                <div className={cls.flex}>
                    <Text color="white" tagType="h2" textType="h2">
                        ADDIS <br />
                        FLAVORS
                    </Text>
                    <div className={cls.right}>
                        <Text color="white" textType="text" tagType="p">
                            +7 999 999 99 99
                        </Text>
                        <Text color="white" textType="text" tagType="p">
                            addisflavorsfeedback@gmail.com
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};
