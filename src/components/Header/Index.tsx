import { HeaderContainer } from "./Styles";
import capa from '../../assets/Capa.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={capa} alt="" />
        </HeaderContainer>
    )
}