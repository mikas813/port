import {type} from '../../../utils';
import {content} from '../../../data';
import emailjs from 'emailjs-com';
import './contacts.scss'
import config from '../../../config';

export const ContactSide = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        const box = document.getElementById('box');
        const form = document.querySelector('form');

        //after submit rotate box to the message side
        box.classList.value = '';
        box.classList.add('rotate');

        //send email and display the message
        emailjs.sendForm(
            'service_yx4jqaf',
            'template_1u82alm',
            e.target,
            config.emailJsApiKey)
            .then(
                () => {//message OK
                    type(content.message, 'message-side');
                },//message Error
                () => type(content.error, 'message-side')
            );

        //return to the contact side and clean message
        setTimeout(() => {
            box.classList.value = '';
            box.classList.add('show-bottom');
            document.querySelector('#message-side').innerHTML = ''
        },3500);

        //reset the form
        form.reset()
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