import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Textarea } from "@/shared/ui/Textarea";
import { Header } from "@/widgets/Header";
import { useState } from "react";

export const ProfilePage = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text tagType="h1" textType="h1">
                        ПРОФИЛЬ
                    </Text>
                    <Input label="Имя" placeholder="Имя" value={value} onChange={setValue} />
                    <Input label="Номер телефона" placeholder="Номер телефона" value={value} onChange={setValue} />
                    <Input label="Эл. почта" placeholder="Эл. почта" value={value} onChange={setValue} />
                    <Textarea label="Эл. почта" placeholder="Эл. почта" value={value} onChange={setValue} />
                    <Button>Сохранить</Button>
                </div>
            </div>
        </div>
    );
};
