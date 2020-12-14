// import React, { useState } from 'react';
// import QuillEditor from './editor/QuillEditor';
// import axios from 'axios';
// import { useHistory } from "react-router-dom";


// function CreateText({ userInfo, url }) {

// 	const history = useHistory();
// 	const [title, setTitle] = useState('');
// 	const [content, setContent] = useState('');
// 	const [files, setFiles] = useState([]);
// 	const [searchUrl, setSearchUrl] = useState('');

	// const onTitleChange = (e) => {
	// 	e.preventDefault();
	// 	setTitle(e.target.value);
	// };
	// const onEditorChange = (value) => {
	// 	setContent(value);
	// 	console.log(content);
	// };

	// const onFilesChange = (files) => {
	// 	setFiles(files);
	// };

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		setContent('');

// 		const variables = {
// 			title: title,
// 			text: content,
// 			url: url,
// 			user: userInfo.id,
// 		    upload_url : searchUrl
			
// 		};

// 		axios.post("http://localhost:3000/board/write", variables)
// 		.then((res) => {
// 			console.log("글 게시 axios :", res);
// 		  if (res.status === 200) {
// 		    setTimeout(() => {
// 		      history.push('/board/${res.id}')
// 		    }, 500);
// 		  }
// 		});
// 	};

// 	return (
// 		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
// 			<div style={{ textAlign: 'center' }}>
// 				<h1>게시글 작성하기</h1>
// 			</div>
// 			<form onSubmit={onSubmit}>
// 			<input type="text" value={title} placeholder="제목" onChange={(e) => {setTitle(e.target.value)}} />
// 			<QuillEditor setSearchUrl={setSearchUrl} placeholder='내용을 입력하세요'
// 			onEditorChange={onEditorChange} onFilesChange={onFilesChange}
// 			 />
				
// 					<button className="submit__text" onClick={onSubmit}>
// 						Submit
// 					</button>
				
// 			</form>
// 		</div>
// 	);
// }

// export default CreateText;
//////////////////////////////////////////////

import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link } from 'react-router-dom';

// #1 import quill-image-uploader
import ImageUploader from "quill-image-uploader";
// #2 register module
Quill.register("modules/imageUploader", ImageUploader);

class CreateText extends Component {
    userInfo; 
	url;
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            searchUrl: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
	
    modules = {
        // #3 Add "image" to the toolbar
        toolbar: [["bold", "italic", "underline", "strike", "image", "video"]],
        // # 4 Add module and upload function
        imageUploader: {
          upload: file => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              const config = {
                header: { "content-type": "multipart/form-data" },
              };
              formData.append("img", file);
              axios.post("http://localhost:3000/setting/upload", formData, config)
              .then((response) => {
              if(response.data) {
                  this.setState({
                      searchUrl: response.data
                  })
    
              } else {
                  return alert("failed to upload file");
              }
            })
          })
          }
        }
      };

      onSubmit (e) {
        e.preventDefault();
		console.log('유알엘 : ', this.props.url)
        const variables = {
          title: this.state.title,
          text: this.state.content,
          url: this.props.url,
          user: this.props.userInfo.id,
          upload_url: this.state.searchUrl,
        };
    
        axios.post("http://localhost:3000/board/write", variables)
        .then((res) => {
          console.log("글 게시 axios :", res.status);
          if (res.status === 200) {
            <Link to={`/board/${res.id}`} />
            console.log("포스팅 :", res);
          }
        });
        this.setState({
			content: "",
			title: ""
        });
      };  

      render() {

          return (
            <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
              <div style={{ textAlign: "center" }}>
                <h1>게시글 작성하기</h1>
              </div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="제목"
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                />
                <ReactQuill 
                    modules={this.modules}
                    formats={CreateText.formats}
                    value={this.state.content}
                    placeholder="내용을 입력하세요"
                    // onChange={(e) => this.setState({ content: e.target.value})} 
					/>
        
                <button className="submit__text" onClick={this.onSubmit}>
                  Submit
                </button>
              </form>
            </div>
          );
      }
}

export default CreateText;

CreateText.formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "imageBlot" // #5 Optinal if using custom formats
  ];
