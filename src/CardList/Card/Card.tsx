import React from 'react';
import styles from './card.css';

import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Controls } from './Controls';
import { Menu } from './Menu';

export function Card() {
  return (
  	<li className={styles.card}>
  		<TextContent />
  		<Preview />
  		<Menu />
  		<Controls />
  	</li>
  );
}
