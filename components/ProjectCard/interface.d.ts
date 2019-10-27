export interface ProjectCardProps {
	id?:number;
	image: string;
	icon: string;
	title: string;
	onClick:Function;
	description: string;
	style?: React.CSSProperties;
}
export interface ProjectCardViewProps {
	id?:number;
	actions: Array<any>;
	image: string;
	icon: string;
	title: string;
	description: string;
	style?: React.CSSProperties;
	onClick:Function;
}
