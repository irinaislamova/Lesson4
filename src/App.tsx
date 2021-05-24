import React, {useState} from 'react';
import './main.global.css';

import { MyList } from './MyList';
import { generateId } from './utils/react/generateRandomIndex';
import { generateRandomString } from './utils/react/generateRandomIndex';

import { merge } from './utils/js/merge';
import { Header } from './Header';
import { Content} from './Content';
import { Layout } from './Layout';
import { CardList } from './CardList';
import { getValue } from './utils/react/pickFromSyntheticEvent';
import { InputExample } from './compose.example';


function App() {

	const LIST = [
	    {value: 'some'},
	    {value: 'other some'},
	    {value: 'some'},
	    {value: '123'}
	].map(generateId);

	return (
		<Layout>
		<Header />
		<Content>
		    <CardList />	
		    <div>qwerty123</div>
		    <MyList list={LIST}
		    />
		</Content>
		</Layout>
		)
}

export default App;

// import React, {useState} from 'react';
// import './main.global.css';
// import { GenericList } from './GenericList2';
// import { generateId } from './utils/react/generateRandomIndex';
// import { merge } from './utils/js/merge';
// import { Header } from './Header';
// import { Content} from './Content';
// import { Layout } from './Layout';
// import { CardList } from './CardList';
// import { getValue } from './utils/react/pickFromSyntheticEvent';


// function App() {

// 	const LIST = [
// 	    {text: 'some'},
// 	    {text: 'other some'},
// 	    {text: 'some'}
// 	].map(generateId);

// 	const [list, setList] = React.useState(LIST);


// 	const handleItemClick = (id: string) => { 
// 		setList(list.filter((item) => item.id != id))
// 	};

// 	const handleAdd = () => {
// 		setList(list.concat(generateId(
// 			{text: generateRandomIndex(), As: 'li' as const }
// 			)))
// 		}
// 	}

// 	return (
// 		<Layout>
// 		<Header />5
// 		<Content>
// 		<CardList />	
// 		<div>qwerty123</div>
// 		<GenericList list={list.map(merge(
// 			{ onClick: handleItemClick }
// 			))} />   
// 		</Content>
// 		</Layout>
// 		)
// }

// export default App;