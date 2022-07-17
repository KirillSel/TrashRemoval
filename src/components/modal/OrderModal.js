import React, {useState} from 'react';
import './Modal.css';
import useInput from '../customHooks/useInput';

const OrderModal = (active, setActive) => {
    const email = useInput({isEmpty: true, minLenght: 3})
    
    return (  
            <div className="fixed inset-0 z-10 overflow-y-auto" >
                
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => active.setActive(false)}>
                    
                </div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3">
                                    <div className="mt-2">
                                        <h4 className="text-lg uppercase font-medium text-gray-800 text-center">
                                            Онлайн заказ
                                        </h4>
                                        <div x-show="card">
                                            <div className="space-y-4">
                                                <div>
                                                    <label class="block text-sm font-medium mb-1" for="card-name">Имя<span class="text-red-500">*</span></label>
                                                    <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Иван" />
                                                </div>
                                                <div>
                                                    <label class="block text-sm font-medium mb-1" for="card-phone">Telephone <span class="text-red-500">*</span></label>
                                                    <input id="card-number" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="tel" 
                                                    autofocus="autofocus" required="required"
                                                   
                                                    pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
                                                    placeholder="+7(___)___-__-__"/>
                                                </div>
                                                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>ffsfsf</div>}
                                                <div>
                                                    <label class="block text-sm font-medium mb-1" for="card-email">Email <span class="text-red-500">*</span></label>
                                                    <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="john@company.com" />
                                                </div>
                                                <div>
                                                    <label class="block text-sm font-medium mb-1" for="card-text">Дополнительная информация</label>
                                                    <input id="card-text" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text"  />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                     
                                    >
                                        Заказать
                                    </button>
                                    
                                </div>

                                
                        </div>
                    </div>
                    
                

                

            </div> 
        )
    
}

export default OrderModal;
