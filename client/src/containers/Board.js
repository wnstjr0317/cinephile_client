/* eslint-disable no-undef */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BoardList from '../components/board/BoardList';
import '../App.css';
import { boardGetAjaxAction } from '../modules/BoardList';

const board = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { boardList } = useSelector((state) => ({
		boardList: state.BoardList,
	}));

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const boardListUpdate = useCallback(() => {
		dispatch(boardGetAjaxAction());
	}, [dispatch]);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		boardListUpdate();
	}, [boardListUpdate]);

	return (
		<div className="boardWrapper">
			<BoardList boardList={boardList} />
		</div>
	);
};

export default React.memo(board);
