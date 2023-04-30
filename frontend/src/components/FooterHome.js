import styled from "styled-components"
import AddCourse from "./AddCourse"
import Cart from "./Cart"

export default function FooterHome() {
    return (
        <FooterContainer>
            <AddCourse />
            <Cart />
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
box-shadow: 0 -4px 4px rgba(0,0,0,0.2);
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
justify-content: space-around;
`