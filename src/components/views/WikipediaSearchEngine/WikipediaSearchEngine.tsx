import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {
    StyledWikipediaSearchEngineContainer,
    StyledSearchInput,
    StyledActionsWrapper,
    StyledResultsWrapper,
    StyledChangeLanguageButtonsWrapper,
    StyledLoaderWrapper,
} from './StyledWikipediaSearchEngine';
import Button from '../../common/Button/Button';
import WikipediaSearchEngineItem from './WikipediaSearchEngineItem/WikipediaSearchEngineItem';
import PolishFlag from '../../../assets/icons/flags/poland.png';
import BritishFlag from '../../../assets/icons/flags/england.png';
import LanguageButton from '../../common/LanguageButton/LanguageButton';
import {appOnGetWikipediaData} from '../../../store/actions/app';
import {appInitialState} from '../../../store/reducers/type';
import Loader from '../../common/Loader/Loader';

const WikipediaSearchEngine: React.FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const history = useHistory();
    const params = useParams<{search: string}>();

    const wikipediaData = useSelector(
        (store: {app: appInitialState}) => store.app.wikipediaData,
    );

    const loading = useSelector(
        (store: {app: appInitialState}) => store.app.loading,
    );

    const [searchText, setSearchText] = useState<string>('');
    const [replaceText, setReplaceText] = useState<string>('');
    const [timer, setTimer] = useState<any>(null);

    const limitResults = 10;
    const disabledButton = loading || replaceText.trim() === '' || searchText.trim() === '';

    const handleOnChangeSearchText = (val: string) => setSearchText(val);
    const handleOnChangeReplaceText = (val: string) => setReplaceText(val);
    const handleOnReplacePhrase = () => {
        const container = document.getElementById(
            'wikipedia-results-container',
        );
        const searchMark = container?.querySelector('.searchmatch');
        if (searchMark) {
            searchMark.innerHTML = replaceText;
            searchMark.classList.remove('searchmatch');
        }
    };
    const handleOnReplaceAllPhrase = () => {
        const container = document.getElementById(
            'wikipedia-results-container',
        );
        const searchMarksArray = container?.querySelectorAll('.searchmatch');

        searchMarksArray?.forEach((mark) => {
            const searchMark = mark;
            searchMark.innerHTML = replaceText;
            searchMark.classList.remove('searchmatch');
        });
    };
    const handleOnSearchResults = async (val: string) => {
        if (val.trim().length > 0) {
            history.push(`?search=${val}`);
            dispatch(appOnGetWikipediaData(val, limitResults));
        }
    };
    const handleDebounceSearch = (val: string) => {
        setTimer(setTimeout(() => handleOnSearchResults(val), 500));
    };
    const handleClearDebounceSearch = () => {
        setTimer(null);
        clearTimeout(timer);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(history.location.search);
        const searchPhrase: string | null = searchParams.get('search');
        if (searchPhrase) {
            setSearchText(searchPhrase);
            dispatch(appOnGetWikipediaData(searchPhrase, limitResults));
        }
    }, []);

    return (
        <StyledWikipediaSearchEngineContainer>
            <StyledChangeLanguageButtonsWrapper>
                <LanguageButton flagSrc={PolishFlag} lang="pl" />
                <LanguageButton flagSrc={BritishFlag} lang="en" />
            </StyledChangeLanguageButtonsWrapper>
            <StyledActionsWrapper>
                <StyledSearchInput
                    value={searchText}
                    onChangeHandler={(val) => {
                        handleOnChangeSearchText(val);
                        handleClearDebounceSearch();
                        handleDebounceSearch(val);
                    }}
                    placeholder={t(
                        'WikipediaSearchEngine.SearchInputPlaceholder',
                    )}
                    onKeyDownHandler={(event: any) => {
                        const {key} = event;
                        if (key === 'Enter') {
                            handleOnSearchResults(searchText);
                        }
                    }}
                />
                <StyledSearchInput
                    onChangeHandler={handleOnChangeReplaceText}
                    placeholder={t(
                        'WikipediaSearchEngine.ReplaceWithInputPlaceholder',
                    )}
                />
                <Button
                    onClickHandler={() => {
                        handleOnSearchResults(searchText);
                    }}
                >
                    {t('WikipediaSearchEngine.SearchButton')}
                </Button>
                <Button
                    disabled={disabledButton}
                    variant="secondary"
                    onClickHandler={handleOnReplacePhrase}
                >
                    {t('WikipediaSearchEngine.ReplaceButton')}
                </Button>
                <Button
                    disabled={disabledButton}
                    variant="action"
                    onClickHandler={handleOnReplaceAllPhrase}
                >
                    {t('WikipediaSearchEngine.ReplaceAllButton')}
                </Button>
            </StyledActionsWrapper>
            {loading ? (
                <StyledLoaderWrapper>
                    <Loader />
                </StyledLoaderWrapper>
            ) : (
                <StyledResultsWrapper id="wikipedia-results-container">
                    {wikipediaData.map(({pageid, title, snippet}) => (
                        <WikipediaSearchEngineItem
                            key={pageid}
                            pageId={pageid}
                            title={title}
                            snippet={snippet}
                        />
                    ))}
                </StyledResultsWrapper>
            )}
            {wikipediaData.length === 0 && !loading && (
                <p>{t('WikipediaSearchEngine.NoResults')}</p>
            )}
        </StyledWikipediaSearchEngineContainer>
    );
};

export default WikipediaSearchEngine;
