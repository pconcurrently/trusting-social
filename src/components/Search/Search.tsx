import React from 'react';
import { debounce } from 'lodash';

import { StyledSearch } from './Search.styled';
import { ResultsList } from './ResultsList';
import { searchResults } from './search-results';
import searchIconLight from '../../images/search-icon-light.svg';
import searchIconDark from '../../images/search-icon-dark.svg';

interface IProps {
  isDarkTheme: boolean;
}

const DEBOUNCE_TIME = 300;

export const Search: React.SFC<IProps> = ({ isDarkTheme }) => {
  const [filteredResults, setFilteredResults] = React.useState<string[]>([]);

  const handleOnChange = (value: string) => {
    const filtered = searchResults.filter(
      r =>
        value.length > 0 && r.toLowerCase().indexOf(value.toLowerCase()) !== -1 // Simple text search
    );
    setFilteredResults(filtered);
  };

  const deboucedHandleOnChange = debounce(handleOnChange, DEBOUNCE_TIME);

  return (
    <StyledSearch>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Try Vietnam"
          autoFocus
          onChange={
            (e: React.FormEvent<HTMLInputElement>) =>
              deboucedHandleOnChange(e.currentTarget.value) // this event won't be persisted (unless e.persist()) after debouncing, pass directly the value
          }
        />
        <img
          src={isDarkTheme ? searchIconDark : searchIconLight}
          alt="Search"
        />
      </div>
      <ResultsList results={filteredResults} />
    </StyledSearch>
  );
};
