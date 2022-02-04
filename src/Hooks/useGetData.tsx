import {useQuery, useMutation, QueryObserverResult, useQueryClient} from 'react-query';
import { TypeUseGetData, TypeUseGetDataError } from '../Types/typeUseGetData';

export const useGetData = (pageNumber: number): QueryObserverResult<TypeUseGetData, TypeUseGetDataError> => {
    const queryKey = `https://swapi.dev/api/people/?limit=2&page=${pageNumber}&format=json`;
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryState(queryKey)?.data

    return useQuery([queryKey], async ({queryKey}) => (
        fetch(queryKey[0])
    .then(res => res.json())
    ), {
        enabled: !userData
       }
)
}

export const useGetDataMutation = () => 
    useMutation(async (pageNumber: number) => {
        fetch(`https://swapi.dev/api/people/?limit=2&page=${pageNumber}&format=json`)
            .then(res => res.json())
    }
)