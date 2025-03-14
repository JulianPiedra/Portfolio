import React, { useEffect, useState, useRef } from "react";
import '../css/contactMe.css';
import { useTranslation } from 'react-i18next';
import { SendEmail } from '../services/emailSender.tsx';
import Swal from "sweetalert2";
import { faUser, faMessage, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
export interface FormData {
    name: string;
    email: string;
    message: string;
}



function ContactMe() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const contactMeRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (contactMeRef.current) {
            observer.observe(contactMeRef.current);
        }

        return () => {
            if (contactMeRef.current) {
                observer.unobserve(contactMeRef.current);
            }
        };
    }, [hasAnimated]);

    const { t } = useTranslation();  // Hook to handle translations
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [touched, setTouched] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);  // State to manage loading spinner

    // Handle input field changes and update formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle input field blur event to mark fields as touched
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    // Function to validate form data
const validateFormData = (formData: FormData, t: Function): Partial<FormData> => {
    const errors: Partial<FormData> = {};


    // Validate name field
    if (!formData.name.trim()) {
        errors.name = t('validations.error_name_required');
    } else if (formData.name.length > 70) {
        errors.name = t('validations.error_name_max_length');
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
        errors.name = t('validations.error_name_invalid');
    }

    // Validate email field
    if (!formData.email.trim()) {
        errors.email = t('validations.error_email_required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = t('validations.error_email_invalid');
    }

    // Validate message field
    if (!formData.message.trim()) {
        errors.message = t('validations.error_message_required');
    }

    return errors;
};
    // Validate form data on any change
    useEffect(() => {
        const validationErrors = validateFormData(formData, t);  // Perform validation
        setErrors(validationErrors);  // Update errors state
    }, [formData, t]);

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();  // Prevent default form submission

        // Mark all fields as touched to trigger validation
        setTouched({
            name: 'true',
            email: 'true',
            message: 'true',
        });

        // Re-validate form data on submit
        const validationErrors = validateFormData(formData, t);
        setErrors(validationErrors);

        // If there are no validation errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            try {
                setLoading(true);  // Set loading to true when starting the request
                const response = await SendEmail(formData);  // Call the SendEmail service

                // Show success or error message based on the response
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
                    text: `${t('email_not_sent')}: ${error.message}`,
                    timer: 3000,
                    showConfirmButton: false,
                });
            } finally {
                setLoading(false);  // Set loading to false once the request is complete
                setFormData({ name: '', email: '', message: '' });  // Reset form data
                setTouched({});  // Reset touched fields
            }
        }
    };

    return (
        <section className="contactMeContainer" id="contactMeContainer" ref={contactMeRef}>
            <div className="contactMeTitle">
                <h2>{t('contact_me_paragraph')}</h2>
            </div>
            <form className="contactMeForm" onSubmit={handleSubmit}>
                <h1>{t('contact_me_title')}</h1>

                {/* Display the overlay and spinner when loading */}
                {loading && (
                    <>
                        <div className="overlay"></div>
                        <div className="spinner"></div>
                    </>
                )}
                <div className="inputFields">
                    {/* Name input field */}
                    <div className="inputContainer">
                        <label htmlFor="name"><FontAwesomeIcon icon={faUser} bounce style={{ color: '#BE09F5' }} className="icon" /> {t('name')}</label>
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

                    {/* Email input field */}
                    <div className="inputContainer">
                        <label htmlFor="email"><FontAwesomeIcon icon={faMailBulk} bounce style={{ color: '#BE09F5' }} className="icon" /> {t('email')}</label>
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
                </div>
                {/* Message textarea */}
                <div className="inputContainer">
                    <label htmlFor="message">
                        <FontAwesomeIcon icon={faMessage} bounce style={{ color: '#BE09F5' }} className="icon" />  {t('message')}</label>
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

                {/* Submit button */}
                <button type="submit" disabled={loading}>
                    {t('send')}
                </button>
            </form>
        </section>
    );
}

export default ContactMe;
