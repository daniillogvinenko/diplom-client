import { EditableProfileCard } from "@/features/editableProfileCard";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import cls from "./ProfilePage.module.scss";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer";

export const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={cls.ProfilePage}>
            <Header />
            <div className={cls.pageContent}>
                <div className="container">
                    <BackLink className={cls.backLink} to="/" text="Главная" />
                    <Text className={cls.pageTitle} tagType="h1" textType="h1">
                        ПРОФИЛЬ
                    </Text>
                    <EditableProfileCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};
