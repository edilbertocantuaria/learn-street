import styled from "styled-components"
import { useState } from "react"
import AddCart from "./AddCart"

export default function CourseCard(props) {
    const [click, setClick] = useState()
    return (
        <Course cor={props.cor} onClick={() => setClick(!click)}>
            {click ? <p>{props.descricao}</p> :
                <>
                    <p>Malabarismo em 5 passos</p>
                    <BottomContainer>
                        <AddCart />
                        <p>$100.00</p>
                    </BottomContainer>
                </>
            }
        </Course>
    )
}

const Course = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${(props) => props.cor};
height: 100px;
width: 345px;
padding: 12px;
border-radius: 13px;
p{
    font-size: 19px;
    color: white;
}
`

const BottomContainer = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
`
