

const Checkour = () => {
    return (
        <div className="flex items-center justify-between mt-56">
            <h1 className="text-5xl font-extrabold">Checkout our <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">menu.</span></h1>
            <div className="bg-[#edf2f6] rounded-lg px-3 py-3">
                <div className="flex items-center gap-8 text-[18px]">
                    <a className="bg-[#6315ff] text-white px-4 py-2" href="">Starters</a>
                    <a href="">Main</a>
                    <a href="">Soup</a>
                    <a href="">Desserts</a>
                </div>
            </div>
        </div>
    );
};

export default Checkour;