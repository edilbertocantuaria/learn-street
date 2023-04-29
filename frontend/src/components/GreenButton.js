import styled from "styled-components";

export default function GreenButton({name}) {
    return(
        <Button>{name}</Button>
        )
}



const Button = styled.button`
width: 160px;
height: 47px;
background-color: #92BD99;
border-radius: 13px;
font-size: 20px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
`