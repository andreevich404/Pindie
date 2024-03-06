'use client';

import { useState } from 'react';

import Styles from './Header.module.css';
import Image from 'next/image';

import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useStore } from '../../../app/store/app-store';

export const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	const authContext = useStore();

	const openPopup = () => {
		setPopupIsOpened(true);
	};

	const closePopup = () => {
		setPopupIsOpened(false);
	};

	const pathname = usePathname();

	const handleLogout = () => {
		authContext.logout();
	};

	return (
		<header className={Styles.header}>
			{pathname === '/' ? (
		  <span className={Styles.logo}>
					<Image
						className={Styles.logoImage}
						src="/images/logo.svg"
						alt="Логотип Pindie"
						layout="responsive"
						width={100}
						height={100}
					/>
		  </span>
			) : (
		  <Link href="/" className={Styles.logo}>
					<Image
						className={Styles.logoImage}
						src="/images/logo.svg"
						alt="Логотип Pindie"
						layout="responsive"
						width={100}
						height={100}
					/>
		  </Link>
			)}
			<nav className={Styles.menu}>
				<ul className={Styles.menuList}>
					<li className={Styles.menuItem}>
						<Link href="/new" className={`${Styles.menuLink} ${pathname === '/new' && Styles.menuLinkActive}`}>Новинки</Link>
					</li>
					<li className={Styles.menuItem}>
						<Link href="/popular" className={`${Styles.menuLink} ${pathname === '/popular' && Styles.menuLinkActive}`}>Популярные</Link>
					</li>
					<li className={Styles.menuItem}>
						<Link href="/shooters" className={`${Styles.menuLink} ${pathname === '/shooters' && Styles.menuLinkActive}`}>Шутеры</Link>
					</li>
					<li className={Styles.menuItem}>
						<Link href="/runners" className={`${Styles.menuLink} ${pathname === '/runners' && Styles.menuLinkActive}`}>Раннеры</Link>
					</li>
					<li className={Styles.menuItem}>
						<Link href="/pixel-games" className={`${Styles.menuLink} ${pathname === '/pixel-games' && Styles.menuLinkActive}`}>Пиксельные</Link>
					</li>
					<li className={Styles.menuItem}>
						<Link href="/tds" className={`${Styles.menuLink} ${pathname === '/tds' && Styles.menuLinkActive}`}>TDS</Link>
					</li>
		  </ul>
		  <div className={Styles.auth}>
					{authContext.isAuth ? (
			  <button className={Styles.authButton} onClick={handleLogout}>Выйти</button>
					) : (
			  <button className={Styles.authButton} onClick={openPopup}>Войти</button>
					)}
		  </div>
			</nav>
			<Overlay isOpened={popupIsOpened} close={closePopup} />
			<Popup isOpened={popupIsOpened} close={closePopup}>
		  <AuthForm close={closePopup} />
			</Popup>
	  </header>
	);
};
