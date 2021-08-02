import React from 'react';
import i18n from '../../../i18n/config';
import {StyledLanguageButton} from '../../views/WikipediaSearchEngine/StyledWikipediaSearchEngine';
import {LanguageButtonProps} from './types';

const LanguageButton: React.FC<LanguageButtonProps> = ({lang, flagSrc}) => (
    <StyledLanguageButton onClick={() => i18n.changeLanguage(lang)}>
        <img src={flagSrc} alt={lang} />
    </StyledLanguageButton>
);

export default LanguageButton;
