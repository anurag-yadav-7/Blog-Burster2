import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {

    const context = useContext(noteContext);
    //eslint-disable-next-line
    const {addNote} = context;
    const {showAlert} = props;
    const [note,setNote] = useState({title:"",description:"",tag:""})

    const handleOnClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag); 
        setNote({title:"",description:"",tag:""})
        showAlert("Note added successfully!","success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <div className="container my-3">
        <h2>✒️Write your Blog </h2>
        <form className='my-3'>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" minLength={5} value={note.title} required name="title" id="title" aria-describedby="emailHelp" onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description" value={note.description}  minLength={5} required name='description' onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" id="tag" minLength={5} value={note.tag}   required name='tag' onChange={onChange}/>
      </div>
      <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} type="submit" className="btn btn-primary" onClick={handleOnClick}>Push</button>
      </form>
      </div>
    </div>
  )
}

export default Addnote
