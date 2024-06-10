import img1 from "@/shared/assets/images/menu-page/foodImages/doro wat.jpg";
import img2 from "@/shared/assets/images/menu-page/foodImages/kitfo.jpg";
import img3 from "@/shared/assets/images/menu-page/foodImages/dullet.jpg";
import img4 from "@/shared/assets/images/menu-page/foodImages/allicha.webp";
import img5 from "@/shared/assets/images/menu-page/foodImages/key wat.jpg";
import img6 from "@/shared/assets/images/menu-page/foodImages/beyanety wat.jpg";
import img7 from "@/shared/assets/images/menu-page/foodImages/beyanety esom.jpg";
import img8 from "@/shared/assets/images/menu-page/foodImages/tibs.jpg";
import img9 from "@/shared/assets/images/menu-page/foodImages/teaWithSpices.webp";
import img10 from "@/shared/assets/images/menu-page/foodImages/zobo.webp";
import img11 from "@/shared/assets/images/menu-page/foodImages/pepperSoup.jpeg";
import img12 from "@/shared/assets/images/menu-page/foodImages/egussiSoup.jpg";
import img13 from "@/shared/assets/images/menu-page/foodImages/greekSalad.jpg";
import img14 from "@/shared/assets/images/menu-page/foodImages/cezar.jpg";
import img15 from "@/shared/assets/images/menu-page/foodImages/olivie.jpg";
import img16 from "@/shared/assets/images/menu-page/foodImages/mohito.jpg";
import img17 from "@/shared/assets/images/menu-page/foodImages/oblepihovyi.jpg";

interface MenuSection {
    title: string;
    items: MenuItem[];
}

export interface MenuItem {
    id: number;
    title: string;
    price: string;
    img: string;
    weight: string;
    description: string;
    proteins: string;
    fats: string;
    carbs: string;
    calories: string;
    tabs: ("hit" | "spicy" | "new")[];
}

export const MenuItems: MenuSection[] = [
    {
        title: "Эфиопская кухня",
        items: [
            {
                id: 1,
                title: "Доро Вот",
                description: "Курица, тушеная в соусе из лука и острых специй Бэрбэре",
                img: img1,
                price: "500 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "230",
                tabs: [],
            },
            {
                id: 2,
                title: "Китфо",
                description: "Мелко рубленная говядина, заправленная топленным с эфиопскими специями сливочным маслом",
                img: img2,
                price: "690 Р.",
                calories: "336",
                carbs: "62",
                fats: "6,6",
                proteins: "10,8",
                weight: "230",
                tabs: ["spicy", "hit"],
            },
            {
                id: 3,
                title: "Дуллет",
                description: "Мелко рубленные говядина и рубец, обжаренные с луком и среднеострыми специями",
                img: img3,
                price: "590 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "260 г",
                tabs: ["spicy"],
            },
            {
                id: 4,
                title: "Аллича",
                description:
                    "Кусочки баранины/говядины, ображенные с луком, болгарским и острым перцем и среднеострыми специями",
                img: img4,
                price: "590 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "260 г",
                tabs: ["spicy", "hit", "new"],
            },
            {
                id: 5,
                title: "Кей Вот",
                description: "Кусочки говядины, тушеные в соусе из лука и острых специй",
                img: img5,
                price: "590 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "260 г",
                tabs: ["new", "spicy"],
            },
            {
                id: 6,
                title: "Беяянету Вот",
                description:
                    "Ассорти из мясных эфиопских блюд - Аллича, Дуллет, Доро Вот, Китфо, Кейвот, салат. Подается с инджерой",
                img: img6,
                price: "1590 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "800 г",
                tabs: ["spicy"],
            },
            {
                id: 7,
                title: "Беяянету Есом",
                description:
                    "Ассорти из овощных эфиопских блюд - картофель Аддис, Шировот, Месирвот, Кык Вот, Шимбра Вот, салат. Подается с инджерой",
                img: img7,
                price: "990 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "800 г",
                tabs: [],
            },
            {
                id: 8,
                title: "Тибс",
                description:
                    "Кусочки баранины/говядины, обжаренные с луком, болгарским и острым перцем и среднеострыми специями. Подается на глиняной жаровне",
                img: img8,
                price: "1600 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "230 г",
                tabs: ["new", "hit"],
            },
        ],
    },
    {
        title: "Эфиопские напитки",
        items: [
            {
                id: 9,
                title: "Чай с пряностями",
                description: "Черный чай с гвоздикой, имбирем и бадьяном",
                img: img9,
                price: "300 Р.",
                calories: "140",
                carbs: "4",
                fats: "5,1",
                proteins: "20",
                weight: "1000 мл",
                tabs: [],
            },
            {
                id: 10,
                title: "Зобо",
                description: "Напиток из гибискуса с апельсином, имбирем и гвоздикой",
                img: img10,
                price: "250 Р.",
                calories: "140",
                carbs: "4",
                fats: "5,1",
                proteins: "20",
                weight: "350 мл",
                tabs: ["hit"],
            },
        ],
    },
    {
        title: "Африканская кухня",
        items: [
            {
                id: 11,
                title: "Пеппер суп",
                description: "Острый наваристый суп из говядины, перца и шпината",
                img: img11,
                price: "450 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "370 г",
                tabs: ["spicy"],
            },
            {
                id: 12,
                title: "Эгусси суп",
                description: "Густой суп из шпината, арахисовой пасты, тыквенных семечек, говядины и сушеной рыбы",
                img: img12,
                price: "450 Р.",
                calories: "389",
                carbs: "71",
                fats: "6,6",
                proteins: "12,3",
                weight: "370 г",
                tabs: [],
            },
        ],
    },
    {
        title: "Салаты",
        items: [
            {
                id: 13,
                title: "Греческий",
                description:
                    "Свежие помидоры, огурцы, перец болгарский, красный лук, маслины, сыр 'фета' с заправкой из оливкового масла с базиликом",
                img: img13,
                price: "320 Р.",
                calories: "87",
                carbs: "3,8",
                fats: "6,4",
                proteins: "2,6",
                weight: "200 г",
                tabs: ["hit"],
            },
            {
                id: 14,
                title: "Цезарь",
                description:
                    "Салат айсберг, пшеничные гренки, помидоры черри, сыр пармезан, соус цезарь с обжаренной куриной грудкой",
                img: img14,
                price: "320 Р.",
                calories: "87",
                carbs: "3,8",
                fats: "6,4",
                proteins: "2,6",
                weight: "200 г",
                tabs: [],
            },
            {
                id: 15,
                title: "Оливье",
                description: "Оливье с ветчиной из огурца, моркови, картофеля, яиц",
                img: img15,
                price: "320 Р.",
                calories: "87",
                carbs: "3,8",
                fats: "6,4",
                proteins: "2,6",
                weight: "200 г",
                tabs: [],
            },
        ],
    },
    {
        title: "Напитки",
        items: [
            {
                id: 16,
                title: "Лимонад Мохито",
                description: "С лимоном, свежей мятой и мятным сиропом",
                img: img16,
                price: "490 Р.",
                calories: "140",
                carbs: "4",
                fats: "5,1",
                proteins: "20",
                weight: "1000 мл",
                tabs: ["hit"],
            },
            {
                id: 17,
                title: "Лимонад Облепиховый",
                description: "С апельсином, мятой и облепихой",
                img: img17,
                price: "490 Р.",
                calories: "140",
                carbs: "4",
                fats: "5,1",
                proteins: "20",
                weight: "1000 мл",
                tabs: ["new"],
            },
        ],
    },
];
