import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    padding: 2rem;
    margin-top: -7rem;
    gap: 2rem;

    background: ${props => props.theme['background-post']};
    width: 56rem;
    height: 13.25rem;
    filter: drop-shadow(0 0 28px rgba(0,0,0,0.20));
    border-radius: 10px;

    img{
        width: 9.25rem;
        height: 9.25rem;
    }
`;

export const PerfilInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`;

export const PerfilTitle = styled.div`
    display: flex;
    justify-content: space-between;

    h1{
        color: ${props => props.theme['color-title']};
        font-size: 1.5rem;
    }
    span, a{
        text-decoration: none;
        text-transform: uppercase;
        color: ${props => props.theme['color-github']};
        font-size: 0.75rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        padding-bottom: 0.25rem;
        border-bottom: 1px solid transparent;

        &:hover{
        padding-bottom: 0.25rem;
        border-bottom: 1px solid ${props => props.theme['color-github']};
        transition:  0.8s;
    }
    }
    img{
        width: 0.75rem;
        height: 0.75rem;
    }
`;

export const PerfilDesc = styled.div`
    p{
    color: ${props => props.theme['color-text']};
    font-size: 1rem;
    line-height: 160%;
    height: 3rem;
    }
`;

export const PerfilLinks = styled.div`
    display: flex;
    color: ${props => props.theme['color-subtitle']};
    font-size: 1rem;
    gap: 1.5rem;

    p{
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    img{
        width: 1.125rem;
        height: 1.125rem;
    }
`;