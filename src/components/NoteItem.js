import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';


const NoteItem = (props) => {

    // const {showAlert} = props;
    const context = useContext(noteContext);
    //eslint-disable-next-line
    const {deleteNote, } = context;

    const {note, updatenote, showAlert} = props;
  return (
    <div className='col-md-3'>
        <div className="card my-3 border-primary ">
        <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-can mx-2" 
            
            onClick={()=>{
                deleteNote(note._id);
                showAlert("Note deleted sucessfully","success");
                }}
            style={{color: "red"}}></i>
            
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
            </div>
            <p className="card-text">{note.description}</p>
        </div>
        </div>
        </div>
  )
}

export default NoteItem
