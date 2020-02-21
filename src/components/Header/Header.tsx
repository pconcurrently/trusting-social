import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.PRIMARY};
    height: 100px;
`;

interface IProps {
    switchTheme: () => void;
}

export const Header: React.SFC<IProps> = ({ switchTheme }) => {
    return (
        <StyledHeader>
            <button onClick={switchTheme}>Change theme</button>
        </StyledHeader>
    );
}
