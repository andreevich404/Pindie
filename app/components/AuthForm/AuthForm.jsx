import Styles from './AuthForm.module.css';

export const AuthForm = () => {
	return (
		<form className={Styles.form}>
			<h2 className={Styles.formTitle}>Авторизация</h2>
			<div className={Styles.formFields}>
				<label className={Styles.formField}>
					<span className={Styles.formFieldTitle}>Email</span>
					<input className={Styles.formFieldInput} type="email" placeholder="hello@world.com"/>
				</label>
				<label className={Styles.formField}>
					<span className={Styles.formFieldTitle}>Пароль</span>
					<input className={Styles.formFieldInput} type="password" placeholder='***********'/>
				</label>
			</div>
			<div className={Styles.formActions}>
				<button className={Styles.formReset} type="reset">Очистить</button>
				<button className={Styles.formSubmit} type="submit">Войти</button>
			</div>
		</form>
	);
};