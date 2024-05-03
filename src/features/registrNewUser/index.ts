export { type RegistrationSchema } from "./model/types/registrNewUserSchema";
export { registrationActions, registrationReducer } from "./model/slice/registrationSlice";
export {
    getRegistrationConfirmPassword,
    getRegistrationError,
    getRegistrationIsLoading,
    getRegistrationPassword,
    getRegistrationUsername,
} from "./model/selectors/registrationSelectors";
export { registrNewUser } from "./model/services/registrNewUser";
