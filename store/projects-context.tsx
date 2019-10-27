import React, { useState, useContext, createContext } from 'react';
export interface Article {
	image: string;
	content: string;
	stack: string[];
	url: string;
	repository: string;
}

interface IProjectContext {
	data: IProjectContextState;
	openArticle: Function;
	closeArticle: Function;
}

interface IProjectContextState {
	id: number;
	showArticle: boolean;
	article: Article;
}

const initialState: IProjectContextState = { id: null, showArticle: false, article: null };

const ProjectContext = createContext<IProjectContext>(undefined);

const ProjectContextProvider = (props: any) => {
	const [ state, setState ] = useState(initialState);

	const openArticle = ({ id, article }: Partial<IProjectContextState>) =>
		setState({ id, showArticle: true, article });

	const closeArticle = () => setState({ id: null, showArticle: false, article: null });

	return (
		<ProjectContext.Provider
			value={{
				data: state,
				openArticle,
				closeArticle
			}}
			{...props}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

function useProjectContext() {
	const context = useContext(ProjectContext);
	if (context === undefined) {
		throw new Error(`useProjectContext must be used within a ProjectContextProvider`);
	}
	return context;
}

export { ProjectContextProvider, useProjectContext };
