import PropTypes from 'prop-types';
import Recipes from './Recipes'

const Checkour = ({ activeIndex, toggleButton }) => {
    const buttons = ['Starters', 'Main', 'Soup', 'Desserts'];

    const renderComponent = () => {
        if (activeIndex === 0) {
            return <Recipes></Recipes>;
        } else if (activeIndex === 1) {
            return <Profile />;
        } else if (activeIndex === 2) {
            return <Settings />;
        } else if (activeIndex === 3) {
            return <About />;
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mt-56">
                <h1 className="text-5xl font-extrabold">
                    Checkout our{' '}
                    <span className="australia text-[#6315ff] leading-snug px-4 rounded-t-3xl mt-14">
                        menu.
                    </span>
                </h1>
                <div className="bg-[#edf2f6] rounded-lg px-4 py-3">
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

function Home() {
    return <h1>Welcome to the Home Page</h1>;
}

function Profile() {
    return <h1>Welcome to the Profile Page</h1>;
}

function Settings() {
    return <h1>Welcome to the Settings Page</h1>;
}

function About() {
    return <h1>Welcome to the About Page</h1>;
}
