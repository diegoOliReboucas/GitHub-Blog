import { SelectedPostContainer, SelectedPostInfoButtons, SelectedPostInfoLinks, SelectedPostInfos } from "./Styles";
import link from '../../assets/link.svg'
import back from '../../assets/back.svg'
import gitHub from '../../assets/github.svg'
import calendar from '../../assets/calendar.svg'
import comments from '../../assets/coments.svg'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function SelectedPost() {
    const {selectedRepositorie} = useContext(APIContext)
    let navigate = useNavigate()

    function handleBack() {
        navigate('/')
    }

    return(
        <div>
            {selectedRepositorie.map((item) => (
                <SelectedPostContainer key={item.name}>
                <SelectedPostInfos>
                    <SelectedPostInfoButtons>
                        <p onClick={handleBack}><img src={back} alt="back arrow" />Voltar</p>
                        <a href={`https://github.com/${item.user}/${item.name}`}>Ver no Github <img src={link} alt="link pro github" /></a>  
                    </SelectedPostInfoButtons>
    
                    <h1>{item.name}</h1>
    
                    <SelectedPostInfoLinks>
                        <p>
                            <img src={gitHub} alt="Github-Icon" />
                            {item.user}
                        </p>
    
                        <p>
                            <img src={calendar} alt="Calendar Image" />
                            {formatDistanceToNow(new Date(item.created_at), {
                                addSuffix: true,
                                locale: ptBR
                            })}
                        </p>
    
                        <p>
                            <img src={comments} alt="Comments Image" />
                            {item.comments} Comentários
                        </p>
                    </SelectedPostInfoLinks>
                </SelectedPostInfos>
    
                {item.description == null ?
                    <p>No description available</p> :
                    <p>{item.description}</p>
                }
                
            </SelectedPostContainer>
            ))}
        </div>
    )
}