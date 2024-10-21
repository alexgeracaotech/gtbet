import './Home.css';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <div className='div-body'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
};