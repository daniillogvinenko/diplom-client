import { Text } from "@/shared/ui/Text";
import cls from "./MenuModal.module.scss";
import { Modal } from "@/shared/ui/Modal";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { MenuItems } from "@/shared/const/MenuItems";
import { Drawer } from "@/shared/ui/Drawer";
import DrawerCloseIcon from "@/shared/assets/images/common/drawerClose.svg";
import { SmallTab } from "@/shared/ui/SmallTab";

interface MenuModalProps {
    modalIsOpen: number | null;
    onClose: () => void;
}

const mapFiltersToRussian = {
    spicy: "острое",
    hit: "хит",
    new: "новинка",
};

export const MenuModal = ({ modalIsOpen, onClose }: MenuModalProps) => {
    let section;
    let item;
    // из массива находится итем с нужным айдишником и именно он подставляется в модалку
    if (modalIsOpen !== null) {
        section = MenuItems.find((section) => section.items.find((item) => item.id === modalIsOpen));
        item = section?.items.find((item) => item.id === modalIsOpen);
    }

    return (
        <>
            <Drawer className={cls.Drawer} isOpen={Boolean(modalIsOpen)} onClose={onClose}>
                <div className={cls.modalWrapper}>
                    <div className={cls.closeWrapper}>
                        <img onClick={onClose} src={DrawerCloseIcon} alt="" />
                    </div>
                    <div style={{ background: `url(${item?.img}) center/cover` }} className={cls.modalImage}></div>
                    <div className={cls.modalRight}>
                        <div>
                            <Text textType="modalH1" tagType="span">
                                {item?.title}
                            </Text>
                            <Text className={cls.weight} tagType="p" textType="modalTextSecondary">
                                {item?.weight}
                            </Text>
                            <Text tagType="p" textType="text">
                                {item?.description}
                            </Text>
                            <div>
                                {item?.tabs.map((tab) => (
                                    <SmallTab>{mapFiltersToRussian[tab]}</SmallTab>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Text className={cls.statsTitle} tagType="p" textType="text">
                                Пищевая ценность на 100 г
                            </Text>
                            <div className={cls.statsFlex}>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.proteins}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Жиры
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.fats}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Углеводы
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.carbs}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        кКал
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.calories}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Modal className={cls.Modal} isOpen={Boolean(modalIsOpen)} onClose={onClose}>
                <div className={cls.modalWrapper}>
                    <div style={{ background: `url(${item?.img}) center/cover` }} className={cls.modalImage}></div>
                    <div className={cls.modalRight}>
                        <div>
                            <div className={cls.modalHeader}>
                                <Text textType="modalH1" tagType="span">
                                    {item?.title}
                                </Text>
                                <img onClick={onClose} src={ModalCloseIcon} alt="" />
                            </div>
                            <Text className={cls.weight} tagType="p" textType="modalTextSecondary">
                                {item?.weight}
                            </Text>
                            <Text tagType="p" textType="text">
                                {item?.description}
                            </Text>
                            <div>
                                {item?.tabs.map((tab) => (
                                    <SmallTab>{mapFiltersToRussian[tab]}</SmallTab>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Text tagType="p" textType="text">
                                Пищевая ценность на 100 г
                            </Text>
                            <div className={cls.statsFlex}>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.proteins}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Жиры
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.fats}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Углеводы
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.carbs}
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        кКал
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        {item?.calories}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
