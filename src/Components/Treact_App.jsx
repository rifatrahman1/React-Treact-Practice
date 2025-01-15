import mobile_app from '../../assets/mobile-app.png'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playstore.png'

const Treact_App = () => {
    return (
        <div className="bg-[#1a202c] mt-24">
            <div className="flex items-center justify-center gap-24 py-24">
                <div>
                    <h3 className='inter text-[#deb170] font-bold'>Download App</h3>
                    <h1 className="text-3xl inter text-left font-extrabold leading-snug mt-4 text-white">People around you are ordering delicious <br /> meals using the <span className="australia text-[#6315ff] bg-white leading-loose px-4 mt-14">Treact App.</span></h1>
                    <div className='flex items-center gap-8 inter mt-14'>
                        <button className='flex items-center gap-3 bg-white px-12 py-4 rounded-full hover:bg-slate-300 duration-500'>
                            <img className='w-7' src={apple} alt="" />
                            <p className='font-bold'>APP STORE</p>
                        </button>
                        <button className='flex items-center gap-3 bg-white px-12 py-4 rounded-full hover:bg-slate-300 duration-500'>
                            <img className='w-7' src={playstore} alt="" />
                            <p className='font-bold'>GOOGLE PLAY</p>
                        </button>
                    </div>
                </div>
                <div>
                    <img className='h-[470px] w-[250px]' src={mobile_app} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Treact_App;