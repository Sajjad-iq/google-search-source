import React, { useContext, useState } from 'react'
import { INPUT } from '../../../components/common/Input/input.styled'
import { Form } from '../../../components/shared/Form/Form.styled'
import { useAxios } from '../../../services/useAxios'
import { Array } from '../../../Context/types'
import { SearchWordContext } from '../../../Context/SearchPagesContext'

export const InputSection = () => {
    const [input, setInput] = useState("")
    const [loading, data, error, request] = useAxios<Array>(input, "15");
    const { setSearchWord } = useContext(SearchWordContext)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)
    const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchWord(input)
        request()
    }

    return (
        <Form onSubmit={onSubmit} margin='0' width='95%' border='none'>
            <INPUT onChange={onChange} border='1px solid rgba(128, 128, 128, 0.4)' borderRadius='20px' />
        </Form>
    )
}
