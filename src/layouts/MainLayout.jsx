import Footer from '../components/Footer/Footer';
import Navbar from '../components/navs/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default MainLayout;