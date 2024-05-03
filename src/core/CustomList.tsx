import { FC } from 'react';
import { ListOptions } from '../App.type';
import CustomOption from './CustomOption';

const CustomList: FC<ListOptions> = ({ options }) => {
    return (
        <div className='sm:container sm:mx-auto px-4'>
            <ul className='divide-y divide-gray-200 w-2/4'>
                {options.map(o => <CustomOption name={o.name} value={o.value} />)}
            </ul>
        </div>
    );
}
  
export default CustomList;