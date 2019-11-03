import React from 'react';
import routes from '../../routes';
import { LinkButton } from '../LinkButton';
import Particles from '../Particles';
import './styles.scss';
import { useMedia } from 'react-use';

export default () => {
	const isWide = useMedia('(min-width: 845px)');
	return (
		<div className="welcome-sign--page">
			<div className="welcome-sign--text">
				<div className="welcome-sign--name">Hi I'm Paweł!</div>
				<div className="welcome-sign--job-title">I'm a fullstack developer</div>
				<LinkButton
					path={routes.projects}
					content={'Check out my work!'}
					style={{
						width: 250
					}}
				/>
			</div>

			{isWide ? (
				<div className="welcome-sign--particles">
					<Particles />
				</div>
			) : (
				<div className="welcome-sign--particles_mobile">
					<Particles />
				</div>
			)}
		</div>
	);
};
