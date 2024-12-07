import { useNavigate } from "react-router-dom";
import { Profile } from "../../components/Profile/Index";
import { SearchInput } from "./SearchInput/Index";
import { PostContainer, PostsArea, PostsContainer, PostsContent, PostTitle } from "./Styles";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";
import { formatDistanceToNow } from "date-fns";
import {ptBR} from 'date-fns/locale/pt-BR'

export function Posts() {
    const {postList, setNameRepositorie} = useContext(APIContext)

    let navigate = useNavigate()

    function handleClick(postName: string) {
        navigate('/post')
        setNameRepositorie(postName)
    }   

    return (
        <PostsContainer>
            <Profile />

            <PostsContent>
                <SearchInput />

                <PostsArea>
                    {postList.length > 0 && postList.map((post) => (
                    <PostContainer key={post.id} onClick={() => handleClick(post.name)}>
                        <PostTitle>
                            <h1>{post.name}</h1>
                            {post.created_at ? 
                                formatDistanceToNow(new Date(post.created_at), {
                                addSuffix: true,
                                locale: ptBR
                                })
                                : 'Data indisponível'
                                }
                        </PostTitle>
                        {post.description == null ?
                        <p>No Description Available</p> : 
                        <p>{post.description}</p>
                        }
                    </PostContainer>
                    ))}
                </PostsArea>
            </PostsContent>
        </PostsContainer>
    )
}