import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes, getNotes , editNote} = context;
    const {showAlert} = props;
    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token'))
            getNotes();
        else
            navigate("/login");
    });

    const [note,setNote] = useState({id:"", etitle:"",edescription:"",etag:""})
    const ref = useRef(null);
    const closeRef = useRef(null);
    
    
    const updatenote = (currentNote)=>{
        ref.current.click();
        setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }

    const handleClick = (e)=>{
        // console.log("updating the note",note);
        editNote(note.id, note.etitle, note.edescription, note.etag)
        closeRef.current.click();
        showAlert("Note updated sucessfully","success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  
    return (
        <>
        <Addnote showAlert={showAlert} />
        <div>
        <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Blog</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" minLength={5} required name="etitle" id="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" minLength={5} required name='edescription' value={note.edescription}  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
                </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    <div className="row">
      <h2>All Blogs</h2>
      <div className="container">
      {!notes && "No Blogs to Display"}
    {/* {console.log(notes)} */}
      </div>
      {notes.map((notes)=>{
          return <NoteItem key={notes._id} updatenote={updatenote} showAlert={showAlert} note = {notes}/>
        })}
    </div>
        </>
  )
}

export default Notes
