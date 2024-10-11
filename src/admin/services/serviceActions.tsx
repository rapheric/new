import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

interface ServiceActionsProps {
    record: any;
    handleUpdate: (record: any) => void;
    handleDelete: (id: any) => void;
}
const ServiceActions: React.FC<ServiceActionsProps> = ({
    record,
    handleUpdate,
    handleDelete,
}) => {
    return (
        <div className='flex mr-2 gap-4'>
            <FaRegEdit className='cursor-pointer text-xl text-yellow-500 hover:scale-105 duration-500' onClick={() => handleUpdate(record)} />
            <FaRegTrashAlt className='cursor-pointer text-xl text-red-500 hover:scale-105 duration-500' onClick={() => handleDelete(record.id)} />
            <FiMoreVertical className='cursor-pointer text-xl text-green-500 hover:scale-105 duration-500'
            />
        </div>
    );
};

export default ServiceActions;
