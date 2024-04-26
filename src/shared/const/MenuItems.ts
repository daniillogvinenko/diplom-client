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
                price: "600 Р.",
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
                price: "580 Р.",
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
                price: "580 Р.",
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
                price: "580 Р.",
                calories: "XYZ",
                carbs: "XYZ",
                fats: "XYZ",
                proteins: "XYZ",
                weight: "260 г",
            },
        ],
    },
];
