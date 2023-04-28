import styled from "styled-components"
import { useState } from "react"
import AddCart from "./AddCart"
import RemoveCart from "./RemoveCart"

export default function CourseCard(props) {
    const [click, setClick] = useState(false)

    function addCourse(){

    }
    function removeCourse(){

    }
    return (
        <Course cor={props.cor} inCart={props.inCart} onClick={() => setClick(!click)}>
            {click ? <p>{props.descricao}</p> :
                <>
                    <p>Malabarismo em 5 passos</p>
                    <BottomContainer>
                        {props.inCart===false?<AddCart onClick={() => addCourse()}/>:<RemoveCart onClick={() => removeCourse()}/>}
                        <p>$100.00</p>
                    </BottomContainer>
                </>
            }
        </Course>
    )
}

const Course = styled.div`
border: solid;
border-color:#04ff00;
border-width: ${(props)=>props.inCart===true?"3px":"0px"};
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
