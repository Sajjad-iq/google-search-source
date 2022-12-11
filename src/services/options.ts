export const ImgOptions = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: { q: 'love', pageNumber: '5', pageSize: '50', autoCorrect: 'true' },
    headers: {
        'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};

export const WebOptions = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
    params: { q: "", pageNumber: '1', pageSize: "10", autoCorrect: 'true' },
    headers: {
        'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};