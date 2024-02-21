import { Card } from '../Card/Card';
import Styles from './CardsList.module.css';

export const CardsList = ({ id, title, data }) => {
	return (
		<section className={Styles.listSection}>
			<h2 className={Styles.listSectionTitle} id={id}>{title}</h2>
			<ul className={Styles.cardsList}>
				{data.map((item) => {
					return (
						<li className={Styles.cardsListItem} key={item.id}>
							<a href={item.link} target="_blank" className={Styles.cardListLink}>
								<Card {...item} />
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};