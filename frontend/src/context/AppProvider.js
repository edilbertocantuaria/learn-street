import { useState } from 'react'
import { AppContext } from './AppContext'


export default function AppProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [idUser, setIdUser] = useState("");
    const [userName, setUserName] = useState(localStorage.getItem("userName"));

    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AppContext.Provider
            value={{
                token, setToken,
                idUser, setIdUser,
                userName, setUserName,

                disableInputs, setDisableInputs,
                isLoading, setIsLoading
            }}>
            {children}
        </AppContext.Provider>
    )
}