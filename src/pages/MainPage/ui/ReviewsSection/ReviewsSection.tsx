import { ReviewCard } from "@/entities/reviews";
import cls from "./ReviewsSection.module.scss";
import { Text } from "@/shared/ui/Text";

export const ReviewsSection = () => {
    return (
        <div className={cls.ReviewsSection}>
            <div className="container">
                <Text tagType="h1" textType="h1">
                    ОТЗЫВЫ
                </Text>
                <div className={cls.cardContainer}>
                    <div>
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet "
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet "
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                    <div>
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet "
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet "
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                    <div>
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet "
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                        <ReviewCard
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                            name="Андрей"
                            rating={4}
                            img="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
