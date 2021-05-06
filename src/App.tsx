import * as React from 'react';
import { Header } from './Header';
import { Content} from './Content';
import { Layout } from './Layout';
import { CardList } from './CardList';
import './main.global.css';

function App() {	
	return (
		<Layout>
		   <Header />
		   <Content>
		      <CardList />
		   </Content>
		</Layout>
	)
}

export default App;