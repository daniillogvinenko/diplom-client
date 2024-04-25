import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import cls from "./MasterClassesSection.module.scss";

export const MasterClassesSection = () => {
    return (
        <div className={cls.MasterClassesSection}>
            <div className="container">
                <div>
                    <Text tagType="h1" color="white" textType="h1">
                        МЫ РЕГУЛЯРНО ПРОВОДИМ МАСТЕР-КЛАССЫ ПО ПРИГОТОВЛЕНИЮ БЛЮД ЭФИОПСКОЙ КУХНИ
                    </Text>
                    <br />
                    <Button variant="outline">ОЗНАКОМИТЬСЯ</Button>
                </div>
            </div>
        </div>
    );
};
