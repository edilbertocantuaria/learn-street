import styled from "styled-components"

export default function AddCart() {
    return (
        <AddCartContainer>
            Adicionar ao carrinho
        </AddCartContainer>
    )
}

const AddCartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #2de029;
width: 180px;
height: 27px;
border-radius: 11px;
font-size: 16px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.12);

`
