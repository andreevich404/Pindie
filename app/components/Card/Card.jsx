import Image from 'next/image';
import Styles from './Card.module.css';

export const Card = (props) => {
	return (
		<article className={Styles.card}>
			<Image
				src={props.image}
				alt=''
				className={Styles['card__image']}
				layout="responsive"
				width={100}
				height={100}
			/>
			<div className={Styles.cardContentBlock}>
				<h3 className={Styles.cardTitle}>{props.title}</h3>
				<p className={Styles.cardDescription}>{props.description}</p>
				<div className={Styles.cardInfoContainer}>
					<p className={Styles.cardAuthor}>
                        Автор: <span className={Styles.cardAccent}>{props.developer}</span>
					</p>
					<p className={Styles.cardVotes}>
                        Голосов на сайте: <span className={Styles.cardAccent}>{props.users.length}</span>
					</p>
				</div>
			</div>
		</article>
	);
};