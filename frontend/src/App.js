import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
// import SignInPage from "./pages/SignInPage"
import Home from "./pages/Home"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={SignInPage} />
            <Route path="/cadastro" element={} /> */}
            <Route path="/" element={<Home/>} />
            {/* <Route path="/novo-curso" element={} />
            <Route path="/carrinho" element={} />
            <Route path="/pagamento" element={} /> */}
          </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
