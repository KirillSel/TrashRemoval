import React, {useState, useEffect} from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLenghtError] = useState(false)

    useEffect( () => {
        for (const validation in validations) {
            switch(validation){
                case 'minLength':
                    value.lenght < validations[validation] ? setMinLenghtError(true) : setMinLenghtError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    }, [])   
    return (
        isEmpty,
        minLengthError
    );
}

export default useValidation;
