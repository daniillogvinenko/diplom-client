import { useSelector } from "react-redux";
import { getProfileAuthorized, getProfileData } from "@/features/editableProfileCard";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header = () => {
    const { cart } = useSelector(getProfileData);

    const authorized = useSelector(getProfileAuthorized);

    return (
        <>
            <HeaderDesktop authorized={authorized} cart={cart} />
            <HeaderMobile authorized={authorized} cart={cart} />
        </>
    );
};
