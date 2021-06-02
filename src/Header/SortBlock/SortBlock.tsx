import React from 'react';
import styles from './sortblock.css';
import { Menu } from './Menu'


export function SortBlock() {
  return (
    <div>
      <h2 className={styles.title}>Личный кабинет</h2>
  	  <div className={styles.sortBlock}>
  	    <Menu isOpen = {false} />
  	  </div>
    </div>
  );
}
