import {type} from '../../../utils';
import {content} from '../../../data';
import emailjs from 'emailjs-com';
import './contacts.scss'

export const ContactSide = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        const box = document.getElementById('box');
        const form = document.querySelector('form');

        box.classList.value = '';
        box.classList.add('rotate');

        emailjs.sendForm(
            'service_yx4jqa',
            'template_1u82alm',
            e.target,
            'user_3hIFmLZWQw8fFEPF6xpY0')
            .then(
                () => {
                    type(content.message, 'message-side');
                    form.reset()
                },
                () => type(content.error, 'message-side')
            );
    };

    return (
        <div className='contact-side'>
            <h2>Get in touch</h2>
            <form onSubmit={sendEmail}>

                <label htmlFor="">E-mail</label>
                <input
                    required
                    name="email"
                    type="email"
                />

                <label htmlFor="">Message</label>
                <textarea
                    required
                    minLength="10"
                    name="message"
                    cols="30"
                    rows="10">
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};