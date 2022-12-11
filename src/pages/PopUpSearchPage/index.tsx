import React, { useState } from 'react'
import { Wrapper } from '../../components/shared/Wrapper/Wrapper.styled'
import { InputComponent } from './inputComponent'
import { SearchResults } from './SearchResults'
import { useAxios } from '../../services/useAxios'
import { Array } from '../../Context/types'



export const PopUpSearchPage = () => {

    const [input, setInput] = useState("")
    const [loading, data, error, request] = useAxios<Array>(input, "15");

    console.log("PopUpPage")

    return (
        <Wrapper padding='0' width='100%' height='100%' borderTop='none'>
            <Wrapper padding='0' width='100%' height='fit-content' borderTop='none'>
                <InputComponent input={input} request={request} setInput={setInput} />
            </Wrapper>
            <SearchResults Data={data} isLoading={loading} />
        </Wrapper>
    )
}
