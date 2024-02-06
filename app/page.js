import { Banner } from './components/Banner/Banner';
import { Promo } from './components/Promo/Promo';
import { PopularCardList } from './components/CardsList/PopularCardsList';
import { NewCardsList } from './components/CardsList/NewCardsList';
export default function Home() {
	return (
		<main>
			<Banner />
			<PopularCardList />
			<NewCardsList />
			<Promo />
		</main>
	);
}
