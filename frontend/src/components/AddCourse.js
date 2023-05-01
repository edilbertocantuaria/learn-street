import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function AddCourse() {
    const navigate = useNavigate()
    return (
        <AddCurso onClick={() => navigate("/create-course")}>
            Adicionar Curso
        </AddCurso>
    )
}

const AddCurso = styled.button`
width: 140px;
height: 60px;
background-color: #92bd99;
border-radius: 13px;
font-size: 19px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
margin-left: 9.5%;
`