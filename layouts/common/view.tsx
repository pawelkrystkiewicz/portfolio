import { Breadcrumb, Drawer, Icon, Layout, Tooltip } from 'antd';
import getConfig from 'next/config';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PageAttributes } from '@routes/interface';
import definitions from '@routes/definitions';
import './styles.scss';
import { useMedia } from 'react-use';

const { publicRuntimeConfig: { STATIC_DIR } } = getConfig();
const { Content, Footer } = Layout;
const menu = definitions;

const marginTB = 50;
const marginRL = 16;

const drawerIconsBaseStyle: React.CSSProperties = {
	width: 30,
	marginTop: 20,
	borderRadius: '0 15px 15px 0',
	backgroundColor: '#fff',
	height: 30,
	position: 'fixed',
	boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 7px 0 rgba(0,0,0,0.19)'
};

const drawerIconStyle: React.CSSProperties = {
	padding: 7,
	position: 'absolute',
	right: 0
};

export default (props: React.PropsWithChildren<any>) => {
	const router = useRouter();
	const isWide = useMedia('(min-width: 845px)');
	let currentPath: PageAttributes = menu.filter(({ path }) => path === router.pathname)[0];

	const [ state, setState ] = useState({ open: false });

	const openDrawer = () => setState({ open: true });
	const closeDrawer = () => setState({ open: false });
	return (
		<Layout style={{ height: '100vh', background: '#fff' }}>
			{!state.open ? (
				<span style={drawerIconsBaseStyle}>
					<Icon type={'menu-unfold'} onClick={openDrawer} style={drawerIconStyle} />
				</span>
			) : (
				<span
					style={{
						...drawerIconsBaseStyle,
						width: 110
					}}
				>
					<Icon
						className="layout--drawer-icon"
						type={'menu-fold'}
						onClick={closeDrawer}
						style={drawerIconStyle}
					/>
				</span>
			)}
			<Drawer
				width={80}
				title={<img src={'/static/img/logo.svg'} style={{ height: 40 }} />}
				placement="left"
				mask={true}
				closable={false}
				onClose={closeDrawer}
				visible={state.open}
			>
				{menu.map(({ iconType, key, title, path }) => (
					<Tooltip placement="right" title={title}>
						{console.log(router.pathname, path)}
						<Icon
							key={key}
							className="layout--menu-icon"
							theme={router.pathname === path ? 'twoTone' : 'outlined'}
							type={iconType}
							onClick={() => Router.push(path)}
						/>
					</Tooltip>
				))}
			</Drawer>

			<Layout style={{ background: '#fff' }} onClick={closeDrawer}>
				{!!currentPath.renderInContent ? (
					<ContentComponent currentPath={currentPath}>{props.children}</ContentComponent>
				) : (
					props.children
				)}
				{/* <-----------------------FOOTER-----------------------> */}
				{!!isWide && (
					<Footer className="footer">
						<span className="noselect">
							<img className="logo--small" src={`${STATIC_DIR}/img/logo.svg`} alt="Logo" /> Paweł
							Krystkiewicz ©2019
						</span>
					</Footer>
				)}
			</Layout>
		</Layout>
	);
};
const ContentComponent = ({ children, currentPath }: React.PropsWithChildren<any>) => (
	<Content
		style={{
			marginTop: marginTB,
			marginLeft: marginRL,
			marginRight: marginRL,
			marginBottom: marginTB,
			background: '#fff'
		}}
	>
		<div style={{ padding: 24, background: '#fff', minHeight: '90vh', maxHeight: '90vh' }}>
			<Breadcrumb>
				<Breadcrumb.Item href="/">
					<Icon type="home" />
				</Breadcrumb.Item>
				<Breadcrumb.Item href={currentPath.pathname}>
					<span>
						<a>{currentPath.breadcrumbName}</a>
					</span>
				</Breadcrumb.Item>
			</Breadcrumb>
			{children}
		</div>
	</Content>
);
