import React from 'react'
import Notes from './Notes'
// import Addnote from './Addnote'
// import noteContext from '../context/notes/noteContext'

const Home = (props) => {
  const {showAlert} = props;
  return (  
    <>
      {/* <div class="p-3 mb-2 bg-primary text-white"> */}
      
      <Notes showAlert={showAlert}/>
      {/* </div> */}
    </>
  )
}

export default Home
