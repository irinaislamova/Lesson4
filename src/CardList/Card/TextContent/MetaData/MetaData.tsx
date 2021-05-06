import React from 'react';
import styles from './metadata.css';
import Avatar from './avatar.png';

export function MetaData() {
  return (
  	<div className={styles.metaData}>  	    
  		<div className={styles.userLink}>
  		    <img
  		        className={styles.avatar}
  		        src={Avatar}
  		        alt="avatar"
  		    />
  		    <a href="#user-url"
  		        className={styles.userName}>
  		        Дмитрий Гришин
  		    </a>
  	    </div>   
  		<span className={styles.createdAt}>
  		    <span className={styles.publishedLabel}>
  		        4 часа назад
  		    </span>
  		</span>
  	</div>
  );
}
