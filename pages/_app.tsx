import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import './_app.scss';
import { CommonLayout } from '@layouts/common';
import { ProjectContextProvider } from '@store/projects-context';

const linkStyle = {
	margin: '0 10px 0 0'
};

Router.events.on('routeChangeStart', () => {
	// console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App<any> {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };
	}
	componentDidCatch(error, errorInfo) {
		console.log('CUSTOM ERROR HANDLING', error);
		// This is needed to render errors correctly in development / production
		super.componentDidCatch(error, errorInfo);
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ProjectContextProvider>
				<CommonLayout>
					<Component {...pageProps} />
				</CommonLayout>
			</ProjectContextProvider>
		);
	}
}

export default MyApp;
