import React from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ProductScreen from "./screens/ProductScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CartScreen from "./screens/CartScreen.jsx"
import Homescreen from "./screens/Homescreen"
import LoginScreen from "./screens/LoginScreen.js"
import RegisterScreen from "./screens/RegisterScreen.jsx"
import ProfileScreen from "./screens/ProfileScreen.js"
import ShippingScreen from "./screens/ShippingScreen.jsx"
import PaymentScreen from "./screens/PaymentScreen.jsx"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={Homescreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
