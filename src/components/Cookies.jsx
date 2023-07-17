import React, { useEffect, useState } from "react";

function Cookies() {

    const [showCookie, setshowCookie] = useState(true)

    const acceptCookie = () => {
        localStorage.setItem("accept", "true")
        setshowCookie(false)
    }

    useEffect(() => {
        const cookieSaved = localStorage.getItem("accept")
        cookieSaved === "true" ?
            setshowCookie(false) : setshowCookie(true)

    }, [])


    return (
        <>
            {showCookie && (
                <div className="cookies-msg">
                    <div className="cookies-text" >
                        <p>Este site utiliza cookies de navegação para melhor experiência do usuário.<br />
                            <a href="/termo"> Saiba mais</a>
                        </p>

                        <div className="cookies-button" onClick={acceptCookie}>
                            <button>Aceito</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cookies;