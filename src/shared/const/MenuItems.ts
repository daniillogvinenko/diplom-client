interface MenuSection {
    title: string;
    items: MenuItem[];
}

interface MenuItem {
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
}

export const MenuItems: MenuSection[] = [
    {
        title: "Эфиопская кухня",
        items: [
            {
                id: 1,
                title: "Доро Вот",
                description: "Курица, тушеная в соусе из лука и острых специй Бэрбэре",
                img: "https://www.diversivore.com/wp-content/uploads/2023/05/Doro-Wat-mobile-banner-1.jpg",
                price: "500 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "230 г",
            },
            {
                id: 2,
                title: "Китфо",
                description: "Мелко рубленная говядина, заправленная топленным с эфиопскими специями сливочным маслом",
                img: "https://img.atlasobscura.com/PJuTa4zUuPS_s41G0Hl93BXD8gKxQMKJ63Ry06kBDk0/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3RoaW5n/X2ltYWdlcy9hODJk/ZDgzYi1mMzczLTQ5/ZjctOGIzYy1jNWRl/NmNkZjQ3ZTZmYmVi/ZmU1MGRmY2M3MDJh/NzJfS2l0Zm9fU2Vy/Z2lpIEtvdmFsIDog/QWxhbXkgU3RvY2sg/UGhvdG8uanBn.jpg",
                price: "690 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "230 г",
            },
            {
                id: 3,
                title: "Дуллет",
                description: "Мелко рубленные говядина и рубец, обжаренные с луком и среднеострыми специями",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/5e/94/bc/yedoro-wot-traditional.jpg",
                price: "590 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "260 г",
            },
            {
                id: 4,
                title: "Аллича",
                description:
                    "Кусочки баранины/говядины, ображенные с луком, болгарским и острым перцем и среднеострыми специями",
                img: "https://assets.bonappetit.com/photos/60493bb23b0236be8081d752/master/pass/Passover-Alicha-Denich.jpg",
                price: "590 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "260 г",
            },
            {
                id: 5,
                title: "Кей Вот",
                description: "Кусочки говядины, тушеные в соусе из лука и острых специй",
                img: "https://demandafrica.com/wp-content/uploads/2017/08/Ethiopian-Beef-Stew.jpg",
                price: "590 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "260 г",
            },
            {
                id: 6,
                title: "Беяянету Вот",
                description:
                    "Ассорти из мясных эфиопских блюд - Аллича, Дуллет, Доро Вот, Китфо, Кейвот, салат. Подается с инджерой",
                img: "https://images.squarespace-cdn.com/content/v1/5b7ceb273c3a53d72c1e987b/1535065224414-6W8NGLW6LGMBABPBKCYK/_H1A0172.jpg?format=1500w",
                price: "1590 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "800 г",
            },
            {
                id: 7,
                title: "Беяянету Есом",
                description:
                    "Ассорти из овощных эфиопских блюд - картофель Аддис, Шировот, Месирвот, Кык Вот, Шимбра Вот, салат. Подается с инджерой",
                img: "https://images.squarespace-cdn.com/content/v1/5b7ceb273c3a53d72c1e987b/1556172611026-WG383PBQF339WB8CFIZV/WOTS3.jpg?format=1500w",
                price: "990 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "800 г",
            },
            {
                id: 8,
                title: "Тибс",
                description:
                    "Кусочки баранины/говядины, обжаренные с луком, болгарским и острым перцем и среднеострыми специями. Подается на глиняной жаровне",
                img: "https://lowcarbafrica.com/wp-content/uploads/2022/07/Awaze-Tibe-Egyptian-Beef-Tibs-Recipe-IG-1.jpg",
                price: "1600 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "230 г",
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
                img: "https://itsmorethantea.wordpress.com/wp-content/uploads/2022/02/cropped-pot-with-cup.jpg?w=584",
                price: "300 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "1000 мл",
            },
            {
                id: 10,
                title: "Зобо",
                description: "Напиток из гибискуса с апельсином, имбирем и гвоздикой",
                img: "https://mediavine-res.cloudinary.com/image/upload/s--ZB_J3mx7--/ar_4:3,c_fill,f_auto,fl_lossy,q_auto/v1501296080/cwuzyrwnrpbbwlbqxqjq.jpg",
                price: "250 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "350 мл",
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
                img: "https://recipes.net/wp-content/uploads/2023/05/african-fish-pepper-soup-recipe_f13ec7d4251d4389628a4551e7e95421.jpeg",
                price: "450 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "370 г",
            },
            {
                id: 12,
                title: "Эгусси суп",
                description: "Густой суп из шпината, арахисовой пасты, тыквенных семечек, говядины и сушеной рыбы",
                img: "https://www.chilipeppermadness.com/wp-content/uploads/2024/01/Egusi-Soup-Recipe-SQ.jpg",
                price: "450 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "370 г",
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
                img: "https://www.vsegdavkusno.ru/assets/images/recipes/2360/grecheskij-salat-low2.jpg",
                price: "320 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "200 г",
            },
            {
                id: 14,
                title: "Цезарь",
                description:
                    "Салат айсберг, пшеничные гренки, помидоры черри, сыр пармезан, соус цезарь с обжаренной куриной грудкой",
                img: "https://cdn.lifehacker.ru/wp-content/uploads/2021/10/2_1634551409-scaled-e1634551464449-1280x640.jpg",
                price: "320 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "200 г",
            },
            {
                id: 15,
                title: "Оливье",
                description: "Оливье с ветчиной из огурца, моркови, картофеля, яиц",
                img: "https://cookhelp.ru/upload/recipes/salat_olivye_s_kolbasoy_i_goroshkom.jpg",
                price: "320 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "200 г",
            },
        ],
    },
    // {
    //     title: "Напитки",
    //     items: [
    //         {

    //         }
    //     ]
    // }
];
