import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from './Modal';

function Todo(props) {
    const [modalIsOpen,setModalIsOpen]=useState(false);
    function deleteHandler() {
        // console.log('Hi');
        // console.log(props.text);
        setModalIsOpen(true);
    };
    function closeModalHandler() {
        setModalIsOpen(false);
        // console.log('hihi');
    };
   return(
    <div className='card'>
        <h2>{ props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
           {modalIsOpen && <Modal onCancel={closeModalHandler } onConfirm={closeModalHandler } />}  
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}   
         
    </div>
   );
}
export default Todo;