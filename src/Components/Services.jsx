import { FaArrowRightLong } from "react-icons/fa6";
import shop from '../../assets/shop.svg';
import chef from '../../assets/chef.svg';
import celebration from '../../assets/celebration.svg'

const Services = () => {
    return (
        <div className="mt-44 hidden">
            <h1 className="text-5xl font-extrabold leading-snug mt-6 text-[#243e63] text-center">Amazing <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">Services.</span></h1>
            <div className="flex justify-evenly mt-16">
                <div className="cursor-pointer">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={shop} alt="" />
                    </div>
                    <h3 className="text-2xl font-bold mt-4 text-center">230+ Locations</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex justify-center items-center gap-1 text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                </div>
                <div className="cursor-pointer">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={chef} alt="" />
                    </div>
                    <h3 className="text-2xl font-bold mt-4 text-center">Professional Chef</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex justify-center items-center gap-1 text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                </div>
                <div className="cursor-pointer">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={celebration} alt="" />
                    </div>
                    <h3 className="text-2xl font-bold mt-4 text-center">Birthday Catering</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex justify-center items-center gap-1 text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Services;