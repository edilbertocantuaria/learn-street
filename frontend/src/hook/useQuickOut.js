import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAppContext from './useAppContext'


export default function useQuickOut() {
    const { token, userName } = useAppContext()
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !userName) navigate("/")
    }, [navigate, token, userName])
}