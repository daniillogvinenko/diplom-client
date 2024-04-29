import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { Header } from "@/widgets/Header";
import { ParallaxBg } from "./ParallaxBg/ParallaxBg";
import { MyMarquee } from "@/widgets/MyMarquee";
import { HeroSection } from "./HeroSection/HeroSection";
import { MenuSection } from "./MenuSection/MenuSection";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";
import { MasterClassesSection } from "./MasterClassesSection/MasterClassesSection";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer";

export const MainPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.MainPage, {}, [])}>
            <Header />
            <ParallaxBg />
            <HeroSection />
            <MyMarquee className={cls.marquee} />
            <MenuSection />
            <ReviewsSection />
            <MasterClassesSection />
            <Footer noMargin />
        </div>
    );
};
