import styled from "styled-components";
import { useNavigate } from "react-router-dom"


export default function GreenButton({ name }) {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate("/checkout")}>{name}</Button>
    )
}



const Button = styled.button`
width: 160px;
height: 47px;
background-color: #92BD99;
border-radius: 13px;
font-size: 20px;
color: white;
margin-right: 2.5%;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
`