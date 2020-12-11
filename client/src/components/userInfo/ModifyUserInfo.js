import React, { useState, useEffect } from 'react';

const modifyUserInfo = ({
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
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [modifySwitch, setModifySwitch] = useState({
		nicknameModify: false,
		passwordModify: false,
		emailModify: false,
		genderModify: false,
		ageModify: false,
	});

	// eslint-disable-next-line react-hooks/rules-of-hooks

	// eslint-disable-next-line react-hooks/rules-of-hooks

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		autoCookieLogin(JSON.parse(sessionStorage.getItem('userInfo')));
	}, [sessionStorage.getItem('userInfo')]);
	//모두 포스트로 보낼 것
	//localhost:3000/setting/check 이메일하고 닉네임만 중복 검사
	//localhost:3000/setting/password id:유저 id, password:현재 패스워드, newpassword:새로운 패스워드 보낼 것.

	const modifySwitchHandler = (e) => {
		e.preventDefault();
		if (e.target.className === 'nicknameModifyButton') {
			if (modifySwitch.nicknameModify && modifyNickname !== '') {
				console.log('nickname submit');
				//여기서 ajax 실행
				// setModifyPost(Object.assign({}, modifyPost, { nickname: modifyNickname, pending: false }));
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
				// setModifyPost(Object.assign({}, modifyPost, { password: modifyPassword, pending: false }));
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
				// setModifyPost(Object.assign({}, modifyPost, { email: modifyEmail, pending: false }));
				setModifySwitch(Object.assign({}, modifySwitch, { emailModify: !modifySwitch.emailModify }));
			} else {
				setModifySwitch(Object.assign({}, modifySwitch, { emailModify: !modifySwitch.emailModify }));
			}
			// emailChangeInput('');
		}

		if (modifyGender && modifyGender !== 'DEFAULT') {
			// setModifyPost(Object.assign({}, modifyPost, { gender: modifyGender }));
		}

		if (modifyAge && modifyAge !== 'DEFAULT') {
			// setModifyPost(Object.assign({}, modifyPost, { age: modifyAge }));
		}

		if (e.target.className === 'submitModifyButton') {
			modifyUserInfoPost(Object.assign({}, loginUserInfo, { email: modifyEmail, nickname: modifyNickname, age: modifyAge, gender: modifyGender }));
		}
	};
	console.log(loginUserInfo);

	return (
		loginUserInfo && (
			<div className="modifyUserInfo">
				<form action="">
					<label htmlFor="nickname">
						닉네임:
						{modifySwitch.nicknameModify ? (
							<input type="text" value={modifyNickname} onChange={(e) => nickNameChangeInput(e.target.value)} />
						) : (
							<span className="modifyNicknameText">{modifyNickname ? modifyNickname : loginUserInfo.nickname}</span>
						)}
					</label>
					<button className="nicknameModifyButton" onClick={modifySwitchHandler}>
						{modifySwitch.nicknameModify ? '확인' : '수정'}
					</button>
					<p />
					<label htmlFor="password">
						패스워드:
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
					<label htmlFor="email">
						이메일:
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
					<label htmlFor="gender">
						<select defaultValue={loginUserInfo.gender} onChange={(e) => genderChangeSelect(e.target.value)}>
							<option value="DEFAULT">성별</option>
							<option value="male">남성</option>
							<option value="female">여성</option>
						</select>
					</label>

					<p />
					<label htmlFor="age">
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

export default modifyUserInfo;
