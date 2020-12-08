/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';

import CreateText from '../components/write/CreateText';
import SearchMovie from '../components/write/SearchMovie';
import '../App.css';

const Write = () => {
	const [transfer, setTransfer] = useState({
		a: '',
		b: '',
		c: '',
		d: '',
		e: '',
		f: '',
	});

	return (
		<div className="main">
			<CreateText />
			<SearchMovie />
		</div>
	);
};

export default React.memo(Write);
