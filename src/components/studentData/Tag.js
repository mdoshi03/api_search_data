import React from 'react'
import styles from './Tag.module.css'

const Tag = ({tag}) => {
    return (
        <div style={{display:"inline-block"}}>
         <div className={styles.tag} style={{display:"inline-block"}}>{tag}</div>
         <span style={{display:"inline-block",visibility:"hidden"}}>sp</span>
        </div>


    )
}

export default Tag
