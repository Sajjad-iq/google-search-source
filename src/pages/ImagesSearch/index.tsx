import React, { useContext, useEffect, useState } from 'react'
import { SearchWordContext } from '../../Context/SearchPagesContext';
import { useAxios } from '../../services/useAxios';
import { Array } from '../../Context/types';
import { Img } from '../../components/common/Logo/img.styled';
import { FlexSection } from '../../components/shared/FlexSection/Flex.styled';
import { ImagesSearchWrapper } from '../../components/shared/ImagesSearchWrapper/imagesSearchWrapper.styled';
import axios from 'axios';
import { ImgOptions } from '../../services/options';


export const ImagesSearch = () => {

    const { SearchWord, setSearchWord } = useContext(SearchWordContext)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Array>();
    const [error, setError] = useState('');

    ImgOptions.params.q = SearchWord

    const sendRequest = () => {
        if (SearchWord === "") {
            setLoading(false)
        } else {
            setLoading(true);

            axios(ImgOptions)
                .then((response) => {
                    setError('');
                    setData(response.data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => setLoading(false));
        };
    }

    useEffect(() => {
        sendRequest()
    }, [SearchWord, setSearchWord])
    console.log(SearchWord)
    console.log(data)
    console.log(error)


    return (
        <ImagesSearchWrapper width='100%' height='fit-content' borderTop='none' padding='10px'>
            <FlexSection width='100%' height='100%' flexDirection='row' margin='0' padding='0'>
                {loading === true ? "" :
                    data?.value.map((e) => {
                        return <Img alt='web' key={e.url} src={e.thumbnail} width={"275px"} height={"200px"} margin="10px" />
                    })
                }
            </FlexSection>
        </ImagesSearchWrapper>
    )
}
