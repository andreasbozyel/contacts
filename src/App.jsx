import Navbar from "./components/navibar/Navbar.jsx";
import ContactInfo from "./components/contact-info/ContactInfo.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
        <header><Navbar/></header>
        <main>
            <ContactInfo />
        </main>
        <footer><Footer/></footer>
    </>
  )
}

export default App
