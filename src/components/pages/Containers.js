import React from 'react';
import { useNav } from '../customHooks/useNav';

const Containers = () => {
    const containersRef = useNav('Containers');
    return (
        <div>
            <section ref={containersRef} id='priceContainer' class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                <div class="h-full">
                    
                    <div class="max-w-5xl mx-auto" x-data="{ annual: true }">
                        <h2 class="text-3xl text-gray-800 font-bold text-center mb-4">Расценки</h2>
                        
                        
                    
                        <div class="grid grid-cols-6 gap-6">
                            {/* <!-- Tab 1 --> */}
                            <div class="relative col-span-full md:col-span-2 bg-white shadow-md rounded-sm border border-gray-200">
                                {/* <div class="absolute top-0 left-0 right-0 h-0.5 " aria-hidden="false"></div> */}
                                <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                                    <img src='https://mysor-moskva.ru/i/content/konteiner-8-m3-lodochka.jpg' alt='Container1'/>
                                </div>
                                {/* низ колонки 1 */}
                                <div class="px-5 pt-4 pb-5">
                                    <div className="mb-2 text-center">Контейнер 8 куб</div>
                                    <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Заказать</button>
                                    
                                </div>
                            </div>
                            {/* <!-- Tab 2 --> */}
                            <div class="relative col-span-full md:col-span-2 bg-white shadow-md rounded-sm border border-gray-200">
                                <div class="absolute top-0 left-0 right-0 h-0.5 " aria-hidden="true"></div>
                                <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                                    <img src='https://mysor-moskva.ru/i/content/konteiner-8-m3-lodochka.jpg' alt='Container2'/>
                                </div>
                                {/* низ колонки 2 */}
                                <div class="px-5 pt-4 pb-5">
                                    <div className="mb-2 text-center">Контейнер 20 куб</div>
                                    <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Заказать</button>
                                    
                                </div>
                            </div>
                            {/* <!-- Tab 3 --> */}
                            <div class="relative col-span-full md:col-span-2 bg-white shadow-md rounded-sm border border-gray-200">
                                <div class="absolute top-0 left-0 right-0 h-0.5 " aria-hidden="true"></div>
                                <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                                    <img src='https://mysor-moskva.ru/i/content/konteiner-8-m3-lodochka.jpg' alt='Container3'/>
                                </div>
                                {/* низ колонки 3 */}
                                <div class="px-5 pt-4 pb-5">
                                    <div className="mb-2 text-center">Контейнер 27 куб</div>
                                    <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Заказать</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Containers;
