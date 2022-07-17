import React from 'react';

import { useNav } from '../customHooks/useNav';

const About = () => {
    const aboutRef = useNav('About');
    return (
        <div>
            <section ref={aboutRef} id='aboutContainer' className="flex flex-col justify-center text-gray-400 min-h-screen bg-gray-100 ">
                {/* Поменять задний фон */}
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                    
                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        
                        <a className="relative block group" href="#0">
                            <div className="absolute inset-0 bg-gray-400 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none " aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out ">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://4ist.ru/img/27m3.jpg" width="540" height="303" alt="Blog post"/>
                            </figure>
                        </a>
                        <div className="hover:text-black transition duration-150 ease-in-out">
                            <header>
                                <div className="mb-3">
                                    <h1 className='text-black ml-2 font-bold text-4xl'>О нас</h1>
                                    {/* <ul class="flex flex-wrap text-xs font-medium -m-1">
                                        <li class="m-1">
                                            <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                                        </li>
                                        <li class="m-1">
                                            <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                                        </li>
                                    </ul> */}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                    <a>Оперативный и быстрый вывоз мусора</a>
                                </h3>
                            </header>
                            <p className="text-lg flex-grow">
                                <a>Мы самые лучшие</a>.
                            </p>
                            <footer className="flex items-center mt-4">
                                
                                <div>
                                    <p>Сюда че нить вставить нужно</p>
                                </div>
                            </footer>
                        </div>
                    </article>    
                </div>
            </section>

           
            
        </div>
    );
}

export default About;
