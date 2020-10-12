import React from 'react';
import Sidebar from './components/Sidebar';
// import SidebarSearch from './components/SidebarSearch';
import GlobalStyle from './styles/global';
import './styles/app.css';

import Home from './pages/Home';

import AppProvider from './hooks';

import Overview from './components/Overview';

const App: React.FC = () => {
	return (
		<AppProvider>
			<GlobalStyle />
			<Home>
				<Sidebar />
				<Overview />
			</Home>
		</AppProvider>
	);
};

export default App;
