import styled from "styled-components";
import Header from "../components/Header.js";
import RedButton from "../components/RedButton.js";
import GreenButton from "../components/GreenButton.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAppContext from "../hook/useAppContext.js";
import axios from "axios";

export default function CreateCoursePage() {
    const [form, setForm] = useState({ title: "", price: "", description: "" })
    const [theme, setTheme] = useState("");
    const [selectedTheme, setSelectedTheme] = useState(null);
    const { token } = useAppContext();
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleThemeButton(color) {
        setSelectedTheme(color);
        setTheme(color);
    }

    const config = {
        headers: {
            authorization: `${token}`,
        }
    }

    function handlePrice(p){
        const price = p.replace(",", ".");
        return parseFloat(price);
      }

    function handleCreateCourse(e) {
        e.preventDefault();

        if (theme === "") return alert("Você precisa selecionar um tema!");

        const formToApi = { ...form, price:handlePrice(form.price), theme };
        console.log(formToApi);

        axios.post(`${process.env.REACT_APP_API_URL}/courses`, formToApi, config)
            .then(res => {
                alert("Curso adicionado com sucesso!");
                navigate("/home");
            })
            .catch(err => {
                alert(err.response.data);
            })
    }

    return (
        <CreateCourseContainer>
            <Header></Header>
            <FormContainer onSubmit={handleCreateCourse}>
                <InputSection>
                    <Field>
                        Título:
                    </Field>
                    <Input
                        name="title"
                        placeholder="máximo de 30 caracteres"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleForm}></Input>
                </InputSection>
                <InputSection>
                    <Field>
                        Preço:
                    </Field>
                    <Input
                        name="price"
                        type="text"
                        required
                        value={form.price}
                        onChange={handleForm}></Input>
                </InputSection>
                <InputSection>
                    <Field>
                        Descrição:
                    </Field>
                    <Input
                        name="description"
                        placeholder="máximo de 100 caracteres"
                        type="text"
                        required
                        value={form.description}
                        onChange={handleForm}></Input>
                </InputSection>
                <InputSection>
                    <ThemeField>Tema:</ThemeField>
                    <ThemeSection>
                        <ThemeButton type="button" color="blue" onClick={() => handleThemeButton("blue")} selected={selectedTheme === "blue" ? true: false}></ThemeButton>
                        <ThemeButton type="button" color="red" onClick={() => handleThemeButton("red")} selected={selectedTheme === "red" ? true : false}></ThemeButton>
                        <ThemeButton type="button" color="yellow" onClick={() => handleThemeButton("yellow")} selected={selectedTheme === "yellow" ? true : false}></ThemeButton>
                        <ThemeButton type="button" color="green" onClick={() => handleThemeButton("green")} selected={selectedTheme === "green" ? true : false}></ThemeButton>
                    </ThemeSection>
                </InputSection>
                <Footer>
                    <RedButton name="Cancelar" onClick={() => navigate("/home")}></RedButton>
                    <GreenButton name="Anuncie seu curso" type="submit"></GreenButton>
                </Footer>
            </FormContainer>
        </CreateCourseContainer>
    )
}

const CreateCourseContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: #c3cdc1;
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

const FormContainer = styled.form`
height:calc(100vh - 176px);
padding-top: 106px;
margin-bottom: 106px;
padding-left: 13px;
padding-right: 17px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 16px;
`

const InputSection = styled.div`
display:flex;
flex-direction: column;
text-align: left;
`

const Field = styled.h1`
    color: #79AA81;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
`


const Input = styled.textarea`
    margin-top:16px;
    width: 345px;
    display: ${({ name }) => (name === 'description' ? 'block' : 'flex')};
    resize: ${({ name }) => (name === 'description' ? 'none' : 'none')};
    height: ${({ name }) => (name === "description" ? "103px" : "44px")};
    align-items: ${({ name }) => (name !== 'description' ? 'center' : 'flex-start')};
    padding: ${({ name }) => (name === "description" ? "5px" : "10px")};
    padding-left: 10px;    
    border-radius: 11px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    font-size: 20px;
`;

const ThemeField = styled.h1`
    color: #79AA81;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin-right:290px;
    padding-bottom: 16px;
`

const ThemeSection = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:17px;
`

const ThemeButton = styled.button`
    width:72px;
    height:72px;
    border-radius:36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    background-color: ${({ color }) => (color === "blue" ? "#706FCF" : (color === "red" ? "#CF6F9D" : (color === "yellow" ? "#CFB46F" : "#2EB73C")))};
    border:${({selected}) => (selected === true ? "3px solid #04ff00" : "")}

`
//   border-width: ${(props) => props.inCart === true ? "3px" : "0px"};