import Styles from './Promo.module.css';
import Image from 'next/image';

export const Promo = () => {
	return (
		<section className={Styles.promo}>
			<div className={Styles.promoDescriptionBlock}>
				<h2 className={Styles.promoTitle}>Твой промо-код</h2>
				<p className={Styles.promoDescription}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
				<button className={`${Styles.promoButton} ${Styles.button} `}>Получить код</button>
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