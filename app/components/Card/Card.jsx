import Image from 'next/image';
import Styles from './Card.module.css';

export const Card = (cardInfo) => {
	return (
		<article className={Styles.card}>
			<Image
				src={cardInfo.image}
				alt=''
				className={Styles.cardImage}
				layout="responsive"
				width={100}
				height={100}
			/>
			<div className={Styles.cardContentBlock}>
				<h3 className={Styles.cardTitle}>{cardInfo.title}</h3>
				<p className={Styles.cardDescription}>{cardInfo.description}</p>
				<div className={Styles.cardInfoContainer}>
					<p className={Styles.cardAuthor}>
                        Автор: <span className={Styles.cardAccent}>{cardInfo.developer}</span>
					</p>
					<p className={Styles.cardVotes}>
                        Голосов на сайте: <span className={Styles.cardAccent}>{cardInfo.users.length}</span>
					</p>
				</div>
			</div>
		</article>
	);
};