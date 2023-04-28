import styled from "styled-components"
import AddCourse from "./AddCourse"
import Cart from "./Cart"

export default function FooterHome() {
    return (
        <FooterContainer>
                <AddCourse/>
                <Cart/>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
background-color: #79aa81;
width: 100%;
height: 88px;
position: absolute;
bottom: 0;
right: 0;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
gap: 80px;
`