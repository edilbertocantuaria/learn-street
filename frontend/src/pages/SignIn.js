import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png"

import useAppContext from '../hook/useAppContext'

import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

import { ThreeDots } from "react-loader-spinner";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [enter, setEnter] = useState("Entrar")

    const {
        token, setToken,
        idUser, setIdUser,
        disableInputs, setDisableInputs,
        isLoading, setIsLoading,
    } = useAppContext()


    const navigate = useNavigate();



    function Login(event) {
        event.preventDefault();

        setDisableInputs(true);

        setEnter("");
        setIsLoading(true);

        if (email === "" || password === "") {
            alert("os campos não podem ficar em branco!")

            setDisableInputs(false);
            setIsLoading(false);
            setEnter("Entrar");
            return;
        }

        const user = {
            email: email.toLowerCase().trim(),
            password: password
        }

        const request = axios.post("https://learnstreet-api.onrender.com/signin", user)
        console.log(user);

        request.then(response => {
            setToken(response.data.token);
            setIsLoading(false);
            setDisableInputs(false);

            navigate("/home");
        })

        request.catch(err => {
            alert("Os dados informados estão incorretos ou o usuário não está cadastrado!");
            console.log(err);
            setDisableInputs(false);
            setIsLoading(false);
            setEnter("Entrar");
        })



    }



    return (
        <MainDiv>
            <img src={logo} alt="Logo Learn Street" />

            <form onSubmit={Login}>
                <input
                    type="email"
                    disabled={disableInputs}
                    value={email}
                    placeholder="email"
                    required
                    onChange={e => setEmail(e.target.value)} />

                <input
                    type="password"
                    disabled={disableInputs}
                    value={password}
                    placeholder="senha"
                    required
                    onChange={e => setPassword(e.target.value)} />

                <ButtonLogin
                    type="submit"
                    disabled={disableInputs}
                    colorOpacity={isLoading ? "0.7" : "1"}
                >
                    {enter}
                    {isLoading && (
                        <ThreeDots
                            color="#FFFFFF"
                            height="13px"
                            width="51px"
                            visible={isLoading} />
                    )}
                </ButtonLogin>



            </form>
            <Link to="/cadastro" ><SingUpMessage >Não tem uma conta? Cadastre-se!</SingUpMessage></Link>

        </MainDiv>
    )
}

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:#C3CDC1;
height: 100vh;

font-family: ''Karla'';
font-style: normal;
font-weight: 400;
font-size: 72px;

    img{
    margin-top:60px;
    margin-bottom:20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input{
        width: 303px;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
        border-radius: 11px;
        margin-bottom: 12px;

        font-family: ''Karla'';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        ::placeholder{
            color: #DBDBDB;
        }

        &:focus{
            outline: none;
        }
    }
}
`

const ButtonLogin = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 303px;
    height: 45px;
    background: #79AA81;
    opacity: ${props => props.colorOpacity};
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    border: none;

    text-align: center;
    font-size: 20px;
    color: #FFFFFF;

    margin-bottom: 25px;

    &:hover {
        background: #5E8D64;
`
const SingUpMessage = styled.div`
font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
text-align: center;
text-decoration-line: underline;

text-decoration-color: #FFFFFF;
color: #FFFFFF;
`