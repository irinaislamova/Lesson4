import React from 'react';

interface IItem {
	value: string;
	id?: string;
}

interface IMyListProps {
	list: IItem[];
}

export function MyList({list}: IMyListProps) {
	return (
		<ul>
		{list.map((item: IItem) => 
			<li key={item.id}>{item.value}</li>
			)}
		</ul>
		)
}

// export function MyList({ list }: IMyListProps) {
// 	return (
// 		<ul>		
// 		{list.map((item: IItem) => (
// 			<li key = {item.id}
//                 onClick = {item.onClick}
// 			>
// 			{item.value}
// 			</li>
// 		))}
// 		</ul>
// 	)
// }

