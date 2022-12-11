import React, { useContext, useEffect } from 'react'
import { Wrapper } from '../../components/shared/Wrapper/Wrapper.styled'
import { useAxios } from '../../services/useAxios';
import { Array } from '../../Context/types';
import { SearchWordContext } from '../../Context/SearchPagesContext';
import { WebResult } from '../../components/shared/WebResult';
import { WebSearchWrapper } from '../../components/shared/WebSearchWrapper/WebSearchWrapper.styled';

export const WebSearch = () => {

    const { SearchWord } = useContext(SearchWordContext)
    const [loading, data, error, request] = useAxios<Array>(SearchWord, "10");

    useEffect(() => {
        request()
    }, [SearchWord])

    console.log(error)

    return (
        <WebSearchWrapper width='100%' height='100%' borderTop='none' padding='5px 0'>
            {loading === true ? <h1>Loading..</h1> :
                data?.value.map((e) => {
                    return <WebResult url={e.url} title={e.title} desc={e.description} key={e.id} />
                })
            }
        </WebSearchWrapper>
    )
}
