import React, {useState} from 'react';
import { useNav } from '../customHooks/useNav';
import OrderModal from '../modal/OrderModal';
import App from '../../App';

export default function PersonalDetails(){
    const detailsRef = useNav('Details');
    const [modalActive, setModalActive] = useState(false)
    return(
        <div>
            <section ref={detailsRef} id='detailsContainer' className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                <div className="h-full">
                    
                    <div>
                        
                    
                        <div className=" relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                            <div className="bg-white px-8 pb-6 pt-6 rounded-b shadow-lg">

                                
                                <div className="text-center mb-6">
                                    
                                    <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">Заказать контейнер</h1>
                                    
                                </div>
                                
                            
                                <div x-show="card">
                                    <div className="space-y-4">
                                        
                                        
                                        <div>
                                            <label className="block text-sm font-medium mb-1" for="card-name">Объем<span class="text-red-500">*</span></label>
                                            
                                            <select className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full">
                                                <option>8 куб.</option>
                                                <option>20 куб.</option>
                                                <option>27 куб.</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" for="card-name">Регион<span class="text-red-500">*</span></label>
                                            
                                            <select className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full">
                                                <option>ВАО</option>
                                                <option>СВАО</option>
                                                <option>ЮАО</option>
                                                <option>СЗАО</option>
                                                <option>САО</option>
                                                <option>ЦАО</option>
                                                <option>ЗАО</option>
                                                <option>ЮВАО</option>
                                                <option>ЮЗАО</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" for="card-name">Количество единиц техники<span class="text-red-500">*</span></label>
                                        
                                            <select className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                        
                                    
                                      
                                       
                                    </div>
                                  
                                    <div className="mt-6">
                                        <div className="mb-4">
                                            <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2" onClick={() => setModalActive(true)}>Заказать</button>
                                            
                                        </div>
                                        
                                    </div>
                                </div>

                            

                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            {modalActive ? <OrderModal active={modalActive} setActive={setModalActive}/> : <div></div>}
        </div> 
    )
}