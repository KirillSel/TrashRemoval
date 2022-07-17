import React from 'react';
import { useNav } from '../customHooks/useNav';

const Reviews = () => {
    const reviewsRef = useNav('Reviews');
    const posts = [
        {
            title: "5/5",
            desc: "Заказывали контейнеры под строительный мусор , все понравилось , будем обращаться ещё ! Честный и ответственный 👍",
            img: "https://49.img.avito.st/640x480/8208939949.jpg",
            authorLogo: "https://07.img.avito.st/avatar/social/256x256/13764148507.jpg",
            authorName: "Анастасия",
            date: "18 мая 2022",
            href: "#"
        },
        {
            title: "5/5",
            desc: "Отличные ребята. Все вывезли аккуратно, оперативно. Спасибо. Рекомендую.",
            img: "https://49.img.avito.st/640x480/8208939949.jpg",
            authorLogo: "https://73.img.avito.st/avatar/social/256x256/3962092573.jpg",
            authorName: "Ксения Павлова",
            date: "14 апреля 2022",
            href: "#"
        },
        {
            title: "5/5",
            desc: "От души, все вовремя, цена приятная, оператор вежливый, всегда на связи",
            img: "https://49.img.avito.st/640x480/8208939949.jpg",
            authorLogo: "https://14.img.avito.st/avatar/social/256x256/8831397714.jpg",
            authorName: "Дмитрий Андреев",
            date: "12 марта 2022",
            href: "#"
        },
        {
            title: "5/5",
            desc: "Большое спасибо. Приятно иметь дело. Машина была подана чётко по времени.",
            img: "https://49.img.avito.st/640x480/8208939949.jpg",
            authorLogo: "https://static.avito.ru/stub_avatars/А/0_256x256.png",
            authorName: "Анжела",
            date: "15 апреля 2022",
            href: "#"
        }
    ]
    
    return (
        <section ref={reviewsRef} id='reviewsContainer' className="mx-auto px-4 min-h-screen lg:px-8 bg-gray-100 mb-4">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Авито
                </h1>
                <p className="mt-3 text-gray-500">
                    Что о нас говорят.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Reviews;
