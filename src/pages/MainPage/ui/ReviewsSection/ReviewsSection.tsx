import { ReviewCard } from "@/entities/reviews";
import cls from "./ReviewsSection.module.scss";
import { Text } from "@/shared/ui/Text";
import { motion } from "framer-motion";

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
                <div className={cls.cardContainer}>
                    <div>
                        <ReviewCard
                            review="Посетил с подругами это заведение, все очень атмосферно. Готовят здесь великолепно. Спасибо большое организаторам и персоналу!"
                            name="Андрей"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="Потрясающее место, куда хочется приходить снова и снова. Наc встретила замечательная девушка, проводила за уютный столик. Еда просто потрясающая. Все было на высоте! Отдельно хочется сказать спасибо Валерии, что скрасила наш вечер своей заботой и вниманием!"
                            name="Мария"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                    <div>
                        <ReviewCard
                            review="Потрясающее место, хорошее обслуживание, которое не оставит неравнодушным каждого, вкусная и необычная еда. Обязательно вернёмся ещё раз"
                            name="Александра"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="Изумительное заведение! Все очень вкусно, ожидание совсем небольшое даже при полной посадке, дружелюбный персонал !"
                            name="Ирина"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                    <div>
                        <ReviewCard
                            review="Посетили данное место и могу сказать, что обслуживание отличное, кухня безумно вкусная, напитки супер! Очень атмосферно, для компании самое того. Рекомендую к посещению! Не пожалеете)"
                            name="Юрий"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="все супер, интерьер очень интересный. Замечательная африканская кухня, отдельное спасибо Шефу. Отличный персонал, все понравилось. Будем приезжать снова и снова."
                            name="Михаил"
                            rating={5}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
