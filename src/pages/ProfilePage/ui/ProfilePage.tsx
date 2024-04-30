import { EditableProfileCard, profileActions } from "@/features/editableProfileCard";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import cls from "./ProfilePage.module.scss";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const ProfilePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(profileActions.setError(""));
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
