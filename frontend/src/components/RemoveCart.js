import axios from "axios"
import styled from "styled-components"
import useAppContext from "../hook/useAppContext";

export default function RemoveCart(props) {

    const { token } = useAppContext();
    const config = {
        headers: {
            authorization: `${token}`,
        }
    }
    function removeCart() {
        // props.setClick(false)
        // console.log("removed")
        // console.log("interno",props.click)
        axios.delete(`${process.env.REACT_APP_API_URL}/cart`, { course_name: props.title }, config)
            .then(res => {
                alert("Item removido do carrinho")
            })
            .catch(err => {
                alert(err.message)
            })

    }

    return (
        <RemoveCartContainer onClick={() => removeCart()}>
            Remover do carrinho
        </RemoveCartContainer>
    )
}

const RemoveCartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #d02b2b;
width: 180px;
height: 27px;
border-radius: 11px;
font-size: 16px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.12);
z-index: 1;

`
