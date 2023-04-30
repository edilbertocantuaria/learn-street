import styled from "styled-components";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import FooterHome from "../components/FooterHome";
import { useEffect, useState } from "react";
import axios from "axios";
import useAppContext from "../hook/useAppContext";

export default function Home() {
    const [courses, setCourses] = useState([])
    const [cart, setCart] = useState([])
    const { token } = useAppContext();

    const config = {
        headers: {
            authorization: `${token}`,
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/courses`)
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                alert(err.message)
            })

        axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then(res => {
                    setCart(res.data)
            })
            .catch(err => {
                alert(err.message)
                console.log(err)
            })
            console.log("cart",cart)
    }, [])
    return (
        <HomeContainer>
            <Header />
            <CoursesContainer>{courses ? courses.map(c =>
                <CourseCard cor={c.theme} descricao={c.description} inCart={cart.includes(c)} title={c.title} price={(c.price).toFixed(2)} />
            ) : <SpanTxt>Aina não foram adicionados cursos ao servidor</SpanTxt>}
            </CoursesContainer>
            <FooterHome />
        </HomeContainer>

    )
}



const CoursesContainer = styled.div`
padding-top: 105px;
margin-bottom: 105px;
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
`

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
overflow-y: scroll;
background-color: #c3cdc1;
`

const SpanTxt = styled.span`
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 30px;
`