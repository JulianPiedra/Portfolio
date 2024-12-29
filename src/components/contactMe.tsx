import React, { useState, useEffect } from "react";
import '../css/contactMe.css';
import { useTranslation } from 'react-i18next';
import { FormData } from '../models/formData.tsx';
import { SendEmail } from '../services/emailSender.tsx';
import Swal from "sweetalert2";

function ContactMe() {
    const { t } = useTranslation();  // Hook to access translations

    // State for form inputs, errors and touched fields
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [touched, setTouched] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    // Validate inputs whenever formData changes
    useEffect(() => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = t('validations.error_name_required');
        } else if (formData.name.length > 70) {
            newErrors.name = t('validations.error_name_max_length');
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
            newErrors.name = t('validations.error_name_invalid');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('validations.error_email_required');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('validations.error_email_invalid');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('validations.error_message_required');
        }

        setErrors(newErrors); // Update errors state
    }, [formData, t]); // Re-run the validation whenever formData changes

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission

        // If no errors, proceed with form submission logic
        if (Object.keys(errors).length === 0) {
            try {
                // Send the form data
                const response = await SendEmail(formData);
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        text: t('email_sent'),
                        timer: 3000, 
                        showConfirmButton: false, 
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: t('email_not_sent'),
                        timer: 3000, 
                        showConfirmButton: false, 
                      });
                      
                }

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    text: t('email_not_sent') +': '+ error.message,
                    timer: 3000, 
                    showConfirmButton: false,
                  });
                  
            } finally {
                // Reset the form after submission
                setFormData({ name: '', email: '', message: '' });
                setTouched({});
            }
        }
    };

    return (
        <div className="contactMeContainer" id="contactMeContainer">
            <div className="contactMeTitle">
                <h1>{t('contact_me_title')}</h1>
                <h2>{t('contact_me_paragraph')}</h2>
            </div>
            <form className="contactMeForm" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <label htmlFor="name">{t('name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('name_portfolio')}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <p className="errorMessage">{errors.name}</p>}
                </div>

                <div className="inputContainer">
                    <label htmlFor="email">{t('email')}</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder={t('email_example')}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <p className="errorMessage">{errors.email}</p>}
                </div>

                <div className="inputContainer">
                    <label htmlFor="message">{t('message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={t('message_example')}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {touched.message && errors.message && <p className="errorMessage">{errors.message}</p>}
                </div>
                <button type="submit">{t('send')}</button>
            </form>
        </div>
    );
}

export default ContactMe;
