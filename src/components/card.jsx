import React from 'react'
import pic from '../images/pics.jpg'

// const card = () => {
//   return (
//     <div className="id">
//         <h1 className="ins">ABES Engineering College</h1>
//         <span className="ins">Roll Number: <p>12345</p></span>
//         <span className="ins">Name: <p>Sanskar</p></span>
//         <span className="ins">Branch: <p>BTECH CSE</p></span>
//         <span className="ins">Section: <p>24</p></span>
//         <span className="ins">Skills: <p>JS, CPP ,HTML, React</p></span>

//       </div>
//   )
// }
function card(data){
  return(
     <div className="id">
         <h1 className="ins">{data.college}</h1>
         <div>
          <img src={pic} alt="alt" height={200} width={200} />
         </div>
         <span className="ins">Roll Number: <p>{data.roll}</p></span>
         <span className="ins">Name: <p>{data.name}</p></span>
         <span className="ins">Branch: <p>{data.branch}</p></span>
         <span className="ins">Section: <p>{data.section}</p></span>
         <span className="ins">Skills: <p>{data.skills}</p></span>
        
      </div>

  )
}

export default card
