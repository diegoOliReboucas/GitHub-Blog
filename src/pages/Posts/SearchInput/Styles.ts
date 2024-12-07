import styled from "styled-components";

export const SearchInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 56rem;

    input{
        padding: 1rem 0.75rem;
        border-radius: 6px;
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

export const Label = styled.div`
    display: flex;
    justify-content: space-between;

    h3{
        color: ${props => props.theme['color-subtitle']};
    }
    span{
        color: ${props => props.theme['color-time']};
    }
`;