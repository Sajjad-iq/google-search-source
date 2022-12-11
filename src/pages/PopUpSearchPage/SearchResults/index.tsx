import React, { useContext } from 'react'
import { Img } from '../../../components/common/Logo/img.styled'
import { RESULT } from '../../../components/common/ResultButton/Result.style'
import { Wrapper } from '../../../components/shared/Wrapper/Wrapper.styled'
import searchIcon from '../../../assets/icons/search.svg'
import { Array } from '../../../Context/types'
import { SearchWordContext } from '../../../Context/SearchPagesContext'
import { useNavigate } from "react-router-dom";


interface Props {
    Data: Array | undefined,
    isLoading: boolean
}

export const SearchResults = React.memo((props: Props) => {

    const Navigate = useNavigate()
    const { setSearchWord } = useContext(SearchWordContext)
    const onClick = (e: string) => {
        setSearchWord(e)
        Navigate("/WebSearch")
    }

    return (
        <Wrapper padding='5px 0' width='95%' height='fit-content' borderTop='1px solid rgba(128, 128, 128, 0.4)'>

            {props.isLoading === true ? <h1>Loading...</h1> :
                props.Data?.value.map((e) => {
                    return <RESULT onClick={() => onClick(e.title)} key={e.id}>
                        <Img margin='0 5px' src={searchIcon} width='26px' height='auto' alt='result' />
                        {e.title}
                    </RESULT>
                })
            }
        </Wrapper>
    )
})
