import axios from 'axios';
import { useEffect, useState } from 'react';
import { WebOptions, ImgOptions } from './options';


export const useAxios = <T>(SearchWord: string = "", PageSize: string = "1", option: number = 1): [boolean, T | undefined, string, () => void] => {


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');

    WebOptions.params.q = SearchWord
    WebOptions.params.pageSize = PageSize
    ImgOptions.params.q = SearchWord
    ImgOptions.params.pageSize = PageSize

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    };

    const sendRequest = () => {
        if (SearchWord === "") {
            setLoading(false)
        } else {
            setLoading(true);

            axios(option === 1 ? WebOptions : ImgOptions)
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

    return [loading, data, error, request];
};
