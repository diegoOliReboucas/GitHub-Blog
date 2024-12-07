import { createContext, ReactNode, useEffect, useState } from "react"

interface TransactionContextType{
    profileDatas: ProfileProps[],
    postList: postListProps[],
    selectedRepositorie: selectRepoProps[],
    setNameRepositorie: (nameRepositorie: string) => void
    nameRepositorie: string
    fetchPost: (query?: string) => Promise<void>
    setUser: (user: string) => void
}

export const APIContext = createContext({} as TransactionContextType)

interface APIProviderProps {
    children: ReactNode
}

interface ProfileProps {
    id: number
    name: string
    userName: string
    avatar: string
    profileDesc: string | null
    followers: number
    company: string
    repos: number
}

interface postListProps {
    id: number
    name: string
    description: string | null
    created_at: string
}

interface selectRepoProps {
    name: string
    description: string | null
    user: string
    comments: number
    created_at: string
}


export function APIProvider({children}: APIProviderProps) {
    const [profileDatas, setProfileDatas] = useState<ProfileProps[]>([])
    const [postList, setPostList] = useState<postListProps[]>([])
    const [selectedRepositorie, setSelectedRepositorie] = useState<selectRepoProps[]>([])
    const [nameRepositorie, setNameRepositorie] = useState('')
    const [user, setUser] = useState('rafaballerini')

    async function fetchPost(query?: string) {
        const url = new URL(`https://api.github.com/users/${user}/repos`)

        if(query) {
            url.searchParams.append('q', query)
        }

        const response =  await fetch(url)
        const data = await response.json()

        setPostList(data)
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}`).then(response => {
            response.json().then(data => {
                setProfileDatas([{
                    id:data.id, 
                    name: data.name,
                    userName: data.login,
                    avatar: data.avatar_url, 
                    profileDesc: data.bio, 
                    followers: data.followers, 
                    company: data.company, 
                    repos: data.public_repos
                }])
            })
        })

        // fetch('https://api.github.com/users/rafaballerini/repos').then(response => {
        //     response.json().then(data => {
        //         setPostList(data)
        //     })
        // })
        fetchPost()
    }, [user])

    useEffect(() => {
        if(nameRepositorie.length > 1) {
            fetch(`https://api.github.com/repos/${user}/${nameRepositorie}`).then(response => {
                response.json().then(data => {
                    setSelectedRepositorie([{
                        name: data.name, 
                        description: data.description, 
                        user: data.owner.login, 
                        comments: data.forks_count, 
                        created_at: data.created_at
                    }])
                })
            })
        }
    }, [nameRepositorie])

    return (
        <APIContext.Provider value={{profileDatas, postList, nameRepositorie, setNameRepositorie, selectedRepositorie, fetchPost, setUser}}>
            {children}
        </APIContext.Provider>
    )
}