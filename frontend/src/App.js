import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppProvider from './context/AppProvider'
import styled from "styled-components"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CartPage from "./pages/CartPage"
import CreateCoursePage from "./pages/CreateCoursePage.js"
import CheckoutPage from "./pages/CheckoutPage.js"

export default function App() {
  /* <Route path="/cadastro" element={} /> 
 <Route path="/novo-curso" element={} />
<Route path="/carrinho" element={} />
 <Route path="/pagamento" element={} />
 <Route path="/home" element={<Home />} />*/

  return (

    <PagesContainer>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-course" element={<CreateCoursePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
