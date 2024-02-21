import Styles from './Overlay.module.css';

export const Overlay = ({ closePopup, popupIsOpened }) => {
	return (
		<div className={`${Styles.overlay} ${popupIsOpened && Styles.overlayIsOpened}`} onClick={closePopup}></div>
	);
};