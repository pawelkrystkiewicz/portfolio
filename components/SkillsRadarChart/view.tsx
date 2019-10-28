import dynamic from 'next/dynamic';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import './styles.scss';
const NoSsr = (props) => <React.Fragment>{props.children}</React.Fragment>;

const NOSSR = dynamic(() => Promise.resolve(NoSsr), {
	ssr: false
});

// const data = {
// 	resresponsive: true,
// 	labels: [ 'Javascript', 'CSS', 'React.js', 'node.js', 'Typescript', 'SQL', 'ETL', ' ', '' ],
// 	legend: { display: false, position: 'bottom' },
// 	datasets: [
// 		{
// 			label: 'Proficiency in technology',
// 			backgroundColor: 'rgba(24, 144, 255, .2)',
// 			borderColor: '#1890ff',
// 			borderWidth: 1,
// 			hoverBackgroundColor: 'rgba(24,144,255,0.4)',
// 			hoverBorderColor: '#1890ff',
// 			data: [ 8, 6, 8, 8, 7, 6, 7, 10, 0 ]
// 		}
// 	]
// };
const data = {
	labels: [ 'DB integrations', 'JS Frontend', 'JS Backend', 'Documentation' ],
	legend: { display: false },
	datasets: [
		{
			legend: { display: false },
			label: 'Time spent [%]',
			backgroundColor: 'rgba(179,181,198,0.2)',
			borderColor: 'rgba(179,181,198,1)',
			pointBackgroundColor: 'rgba(179,181,198,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			data: [ 40, 20, 30, 10 ]
		}
	]
};
export default (props) => (
	<div className="skill-card-common">
		<p>
			Responsiblities breakdown
		</p>
		<NOSSR>
			<Radar data={data} />
		</NOSSR>
	</div>
);
