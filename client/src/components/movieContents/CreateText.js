import React, { useState } from "react";
import QuillEditor from "./editor/QuillEditor";
import axios from "axios";
import { useSelector } from "react-redux";

function CreatePage() {
  // const user = useSelector(state => state.user);
  // redux 에서 props 받아와야 함 => userInfo 사용하기 위해

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

    setContent("");

    // if (user.userData && !user.userData.isAuth) {
    //     return alert('Please Log in first');
    // }
    // login 안 되어 있는 상태에서 글쓰기 시도할 때

    const variables = {
      title: title,
      content: content,
      // userID: user.userData._id
      // props 로 유저인포 받아오면 포스트 요청 시 유저ID 함께 보내야 함
    };

    axios.post("https://final.cinephile.kro.kr/board/write:", variables).then((response) => {
      if (response) {
        message.success("Post Created!");

        setTimeout(() => {
          // props.
          // history.push('/board')
        }, 1000);
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>게시글 작성하기</h1>
      </div>
      <input type="text" value={title} placeholder="제목" onChange={onTitleChange} />
      <QuillEditor placeholder={"내용을 입력하세요"} onEditorChange={onEditorChange} onFilesChange={onFilesChange} />
      <form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <button className="submit__text" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
