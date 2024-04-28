import { EditableProfileCard } from "@/features/editableProfileCard";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import cls from "./ProfilePage.module.scss";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";

export const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <BackLink className={cls.backLink} to="/" text="Главная" />
                    <Text className={cls.pageTitle} tagType="h1" textType="h1">
                        ПРОФИЛЬ
                    </Text>
                    <EditableProfileCard />
                </div>
            </div>
        </div>
    );
};
