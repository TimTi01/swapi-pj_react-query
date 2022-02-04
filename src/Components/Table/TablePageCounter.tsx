import React from 'react';
import { useGetData, useGetDataMutation } from "../../Hooks/useGetData";

export default function TablePageCounter() {
    const {data} = useGetData(1)
    const {mutate} = useGetDataMutation();
    const numberOfpages = Math.ceil(data ? data.count / data.results.length : 2);
    const arrNumberOfpages = Array.from(Array(numberOfpages).keys()).slice(1)

    console.log(numberOfpages);
    console.log(arrNumberOfpages);
    
    return <div style={{display: 'flex'}}>
                {arrNumberOfpages.map(pageNumber => (
                    <div key={pageNumber}
                          style={{marginRight: '5px'}}
                          onClick={() => mutate(pageNumber)}
                    >
                        {pageNumber}
                    </div> 
                ))}

           </div>;
}
