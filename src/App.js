import { React, useState, useEffect} from 'react';
import StudentsData from './components/studentData/StudentsData'
import SearchData from './components/searchData/SearchData'
import styles from "./App.module.css"

const App = () => {

    const [students, setStudents]= useState([])
    const [value, setValue] = useState('')
    const [TagValue, setTagValue] = useState('')
    
    const nameFilterFunction = str =>{
      setValue(str)
    }
    const filterTagFunction = str =>{
      setTagValue(str)
    }
    
    async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    
    setStudents(json.students)
  }
    
    useEffect(() => {
        fetchUrl(`https://www.hatchways.io/api/assessment/students`);
      }, []);

    return (
        <div >
          <div id = "hello" className={styles.container}>
          <SearchData filterFunction={nameFilterFunction} filterTagFunction={filterTagFunction} />
          
          <StudentsData  students = {students} value={value.toUpperCase()} tagValue={TagValue.toUpperCase()} />
          </div>
        </div>
    
    
    );
};

export default App;