import React from 'react';

export function MyHooks({title, id}: {title: string, id?: string}) {
	const items = 10;
	const multiplier = 5;

	const result = React.useMemo(
		() => calculate(items, multiplier), [items, multiplier]
	)	
	
	return (
		<div>{title} {id} {result}</div>
    )
}

function calculate(items: number, multiplier: number) {
	return new Array(items).fill(1).reduce((a, v) => a * multiplier);	
}