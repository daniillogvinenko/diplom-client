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
                        <Text tagType="h1" textType="h1">
                            LOREM IPSUM
                        </Text>
                        <div>
                            <Text tagType="p" textType="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </Text>
                        </div>
                        <NavLink to="/about">
                            <Button>Подробнее</Button>
                        </NavLink>
                    </div>
                    <div className={cls.img1}></div>
                </div>
            </div>
        </div>
    );
};
