
import React from 'react';

import ReactDOM from 'react-dom';

import dog from './common/img/dogs.jpg';
import kb from './common/img/3kb.jpg'
const giphy = require("./common/img/giphy.gif");

import style from './common/style/main.css';
import acc from './common/style/acc.css';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
	<div>
		<img src={dog} alt="" />
		<img src={kb} alt="" />
		<img src={giphy} alt="" />
		<div className={style.ot}>
			<span className={acc.ot}>React</span>
		</div>
	</div>,
	document.getElementById('root')
)