import { Button, List, Tooltip, Tag } from 'antd';
import React from 'react';
import { useMedia } from 'react-use';
const confidentialWarning = `This is a commercial project. Any further details are confidential`;
const Warning = () => <span className="project--card-confidential">{confidentialWarning}</span>;
import projects from './data.json';
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

export default () => {
	const isWide = useMedia('(min-width: 845px)');

	return (
		<List
			itemLayout="vertical"
			size="small"
			pagination={undefined}
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
							<Tooltip
								placement="right"
								title={article.confidential ? 'Example repository' : 'Project repository'}
							>
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
