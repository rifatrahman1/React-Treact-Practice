import { FaArrowRightLong } from "react-icons/fa6";
import shop from '../../assets/shop.svg';
import chef from '../../assets/chef.svg';
import celebration from '../../assets/celebration.svg'

const Services = () => {
    return (
        <div className="lg:mt-44 mt-24 lg:px-0 px-4">
            <h1 className="text-5xl font-extrabold leading-snug mt-6 text-[#243e63] text-center">Amazing <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">Services.</span></h1>
            <div className="flex lg:flex-row flex-col justify-evenly mt-16 space-y-10 lg:space-y-0">
                <div className="cursor-pointer justify-center lg:gap-0 gap-14 flex lg:flex-col">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={shop} alt="" />
                    </div>
                    <div className="">
                    <h3 className="text-2xl font-bold mt-4 text-left lg:text-center">230+ Locations</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-left lg:text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex lg:justify-center items-center gap-1 text-left lg:text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                    </div>
                </div>
                <div className="cursor-pointer justify-center lg:gap-0 gap-14 flex lg:flex-col">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={chef} alt="" />
                    </div>
                    <div className="">
                    <h3 className="text-2xl font-bold mt-4 text-left lg:text-center">230+ Locations</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-left lg:text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex lg:justify-center items-center gap-1 text-left lg:text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                    </div>
                </div>
                <div className="cursor-pointer justify-center lg:gap-0 gap-14 flex lg:flex-col">
                    <div className="flex justify-center items-center text-center">
                        <img className="bg-[#f6fafd] w-[100px] h-[100px] p-3 rounded-full " src={celebration} alt="" />
                    </div>
                    <div className="">
                    <h3 className="text-2xl font-bold mt-4 text-left lg:text-center">230+ Locations</h3>
                    <p className='text-[#8d8988] text-sm mt-3 text-left lg:text-center'>Lorem ipsum donor amet siti ceali <br /> placeholder text</p>
                    <div className="flex lg:justify-center items-center gap-1 text-left lg:text-center text-[#6315ff] font-bold mt-4">
                        <a href="">Learn More</a>
                        <FaArrowRightLong className="mt-1 text-xl" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;