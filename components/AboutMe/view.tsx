import React from 'react';
import './style.scss';
import { JobTimeline } from '../JobTimeline';
import Particles from '../Particles';
import { useMedia } from 'react-use';
const history = [
	{
		company: '4LS',
		content: '09.2018 - present',
		position: 'Junior Fullstack Developer'
	},
	{
		company: 'Beiersdorf',
		content: '07.2017 - 08.2018',
		position: 'Junior Project Engineneer'
	},
	{
		company: 'PUT',
		content: '06.2018',
		position: 'MSc Eng Graduate'
	}
];

const Description = () => (
	<div className="about-me--my-description">
		<div className="section--title">About me</div>
		<p>Msc.Eng. in mechatronics. In IT since Q3 2018.</p>
		<p>
			I'm a tentative and goal oriented person. Sometimes with <i>too</i> much attention to details. I have very
			high entrepenual sense therefore I can't stand wasting time.
		</p>
		<p>I'm a fan of Star Wars, 3D printing and sword fighting. I make my own lightsaber replicas.</p>
		<p>I'm interested in fullstack projects and wroking with ambitious people.</p>
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
