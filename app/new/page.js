'use client';

import { endpoints } from '@/app/api/config';
import { useGetDataByCategory } from '@/app/api/api-hooks';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '@/app/components/Preloader/Preloader';

export default function New() {
	const newGames = useGetDataByCategory(endpoints.games, 'new');
	return (
		<main className={'mainInner'}>
			{newGames ? <CardsListSection id="new" title="Новые" data={newGames} /> : <Preloader />}
		</main>
	);
}