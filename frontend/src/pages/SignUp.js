import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import { ThreeDots } from "react-loader-spinner";


export default function SignUp() {
    const [disableInputs, setDisableInputs] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [registering, setRegistering] = useState("Cadastrar")

    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        setDisableInputs(true);

        setRegistering("");
        setIsLoading(true);

        /*console.log({
            name: username,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        })*/

        if (password === passwordConfirm) {
            const request = axios.post(`https://learnstreet-api.onrender.com/signup`,
                {
                    name: username,
                    email: email,
                    password: password,
                    passwordConfirm: passwordConfirm
                }
            );
            request.then(() => {
                alert("Usuário criado! Aproveite a plataforma do Learn Street 😉");
                navigate("/");
            })

            request.catch(error => {
                console.log(error.response.status);
                let complementaryInfo;
                switch (error.response.status) {
                    case 409:
                        complementaryInfo = "e-mail já cadastrado!";
                        break;

                    case 422:
                        complementaryInfo = `\n\n⚫ há dados faltando ou as senhas não correspondem. \n⚫ Obs.: a senha deve possuir no mínimo 5 caracteres. `
                        break;


                    default:
                        complementaryInfo = error.response.status;
                        break;
                }
                alert(`Não foi possível realizar seu cadastro: ${complementaryInfo}`)
                setDisableInputs(false);
                setIsLoading(false);
                setRegistering("Cadastrar");
            })

        } else {
            alert("As senhas não correspondem!");
            setDisableInputs(false);
            setIsLoading(false);
            setRegistering("Cadastrar");
            setPassword("")
            setPasswordConfirm("");
        }
    }

    return (
        <MainDiv>
            <img src={logo} alt="logo Learn Street" />
            <form onSubmit={register}>

                <input
                    type="name"
                    disabled={disableInputs}
                    value={username}
                    placeholder="nome"
                    onChange={e => setUsername(e.target.value)} />


                <input
                    type="email"
                    disabled={disableInputs}
                    value={email}
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)} />

                <input
                    type="password"
                    disabled={disableInputs}
                    value={password}
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value.trim())} />

                <input
                    type="password"
                    disabled={disableInputs}
                    value={passwordConfirm}
                    placeholder="confirmar senha"
                    onChange={e => setPasswordConfirm(e.target.value.trim())} />


                <SingUpButton
                    type="submit"
                    disabled={disableInputs}
                    data-test="login-btn"
                    colorOpacity={isLoading ? "0.7" : "1"}>
                    {registering}
                    {isLoading && (
                        <ThreeDots
                            color="#FFFFFF"
                            height="13px"
                            width="51px"
                            visible={isLoading} />
                    )}

                </SingUpButton>
            </form>
            <Link to="/" data-test="login-link"><SingUpMessage data-test="signup-link">Já tem uma conta? Faça login!</SingUpMessage></Link>
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
    margin-top:45px;
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
`

const SingUpButton = styled.button`
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

margin-bottom: 15px;

    &:hover {
    background: #5E8D64;
        }

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