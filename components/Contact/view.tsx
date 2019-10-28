import { Icon } from 'antd';
import React from 'react';
import { useMedia } from 'react-use';
import Particles from '../Particles';
import social from './data.json';
import './style.scss';

const Title = () => (
	<div className="contact-me--my-description ">
		<div className="section--title">Contact me</div>
		<div className="contact-me--icons">
			{social.map(({ name, icon, link }) => [
				<a href={link} target="blank" className="contact-me--icon">
					<Icon type={icon.toLowerCase()} style={{ fontSize: 20 }} />&nbsp;{name}
				</a>
			])}
		</div>
	</div>
);

export default (props) => {
	const isWide = useMedia('(min-width: 845px)');
	return (
		<div className="contact-me">
			<Title />

			<div className="contact-me--particles">
				<Particles />
			</div>
		</div>
	);
};
