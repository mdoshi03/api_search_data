import React from 'react'
import styles from "./StudentsData.module.css";
import StudentData from "./StudentData"


const StudentsData = (props) => {
    
    
    return (
        <div className={styles.container}>
           
           {props.students.map((student) => {
               return(
            
            <StudentData  
                img={student.pic}
                firstName={student.firstName}
                lastName={student.lastName}
                email={student.email}
                company={student.company}
                skill={student.skill}
                grades={student.grades}
               searchTags = {props.tagValue}
               value = {props.value}
            /> )})}
         </div>   
    )
}

export default StudentsData
