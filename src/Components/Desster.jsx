
import PropTypes from 'prop-types';
import { IoMdStar } from "react-icons/io";

const Desster = ({ recipe }) => {
    const { image, name, description, price, rating, reviews } = recipe;
    return (
        <div>
            <div className='relative'>
                <img className='w-[300px] h-[300px] rounded-t-md ' src={image} alt="" />
                <div className="flex items-center gap-1 absolute bottom-4 left-4 bg-white px-5 py-2 rounded-full">
                    <IoMdStar  className='text-yellow-400 text-xl'/>
                    <p className='font-bold'>{rating}</p>
                    <p className='text-[#8d8988] text-sm'>({reviews})</p>
                </div>
            </div>
            <div className='bg-[#edf2f6] p-4 text-left inter rounded-b-md'>
                <h3 className=' font-bold'>{name}</h3>
                <p className='text-[#8d8988] text-sm mt-2'>{description}</p>
                <p className='text-xl font-bold mt-4'>${price}</p>
            </div>
        </div>
    );
};

Desster.propTypes = {
    recipe: PropTypes.object.isRequired
}
export default Desster;