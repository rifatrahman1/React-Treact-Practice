import PropTypes from 'prop-types';
import Recipes from './Recipes'
import Soups from './Soups';
import Main_Recipe from './Main_Recipes';
import Dessters from './Dessters';

const Checkour = ({ activeIndex, toggleButton }) => {
    const buttons = ['Starters', 'Main', 'Soup', 'Desserts'];

    const renderComponent = () => {
        if (activeIndex === 0) {
            return <Recipes></Recipes>;
        } else if (activeIndex === 1) {
            return <Main_Recipe></Main_Recipe>;
        } else if (activeIndex === 2) {
            return <Soups></Soups>;
        } else if (activeIndex === 3) {
            return <Dessters></Dessters>;
        }
    };

    return (
        <div className='lg:px-0 px-4'>
            <div className=" flex lg:flex-row flex-col items-center justify-between lg:mt-56 mt-24">
                <h1 className="text-5xl font-extrabold">
                    Checkout our{' '}
                    <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">
                        menu.
                    </span>
                </h1>
                <div className="bg-[#edf2f6] rounded-lg px-4 py-3 lg:mt-0 mt-12">
                    <div className="flex items-center gap-8 text-[18px]">
                        <div className="flex gap-4">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleButton(index)}
                                    className={`${
                                        activeIndex === index
                                            ? 'bg-[#6315ff] px-5 py-2 text-white'
                                            : 'text-[#8d8988] hover:bg-slate-200 px-5 py-2'
                                    }`}
                                >
                                    {button}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-6">{renderComponent()}</div>
        </div>
    );
};

Checkour.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    toggleButton: PropTypes.func.isRequired,
};

export default Checkour;

