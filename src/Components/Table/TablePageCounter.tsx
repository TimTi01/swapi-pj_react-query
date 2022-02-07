import React from 'react';
import { TabelPageCounterProps } from '../../Types/typeUseGetData';

export default function TablePageCounter({dataCount, dataResult, page, onPageClick}: TabelPageCounterProps) {
    const numberOfpages = Math.ceil(dataCount / dataResult.length);
    
    const arrNumberOfpages = Array.from(Array(numberOfpages).keys()).slice(1)
    
    return <div style={{display: 'flex'}}>
                {arrNumberOfpages.map(pageNumber => (
                    <button key={pageNumber}
                          style={{marginRight: '5px'}}
                          onClick={() => onPageClick(pageNumber)}
                    >
                        {pageNumber}
                    </button> 
                ))}
           </div>;
}
