import React, { useState } from "react";
import axios from "axios";

const SignUp = ({ signUpSwitch, modalSwitch }) => {
  console.log("signUp: ", signUpSwitch);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("10");
  const [gender, setGender] = useState("male");

  const signUpHandler = () => {
    axios
      .post("/signup", {
        email: email,
        password: password,
        username: username,
        age: age,
        gender: gender,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("회원 가입이 완료되었습니다.");
        } else if (res.status === 409) {
          alert("가입 정보를 다시 확인해 주세요.");
        }
      });
  };
  return (
    <div className="signUpModal" style={modalSwitch(signUpSwitch)}>
      <input className="email" value={email} type="text" placeholder="email"
             onChange={(e) => setEmail(e.target.value)} />
      <input className="password" value={email} type="text" placeholder="password"
             onChange={(e) => setPassword(e.target.value)} />
      <input className="username" value={username} type="text" placeholder="username"
             onChange={(e) => setUsername(e.target.value)} />  
      <br/>       
      <label>Male: </label>
      <input type="radio" checked={gender === "male"} value="male" onChange={(e) => setGender(e.target.value)} /> 
      <label>Female: </label>      
      <input type="radio" checked={gender === "female"} value="female" onChange={(e) => setGender(e.target.value)} />       
      <br/> 
      <label>10~19: </label>      
      <input type="radio" checked={age === "10"} value="10" onChange={(e) => setAge(e.target.value)} />       
      <label>20~29: </label>      
      <input type="radio" checked={age === "20"} value="20" onChange={(e) => setAge(e.target.value)} />       
      <label>30~39: </label>      
      <input type="radio" checked={age === "30"} value="30" onChange={(e) => setAge(e.target.value)} />       
      <label>40~49: </label>      
      <input type="radio" checked={age === "40"} value="40" onChange={(e) => setAge(e.target.value)} />       
      <label>50~: </label>      
      <input type="radio" checked={age === "50"} value="50" onChange={(e) => setAge(e.target.value)} />       
      <button className="signup__button" onClick={() => signUpHandler()}>SignUp</button>  
    </div>
  );
};
export default SignUp;
