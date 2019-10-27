import React from 'react';
import routes from '../../routes';
import { LinkButton } from '../LinkButton';
import Particles from '../Particles';
import './styles.scss';

export default () => (
	<div className="welcome-sign--page">
		<div className="welcome-sign--text">
			<div className="welcome-sign--name">Hi I'm Paweł</div>
			<div className="welcome-sign--job-title">
			I'm fullstack developer
			</div>
			<LinkButton
				path={routes.projects}
				content={'Check out my work!'}
				style={{
					width: 250
				}}
			/>
		</div>
		<div className="welcome-sign--particles">
			<Particles />
		</div>
	</div>
);
