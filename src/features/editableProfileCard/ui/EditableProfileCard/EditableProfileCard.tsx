import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import { useSelector } from "react-redux";
import { getProfileForm, getProfileIsLoading, getProfileReadonly } from "../../model/selectors/profileSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData";
import cls from "./EditableProfileCard.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { SignOutButton } from "@/features/signOutButton";

export const EditableProfileCard = () => {
    const readonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();

    const onEdit = () => dispatch(profileActions.setReadonly(false));
    const onCancel = () => dispatch(profileActions.cancelEdit());
    const onSave = () => dispatch(updateProfileData({ ...form }));
    const onChangeName = (value: string) => dispatch(profileActions.updateProfileForm({ firstname: value }));
    const onChangePhoneNumber = (value: string) => dispatch(profileActions.updateProfileForm({ phoneNumber: value }));
    const onChangeEmail = (value: string) => dispatch(profileActions.updateProfileForm({ email: value }));
    const onChangeAddress = (value: string) => dispatch(profileActions.updateProfileForm({ address: value }));

    if (isLoading)
        return (
            <div>
                <Skeleton className={cls.input} width={400} height={60} border="14px" />
                <Skeleton className={cls.input} width={400} height={60} border="14px" />
                <Skeleton className={cls.input} width={400} height={60} border="14px" />
                <Skeleton className={cls.input} width={400} height={83} border="14px" />
                <Skeleton className={cls.input} width={205} height={44} border="60px" />
            </div>
        );

    return (
        <div>
            <Input
                className={cls.input}
                readonly={readonly}
                label="Имя"
                placeholder="Имя"
                value={form?.firstname || ""}
                onChange={onChangeName}
            />
            <Input
                className={cls.input}
                readonly={readonly}
                label="Номер телефона"
                placeholder="Номер телефона"
                value={form?.phoneNumber || ""}
                onChange={onChangePhoneNumber}
            />
            <Input
                className={cls.input}
                readonly={readonly}
                label="Эл. почта"
                placeholder="Эл. почта"
                value={form?.email || ""}
                onChange={onChangeEmail}
            />
            <Textarea
                className={cls.input}
                readonly={readonly}
                label="Адрес"
                placeholder="Адрес"
                value={form?.address || ""}
                onChange={onChangeAddress}
            />
            {readonly ? (
                <div>
                    <Button onClick={onEdit}>Редактировать</Button>
                    <SignOutButton className={cls.signOutBtn} />
                </div>
            ) : (
                <div className={cls.btnWrapper}>
                    <Button onClick={onSave}>Сохранить</Button>
                    <Button onClick={onCancel} variant="red">
                        Отмена
                    </Button>
                </div>
            )}
        </div>
    );
};
