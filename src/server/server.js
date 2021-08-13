import ReactDom from 'react-dom/server';
import express from 'express';

import { App } from '../shared';

const app = express();

app.get('/', (req, res) => {
	res.send(
		ReactDom.renderToString(App()),
	)
})
app.listen(5000, () => {
	console.log('Server started on http://localhost:5000')
})