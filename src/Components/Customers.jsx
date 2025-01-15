import customer1 from '../../assets/customer1.avif'
import customer2 from '../../assets/customer2.avif'
import customer3 from '../../assets/customer3.avif'

const Customers = () => {
    return (
        <div className='mt-44'>
            <h1 className="text-5xl text-center font-extrabold leading-snug mt-4 text-[#243e63]">Customers<span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">Love Us ?</span></h1>
            <div className='flex justify-evenly mt-14'>
                <div className='text-center'>
                    <div className='flex justify-center'><img className='w-[80px] rounded-full' src={customer1} alt="" /></div>
                    <p className='text-[#8d8988] inter font-medium mt-7 leading-loose'>"Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui <br /> officia."</p>
                    <p className='font-bold inter mt-5'>- Charlotte Hale</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'><img className='w-[80px] rounded-full' src={customer2} alt="" /></div>
                    <p className='text-[#8d8988] inter font-medium mt-7 leading-loose'>"Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui <br /> officia."</p>
                    <p className='font-bold inter mt-5'>- Adam Cuppy</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'><img className='w-[80px] rounded-full' src={customer3} alt="" /></div>
                    <p className='text-[#8d8988] inter font-medium mt-7 leading-loose'>"Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui <br /> officia."</p>
                    <p className='font-bold inter mt-5'>- Steven Marcetti</p>
                </div>
            </div>
        </div>
    );
};

export default Customers;