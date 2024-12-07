import styled from "styled-components";

export const PostsContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostsContent = styled.div`
    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    & > input{
        padding: 1rem 0.75rem;
        border-radius: 6px;
        width: 50%;
        background: ${props => props.theme['background-page']};
        filter: drop-shadow(0 0 28px rgba(0,0,0,0.20));
        border: 1px solid ${props => props.theme['background-post']};
        color: ${props => props.theme['color-subtitle']};
        font-size: 1rem;
        
        &::placeholder{
        color: ${props => props.theme['color-subtitle']};
        font-size: 1rem;
        }
    }
`;

export const PostsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    padding: 2rem;

    width: 26rem;
    height: 16.25rem;
    background: ${props => props.theme['background-post']};
    border-radius: 10px;
    cursor: pointer;

    p{
        max-height: 7rem;
        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;   
        -webkit-line-clamp: 5; 
        -webkit-box-orient: vertical; 

        color: ${props => props.theme['color-text']};
        font-size: 1rem;
    }
`;

export const PostTitle = styled.div`
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 1.25rem;
        color: ${props => props.theme['color-title']};
        max-width: 17.68rem;
    }
`;