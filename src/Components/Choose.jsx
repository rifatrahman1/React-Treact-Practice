import choose from '../../assets/why-choose.avif'

const Choose = () => {
    return (
        <div className="lg:px-0 px-4 flex lg:flex-row flex-col inter items-center justify-between lg:mt-48 mt-24">
            <div className="lg:text-left text-center">
                <p className="text-[#6315ff] font-bold">A Reputed Brand</p>
                <h1 className="text-5xl font-extrabold leading-snug mt-4 text-[#243e63]">Why<span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">Choose Us ?</span></h1>
                <p className='text-[#8d8988] font-semibold mt-10 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
                <div className="flex lg:justify-start justify-center mt-9 gap-10 text-[#243e63]">
                    <div>
                        <h2 className="text-2xl font-bold">94000+</h2>
                        <p className="text-[#6315ff] font-medium">Orders</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">11000+</h2>
                        <p className="text-[#6315ff] font-medium">Customers</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">1500+</h2>
                        <p className="text-[#6315ff] font-medium">Chefs</p>
                    </div>
                </div>
                <button className="bg-[#6315ff] text-white px-8 py-3 rounded-lg font-bold mt-10">Order Now</button>
            </div>
            <div>
                <img className="rounded-[40px] w-[640px] lg:mt-0 mt-12" src={choose} alt="" />
            </div>
        </div>
    );
};

export default Choose;