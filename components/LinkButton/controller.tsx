import React from 'react';
import View from './view';
import Router from 'next/router';
import { LinkButtonProps } from './interface';

export default (props: LinkButtonProps) => {
	const { path } = props;

	const handleButtonClick = () => {
		Router.push(path)};

	return <View onClick={handleButtonClick} {...props} />;
};
