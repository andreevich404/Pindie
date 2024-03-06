import Link from 'next/link';
import { Card } from '../Card/Card';
import Styles from './CardsListSection.module.css';

export const CardsList = (props) => {
	return (
		<ul className={Styles.cardsList}>
			{props.data.map((item) => {
				return (
					<li className={Styles.cardsListItem} key={item.id}>
						<Link href={`/games/${item.id}`} className={Styles.cardListLink}>
							<Card
								{...item}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};