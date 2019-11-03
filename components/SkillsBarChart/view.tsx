import dynamic from 'next/dynamic';
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './styles.scss';

const NoSsr = (props) => <React.Fragment>{props.children}</React.Fragment>;

const NOSSR = dynamic(() => Promise.resolve(NoSsr), {
	ssr: false
});

const data = {
	resresponsive: true,
	labels: [ 'Javascript', 'CSS', 'React.js', 'node.js', 'Typescript', 'SQL', 'ETL' ],
	datasets: [
		{
			label: 'Arbitrary mark',
			backgroundColor: 'rgba(24, 144, 255, .2)',
			borderColor: '#1890ff',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(24,144,255,0.4)',
			hoverBorderColor: '#1890ff',
			data: [ 8, 6, 8, 8, 7, 6, 7, 10, 0 ]
		}
	]
};

export default (props) => (
	<div className="skill-card-common">
		<p>Proficiency in known technolgies</p>

		<NOSSR>
			<HorizontalBar
				data={data}
				legend={{
					display: false
				}}
			/>
		</NOSSR>
	</div>
);
