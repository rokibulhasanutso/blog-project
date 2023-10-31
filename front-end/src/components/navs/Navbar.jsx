import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaRss } from "react-icons/fa6";

const Navbar = () => {

    return (
        <div className="border-b">
            <nav className="container mx-auto">
                <div className="py-3.5 flex justify-between items-center">

                    {/* logo */}
                    <Link to={'/'}>
                        <p className="text-4xl font-semibold">Blog<span className="text-slate-500">Express</span></p>
                    </Link>

                    {/* menu links */}
                    <ul>

                    </ul>

                    {/* social and auth */}
                    <div className="flex items-center gap-8">
                        {/* social links */}
                        <div className="space-x-4 text-slate-600 text-lg">
                            <Link to={''} className="inline-block hover:text-blue-600"><FaFacebookF/></Link>
                            <Link to={''} className="inline-block hover:text-blue-500"><FaTwitter/></Link>
                            <Link to={''} className="inline-block hover:text-orange-600"><FaRss/></Link>
                        </div>

                        {/* auth buttons */}
                        <div>
                            <Link
                                to={'/login'}
                                className="inline-block px-5 py-2 text-white font-semibold rounded-md bg-green-700 text-xl"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                    

                </div>
            </nav>
        </div>
    );
};

export default Navbar;