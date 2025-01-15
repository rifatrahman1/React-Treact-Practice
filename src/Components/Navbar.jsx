import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
            <div className="flex items-center justify-between mt-8">
            {/* #6315ff */}
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <h2 className="text-3xl font-bold">Treact</h2>
                </div>
                <div className="flex items-center gap-10 font-bold">
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Pricing</a>
                    <a href="">Contact Us</a>
                    <a href="">Login</a>
                    <a className="bg-[#6315ff] text-white px-7 py-2 rounded-lg" href="">Sign Up</a>
                </div>
            </div>
    );
};

export default Navbar;