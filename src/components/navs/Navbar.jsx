import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>
                    <p className="text-4xl">Blog<span>Express</span></p>
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;