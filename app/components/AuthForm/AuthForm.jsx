'use client';

import Styles from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { endpoints } from '@/app/api/config';
import { authorize } from '@/app/api/api-utils';
import { isResponseOk } from '@/app/api/api-utils';
import { useStore } from '@/app/store/app-store';

export const AuthForm = (props) => {
	const authContext = useStore();

	const [authData, setAuthData] = useState({ identifier: '', password: '' });
	const [message, setMessage] = useState({ status: null, text: null });

	const handleInput = (e) => {
	  setAuthData({ ...authData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
	  e.preventDefault();
	  const userData = await authorize(endpoints.auth, authData);
	  if (isResponseOk(userData)) {
			authContext.login(userData.user, userData.jwt);
			setMessage({ status: 'success', text: 'Вы авторизовались!' });
	  }
		else {
			setMessage({ status: 'error', text: 'Неверные почта или пароль' });
	  }
	};

	useEffect(() => {
	  let timer;
	  if (authContext.user) {
			timer = setTimeout(() => {
		  		setMessage({ status: null, text: null });
		  		props.close();
			}, 1000);
	  }
	  return () => clearTimeout(timer);
	}, [authContext.user]);
	  return (
		<form onSubmit={handleSubmit} className={Styles.form}>
		  <h2 className={Styles.formTitle}>Авторизация</h2>
		  <div className={Styles.formFields}>
				<label className={Styles.formField}>
			  <span className={Styles.formFieldTitle}>Email</span>
			  <input
						onInput={handleInput}
						className={Styles.formFieldInput}
						name="identifier"
						type="email"
						placeholder="hello@world.com"
			  />
				</label>
				<label className={Styles.formField}>
			  <span className={Styles.formFieldTitle}>Пароль</span>
			  <input
						onInput={handleInput}
						className={Styles.formFieldInput}
						type="password"
						name="password"
						placeholder="***********"
			  />
				</label>
		  </div>
		  {message.status && (<p className={Styles.formMessage}>{message.text}</p>)}
		  <div className={Styles.formActions}>
				<button className={Styles.formReset} type="reset">Очистить</button>
				<button className={Styles.formSubmit} type="submit">Войти</button>
		  </div>
		</form>
	  );
};