import main_image from '../../assets/main.avif'

const Main = () => {
    return (
        <div className="flex items-center justify-between mt-48">
            <div>
                <img className="rounded-[40px] w-[640px]" src={main_image} alt="" />
            </div>
            <div className='text-left'>
                <p className='text-[16px] font-medium text-[#6315ff]'>Established Since 2014</p>
                <h1 className="text-5xl font-extrabold leading-snug mt-6 text-[#243e63]">Weve been serving <br /> for <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">over 5 years.</span></h1>
                <p className='text-[#8d8988] font-semibold mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='text-[#8d8988] font-semibold mt-10 text-[18px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-[#6315ff] text-white px-8 py-3 rounded-lg text-[18px] mt-10">Latest Offer</button>
            </div>
        </div>
    );
};

export default Main;