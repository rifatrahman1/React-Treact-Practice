import logo from '../../assets/logo.svg'
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#edf2f6] inter lg:px-0 px-4'>
            <div className="container lg:w-[1300px] mx-auto ">
                <div className='grid lg:grid-cols-5 grid-cols-2 lg:justify-between justify-center lg:space-y-0 space-y-12 py-24'>
                    <div className='inter'>
                        <p className='text-[#4c565d] font-bold text-xl'>Main</p>
                        <div className='text-[#726e6d] mt-5 space-y-2 font-medium'>
                            <p>Blog</p>
                            <p>FAQs</p>
                            <p>Support</p>
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className='inter'>
                        <p className='text-[#4c565d] font-bold text-xl'>Product</p>
                        <div className='text-[#726e6d] mt-5 space-y-2 font-medium'>
                            <p>Log In</p>
                            <p>Personal</p>
                            <p>Business</p>
                            <p>Team</p>
                        </div>
                    </div>
                    <div className='inter'>
                        <p className='text-[#4c565d] font-bold text-xl'>Press</p>
                        <div className='text-[#726e6d] mt-5 space-y-2 font-medium'>
                            <p>Logos</p>
                            <p>Events</p>
                            <p>Stories</p>
                            <p>Office</p>
                        </div>
                    </div>
                    <div className='inter'>
                        <p className='text-[#4c565d] font-bold text-xl'>Legal</p>
                        <div className='text-[#726e6d] mt-5 space-y-2 font-medium'>
                            <p>GDPR</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Disclaimer</p>
                        </div>
                    </div>
                    <div className='inter'>
                        <p className='text-[#4c565d] font-bold text-xl'>Subscribe to our Newsletter</p>
                        <div className='text-[#726e6d] mt-5 space-y-2 font-medium'>
                            <p>We deliver high quality blog posts written by <br /> professionals weekly. And we promise no spam.</p>
                            <div className='flex'>
                                <input className='border mt-6 border-[#ccd5de] bg-[#e1e8f0] px-6 py-3 rounded-l' type="text" placeholder='Your Email Address' />
                                <button className='text-white mt-6 bg-[#6315ff] font-bold px-6 rounded-r'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-[#ccd5de] '></div>
                <div className='flex items-center justify-between lg:py-24 py-12'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={logo} alt="" />
                        <h3 className='text-xl font-bold'>Treact Inc.</h3>
                    </div>
                    <p className='text-[#726e6d] font-semibold'>© 2018 Treact Inc. All Rights Reserved.</p>
                    <div className='lg:flex hidden items-center gap-4'>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <SiFacebook className='text-xl text-white ' />
                        </div>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <FaTwitter className='text-xl text-white ' />
                        </div>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <FaYoutube className='text-xl text-white ' />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex items-center justify-center gap-4 lg:pb-0 pb-12'>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <SiFacebook className='text-xl text-white ' />
                        </div>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <FaTwitter className='text-xl text-white ' />
                        </div>
                        <div className='bg-black px-3 py-3 rounded-full'>
                            <FaYoutube className='text-xl text-white ' />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Footer;