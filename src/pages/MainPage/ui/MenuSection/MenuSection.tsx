import { Text } from "@/shared/ui/Text";
import cls from "./MenuSection.module.scss";
import { Button } from "@/shared/ui/Button";
import { motion } from "framer-motion";

export const MenuSection = () => {
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
        <div className={cls.menuSection}>
            <div className={cls.tint}>
                <div className="container">
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Text className={cls.text} tagType="h1" color="white" textType="h1">
                            ОЗНАКОМЬТЕСЬ С МЕНЮ
                        </Text>
                        <Button variant="outline">ПОДРОБНЕЕ</Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
