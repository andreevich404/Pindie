'use client';

import Styles from './Overlay.module.css';

export const Overlay = (props) => {
	return (
		<div className={`${Styles.overlay} ${props.isOpened && Styles.overlayIsOpened}`} onClick={() => props.close()}></div>
	);
};