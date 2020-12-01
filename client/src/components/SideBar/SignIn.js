import React, { useState } from "react";
import axios from "axios";


const SignIn = ({ loginSwitch, modalSwitch, loginModal }) => {
	console.log('login: ', loginSwitch);

// 	return (
// 		<div className="modal" style={modalSwitch(loginSwitch)}>
// 			<span onClick={loginModal}> x</span>
// 			<hr />
// 			<button onClick={loginModal}>로그인</button>
// 		</div>
// 	);
// =======
// const SignIn = ({ loginSwitch, modalSwitch }) => {
//   console.log("login: ", loginSwitch);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const singInHandler = async () => {
//     if (email === "" || password === "") {
//       alert("회원 정보를 입력해 주세요");
//     } else {
//       const res = await axios.post("/login", {
//         email: email,
//         password: password,
//       });
//       if (res.status === 200) {
//         alert("로그인에 성공하였습니다.");
//         // setModal(false)??
//       } else {
//         alert("회원 정보를 다시 확인해 주세요.");
//       }
//     }
//   };

  return (
    <div className="loginModal" style={modalSwitch(loginSwitch)}>
      <input className="email" value={email} type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input className="password" value={password} type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="signin__button" onClick={() => singInHandler()}>
        SignIn
      </button>
    </div>
  );

};
export default SignIn;
