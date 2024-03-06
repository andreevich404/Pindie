import Styles from './CardsListSection.module.css';
import { CardsList } from './CardsList';

export const CardsListSection = (props) => {
	return (
		<section className={Styles.listSection}>
			<h2 className={Styles.listSectionTitle} id={props.id}>
				{props.title}
			</h2>
			<CardsList data={props.data} />
		</section>
	);
};