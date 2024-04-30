import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import cls from "./MasterClassesSection.module.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const MasterClassesSection = () => {
    const animationVariants = {
        initial: {
            opacity: 0,
            y: 150,
        },

        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className={cls.MasterClassesSection}>
            <div className="container">
                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Text className={cls.text} tagType="h1" color="white" textType="h1">
                        МЫ РЕГУЛЯРНО ПРОВОДИМ МАСТЕР-КЛАССЫ ПО ПРИГОТОВЛЕНИЮ БЛЮД ЭФИОПСКОЙ КУХНИ
                    </Text>
                    <NavLink to="/master-classes">
                        <Button variant="outline">Подробнее</Button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};
