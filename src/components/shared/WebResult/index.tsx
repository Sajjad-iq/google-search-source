import React from 'react'
import { Alink } from '../../common/Alink/Alink.styled'
import { PageDescription } from '../../common/PageDescription/PageDesciption.styled'
import { ShortLink } from '../../common/ShortLink/ShortLink.styles'
import { FlexSection } from '../FlexSection/Flex.styled'

interface Props {
    title: string,
    url: string,
    desc: string
}
export const WebResult = (props: Props) => {
    return (
        <FlexSection padding='15px 10px' margin='3px 0' flexDirection='column' width='100%' height='fit-content'>
            <ShortLink fontSize='0.7rem' width='100%' height='fit-content' margin='0'>{props.url}</ShortLink>
            <Alink fontSize='1.2rem' target="_blank" href={props.url} width='100%' height='fit-content' margin='5px 0'>{props.title}</Alink>
            <PageDescription fontSize='1rem' width='100%' height='fit-content' margin='0'>{props.desc}</PageDescription>
        </FlexSection>
    )
}
