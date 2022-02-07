import {useQuery, QueryObserverResult} from 'react-query';
import { TypeUseGetData, TypeUseGetDataError } from '../Types/typeUseGetData';

export const useGetData = (pageNumber: number): QueryObserverResult<TypeUseGetData, TypeUseGetDataError> => {
    const queryKey = `https://swapi.dev/api/people/?limit=2&page=${pageNumber}&format=json`;

    return useQuery([queryKey], async ({queryKey}) => (
        fetch(queryKey[0])
        .then(res => res.json())
    ), {
        refetchOnWindowFocus: false
       }
    )
}

// export const useGetDataMutation = () => {
//     return useMutation(async (pageNumber: number) => {
//             fetch(`https://swapi.dev/api/people/?limit=2&page=${pageNumber}&format=json`)
//             .then(res => res.json())
//         }
//     )
// }