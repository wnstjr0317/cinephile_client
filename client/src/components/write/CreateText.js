import React, { useState } from 'react';
import QuillEditor from './editor/QuillEditor';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function CreateText({ userInfo, url }) {

	const history = useHistory();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [files, setFiles] = useState([]);

	const onTitleChange = (e) => {
		setTitle(e.target.value);
	};
	const onEditorChange = (value) => {
		setContent(value);
		console.log(content);
	};

	const onFilesChange = (files) => {
		setFiles(files);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setContent('');

		const variables = {
			title: title,
			text: content,
			url: url,
			user_id: userInfo.id
			
		};

		axios.post("https://final.cinephile.kro.kr/board/write", variables).then((res) => {
		  if (res.status === 200) {
		    setTimeout(() => {
		      history.push('/board')
		    }, 500);
		  }
		});
	};

	return (
		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
			<div style={{ textAlign: 'center' }}>
				<h1>게시글 작성하기</h1>
			</div>
			<input type="text" value={title} placeholder="제목" onChange={onTitleChange} />
			<QuillEditor placeholder={'내용을 입력하세요'} onEditorChange={onEditorChange} onFilesChange={onFilesChange} />
			<form onSubmit={onSubmit}>
				<div style={{ textAlign: 'center', margin: '2rem' }}>
					<button className="submit__text" onSubmit={onSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateText;
