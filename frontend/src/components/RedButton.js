import styled from "styled-components";
import { useNavigate } from "react-router-dom"


export default function RedButton({ name }) {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate("/home")}>{name}</Button>
    )
}




const Button = styled.button`
width: 160px;
height: 47px;
background-color: #BC6969;
border-radius: 13px;
font-size: 20px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
margin-left: 30px;
`