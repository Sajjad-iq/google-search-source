import { useState, useEffect, useContext } from 'react'
import { INPUT } from '../../../components/common/Input/input.styled'
import { Form } from '../../../components/shared/Form/Form.styled'
import { SearchResults } from './SearchResults'
import { useAxios } from '../../../services/useAxios'
import { Array } from '../../../Context/types'
import { useNavigate } from "react-router-dom";
import { SearchWordContext } from '../../../Context/SearchPagesContext'


export const GoogleSearch = () => {


    const [input, setInput] = useState("")
    const [loading, data, error, request] = useAxios<Array>(input, "8");
    const Navigate = useNavigate()
    const { setSearchWord } = useContext(SearchWordContext)


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

    const on_Submit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchWord(input)
        request()
    }

    console.log(error)
    /* useEffect(() => {
        const timer = setTimeout(() => {
            request()
            console.log("fetch")
        }, 2000);
        return () => clearTimeout(timer);
    }, [input])
 */


    return (
        <Form margin='0' width='100%' onSubmit={on_Submit} border={input !== "" ? "1px solid rgba(128, 128, 128, 0.4)" : "none"}>
            <INPUT borderRadius='10px' onFocus={() => window.outerWidth < 1024 ? Navigate('/PopUp') : false} onChange={onChange} border={input !== "" ? "none" : "1px solid rgba(128, 128, 128, 0.4)"} />
            <SearchResults isLoading={loading} Data={data} />
        </Form>
    )
}
