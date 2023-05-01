import styled from "styled-components";
import Header from "../components/Header.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAppContext from "../hook/useAppContext.js";
import axios from "axios";

export default function CheckoutPage() {
    const [form, setForm] = useState({ name: "", card_number: "", card_valid_date: "", card_security_code: "", email: "" });
    const { totalValue, token } = useAppContext();
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const config = {
        headers: {
            authorization: `${token}`,
        }
    }

    function handleCheckout(e) {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/checkout`, form, config)
            .then(res => {
                alert("Pagamento efetuado com sucesso!");
                navigate("/home");
            })
            .catch(err => {
                alert(err.response.data);
            })
    }

    return (
        <CheckoutContainer>
            <Header></Header>
            <FormContainer onSubmit={handleCheckout}>
                <InputContainer>
                    <InputSection>
                        <Field>
                            Nome do titular do cartão:
                        </Field>
                        <Input
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleForm}></Input>
                    </InputSection>
                    <InputSection>
                        <Field>
                            Número do cartão:
                        </Field>
                        <Input
                            name="card_number"
                            type="text"
                            required
                            value={form.card_number}
                            onChange={handleForm}></Input>
                    </InputSection>
                    <InputHorizontalSection>
                        <Field>
                            Data de validade:
                        </Field>
                        <SmallInput
                            name="card_valid_date"
                            placeholder="DD/MM"
                            type="text"
                            required
                            value={form.card_valid_date}
                            onChange={handleForm}></SmallInput>
                    </InputHorizontalSection>
                    <InputHorizontalSection>
                        <Field>
                            Código de segurança:
                        </Field>
                        <SmallInput
                            name="card_security_code"
                            type="text"
                            required
                            value={form.card_security_code}
                            onChange={handleForm}></SmallInput>
                    </InputHorizontalSection>
                    <InputSection>
                        <Field>
                            Email:
                        </Field>
                        <Input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleForm}></Input>
                    </InputSection>
                    <InputHorizontalSection>
                        <TotalBuying>Total:</TotalBuying>
                        <TotalBuying>$ {totalValue}</TotalBuying>
                    </InputHorizontalSection>
                </InputContainer>
                <Footer>
                    <CancelButton type="button" onClick={() => navigate("/cart")}>Cancelar</CancelButton>
                    <GreenButton type="submit">Finalizar Compra</GreenButton>
                </Footer>
            </FormContainer>
        </CheckoutContainer>
    )
}

const CheckoutContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: #c3cdc1;
`;

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
`;

const FormContainer = styled.form`
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const InputContainer = styled.div`
height:calc(100vh - 105px);
padding-top: 106px;
padding-left: 13px;
padding-right: 17px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 16px;
overflow-y: scroll;
`

const InputSection = styled.div`
display:flex;
flex-direction: column;
text-align: left;
`;

const InputHorizontalSection = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width:345px;
`;

const Field = styled.h1`
    color: #79AA81;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
`;


const Input = styled.input`
    margin-top:16px;
    width: 345px;
    display:flex;
    height: 44px;
    align-items: flex-start;
    padding: 10px;
    padding-left: 10px;    
    border-radius: 11px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    font-size: 20px;
`;

const SmallInput = styled.input`
    width: 112px;
    display:flex;
    height: 44px;
    align-items: center;
    padding: 10px;
    padding-left: 10px;    
    border-radius: 11px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    font-size: 20px;
`;

const CancelButton = styled.button`
width: 160px;
height: 47px;
background-color: #BC6969;
border-radius: 13px;
font-size: 20px;
color: white;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
margin-left: 2.2%;
`;

const GreenButton = styled.button`
width: 160px;
height: 47px;
background-color: #92BD99;
border-radius: 13px;
font-size: 20px;
color: white;
margin-right: 2.5%;
box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
`;

const TotalBuying = styled.h1`
font-family: 'Koulen';
font-style: normal;
font-weight: 400;
font-size: 36px;   
color: #79AA81;    
`;