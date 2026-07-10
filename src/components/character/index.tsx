import { useParams } from "react-router-dom"

export const CharacterDetail = () => {
    const params = useParams<{ id: string }>();

    return <>Salut: Sunt {params.id}</>
}
