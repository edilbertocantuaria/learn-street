import styled from "styled-components"
import { useEffect, useState } from "react"
import AddCart from "./AddCart"
import RemoveCart from "./RemoveCart"

export default function CourseCard(props) {
    const [click, setClick] = useState(false)

    useEffect(() => {
        console.log("click home", click)
    }, [click])

    return (
        <Course cor={props.cor} inCart={props.inCart} >
            {click ? <p onClick={() => setClick(!click)}>{props.descricao}</p> :
                <>
                    <p onClick={() => setClick(!click)}>{props.title}</p>
                    <BottomContainer>
                        {props.inCart === false ? 
                        <AddCart click={click} setClick={setClick} price={props.price} title={props.title}/> : 
                        <RemoveCart click={click} setClick={setClick} title={props.title}/>}
                        <span>${props.price}</span>
                    </BottomContainer>
                </>
            }
        </Course>
    )
}

const Course = styled.div`
border: solid;
border-color:#04ff00;
border-width: ${(props) => props.inCart === true ? "3px" : "0px"};
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${(props) => props.cor};
height: 100px;
width: 80%;
padding: 12px;
border-radius: 13px;
p{
    font-size: 19px;
    color: white;
    width: 100%;
    height: 20%;
}
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
    font-size: 19px;
    color: white;
    }
`
