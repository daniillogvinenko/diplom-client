import { EditableProfileCard, getProfileData, profileActions } from "@/features/editableProfileCard";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import cls from "./ProfilePage.module.scss";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { OrderCard } from "./OrderCard/OrderCard";

export const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { email, orders } = useSelector(getProfileData);

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
                    <Text tagType="h1" textType="h1">
                        ПРОФИЛЬ
                    </Text>
                    <Text className={cls.username} tagType="p" textType="text">
                        {email}
                    </Text>
                    <div className={cls.flex}>
                        <EditableProfileCard />
                        <div className={cls.right}>
                            <Text className={cls.historyTitle} tagType="h3" textType="h3">
                                История заказов
                            </Text>
                            {orders.map((order) => (
                                <OrderCard key={order.id} className={cls.orderCard} order={order} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
