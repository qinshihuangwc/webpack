
import React from 'react';

import ReactDOM from 'react-dom';

import dog from './common/img/dogs.jpg';
import kb from './common/img/3kb.jpg'
const giphy = require("./common/img/giphy.gif");

console.log(giphy)

ReactDOM.render(
	<div>
		React
		<img src={dog} alt="" />
		<img src={kb} alt="" />
		<img src={giphy} alt="" />
	</div>,
	document.getElementById('root')
)