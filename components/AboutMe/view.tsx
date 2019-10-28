import React from 'react';
import './style.scss';
import { JobTimeline } from '../JobTimeline';
import Particles from '../Particles';
import { useMedia } from 'react-use';
import history from './data.json';

const Description = () => (
	<div className="about-me--my-description">
		<div className="section--title">About me</div>
		<p> Msc.Eng. in mechatronics. In IT since Q3 2018. </p>
		<p>
			I'm a tenacious and goal-oriented person. Sometimes with <i> too </i> much attention to details. I have a
			very high entrepreneur sense, therefore, I can't stand wasting time.
		</p>
		<p> I'm a fan of Star Wars, 3D printing, and sword fighting. I make my own lightsaber replicas. </p>
		<p> I'm interested in full-stack projects and working with ambitious people. </p>
		<JobTimeline history={history} />
	</div>
);

export default (props) => {
	const isWide = useMedia('(min-width: 845px)');
	return (
		<div className="about-me">
			<Description />
			{!!isWide && <Particles />}
		</div>
	);
};
