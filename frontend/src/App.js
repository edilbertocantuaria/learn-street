import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppProvider from './context/AppProvider'
import styled from "styled-components"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import CreateCoursePage from "./pages/CreateCoursePage.js"

export default function App() {

  /* <Route path="/cadastro" element={} /> 
 <Route path="/novo-curso" element={} />
<Route path="/carrinho" element={} />
 <Route path="/pagamento" element={} />
 <Route path="/home" element={<Home />} />*/

  return (
    <AppProvider>
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-course" element={<CreateCoursePage />} />

          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </AppProvider>
  )
}

const PagesContainer = styled.main`
  
`
