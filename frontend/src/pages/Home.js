import styled from "styled-components";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import FooterHome from "../components/FooterHome";

export default function Home() {
    return (
        <HomeContainer>
            <Header />
            <CoursesContainer>
                <CourseCard cor={"#cfb46f"}/>
                <CourseCard cor={"#2eb73c"}/>
                <CourseCard cor={"#cf6f9d"}/>
                <CourseCard cor={"#706fcf"}/>
                <CourseCard cor={"#cfb46f"}/>

            </CoursesContainer>
            <FooterHome/>
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