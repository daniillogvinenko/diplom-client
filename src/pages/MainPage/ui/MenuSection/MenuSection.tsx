import { Text } from "@/shared/ui/Text";
import cls from "./MenuSection.module.scss";
import { Button } from "@/shared/ui/Button";

export const MenuSection = () => {
    return (
        <div className={cls.menuSection}>
            <div className={cls.tint}>
                <div className="container">
                    <Text tagType="h1" color="white" textType="h1">
                        ОЗНАКОМЬТЕСЬ С МЕНЮ
                    </Text>
                    <br />
                    <Button variant="outline">ПОДРОБНЕЕ</Button>
                </div>
            </div>
        </div>
    );
};
