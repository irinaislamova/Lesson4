import React, {useState} from 'react';
import './main.global.css';

// import { MyList } from './MyList';
import { generateId } from './utils/react/generateRandomIndex';
import { generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
import { IItem } from './MyList';

import { GenericList } from './GenericList';

import { Header } from './Header';
import { Content} from './Content';
import { Layout } from './Layout';
import { CardList } from './CardList';
import { getValue } from './utils/react/pickFromSyntheticEvent';
import { InputExample } from './compose.example';

// const LIST = [
// 	    {value: 'some'},
// 	    {value: 'other some'},
// 	    {value: 'some'},
// 	    {value: '123'}
// 	].map(el => generateId<IItem>(el));

// function App() {	 

// 	const [list, setList] = React.useState<IItem[]>(LIST);

// 	const handleItemClick = (id: string) => { 
// 		setList(list.filter((item) => item.id != id))
// 	}

// 	const handleAdd = () => {
// 		setList(list.concat(generateId({value: generateRandomString()})))
// 	}	

// 	return (
// 		<Layout>
// 		<Header />
// 		<Content>
// 		    <CardList />	
// 		    <div>qwerty123</div>	
// 		    <button onClick={handleAdd}>Add Element</button> 
// 		    <MyList list={list.map(merge(
// 		    	{onClick: handleItemClick }
// 		    	))
// 		    	}      
// 		    />			    
// 		</Content>
// 		</Layout>
// 		)
// }

const LIST = [
	    {As: 'li' as const, text: 'test1'},
	    {As: 'li' as const, text: 'test2'},
	    {As: 'li' as const, text: 'test3'},
	    {As: 'li' as const, text: '123'}
	].map(el => generateId<IItem>(el));

function App() {	 

	const [list, setList] = React.useState<IItem[]>(LIST);

	const handleItemClick = (id: string) => { 
		setList(list.filter((item) => item.id != id))
	}

	const handleAdd = () => {
		setList(list.concat(generateId({text: generateRandomString(),
			   As: 'li' as const
		})))
	}	

	return (
		<Layout>
		<Header />
		<Content>
		    <CardList />	
		    <div>qwerty123</div>	
		    <button onClick={handleAdd}>Add Element</button> 
		    <GenericList list={list.map(merge(
 			    { onClick: handleItemClick }
  			))} /> 			    
		</Content>
		</Layout>
		)
}

export default App;


