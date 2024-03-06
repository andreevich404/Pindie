import Styles from './Banner.module.css';
import Image from 'next/image';

export const Banner = () => {
	return (
		<section className={Styles.banner}>
			<div className={Styles.bannerDescription}>
				<h1 className={Styles.bannerTitle}>Портал инди-игр от&nbsp;студентов Яндекс Практикума</h1>
				<div className={Styles.bannerTextBlock}>
					<p className={Styles.bannerText}>
              Студенты курсов разрабатывают свои игры на Unity, здесь мы их
              публикуем. Вы можете играть прямо на сайте. А если у вас есть
              аккаунт пользователя — получаете возможность голосовать за игры.
					</p>
				</div>
				<a href='#popular' className={`button ${Styles.bannerLink}`}>Смотреть игры</a>
			</div>
			<Image
				src="/images/banner-illustration.jpg"
				alt="Рука, утопленная в желтом фоне"
				className={Styles.bannerImage}
				layout="responsive"
				width={100}
				height={100}
			/>
		</section>
	);
};