import { PerfilDesc, PerfilInfos, PerfilLinks, PerfilTitle, ProfileContainer } from "./Styles";
import link from '../../assets/link.svg'
import github from '../../assets/github.svg'
import factory from '../../assets/factory.svg'
import users from '../../assets/users.svg'
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

export function Profile() {
    const {profileDatas} = useContext(APIContext)

    return(
        <div>
           {profileDatas.map((item) => (
            <ProfileContainer key={item.id}>
            <img src={item.avatar} alt="" /> 
            <PerfilInfos>
                <PerfilTitle>
                    <h1>{item.name}</h1>
                    <a href={`https://github.com/${item.userName}`}>
                        github
                        <img src={link} alt="Link para o Github"/>
                    </a>
                </PerfilTitle>
                <PerfilDesc>
                    {item.profileDesc ==  null ? 
                    <p>No Profile Description Available</p> :
                    <p>{item.profileDesc}</p> 
                    }
                </PerfilDesc>
                <PerfilLinks>
                    <p>
                        <img src={github} alt="Github-logo" />
                        {item.userName}
                    </p>
                    <p>
                        <img src={factory} alt="Factory-Image" />
                        {item.company == null ? 
                        <p>"Company"</p> :
                        <p>{item.company}</p>
                        }
                    </p>
                    <p> 
                        <img src={users} alt="Users-logo" />
                        {item.followers == 1 ? 
                        <p>{item.followers} Seguidor</p> :
                        <p>{item.followers} Seguidores</p>
                        }
                    </p>
                </PerfilLinks>
            </PerfilInfos>
            </ProfileContainer>
           ))}
        </div>
    )
}