import { useState } from 'react'
import { AppContext } from './AppContext'


export default function AppProvider({ children }) {
    const [token, setToken] = useState("");
    const [idUser, setIdUser] = useState("");
    const [username, setUsername] = useState("");

    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AppContext.Provider
            value={{
                token, setToken,
                idUser, setIdUser,
                username, setUsername,

                disableInputs, setDisableInputs,
                isLoading, setIsLoading
            }}>
            {children}
        </AppContext.Provider>
    )
}