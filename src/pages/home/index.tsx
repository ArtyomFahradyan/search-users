import React from 'react';
import './styles.css'
import Search from 'components/Search';
import Results from 'components/Results';

function Home () {
    return (
        <>
            <Search />
            <Results />
        </>
    );
}

export default Home;
