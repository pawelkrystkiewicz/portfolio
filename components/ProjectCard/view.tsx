import { Card } from 'antd';
import { ProjectCardViewProps } from './interface';
import './style.scss';

export default ({ style, title, description, onClick }: ProjectCardViewProps) => (
	<Card className="card--main" title={title} style={style} onClick={() => onClick()}>
		<span>{description}</span>
	</Card>
);
