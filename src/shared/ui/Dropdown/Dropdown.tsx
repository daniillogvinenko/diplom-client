import { Listbox } from "@headlessui/react";
import { Text } from "../Text";
import cls from "./Dropdown.module.scss";
import dropdownArrowIcon from "@/shared/assets/images/checkout-page/dropdownArrow.svg";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Item {
    id: number;
    name: string;
    unavailable: boolean;
}

interface DropdownProps {
    items: Item[];
    selectedItem: Item;
    onSetSelected: (newItem: Item) => void;
}

export const Dropdown = (props: DropdownProps) => {
    const { items, onSetSelected, selectedItem } = props;

    return (
        <Listbox value={selectedItem} onChange={onSetSelected}>
            <Listbox.Button className={cls.button}>
                <div className={cls.flex}>
                    <Text tagType="span" textType="inputText">
                        {selectedItem.name}
                    </Text>
                    <img src={dropdownArrowIcon} alt="" />
                </div>
            </Listbox.Button>
            <Listbox.Options className={cls.optionsWrapper}>
                {items.map((person) => (
                    <Listbox.Option
                        unselectable={person.unavailable ? "on" : "off"}
                        className={classNames(cls.option, { [cls.unavailable]: person.unavailable }, [])}
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                    >
                        <Text tagType="span" textType="inputText">
                            {person.name}
                        </Text>
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};
