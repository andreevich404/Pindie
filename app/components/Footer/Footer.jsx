import Styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={Styles.footer}>
			<a href='/' className={Styles.footerLogo}>
				<span className={Styles.footerLogoName}>pindie</span>
				<span className={Styles.footerLogoCopy}>, XXI век</span>
			</a>
			<ul className={Styles.socialList}>
				<li className={Styles.socialListItem}>
					<a href='/' className={`${Styles.button} ${Styles.socialListLink}`}>YT</a>
				</li>
				<li className={Styles.socialListItem}>
					<a href='/' className={`${Styles.button} ${Styles.socialListLink}`}>ВК</a>
				</li>
				<li className={Styles.socialListItem}>
					<a href='/' className={`${Styles.button} ${Styles.socialListLink}`}>TG</a>
				</li>
			</ul>
		</footer>
	);
};