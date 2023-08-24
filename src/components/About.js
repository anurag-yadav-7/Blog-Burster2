// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../context/notes/noteContext'

// const About = () => { 
//   const a = useContext(NoteContext);

//   useEffect(() =>{
//     a.update();
//     // eslint-disable-next-line
//   }, [])

//   return (
//     <div>
//       <h1 className="text-center"> 
//         This is about {a.state.name} and he is in class {a.state.class}
//       </h1>
//     </div>
//   )
// }

// export default About


import React from 'react'

const About = () => {

    return (
        <div>
            
            {/* <div className="p-3 mb-2 bg-gradient-info text-white"> */}
            {/* <div class="p-3 mb-2 bg-primary text-white">.bg-primary */}
            <h1 className='text-center'> BlogBurst is an application where users can login and write their blogs, and publish it to the home page where any other user can see it after loggin in!</h1>
            {/* </div> */}

            {/* </div> */}
        </div>
    )
}

export default About