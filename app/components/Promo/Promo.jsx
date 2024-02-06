import Styles from './Promo.module.css';
import Image from 'next/image';

export const Promo = () => {
	return (
		<section className={Styles['promo']}>
			<div className={Styles['promo__description-block']}>
				<h2 className={Styles['promo__title']}>Твой промо-код</h2>
				<p className={Styles['promo__description']}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
				<button className={`${Styles['promo__button']} ${Styles['button']} `}>Получить код</button>
			</div>
			<Image
				src="/images/promo-illustration.svg"
				alt="Собака"
				className={Styles['promo__image']}
				layout="responsive"
				width={100}
				height={100}
			/>
		</section>
	);
};