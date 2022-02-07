export type TypeUseGetData = {
    "count": number, 
    "next": string, 
    "previous": null, 
    "results": [
        {
            "name": string, 
            "height": string, 
            "mass": string, 
            "hair_color": string, 
            "skin_color": string, 
            "eye_color": string, 
            "birth_year": string, 
            "gender": string, 
            "homeworld": string, 
            "films": [
                string, 
                string, 
                string, 
                string
            ], 
            "species": [], 
            "vehicles": [
                string, 
                string
            ], 
            "starships": [
                string, 
                string
            ], 
            "created": string, 
            "edited": string, 
            "url": string
        }, 
    ]    
}

export type TypeUseGetDataError = {
    'message': string,
}

export type TabelPageCounterProps = {
    dataCount: number
    dataResult: any[]
    page: number
    onPageClick: (pageNumber: number) => void
}