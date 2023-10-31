import Footer from '../components/Footer/Footer';
import Navbar from '../components/navs/Navbar';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/navs/TopNav';

const MainLayout = () => {
    return (
        <>  
            {/* page top point navavigation */}
            <TopNav/>

            {/* header navigation */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default MainLayout;