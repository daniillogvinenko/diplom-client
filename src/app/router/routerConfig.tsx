import { AboutPage } from "@/pages/AboutPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { MasterClassSignUpPage } from "@/pages/MasterClassSignUpPage";
import { MasterClassesPage } from "@/pages/MasterClassesPage";
import { MenuPage } from "@/pages/MenuPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RegistrationPage } from "@/pages/RegistrationPage";

export const routerConfig = {
    main: {
        path: "/",
        element: <MainPage />,
        authOnly: false,
    },
    "master-classes": {
        path: "/master-classes",
        element: <MasterClassesPage />,
        authOnly: false,
    },
    "master-class-signup": {
        path: "/master-classes/:id",
        element: <MasterClassSignUpPage />,
        authOnly: false,
    },
    profile: {
        path: "/profile",
        element: <ProfilePage />,
        authOnly: true,
    },
    about: {
        path: "/about",
        element: <AboutPage />,
        authOnly: false,
    },
    menu: {
        path: "/menu",
        element: <MenuPage />,
        authOnly: false,
    },
    cart: {
        path: "/cart",
        element: <CartPage />,
        authOnly: true,
    },
    login: {
        path: "/login",
        element: <LoginPage />,
        authOnly: false,
    },
    registration: {
        path: "/registration",
        element: <RegistrationPage />,
        authOnly: false,
    },
    checkout: {
        path: "/checkout",
        element: <CheckoutPage />,
        authOnly: true,
    },
};
