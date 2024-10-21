import Aside from '../Aside/Aside'
import Search from '../Search/Search'
import './Main.css'

export default function Main() {
    return (
        <>
            <main className='main'>
                <Aside/>
                <section className='main-section'>
                    <Search/>
                    
                </section>
            </main>
        </>
    )
}