import React from 'react';
import './styles.scss';
import { ISkillCard, ISkillCardItem } from './interface';

export default ({ items, title }: ISkillCard) => (
	<div className="skill-card">
		<div className="skill-card--title">{title}</div>
		<div className="skill-card--icons">
			{items.map(({ caption, icon }: ISkillCardItem) => (
				<div className="skill-card--icon">
					<img src={`/static/icons/${icon}.svg`} className="skill-card--icon_image" />
					{caption ? <span className="skill-card--icon_caption">{caption}</span> : null}
				</div>
			))}
		</div>
	</div>
);
