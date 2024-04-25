import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { MasterClassSignUpPage } from "@/pages/MasterClassSignUpPage";
import { MasterClassesPage } from "@/pages/MasterClassesPage";
import { MenuPage } from "@/pages/MenuPage";
import { ProfilePage } from "@/pages/ProfilePage";

export const routerConfig = {
    main: {
        path: "/",
        element: <MainPage />,
    },
    "master-classes": {
        path: "/master-classes",
        element: <MasterClassesPage />,
    },
    "master-class-signup": {
        path: "/master-classes/:id",
        element: <MasterClassSignUpPage />,
    },
    profile: {
        path: "/profile",
        element: <ProfilePage />,
    },
    about: {
        path: "/about",
        element: <AboutPage />,
    },
    menu: {
        path: "/menu",
        element: <MenuPage />,
    },
};
