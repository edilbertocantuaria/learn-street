import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/Home"
import SignInPage from "./pages/SignInPage"
import CreateCoursePage from "./pages/CreateCoursePage.js"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage/>} />
            {/* <Route path="/cadastro" element={} /> */}
            <Route path="/home" element={<Home/>} />
            <Route path="/create-course" element={<CreateCoursePage/>} />
            {/*<Route path="/carrinho" element={} />
            <Route path="/pagamento" element={} /> */}
          </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
