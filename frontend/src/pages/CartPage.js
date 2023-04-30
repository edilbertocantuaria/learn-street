import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import RedButton from "../components/RedButton.js";
import GreenButton from "../components/GreenButton.js";
import useAppContext from '../hook/useAppContext';


import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const [value, setValue] = useState("");
    const [courses, setCourses] = useState([]);

    const { totalValue, setTotalValue } = useAppContext();

    return (
        <HomeContainer>
            <Header />
            <Main>
                <div className="container">
                    <h1>Lista de compras:</h1>

                    <Summary>
                        <div className="buyingList">
                            <ul>
                                <div className="item">
                                    <div className="courseName">Curso X</div>
                                    <div className="coursePrice">Valor X</div>
                                </div>
                            </ul>
                        </div>
                    </Summary>

                    <div className="totalBuying">
                        <div className="total">Total</div>
                        <div className="price">R$ 1.000,00</div>
                    </div>
                </div>
            </Main>


            <Footer>
                <RedButton name="Cancelar"></RedButton>
                <GreenButton name="Pagamento" onClick={() => navigate("/checkout")}></GreenButton>
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

.buyingList{
        width: 100%;
        min-height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
        border-radius: 11px;

        overflow-y: scroll;
        ::-webkit-scrollbar {
            display: none;
          }
            .item{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                
                margin-top: 5px;    
                padding: 15px;
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
gap: 20px;
`
