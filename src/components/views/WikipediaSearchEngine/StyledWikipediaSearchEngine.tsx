import styled from 'styled-components';
import Input from '../../common/Input/Input';
import {appColors} from '../../../assets/colors';

export const StyledWikipediaSearchEngineContainer = styled.div`
    margin: 15px 0;
    width: 80%;
    display: flex;
    flex-direction: column;

    align-items: center;
    min-height: 400px;

    .searchmatch {
        background-color: yellow;
    }
`;

export const StyledSearchInput = styled(Input)`
    margin: 15px;
    height: 50px;
`;

export const StyledActionsWrapper = styled.div``;

export const StyledResultsWrapper = styled.ul`
    padding: 25px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledChangeLanguageButtonsWrapper = styled.div``;

export const StyledLanguageButton = styled.button`
    width: 40px;
    height: 40px;
    margin: 15px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    background-color: ${appColors.transparent};

    > img {
        width: 100%;
        height: auto;
    }
`;

export const StyledLoaderWrapper = styled.div`
    margin-top: 25px;
    position: relative;
`;
