
import React from 'react';

import ReactDOM from 'react-dom';

import dog from './common/img/dogs.jpg';
import kb from './common/img/3kb.jpg'
const giphy = require("./common/img/giphy.gif");

import 'font-awesome/css/font-awesome.css';

import style from './app.css';


ReactDOM.render(
	<div>
		
		<img src={dog} alt="" />
		<img src={kb} alt="" />
		<img src={giphy} alt="" />
		<div className="fa fa-rocket">
			<span className={style.ot}>React</span>
		</div>
	</div>,
	document.getElementById('root')
)