//ToDo.js

import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from "react-icons/ri";

const ToDo = ({ _id, text, isCompleted, updateMode, deleteToDo, markAsCompleted }) => {
  return (
    <div className={`todo ${isCompleted ? 'completed' : ''}`}>
      <div className='text'>{text}</div>
      <div className='icons'>
        <BiEdit className='icon' onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteToDo} />
        {isCompleted ? (
          <RiCheckboxCircleFill className='icon' onClick={() => markAsCompleted(_id)} />
        ) : (
          <RiCheckboxBlankCircleLine className='icon' onClick={() => markAsCompleted(_id)} />
        )}
      </div>
    </div>
  );
};

export default ToDo;





