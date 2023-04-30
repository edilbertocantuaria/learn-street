import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

import Header from "../components/Header";
import RedButton from "../components/RedButton.js";
import GreenButton from "../components/GreenButton.js";
import useQuickOut from "../hook/useQuickOut";
import useAppContext from '../hook/useAppContext';

import { InfinitySpin } from "react-loader-spinner";

import axios from "axios"

export default function Home() {
    const navigate = useNavigate()
    useQuickOut();

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const { totalValue, setTotalValue, token } = useAppContext();

    const config = {
        headers: {
            authorization: `${token}`,
        }
    }

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
        request.then(response => {
            const coursesAddedAtCart = response.data;
            setCourses(coursesAddedAtCart);
            setLoading(false);
        });

    }, []);

    useEffect(() => {
        console.log(courses);
        console.log(courses.length);
        let finalValue = 0;
        courses.forEach((course) => {
            finalValue += course.course_cost
        });
        setTotalValue(finalValue);
    }, [courses]);


    return (
        <HomeContainer>
            <Header />
            <Main>
                <div className="container">
                    <h1>Lista de compras:</h1>

                    <Summary loading={loading} coursesLength={courses.length}>
                        <div className="buyingList">
                            {loading ? (<InfinitySpin
                                width='200'
                                color="#4fa94d"
                            />) : (courses.length === 0 ? (<div class="noBuying">Nenhuma compra realizada até agora</div>) : (
                                <ul>
                                    {courses.map((course) =>

                                        <div className="item">
                                            <div className="coursesInfo">
                                                <div className="courseName">{course.course_name}
                                                </div>
                                                <div className="coursePrice">{course.
                                                    course_cost.toFixed(2).replace(".", ",")}</div>
                                            </div>
                                            <div className="divisionLine">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    )}
                                </ul>

                            ))}

                        </div>
                    </Summary>

                    <div className="totalBuying">
                        <div className="total">Total</div>
                        <div className="price">R$ {totalValue.toFixed(2).replace(".", ",")}</div>
                    </div>
                </div>
            </Main>


            <Footer>
                <RedButton name="Cancelar" ></RedButton>
                <GreenButton name="Pagamento" ></GreenButton>
            </Footer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
background-color: #c3cdc1;
`

const Main = styled.main` 
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;

    .container{
    width: 95%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;


        h1{
            position: fixed;
            margin-top: 10px;
            font-family: ''Karla'';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #79AA81;
        }

        .totalBuying{
            position: fixed;
            bottom: 17.5%;
            width: 95%;

            font-family: 'Koulen';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;   
            color: #79AA81;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

const Summary = styled.div`
width: 100%;
height: 75%;
margin: 50px 0px;
display: flex;
flex-direction: column; 
align-items: flex-start;
justify-content: flex-start;

gap: 14px;

font-family: ''Karla'';
font-style: normal;
font-weight: 400;
   

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

${props => props.coursesLength === 0 && `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`}

    .buyingList {
        width: 100%;
        min-height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
        border-radius: 11px;

        ${props => props.loading ?
        `    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;` : ``}


        .img{
            display: flex;
            justify-content: center; 
            margin-top: calc(50%/2);
            width: 10px;
            height: 10px;
        }

        overflow-y: scroll;
            ::-webkit-scrollbar {
                display: none;
            }
  
        .noBuying {
            color: #AEA7A7;
            display: flex;
            justify-content: center; 
            margin-top: calc(50%/2);
        }
  
        .item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
  
            margin-top: 5px;
            padding: 5px 15px;
  
            .coursesInfo {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
  
            .divisionLine {
                width: 100%;
                height: 1px;
                margin-top: 5px;
                margin-bottom: 5px;
                display: flex;
                justify-content: center;
            }
  
            .line {
                width: 100%;
                height: 1px;
                border-radius: 3px;
                background-color: #AEA7A7;
            }
        }
  }
  
`

const Footer = styled.div`
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
justify-content: space-between;
`
