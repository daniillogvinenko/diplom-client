import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { Header } from "@/widgets/Header";
import { ParallaxBg } from "./ParallaxBg/ParallaxBg";
import { MyMarquee } from "@/widgets/MyMarquee";
import { HeroSection } from "./HeroSection/HeroSection";
import { MenuSection } from "./MenuSection/MenuSection";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";
import { MasterClassesSection } from "./MasterClassesSection/MasterClassesSection";

export const MainPage = () => {
    return (
        <div className={classNames(cls.MainPage, {}, [])}>
            <Header />
            <ParallaxBg />
            <HeroSection />
            <MyMarquee />
            <MenuSection />
            <ReviewsSection />
            <MasterClassesSection />
        </div>
    );
};
