import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					{/* Import CSS for nprogress */}
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js" />
					<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
