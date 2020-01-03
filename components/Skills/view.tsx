import React from 'react';
import './styles.scss';
import { SkillCardCarousel } from '@components/SkillCardCarousel';
import { SkillCard } from '@components/SkillCard';
import { ISkillCard } from '@components/SkillCard/interface';
import { SkillsBarChart } from '@components/SkillsBarChart';
import { SkillsRadarChart } from '@components/SkillsRadarChart';
import data from './data.json';
const skills: ISkillCard[] = data;


export default () => (
	<div className="skills--page">
		<SkillCardCarousel>
			{skills.map(({ title, items }) => <SkillCard title={title} items={items} />)}
		</SkillCardCarousel>
		<div className="skills--page-charts">
			<SkillsBarChart />
			<SkillsRadarChart />
		</div>
	</div>
);
