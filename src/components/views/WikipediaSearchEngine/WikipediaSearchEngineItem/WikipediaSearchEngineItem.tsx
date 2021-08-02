import React from 'react';
import './WikipediaSearchEngineItem.scss';
import parse from 'html-react-parser';

interface WikipediaSearchEngineItemProps {
    pageId: number;
    title: string;
    snippet: string;
}
const WikipediaSearchEngineItem: React.FC<WikipediaSearchEngineItemProps> = ({
    pageId,
    title,
    snippet,
}) => (
    <li className="wikipedia-search-engine-item" key={pageId}>
        <h2 className="wikipedia-search-engine-item__title">{title}</h2>
        <p className="wikipedia-search-engine-item__snippet">
            {parse(snippet)}
        </p>
        {/* OR dangerouslySetInnerHTML={{__html: snippet}} */}
    </li>
);

export default WikipediaSearchEngineItem;
