import "./ContactInfo.css"

function ContactInfo() {
    return(
        <>
            <form>

                <div className="contactInfoContainer">
                    <div>
                        <fieldset>
                            <legend>Personliga uppgifter</legend>
                            <div className="inputContainer grid2x5">
                                <span>Kön</span>
                                <div className="radiobuttons">
                                    <label><input type="radio" name="gender" value="man" />Man</label>
                                    <label><input type="radio" name="gender" value="kvinna"/>Kvinna</label>
                                </div>

                                <span>Förnamn</span>
                                <input type="text"/>

                                <span>Efternamn</span>
                                <input type="text"/>

                                <span>Födelsedag</span>
                                <input type="date"/>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Kontakt</legend>
                            <div className="inputContainer grid2x2">
                                <span>E-postadress</span>
                                <input type="email"/>

                                <span>Mobiltelefon</span>
                                <input type="text"/>
                            </div>
                        </fieldset>
                    </div>

                    <div>
                        <fieldset>
                            <legend>Adressuppgifter</legend>
                            <div className="inputContainer grid2x7">
                                <span>C/O</span>
                                <input type="text"/>

                                <span>Gata</span>
                                <input type="text"/>

                                <span>Nummer</span>
                                <input type="text"/>

                                <span>Port</span>
                                <input type="text"/>

                                <span>Trappa</span>
                                <input type="text"/>

                                <span>Postnummer</span>
                                <input type="text"/>

                                <span>Ort</span>
                                <input type="text"/>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactInfo