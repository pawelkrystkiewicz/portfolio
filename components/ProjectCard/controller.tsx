import React from 'react';
import View from './view';
import { Icon } from 'antd';
import { ProjectCardProps } from './interface';

export default (props: ProjectCardProps) => {
	const actions = [
		<Icon type="setting" key="setting" />,
		<Icon type="edit" key="edit" />,
		<Icon type="ellipsis" key="ellipsis" />
	];

	return <View {...props} actions={actions} />;
};
