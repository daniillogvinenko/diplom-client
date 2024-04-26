import { Text } from "@/shared/ui/Text";
import cls from "./MenuModal.module.scss";
import { Modal } from "@/shared/ui/Modal";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { MenuItems } from "@/shared/const/MenuItems";

interface MenuModalProps {
    modalIsOpen: number | null;
    onClose: () => void;
}

export const MenuModal = ({ modalIsOpen, onClose }: MenuModalProps) => {
    let section;
    let item;
    // из массива находится итем с нужным айдишником и именно он подставляется в модалку
    if (modalIsOpen !== null) {
        section = MenuItems.find((section) => section.items.find((item) => item.id === modalIsOpen));
        item = section?.items.find((item) => item.id === modalIsOpen);
    }

    return (
        <Modal isOpen={Boolean(modalIsOpen)} onClose={onClose}>
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
                        <Text tagType="span" textType="modalTextSecondary">
                            {item?.weight}
                        </Text>
                        <Text tagType="p" textType="text">
                            {item?.description}
                        </Text>
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
    );
};
