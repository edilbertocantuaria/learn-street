import styled from "styled-components";
import Header from "../components/Header.js";
import RedButton from "../components/RedButton.js";
import GreenButton from "../components/GreenButton.js";

export default function CreateCoursePage() {
    return (
        <CreateCourseContainer>
            <Header></Header>
            <FormContainer>
                <InputSection>
                    <Field>
                        Título:
                    </Field>
                    <Input name="title"></Input>
                </InputSection>
                <InputSection>
                    <Field>
                        Preço:
                    </Field>
                    <Input name="price"></Input>
                </InputSection>
                <InputSection>
                    <Field>
                        Descrição:
                    </Field>
                    <Input name="description"></Input>
                </InputSection>
                <InputSection>
                    <Field>
                        Tema:
                    </Field>
                </InputSection>
                <ThemeSection>
                    <ThemeButton color="blue"></ThemeButton>
                    <ThemeButton color="red"></ThemeButton>
                    <ThemeButton color="yellow"></ThemeButton>
                    <ThemeButton color="green"></ThemeButton>



                </ThemeSection>
            </FormContainer>
            <Footer>
                <RedButton name="Cancelar"></RedButton>
                <GreenButton name="Anuncie seu curso"></GreenButton>
            </Footer>
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

const FormContainer = styled.div`
padding-top: 106px;
margin-bottom: 106px;
padding-left: 13px;
padding-right: 17px;
display: flex;
flex-direction: column;
align-items: center;
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


`
