import { Timeline, Icon } from 'antd';
import './style.scss';

interface JobTImelineProps {
	history: IJobTImeline[];
}

interface IJobTImeline {
	position: string;
	company: string;
	content: any;
}

export default ({ history }) => (
	<div className="jobtimeline">
		<Timeline>
			{history.map(({ content, position, company }: IJobTImeline) => (
				<Timeline.Item key={company}>
					<div>
						<span className="jobtimeline--company">{company}</span>&nbsp;
						<span className="jobtimeline--position">{position}</span>
						<p>{content}</p>
					</div>
				</Timeline.Item>
			))}
		</Timeline>
	</div>
);
