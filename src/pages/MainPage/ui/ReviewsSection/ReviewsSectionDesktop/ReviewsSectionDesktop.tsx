import { ReviewCard } from "@/entities/reviews";
import cls from "./ReviewsSectionDesktop.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import img1 from "@/shared/assets/images/main-page/reviews/1.jpg";
import img2 from "@/shared/assets/images/main-page/reviews/2.jpg";
import img3 from "@/shared/assets/images/main-page/reviews/3.jpg";
import img4 from "@/shared/assets/images/main-page/reviews/4.jpg";
import img5 from "@/shared/assets/images/main-page/reviews/5.png";
import img6 from "@/shared/assets/images/main-page/reviews/6.webp";

interface ReviewsSectionDesktopProps {
    className?: string;
}

export const ReviewsSectionDesktop = ({ className }: ReviewsSectionDesktopProps) => {
    return (
        <div className={classNames(cls.cardContainer, {}, [className])}>
            <div>
                <ReviewCard
                    review="Посетил с подругами это заведение, все очень атмосферно. Готовят здесь великолепно. Спасибо большое организаторам и персоналу!"
                    name="Андрей"
                    rating={5}
                    img={img1}
                />
                <ReviewCard
                    review="Потрясающее место, куда хочется приходить снова и снова. Наc встретила замечательная девушка, проводила за уютный столик. Еда просто потрясающая. Все было на высоте! Отдельно хочется сказать спасибо Валерии, что скрасила наш вечер своей заботой и вниманием!"
                    name="Мария"
                    rating={5}
                    img={img4}
                />
            </div>
            <div>
                <ReviewCard
                    review="Потрясающее место, хорошее обслуживание, которое не оставит неравнодушным каждого, вкусная и необычная еда. Обязательно вернёмся ещё раз"
                    name="Александра"
                    rating={5}
                    img={img5}
                />
                <ReviewCard
                    review="Изумительное заведение! Все очень вкусно, ожидание совсем небольшое даже при полной посадке, дружелюбный персонал!"
                    name="Ирина"
                    rating={6}
                    img={img6}
                />
            </div>
            <div>
                <ReviewCard
                    review="Посетили данное место и могу сказать, что обслуживание отличное, кухня безумно вкусная, напитки супер! Очень атмосферно, для компании самое того. Рекомендую к посещению! Не пожалеете)"
                    name="Юрий"
                    rating={5}
                    img={img2}
                />
                <ReviewCard
                    review="все супер, интерьер очень интересный. Замечательная африканская кухня, отдельное спасибо Шефу. Отличный персонал, все понравилось. Будем приезжать снова и снова."
                    name="Михаил"
                    rating={5}
                    img={img3}
                />
            </div>
        </div>
    );
};
