import Layout from 'components/global/layout'
import DrawerContextProvider from 'context/drawerContext';
import '../styles/globals.css';
import '../styles/utilities.css';
import { appWithTranslation } from "next-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
    return (
        
        <DrawerContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </DrawerContextProvider>
    )
}

export default appWithTranslation(MyApp);
