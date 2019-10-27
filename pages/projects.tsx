import { Button, List, Tooltip, Tag } from 'antd';
import React from 'react';
import { useMedia } from 'react-use';
const confidentialWarning = `Any further details of this project are confidential`;
const Warning = () => <span className="project--card-confidential">{confidentialWarning}</span>;

export interface IArticle {
	image?: string;
	content: string;
	stack: string[];
	url?: string;
	repository?: string;
	confidential: boolean;
}
interface ProjectDetails {
	id: number;
	title: string;
	description: string;
	type: 'Frontend' | 'Backend' | 'Fullstack';
	article: IArticle;
}

const projects: ProjectDetails[] = [
	{
		id: 1,
		title: 'Fleet tracking',
		description: 'Handy tool for logistics',
		type: 'Fullstack',
		article: {
			content: `My fisrt project that made it into production. It's a solution to visualize data from the mobile app.
			Key features are displaying current geographical position of a driver dispatched with the mobile app, displaying route's trace and some details about the route. It also gives access to historical data.`,
			image: '/static/img/projects/fleet.png',
			stack: [ 'js', 'material-ui', 'sass', 'react', 'graphql', 'nodejs', 'pg' ],
			confidential: true
		}
	},
	{
		id: 2,
		title: 'Order tracking',
		description: 'Convinience for customer',
		type: 'Fullstack',
		article: {
			content: `This project was created to help company's clients keep their customers informed about what is being send in the package and the ETA on the delivery. All these infromations are available to the customer via link send in the SMS`,
			image: '/static/img/projects/tracker.png',
			stack: [ 'ts', 'antd', 'sass', 'react', 'graphql', 'nodejs', 'pg' ],
			confidential: true
		}
	},
	{
		id: 6,
		title: 'GraphQL microservices',
		description: 'Powerful in-house technologies',
		type: 'Backend',
		article: {
			image: '/static/img/projects/microservices.png',
			content: `Multiple projects - many different services of the kind that are
			required in every company. By keeping each project simple company can
			minimize maintnace or upgrade time and focus on adding new modules to the
			ecosystem.
			 `,
			repository: 'https://github.com/pawelkrystkiewicz/ts-typeorm-type-graphql-boilerplate',
			stack: [ 'ts', 'graphql', 'nodejs', 'redis', 'pg' ],
			confidential: true
		}
	},
	{
		id: 7,
		title: 'Microservice task manager',
		description: 'Redis powered queue',
		type: 'Backend',
		article: {
			image: '/static/img/projects/tasker.png',
			content: `To fully utilize the advantages of the microservices
			it necessary have a tool that will manage the data flow and will order incoming request into task.
			This way microservice task manager came to be. Service was developed with node.js graphql server armed with Redis based queue.
			Thanks to Redis' fast operations a powerful task managing service emerged.
			It is able to operate under high request intenstivity and remain responsive thanks to having a queque.
			Implentation of this service had simplified data flow in comapny's products e.g. by having to request only one endpoint	or having billing service being called an the end of every task automatically`,
			repository: 'https://github.com/pawelkrystkiewicz/ts-bull-graphql-boilerplate',
			stack: [ 'ts', 'graphql', 'nodejs', 'redis', 'pg' ],
			confidential: true
		}
	},
	{
		id: 3,
		title: 'This project',
		description: 'How do you like it?',
		type: 'Frontend',
		article: {
			content: `Came to be as a challange to see how fast I can bring up coherent experience to the user from rough sketches to full site with CI/CD. What I really love about this project I got to use data-driven-components. Took about 20h to create.`,
			image: '/static/img/projects/portfolio.png',
			repository: '',
			stack: [ 'ts', 'antd', 'sass', 'react', 'next' ],
			url: 'https://pawelkrystkiewicz.pl',
			confidential: false
		}
	},
	{
		id: 4,
		title: 'My first portfolio',
		description: 'Well that was a mess...',
		type: 'Frontend',
		article: {
			content: `Commited on october 2018 is a showcase of my beginner's skills of that time. In comparisson it shows how far have I come during last year. I'm proud of both of them because the contrast show very well how fast learner I am. And that skill is something you can't underestimate.`,
			image: '',
			repository: 'https://github.com/pawelkrystkiewicz/pawelkrystkiewicz.github.io',
			stack: [ 'js', 'css', 'html' ],
			url: 'https://pawelkrystkiewicz.github.io',
			confidential: false
		}
	},
	{
		id: 5,
		title: 'Some new project',
		description: 'Have an idea? Get in touch!',
		type: 'Fullstack',
		article: {
			image: '',
			content: `If you like what you see here give me a call!`,
			repository: '',
			stack: [ 'new-project-stack', 'new-project-stack', 'new-project-stack' ],
			url: '',
			confidential: false
		}
	}
];

export default () => {
	const isWide = useMedia('(min-width: 845px)');

	return (
		<List
			itemLayout="vertical"
			size="small"
			pagination={
				isWide ? (
					{
						position: 'top',
						pageSize: 3,
						size: 'small'
					}
				) : (
					undefined
				)
			}
			dataSource={projects}
			renderItem={({ id, title, article, description }) => (
				<List.Item
					key={id}
					actions={article.stack.map((icon) => {
						return <img alt={icon} height={20} src={`/static/icons/${icon}.svg`} />;
					})}
					extra={
						<img
							className="img"
							alt={`${title}-image`}
							src={!!article.image ? article.image : '/static/img/projects/placeholder.png'}
						/>
					}
				>
					<List.Item.Meta title={title} description={description} />
					<div className="project-card--content">
						{article.content}
						{!!article.url && (
							<Button style={{ padding: 0 }} type="link" href={article.url} target="blank">
								{article.url}
							</Button>
						)}
						{!!article.repository && [
							<Tooltip placement="right" title={'Repository'}>
								<a href={article.repository} target="blank">
									<img height={20} src="/static/icons/github.svg" alt={`${title}-repo`} />
								</a>
							</Tooltip>
						]}
						{!!article.confidential && [ <br />, <Warning /> ]}
					</div>
				</List.Item>
			)}
		/>
	);
};
