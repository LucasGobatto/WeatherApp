import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa/index';
import { MdClear } from 'react-icons/md/index';
import * as Styles from './styles';

import SearchItem from '../SearchItem/index';

import { requestByName } from '../../services/api.requests';
import { PlacesList } from '../../services/services.interface';

interface SidebarSearchProps {
	updateState(status: boolean): void;
}

const SidebarSearch: React.FC<SidebarSearchProps> = ({ updateState }) => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [results, setResults] = useState<PlacesList[]>([]);

	function handleClose(): void {
		setSearchInput('');
		setResults([]);

		updateState(false);
	}

	async function handleSearch(): Promise<void> {
		const data = await requestByName({ name: searchInput });
		setResults(data);
	}

	return (
		<Styles.SidebarSearch>
			<Styles.ExitContainer>
				<Styles.ExitButton>
					<MdClear size={28} onClick={handleClose} />
				</Styles.ExitButton>
			</Styles.ExitContainer>
			<Styles.SearchContainer>
				<Styles.Searchbar>
					<FaSearch />
					<input placeholder='search location' onChange={(e) => setSearchInput(e.target.value)} />
				</Styles.Searchbar>
				<Styles.SearchButton onClick={handleSearch}>Search</Styles.SearchButton>
			</Styles.SearchContainer>
			{results.length > 0 && <SearchItem results={results} updateState={updateState} />}
		</Styles.SidebarSearch>
	);
};

export default SidebarSearch;
