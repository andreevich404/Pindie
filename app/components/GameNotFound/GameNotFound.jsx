import Styles from './GameNotFound.module.css';
import { NotFoundImage } from './not-found.jsx';

export const GameNotFound = () => {
	return (
		<div className={Styles.notFound}>
			<NotFoundImage />
			<h2 className={Styles.notFoundText}>Такой игры не существует :(</h2>
		</div>
	);
};