import "./navbar.css"

function Navbar() {
    return(
        <>
            <div className="navbarContainer">
                <img src="/public/contacts_logo.png" width="40"/>
                <div className="logoText">Contacts</div>
                <ul>
                    <li>Skapa kontakt</li>
                    <li>Lista kontakter</li>
                    <li>Sök kontakt</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar