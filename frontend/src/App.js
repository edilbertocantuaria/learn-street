import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignInPage"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={SignInPage} />
            {/* <Route path="/cadastro" element={} />
            <Route path="/home" element={} />
            <Route path="/novo-curso" element={} />
            <Route path="/carrinho" element={} />
            <Route path="/pagamento" element={} /> */}
          </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
