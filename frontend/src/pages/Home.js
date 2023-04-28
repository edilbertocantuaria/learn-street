import styled from "styled-components";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import FooterHome from "../components/FooterHome";

export default function Home() {
    return (
        <>
            <Header />
            <CoursesContainer>
                <CourseCard cor={"#cfb46f"}/>
                <CourseCard cor={"#2eb73c"}/>
                <CourseCard cor={"#cf6f9d"}/>
                <CourseCard cor={"#706fcf"}/>

            </CoursesContainer>
            <FooterHome/>
        </>

    )
}



const CoursesContainer = styled.div`
background-color: #c3cdc1;
height: 100vh;
padding-top: 105px;
padding-bottom: 105px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 14px;
`