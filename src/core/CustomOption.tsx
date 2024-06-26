import { FC } from 'react';
import { Option } from '../App.type';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/16/solid';

const CustomOption: FC<Option> = ({ name, value, action }) => {
    return (
        <li key={value} className="group flex my-4 p-6 py-4 gap-2 hover:bg-slate-300 bg-slate-50 rounded-lg">
            <div className='w-10 flex h-10 justify-center group/btn'>
                <button className="hidden group-hover:block self-center cursor-pointer
                 group-hover/btn:bg-white group-hover/btn:rounded-full
                 group-hover/btn:p-1"
                 onClick={ (e) => {
                    // alert(`Clicked: ${value}`);
                    action(value);
                }}>
                    <ArchiveBoxXMarkIcon className='size-4 text-gray-500 group-hover/btn:size-6'/>
                </button>
            </div>
            <div className='w-full y-4 flex justify-between self-center'>
                <span className='text-slate-800 inline-block group-hover:text-blue-800 w-80 cursor-pointer'>{name}</span>
                { name !== value && <div className='w-40 bg-slate-500 text-white rounded text-center'>{value}</div> }
            </div>
        </li>
    );
}
  
export default CustomOption;