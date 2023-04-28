import styled from "styled-components"
import { IoLogOut } from "react-icons/io5"

export default function Header() {
    return (
        <HeaderContainer>
                <p>LEARN STREET</p>
                <div>
                    <IoLogOut />
                </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
background-color: #79aa81;
width: 100%;
height: 88px;
position: fixed;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
padding: 0 15px;
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