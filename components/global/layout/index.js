import DrawerContextProvider from 'context/drawerContext';
import Head from 'next/head';
import Drawer from '../drawer';
import Footer from '../footer';
import Navbar from '../navbar';



const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Al-Arkan</title>
            </Head>
            <Drawer />
            <header>
                <Navbar />
            </header>
            <main className='mt-20'>
                {children}
            </main>
            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    )
}



export default Layout;