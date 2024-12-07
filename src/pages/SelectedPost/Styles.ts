import styled from "styled-components";

export const SelectedPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p{
        margin-top: 4rem;
        max-width: 56rem;
        color: ${props => props.theme['color-text']};
        font-size: 1rem;
        line-height: 160%;
    }
`;

export const SelectedPostInfos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: -7rem;
    gap: 1.5rem;

    background: ${props => props.theme['background-post']};
    width: 56rem;
    height: 11.5rem;
    filter: drop-shadow(0 0 28px rgba(0,0,0,0.20));
    border-radius: 10px;

    h1{
        color: ${props => props.theme['color-title']};
        font-size: 1.5rem;
    }
`;

export const SelectedPostInfoButtons = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    p, a{
    text-decoration: none;
    color:  ${props => props.theme['color-github']};
    cursor: pointer ;
    font-size: 0.75rem;
    font-weight: bold;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        padding-bottom: 0.25rem;
        border-bottom: 1px solid ${props => props.theme['color-github']};
        transition:  0.8s;
    }
    }
`;

export const SelectedPostInfoLinks = styled.div`
    display: flex;
    gap: 2rem;

    p{
        display: flex;
        gap: .5rem;
        color: ${props => props.theme['color-subtitle']};
        font-size: 1rem;
    }
`;
