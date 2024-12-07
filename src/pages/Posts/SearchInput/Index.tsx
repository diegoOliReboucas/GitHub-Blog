import { useContext } from "react";
import { Label, SearchInputContainer } from "./Styles";
import { APIContext } from "../../../contexts/APIContext";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchInput() {
    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })
    const {profileDatas, fetchPost, setUser} = useContext(APIContext)

    async function handleSearch(data: SearchFormInputs) {
       await fetchPost(data.query)  
       setUser(data.query)
       console.log(data.query);
    }

    return (
        <SearchInputContainer onSubmit={handleSubmit(handleSearch)}>
            {profileDatas.map((item) => (
                <Label key={item.id}>
                    <h3>Publicações</h3>
                    <span>{item.repos} Publicações</span>
                </Label>
            ))}
            <input 
                type="text" 
                placeholder="Buscar Publicação"
                {...register('query')}
                />
        </SearchInputContainer>
    )
}