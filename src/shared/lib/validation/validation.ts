export const validateAuthorization = (login: string, password: string) => {
    if (!login) {
        return "Введите логин";
    }

    if (!login.split("").some((item) => item !== " ")) {
        return "Введите корректный логин";
    }

    if (!password) {
        return "Введите пароль";
    }
};

export const validateRegistration = (username: string, password: string, confirmPassword: string) => {
    if (!username) {
        return "Введите логин";
    }

    if (!username.split("").some((item) => item !== " ")) {
        return "Введите корректный логин";
    }

    if (!password) {
        return "Введите пароль";
    }

    if (password !== confirmPassword) {
        return "Пароли не совпадают";
    }

    if (!password.split("").some((item) => item !== " ")) {
        return "Введите корректный пароль";
    }

    if (password.length < 6) {
        return "Минимальная длина пароля 6 символов";
    }
};
