import React from 'react';
import { debounce } from 'lodash';

import { StyledSearch } from './Search.styled';
import { searchResults } from './search-results';

const DEBOUNCE_TIME = 300;

export const Search = () => {
  const [filteredResults, setFilteredResults] = React.useState<string[]>([]);
  const handleOnChange = (value: string) => {
    const filtered = searchResults.filter(
      r => r.toLowerCase().indexOf(value.toLowerCase()) !== -1 // Simple text search
    );
    setFilteredResults(filtered);
  };

  const deboucedHandleOnChange = debounce(handleOnChange, DEBOUNCE_TIME);

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Try Vietnam"
        autoFocus
        onChange={
          (e: React.FormEvent<HTMLInputElement>) =>
            deboucedHandleOnChange(e.currentTarget.value) // this event won't be persisted after debouncing, pass directly the value
        }
      />
    </StyledSearch>
  );
};
