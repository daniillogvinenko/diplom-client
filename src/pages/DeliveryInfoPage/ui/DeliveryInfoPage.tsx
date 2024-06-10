import { BackLink } from "@/shared/ui/BackLink";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import cls from "./DeliveryInfoPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { useEffect } from "react";

export const DeliveryInfoPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.DeliveryInfoPage, {}, [])}>
            <Header />
            <div className={cls.pageContent}>
                <div className="container">
                    <BackLink className={cls.backLink} to="/" text="Главная" />
                    <Text className={cls.h1} tagType="h1" textType="h1">
                        ДОСТАВКА
                    </Text>
                    <Text textType="h3" tagType="h3">
                        Условия доставки
                    </Text>
                    <Text textType="text" tagType="p">
                        Минимальная сумма заказа от 549₽, доставка бесплатно.
                    </Text>
                    <Text textType="h3" tagType="h3">
                        Безопасность платежей
                    </Text>
                    <Text textType="text" tagType="p">
                        Оплатить заказ можно с помощью банковских карт платёжных систем Visa, MasterCard, МИР. При
                        оплате банковской картой безопасность платежей гарантирует процессинговый центр Cloudpayments.
                        Приём платежей происходит через защищённое безопасное соединение, используя протокол TLS 1.2.
                        Компания Cloudpayments соответствует международным требованиями PCI DSS для обеспечения
                        безопасной обработки реквизитов банковской карты плательщика. Ваши конфиденциальные данные
                        необходимые для оплаты (реквизиты карты, регистрационные данные и др.) не поступают в
                        Интернет-магазин, их обработка производится на стороне процессингового центра и полностью
                        защищена. Никто, в том числе интернет-магазин Addis Flavors, не может получить банковские и
                        персональные данные плательщика. При оплате заказа банковской картой возврат денежных средств
                        производится на ту же самую карту, с которой был произведён платёж.
                    </Text>
                    <Text textType="h3" tagType="h3">
                        Возврат
                    </Text>
                    <Text textType="text" tagType="p">
                        В соответствии с законодательством РФ возврат продовольственных товаров надлежащего качества не
                        допускается, возврат денежных средств за такой товар не производится. В случае если клиент
                        обнаружит, что ему передан товар ненадлежащего качества, он вправе до истечения срока годности
                        возвратить товар ненадлежащего качества продавцу и потребовать возврата уплаченной денежной
                        суммы, либо потребовать замены товара ненадлежащего качества.
                    </Text>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada798c3ed1c23aca45a695db567236ece2f18693c178223ea218d972abc2920a&amp;source=constructor"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <Text textType="h3" tagType="h3">
                        Реквизиты
                    </Text>
                    <Text textType="text" tagType="p">
                        ООО "Addis Flavors"
                        <br /> Адрес организации: 195197, г. Санкт-Петербург, пр. Кондратьевский, д. 12, корп. 5, стр.
                        1, пом.3Н, офис 105
                        <br /> ИНН: 7805611240
                        <br /> КПП: 778934001
                        <br /> ОГРН: 1139627286630
                    </Text>
                </div>
            </div>
            <Footer />
        </div>
    );
};
