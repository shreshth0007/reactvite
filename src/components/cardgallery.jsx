import React from 'react'
import Card from './card'

const  student = [{
    college:"ABES Engineering College",
     roll:"12345",
      name:"Sanskar",
       branch:"BTECH CSE", 
       section:"24", 
       skills:"JS, CPP, HTML, React", 
       pic:"https://in.pinterest.com/pin/949485533917679045/"
   },
{
    college:"ABES Engineering College",
     roll:"123456",
      name:"Sans",
       branch:"BTECH CSE", 
       section:"24", 
       skills:"JS, CPP, HTML, React", 
       pic:"https://in.pinterest.com/pin/949485533917679045/"
   }]
function CardGallery() {
   
//   return (
//     <div>
      
//       <Card college="ABES Engineering College" roll="12345" name="Sanskar" branch="BTECH CSE" section="24" skills="JS, CPP, HTML, React" pic="https://in.pinterest.com/pin/949485533917679045/" />
//       <Card data={student[0]} />
//     </div>
//   )
{
student.map((data)=>{
    return(
        <div>
            <Card data={data} />
        </div>
    )
})
}}

export default CardGallery
