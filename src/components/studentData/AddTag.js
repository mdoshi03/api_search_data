import React,{useState} from 'react'
import styles from './AddTag.module.css'

const AddTag = ({addTag}) => {
    const [newTag, setNewTag] = useState('')
    return (
        <div>

        <form
        onSubmit={e => {
            e.preventDefault();
            addTag(newTag)
            setNewTag("");
        }}
        >
        <input
        className={styles.sbn}
        placeholder="Add a tag"
        type="text"
        value={newTag}
        onChange={e => {
            setNewTag(e.target.value);
        }}
        />
        
      </form>
</div>
    )
}

export default AddTag
