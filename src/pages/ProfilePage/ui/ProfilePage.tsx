import { EditableProfileCard } from "@/features/editableProfileCard";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import cls from "./ProfilePage.module.scss";

export const ProfilePage = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text className={cls.pageTitle} tagType="h1" textType="h1">
                        ПРОФИЛЬ
                    </Text>
                    <EditableProfileCard />
                </div>
            </div>
        </div>
    );
};
