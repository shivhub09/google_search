import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = "https://google-api31.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isloading, setisloading] = useState(false);
    const [searchTerm, setSearchterm] = useState('');

    const getResults = async (type, whattoSearch) => {
        setisloading(true);

        try {
            const response = await fetch(`${baseUrl}/${type}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '682d0337cemshd966d21fce23698p19ef72jsn6d730c813e9f',
                    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                body: JSON.stringify({
                    text: `${whattoSearch}`,
                    safesearch: 'off',
                    timelimit: '',
                    region: 'wt-wt',
                    max_results: 20
                })
            });

            const data = await response.json();

            console.log(data);
            setResults(data);
            setisloading(false);
        } catch (error) {
            console.error(error);
            setisloading(false);
        }
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchterm, isloading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);
