'use client';

import { useState, useEffect } from 'react';
import Styles from './Promo.module.css';
import Image from 'next/image';

export const Promo = () => {

	const [codeIsVisible, setCodeIsVisible] = useState(false);

	const handleButtonClick = () => {
		setCodeIsVisible(true);

		// Без useEffect
		/* setTimeout(() => {
			setCodeIsVisible(false);
		}, 3000); */
	  };

	useEffect(() => {
		let timeout;
		if (codeIsVisible) {
			timeout = setTimeout(() => {
				setCodeIsVisible(false);
			}, 5000);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [codeIsVisible]);

	return (
		<section className={Styles.promo}>
			<div className={Styles.promoDescriptionBlock}>
				<h2 className={Styles.promoTitle}>Твой промо-код</h2>
				<p className={Styles.promoDescription}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
				<button className={`${Styles.promoButton} ${Styles.button}`} onClick={handleButtonClick}>
					{codeIsVisible ? (<span className={Styles.promoCode}>WEBTEENS10</span>) : ('Получить код')}
				</button>
			</div>
			<Image
				src="/images/promo-illustration.svg"
				alt="Собака"
				className={Styles.promoImage}
				layout="responsive"
				width={100}
				height={100}
			/>
		</section>
	);
};