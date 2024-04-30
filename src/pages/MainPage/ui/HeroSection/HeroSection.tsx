import { Button } from "@/shared/ui/Button";
import cls from "./HeroSection.module.scss";
import { Text } from "@/shared/ui/Text";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return (
        <div className={cls.HeroSection}>
            <div className="container">
                <div className={cls.flex}>
                    <div>
                        <Text className={cls.title} tagType="h1" textType="h1">
                            О РЕСТОРАНЕ
                        </Text>
                        <div>
                            <Text className={cls.text} tagType="p" textType="text">
                                Addis Flavors - удивительное место, где вы сможете погрузиться в атмосферу Эфиопии и
                                насладиться разнообразными вкусами и ароматами подлинных блюд этой удивительной
                                культуры.
                            </Text>
                        </div>
                        <NavLink className={cls.btn1} to="/about">
                            <Button>Подробнее</Button>
                        </NavLink>
                    </div>
                    <div className={cls.img1}></div>
                    <NavLink className={cls.btn2} to="/about">
                        <Button>Подробнее</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
