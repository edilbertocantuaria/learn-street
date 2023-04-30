import styled from "styled-components"
import { IoLogOut } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import useAppContext from '../hook/useAppContext'

export default function Header() {
    const navigate = useNavigate()

    const {
        token, setToken,
    } = useAppContext()

    function logout() {
        console.log(token);
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const request = axios.post(`${process.env.REACT_APP_API_URL}logout`, config)
        console.log(config)

        request.then(() => {
            //localStorage.clear();
            //localStorage.removeItem("token")
            setToken(undefined);
            alert("Logout realizado com sucesso");
            navigate("/");
        })

        request.catch(err => {
            console.log(err);
            alert(err.response.data);
        })
    }

    return (
        <HeaderContainer>
            <p>LEARN STREET</p>
            <div>
                <IoLogOut onClick={() => logout()} />
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
background-color: #79aa81;
width: 100%;
height: 88px;
position: absolute;
top: 0;
right: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
padding: 0 15px;
box-shadow: 0 4px 4px rgba(0,0,0,0.2);
p{
    color: white;
    font-size: 32px;
    font-family: 'Koulen', cursive;
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    position: absolute;
    top: 30%;
    right: 10px;
    color: white;
}
`