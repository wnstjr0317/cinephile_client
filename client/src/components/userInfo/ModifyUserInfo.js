import React, { useState, useEffect } from 'react';
import './ModifyUserInfo.css';

const modifyUserInfoFunc = ({
	modifyAge,
	modifyGender,
	emailChangeInput,
	ageChangeSelect,
	modifyEmail,
	genderChangeSelect,
	modifyPassword,
	passwordChangeInput,
	loginUserInfo,
	modifyNickname,
	nickNameChangeInput,
	modifyUserInfoPost,
	autoCookieLogin,
	modifyUserInfo,
}) => {
	console.log(loginUserInfo);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [modifySwitch, setModifySwitch] = useState({
		nicknameModify: false,
		passwordModify: false,
		emailModify: false,
		genderModify: false,
		ageModify: false,
	});

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		autoCookieLogin(JSON.parse(sessionStorage.getItem('userInfo')));
	}, [autoCookieLogin]);
	//모두 포스트로 보낼 것
	//localhost:3000/setting/check 이메일하고 닉네임만 중복 검사
	//localhost:3000/setting/password id:유저 id, password:현재 패스워드, newpassword:새로운 패스워드 보낼 것.

	//일반 가입자들이 성별하고 나이 바꿀 수 없게 만들기
	// 소셜 로그인
	// eslint-disable-next-line react-hooks/rules-of-hooks

	const modifySwitchHandler = (e) => {
		e.preventDefault();

		if (e.target.className === 'nicknameModifyButton') {
			if (modifySwitch.nicknameModify && modifyNickname !== '') {
				console.log('nickname submit');
				//여기서 ajax 실행

				setModifySwitch(Object.assign({}, modifySwitch, { nicknameModify: !modifySwitch.nicknameModify }));
			} else {
				setModifySwitch(Object.assign({}, modifySwitch, { nicknameModify: !modifySwitch.nicknameModify }));
			}
			// nickNameChangeInput('');
		}
		if (e.target.className === 'passwordModifyButton') {
			if (modifySwitch.passwordModify && modifyPassword !== '') {
				console.log('password submit');
				//여기서 ajax 실행

				setModifySwitch(Object.assign({}, modifySwitch, { passwordModify: !modifySwitch.passwordModify }));
			} else {
				setModifySwitch(Object.assign({}, modifySwitch, { passwordModify: !modifySwitch.passwordModify }));
			}
			// passwordChangeInput('');
		}
		if (e.target.className === 'emailModifyButton') {
			if (modifySwitch.emailModify && modifyEmail !== '') {
				console.log('email submit');
				//여기서 ajax 실행

				setModifySwitch(Object.assign({}, modifySwitch, { emailModify: !modifySwitch.emailModify }));
			} else {
				setModifySwitch(Object.assign({}, modifySwitch, { emailModify: !modifySwitch.emailModify }));
			}
			// emailChangeInput('');
		}

		if (e.target.className === 'submitModifyButton') {
			if (loginUserInfo) {
				modifyNickname === '' && nickNameChangeInput(loginUserInfo.nickname);
				modifyEmail === '' && emailChangeInput(loginUserInfo.email);
				modifyAge === '' && ageChangeSelect(loginUserInfo.age);
				modifyAge === '' && genderChangeSelect(loginUserInfo.gender);
			} else {
				alert('유저 정보가 없습니다.');
			}

			modifyUserInfoPost(Object.assign({}, loginUserInfo, { email: modifyEmail, nickname: modifyNickname, age: modifyAge, gender: modifyGender }));
		}
	};
	console.log(loginUserInfo);

	return (
		loginUserInfo && (
			<div className="modifyUserInfo">
				<p><span className="loginUser">{loginUserInfo.nickname}</span>
					<span> 님의 마이페이지입니다.</span></p>
				<p>개인 정보를 수정하시려면 아래 수정 버튼을 클릭해 주세요.</p>
				<form action="" className="modifyTable">
					<label htmlFor="nickname" className="nickname" >
						Nickname :
						{modifySwitch.nicknameModify ? (
							<input type="text" className="modifyNicknameText" value={modifyNickname} onChange={(e) => nickNameChangeInput(e.target.value)} />
						) : (
							<span className="modifyNicknameText">{modifyNickname ? modifyNickname : loginUserInfo.nickname}</span>
						)}
					</label>
					<button className="nicknameModifyButton" onClick={modifySwitchHandler}>
						{modifySwitch.nicknameModify ? '확인' : '수정'}
					</button>
					<p />
					<label htmlFor="password" className="password">
						Password :
						{modifySwitch.passwordModify ? (
							<input type="password" value={modifyPassword} onChange={(e) => passwordChangeInput(e.target.value)} />
						) : (
							<span className="modifyPasswordText">********</span>
						)}
					</label>
					<button className="passwordModifyButton" onClick={modifySwitchHandler}>
						{modifySwitch.passwordModify ? '확인' : '수정'}
					</button>
					<p />
					<label htmlFor="email" className="email">
						Email :
						{modifySwitch.emailModify ? (
							<input type="email" value={modifyEmail} onChange={(e) => emailChangeInput(e.target.value)} />
						) : (
							<span className="modifyEmailText">{modifyEmail ? modifyEmail : loginUserInfo.email}</span>
						)}
					</label>
					<button className="emailModifyButton" onClick={modifySwitchHandler}>
						{modifySwitch.emailModify ? '확인' : '수정'}
					</button>
					<p />
					<label htmlFor="gender" className="gender">
						<select defaultValue={loginUserInfo.gender} onChange={(e) => genderChangeSelect(e.target.value)}>
							<option value="DEFAULT">성별</option>
							<option value="male">남성</option>
							<option value="female">여성</option>
						</select>
					</label>

					<p />
					<label htmlFor="age" className="ageModify">
						<select defaultValue={loginUserInfo.age} onChange={(e) => ageChangeSelect(e.target.value)}>
							<option value="DEFAULT">나이</option>
							{[10, 20, 30, 40, 50, 60].map((age, id) => (
								<option value={age} key={id}>
									{age}대
								</option>
							))}
						</select>
					</label>

					<p />
					<button className="submitModifyButton" onClick={modifySwitchHandler}>
						확인
					</button>
				</form>
			</div>
		)
	);
};

export default modifyUserInfoFunc;
