import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import TablePageCounter from "./TablePageCounter";

export default function Table() {
    const [page, setPage] = useState(1)
    const {data, error, isLoading} = useGetData(page)
    const dataCount = data?.count || 2
    const dataResult = data?.results || []

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
    }
    
    if(isLoading) return <div>'Loading...'</div>
    if(error) return <div>Error: {error}</div>

    return  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Mass</th>
                            <th>Eye Color</th>
                            <th>Gender</th>
                            <th>Hair Color</th>
                            <th>Height</th>
                            <th>Skin Color</th>
                            <th>Homeworld</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.results.map(character => {
                            return (
                                <tr key={character.name}>
                                    <td>{character.name}</td>
                                    <td>{character.birth_year}</td>
                                    <td>{character.mass}</td>
                                    <td>{character.eye_color}</td>
                                    <td>{character.gender}</td>
                                    <td>{character.hair_color}</td>
                                    <td>{character.height}</td>
                                    <td>{character.skin_color}</td>
                                    <td>{character.homeworld}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>

                <TablePageCounter 
                    dataCount={dataCount}
                    dataResult={dataResult} 
                    page={page} 
                    onPageClick={changePage}
                />
            </div>
}
