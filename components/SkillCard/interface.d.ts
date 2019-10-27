interface ISkillCardItem {
	caption?: string;
	icon: string;
}

export interface ISkillCard {
	title: string;
	items: ISkillCardItem[];
}
