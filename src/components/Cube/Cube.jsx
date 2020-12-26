import {content} from '../../data';
import {ContactSide} from './ContactSide/Contacts';
import {type} from '../../utils'
import './cube.scss'

export const Cube = () => {

    window.addEventListener(
        'DOMContentLoaded',
        type(content.mainText, 'home-side')
    );

    return (
        <div className="scene">
            <div id="box" className="show-top">
                <div className="box__face box__face--front">
                    <div className='about-side empty'>
                        <h2>About me</h2>
                        <p id='about-side'/>
                        <div className='logo-wrapper'>
                            <img src="/images/ts.png" alt="TypeScript logo"/>
                            <img src="/images/js.png" alt="JavaScript logo"/>
                            <img src="/images/html.png" alt="HTML logo"/>
                            <img src="/images/css.png" alt="CSS logo"/>
                            <img src="/images/react.png" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="box__face box__face--top">
                    <div className='home-side'>
                        <h1>Hello!</h1>
                        <p id='home-side'/>
                    </div>
                </div>
                <div className="box__face box__face--bottom">
                    <ContactSide/>
                </div>
                <div className="box__face box__face--back">
                    <p id="message-side">
                    </p>
                </div>
            </div>
        </div>

    );
};