import { GoPlay } from "react-icons/go";
import banner from '../../assets/order.avif'

const Banner = () => {
    return (
        <div className="flex items-center justify-between mt-24">
            <div>
                <h1 className="text-5xl font-extrabold">Delicious & Affordable <br />
                <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14"> Meals Near You.</span></h1>
                <p className="text-[#8d8988] font-bold mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex items-center gap-8 mt-8">
                    <button className="bg-[#6315ff] text-white px-8 py-3 rounded-lg text-[18px]">Order Now</button>
                    <button className="flex items-center gap-2 text-[18px]"><GoPlay className="text-5xl" />Meet The Chefs</button>
                </div>
            </div>
            <div>
                <img className="rounded-[40px] w-[640px]" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;