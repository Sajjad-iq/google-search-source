import React, { useContext } from 'react'
import { Button } from '../../../components/common/Button/Button.styled'
import { INPUT } from '../../../components/common/Input/input.styled'
import { Img } from '../../../components/common/Logo/img.styled'
import { FlexSection } from '../../../components/shared/FlexSection/Flex.styled'
import backIcon from '../../../assets/icons/arrow_forward.svg'
import { useNavigate } from "react-router-dom";
import { Form } from '../../../components/shared/Form/Form.styled'
import { SearchWordContext } from '../../../Context/SearchPagesContext'


interface Props {
    input: string
    setInput: (e: string) => void,
    request: () => void
}

export const InputComponent = (props: Props) => {

    const { setSearchWord } = useContext(SearchWordContext)
    const Navigate = useNavigate()
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => props.setInput(event.target.value)
    const onClick = () => Navigate("/")

    const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchWord(props.input)
        props.request()
    }

    return (
        <FlexSection margin='0' padding='0' width='100%' height='fit-content' flexDirection='row'>
            <Form margin='0' width='100%' border='none' onSubmit={onSubmit}>
                <INPUT borderRadius='10px' border="none" onChange={onChange} />
            </Form>

            <Button onClick={onClick} height='50px' width='50px' margin='0'>
                <Img width='30px' height='30px' margin='0' src={backIcon} />
            </Button>
        </FlexSection>
    )
}
