import React,{useState} from 'react'
import styles from './SearchData.module.css'

const SearchData = ({filterFunction, filterTagFunction}) => {
    
    const [value, setValue] = useState('')
    const [valueTag, setValueTag] = useState('')

    filterFunction(value)
    filterTagFunction(valueTag)
    return (
        <div className={styles.container}>
            <form className={styles.search}>
                <input className={styles.searchName} type="text" placeholder="Search By Name" value={value} onChange={(e) => setValue (e.target.value)} />
                <input className={styles.searchTag} type="text" placeholder="Search By Tag" value={valueTag} onChange={(e) => setValueTag (e.target.value)} />
        
            </form>
        </div>
    )
    }

export default SearchData
