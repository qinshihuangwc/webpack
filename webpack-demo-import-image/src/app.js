
import React from 'react';

import ReactDOM from 'react-dom';

import dog from './common/img/dogs.jpg'

ReactDOM.render(
	<div>
		React
		<img src={dog} alt="" />
	</div>,
	document.getElementById('root')
)