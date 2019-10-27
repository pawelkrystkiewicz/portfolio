import React from 'react';
import './styles.scss';
import { SkillCardCarousel } from '@components/SkillCardCarousel';
import { SkillCard } from '@components/SkillCard';
import { ISkillCard } from '@components/SkillCard/interface';
import { SkillsBarChart } from '@components/SkillsBarChart';
import { SkillsRadarChart } from '@components/SkillsRadarChart';

const skills: ISkillCard[] = [
	{
		title: 'Languages',
		items: [ { caption: 'Typescript', icon: 'ts' }, { caption: 'Javascript', icon: 'js' } ]
	},
	{
		title: 'Frontend frameworks',
		items: [ { caption: 'React.js', icon: 'react' }, { caption: 'Next.js', icon: 'next' } ]
	},
	{
		title: 'Batabases',
		items: [ { caption: 'PostgreSQL', icon: 'pg' }, { caption: 'SQL Server', icon: 'mssql' } ]
	},
	{
		title: 'Tools',
		items: [ { caption: 'Figma', icon: 'figma' }, { caption: 'VS Code', icon: 'vscode' } ]
	}
];

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
