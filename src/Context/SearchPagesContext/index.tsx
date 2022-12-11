import React, { createContext, ReactNode, SetStateAction, useState } from 'react'


type SearchWordTypes = {
    SearchWord: string,
    setSearchWord: React.Dispatch<SetStateAction<string>>
}

type ProviderChildrenType = {
    children: ReactNode
}

const init = {
    SearchWord: "",
    setSearchWord: () => { }
}


export const SearchWordContext = createContext<SearchWordTypes>(init);


const SearchWordProvider = ({ children }: ProviderChildrenType) => {

    const [SearchWord, setSearchWord] = useState<string>("love")

    return (
        <SearchWordContext.Provider value={{ SearchWord, setSearchWord }}>
            {children}
        </SearchWordContext.Provider>
    )
}

export default SearchWordProvider