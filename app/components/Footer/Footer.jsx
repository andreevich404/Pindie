'use client';

import Styles from './Footer.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
	const pathname = usePathname();
	return (
		<footer className={Styles.footer}>
			{pathname === '/' ? (
				<p className={Styles.footerLogo}>
					<span className={Styles.footerLogoName}>pindie</span>
					<span className={Styles.footerLogoCopy}>, XXI век</span>
				</p>
			) : (
				<Link href="/" className={Styles.footerLogo}>
					<span className={Styles.footerLogoName}>pindie</span>
					<span className={Styles.footerLogoCopy}>, XXI век</span>
				</Link>
			)}
			<ul className={Styles.socialList}>
				<li className={Styles.socialListItem}>
					<a href="" className={`button ${Styles.socialListLink}`}>YT</a>
				</li>
				<li className={Styles.socialListItem}>
					<a href="" className={`button ${Styles.socialListLink}`}>ВК</a>
				</li>
				<li className={Styles.socialListItem}>
					<a href="" className={`button ${Styles.socialListLink}`}>TG</a>
				</li>
			</ul>
		</footer>
	);
};