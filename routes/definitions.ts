import { PageAttributes } from './interface';

export default <Array<PageAttributes>>[
	{
		key: 1,
		renderInContent: false,
		iconType: 'home',
		className: 'nav-text',
		title: 'Start',
		path: '/',
		breadcrumbName: 'Start'
	},
	{
		key: 2,
		renderInContent: true,
		iconType: 'project',
		className: 'nav-text',
		title: 'Projects',
		path: '/projects',
		breadcrumbName: 'Projects'
	},
	{
		key: 3,
		renderInContent: true,
		iconType: 'profile',
		className: 'nav-text',
		title: 'Skills',
		path: '/skills',
		breadcrumbName: 'Skills'
	},

	{
		key: 4,
		renderInContent: true,
		iconType: 'contacts',
		className: 'nav-text',
		title: 'About me',
		path: '/about',
		breadcrumbName: 'About me'
	}
];
