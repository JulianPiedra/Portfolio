import emailjs from '@emailjs/browser';
import {FormData} from '../models/formData.tsx';

export const SendEmail = async (FormData: FormData) => {

    try {
        const result = await emailjs.send(
            'service_4hbjnsj', 
            'template_71hfoki', 
            {
                from_name: FormData.name,
                from_email: FormData.email,
                message: FormData.message,
            },
            'FGGz3ro7JZT5YbNFe' 
        );
        return result;
    } catch (error) {
        throw error;
    }
};
