import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Navigation} from './components/Navigation/Navigation';
import {SocLinks} from './components/SocLinks/SocLinks';
import {Border} from './components/Border/Border';
import {Content} from './components/Content';
import {Cube} from './components/Cube/Cube';

export const App = () => {
    return (
        <div className="App">
            <Border>
                <Header/>
                <Navigation/>
                <Content>
                    <Cube/>
                </Content>
                <SocLinks/>
                <Footer/>
            </Border>
        </div>
    );
};

