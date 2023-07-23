/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';

export const useForm = ( initialForm = {
    url:'',
    shortUlr:'',
} ) => {
    const [error, setError] = useState('');
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target } :React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value.trim()
        });
        if (!value.includes('mercadolibre')) {
            setError('Dominio no autorizado debe contener "mercadolibre"');
          } else  if (value.length === 0) {
            setError('Ingrese Url');
          }else {
            setError('');
          } 
         
        
    }
   


    const onResetForm = () => {
        setFormState( initialForm );
        setError('');
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        error
    }
}