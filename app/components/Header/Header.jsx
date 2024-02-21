'use client';

import { useState } from 'react';
import Styles from './Header.module.css';
import Image from 'next/image';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';

export const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	const openPopup = () => {
		setPopupIsOpened(true);
	};

	const closePopup = () => {
		setPopupIsOpened(false);
	};

	return (
		<header className={Styles.header}>
			<a href="./index.html" className={Styles.logo}>
				<Image
					className={Styles.logoImage}
					src="./images/logo.svg"
					alt="Логотип Pindie"
					layout="responsive"
					width={100}
					height={100}
				/>
			</a>
			<nav className={Styles.menu}>
				<ul className={Styles.menuList}>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>Новинки</a>
					</li>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>Популярные</a>
					</li>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>Шутеры</a>
					</li>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>Ранеры</a>
					</li>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>Пиксельные</a>
					</li>
					<li className={Styles.menuItem}>
						<a href="" className={Styles.menuLink}>TDS</a>
					</li>
				</ul>
				<div className={Styles.auth}>
					<button className={Styles.authButton} onClick={openPopup}>Войти</button>
				</div>
			</nav>
			{popupIsOpened && (
				<>
					<Overlay popupIsOpened={popupIsOpened} closePopup={closePopup} />
					<Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
						<AuthForm />
					</Popup>
				</>
			)}
		</header>
	);
};
