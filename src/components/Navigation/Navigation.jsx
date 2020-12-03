import {content} from '../../data';
import {type} from '../../utils';
import './navigation.scss'

export const Navigation = () => {

    const rotateBox = (e) => {
        const aboutSide = document.querySelector('.about-side');
        const box = document.querySelector('#box');
        box.classList.value = '';

        const messageWrapper = document.querySelector('#message-side');
        messageWrapper.innerHTML = '';

        box.classList.add(e.target.dataset.side);
        if (e.target.dataset.side === 'show-front' &&
            aboutSide.classList.contains('empty')) {
            type(content.aboutText, 'about-side');
            aboutSide.classList.remove('empty');
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <a
                        data-side='show-top'
                        onClick={(e) => rotateBox(e)}
                    >home
                    </a>
                </li>
                <li>
                    <a
                        data-side='show-front'
                        onClick={(e) => rotateBox(e)}
                    >about
                    </a>
                </li>
                <li>
                    <a
                        data-side='show-bottom'
                        onClick={(e) => rotateBox(e)}
                    >contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

