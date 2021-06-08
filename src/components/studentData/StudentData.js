import React, {useState}  from 'react'
import AddTag from './AddTag';
import Tag from './Tag';
import styles from "./StudentData.module.css";
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'


const StudentData = ({
    img,
    firstName,
    lastName,
    email,
    company,
    skill,
    grades,
    searchTags,
    value
  }) => {
    const [showGrades, setShowGrades] = useState(false);
    const [tags, setTags] = useState([]) 
    
    const addTag = (str) => {
        const currTags = [...tags]
        currTags.push(str)
        setTags(currTags)
    }
  
    
    return (
        <div>


   {(tags.join().toUpperCase().includes(searchTags)) &&
   (lastName.toUpperCase().includes(value) ||
    firstName.toUpperCase().includes(value)) ?




        <div className={styles.container}>
            
            <img src={img} className={styles.avatar} alt="avatar" />
            <button onClick={()=> setShowGrades(!showGrades)} className={styles.button}>{showGrades? <img className={styles.imgSizeM} src={minus} alt="-" /> : <img className={styles.imgSize} src={plus} alt="+" />}</button>
            <h1 className={styles.name}>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
            <div className={styles.content}>
                <div className={styles.ind}>Email: {email}</div>
                <div className={styles.ind}>Company: {company}</div>
                <div className={styles.ind}>Skill: {skill}</div>
                <div className={styles.ind}>Average: { grades.reduce((a,grade) => a = a + parseInt(grade), 0) / grades.length }%</div>
                
            <div className={styles.ind}>{showGrades ?( grades.map((grade, index) =>{
                return (
                    <div>
                        Test {index + 1} : {grade}
                        <br/>
                    </div>
                )
            })):(<div> </div>)} 
            </div>
            
            <div>{tags.length > 0 ? tags.map((tag) => { return (<Tag tag ={tag}   />)}):null}</div>
            <br /> 
            <AddTag addTag={addTag} className={styles.ind} />
            
            
            </div>
            
        </div>


            :<div></div>

   }


    </div>
        
    )
}



export default StudentData
