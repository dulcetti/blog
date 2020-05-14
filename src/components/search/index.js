import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import * as S from './styles';
import Hit from './hit';

export default function Search() {
  const algoliaConfig = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  };

  const searchClient = algoliasearch(algoliaConfig.appId, algoliaConfig.searchKey);

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algoliaConfig.indexName}>
        <SearchBox autoFocus translations={{ placeholder: 'Digite o termo para a busca...' }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  );
}
