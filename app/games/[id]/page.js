'use client';

import { endpoints } from '../../api/config';
import { getNormalizedGameDataById, isResponseOk, checkIfUserVoted, vote } from '../../api/api-utils';
import { GameNotFound } from '@/app/components/GameNotFound/GameNotFound';
import { Preloader } from '@/app/components/Preloader/Preloader';
import { useState, useEffect } from 'react';
import { useStore } from '@/app/store/app-store';

import Styles from './Game.module.css';

export default function GamePage(props) {
	const [game, setGame] = useState(null);
	const [preloaderVisible, setPreloaderVisible] = useState(true);
	const [isVoted, setIsVoted] = useState(false);
	const authContext = useStore();

	useEffect(() => {
		async function fetchData() {
			const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
			isResponseOk(game) ? setGame(game) : setGame(null);
			setPreloaderVisible(false);
		}
		fetchData();
	}, []);

	useEffect(() => {
		authContext.user && game ? setIsVoted(checkIfUserVoted(game, authContext.user.id)) : setIsVoted(false);
	}, [authContext.user, game]);

	const handleVote = async () => {
		const jwt = authContext.token;
		const usersIdArray = game.users.length ? game.users.map((user) => user.id) : [];
		usersIdArray.push(authContext.user.id);
		const response = await vote(`${endpoints.games}/${game.id}`, jwt, usersIdArray);
		if (isResponseOk(response)) {
			setGame(() => {
				return { ...game, users: [...game.users, authContext.user] };
			});
			setIsVoted(true);
		}
	};

	return (
		<main className="main">
			{game ? (
				<>
					<section className={Styles.game}>
						<iframe className={Styles.gameIframe} src={game.link}></iframe>
					</section>
					<section className={Styles.about}>
						<h2 className={Styles.aboutTitle}>{game.title}</h2>
						<div className={Styles.aboutContent}>
							<p className={Styles.aboutDescription}>{game.description}</p>
							<div className={Styles.aboutAuthor}>
								<p>Автор:{' '}
									<span className={Styles.aboutAccent}>
										{game.developer}
									</span>
								</p>
							</div>
						</div>
						<div className={Styles.aboutVote}>
							<p className={Styles.aboutVoteAmount}>За игру уже проголосовали:{' '}
								<span className={Styles.aboutAccent}>{game.users.length}</span>
							</p>
							<button
								disabled={!authContext.isAuth || isVoted}
								className={`button ${Styles.aboutVoteButton}`}
								onClick={handleVote}
							>
								{isVoted ? 'Голос учтён' : 'Голосовать'}
							</button>
						</div>
					</section>
				</>
			) : preloaderVisible ? (<Preloader />) : (<GameNotFound />)}
		</main>
	);
}