import cls from "./ReviewsSection.module.scss";
import { Text } from "@/shared/ui/Text";
import { motion } from "framer-motion";
import { ReviewsSectionDesktop } from "./ReviewsSectionDesktop/ReviewsSectionDesktop";
import { ReviewsSectionTablet } from "./ReviewsSectionTablet/ReviewsSectionTablet";

export const ReviewsSection = () => {
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
        <div className={cls.ReviewsSection}>
            <div className="container">
                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Text tagType="h1" textType="h1">
                        ОТЗЫВЫ
                    </Text>
                </motion.div>
                <ReviewsSectionDesktop className={cls.sectionDesktop} />
                <ReviewsSectionTablet className={cls.sectionTablet} />
            </div>
        </div>
    );
};
