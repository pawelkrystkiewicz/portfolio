import React from 'react';
import { Button } from 'antd';
import { LinkButtonViewProps } from './interface.d';

export default ({ onClick, color, content,style }: LinkButtonViewProps) => (
	<Button
	style={style}
	onClick={() => onClick()}>{content}</Button>
);
