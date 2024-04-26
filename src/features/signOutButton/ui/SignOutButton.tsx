import { Button } from "@/shared/ui/Button";
import cls from "./SignOutButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "@/features/editableProfileCard/model/slice/profileSlice";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import { useNavigate } from "react-router-dom";

interface SignOutButtonProps {
    className?: string;
}

export const SignOutButton = (props: SignOutButtonProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSignOut = () => {
        dispatch(profileActions.signOut());
        localStorage.removeItem(LOCALSTORAGE_USER);
        navigate("/");
    };

    return (
        <Button onClick={onSignOut} className={classNames(cls.SignOutButton, {}, [className])} variant="outlineDark">
            Выйти
        </Button>
    );
};
