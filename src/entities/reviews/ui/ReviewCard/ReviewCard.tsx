import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ReviewCard.module.scss";
import { Text } from "@/shared/ui/Text";
import StarImg from "@/shared/assets/images/main-page/Star.svg";
import StarDarkImg from "@/shared/assets/images/main-page/StarGrey.png";
import { motion } from "framer-motion";

interface ReviewCardProps {
    img: string;
    name: string;
    rating: number;
    review: string;
}

export const ReviewCard = (props: ReviewCardProps) => {
    const { img, name, rating, review } = props;

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
        <motion.div
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            className={classNames(cls.ReviewCard, {}, [])}
        >
            <div className={cls.cardHeader}>
                <div className={cls.avatar}>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div>
                        <Text tagType="span" textType="cardHeader">
                            {name}
                        </Text>
                    </div>
                    <div className={cls.stars}>
                        <img src={rating >= 1 ? StarImg : StarDarkImg} alt="" />
                        <img src={rating >= 2 ? StarImg : StarDarkImg} alt="" />
                        <img src={rating >= 3 ? StarImg : StarDarkImg} alt="" />
                        <img src={rating >= 4 ? StarImg : StarDarkImg} alt="" />
                        <img src={rating >= 5 ? StarImg : StarDarkImg} alt="" />
                    </div>
                </div>
            </div>
            <Text tagType="p" textType="text">
                {review}
            </Text>
        </motion.div>
    );
};
