import React from 'react';
import WikipediaSearchEngine from '../../views/WikipediaSearchEngine/WikipediaSearchEngine';
import {StyledHomePageContainer} from './StyledHomePage';

const HomePage: React.FC = () => (
    <StyledHomePageContainer>
        <WikipediaSearchEngine />
    </StyledHomePageContainer>
);

export default HomePage;
