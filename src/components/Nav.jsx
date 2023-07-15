import React from "react";
import Logo from '../assets/img/logo.svg'

function Nav() {
    return (
        <div>
            <header>
                <div>
                    <img className="logo" src={Logo}/>
                </div>
            <nav>
                <a href="/">Projeto</a>
                <a href="/as">História</a>
                <a href="/ad">Blog</a>
                <a href="/af">Dúvida</a>
            </nav>
            </header>
            <div className="line">
            </div>
        </div>
    );
    // return (
    //     <div class="menu-mobile">
    //         <nav>
    //             <a href="#">Projeto</a>
    //             <a href="#">História</a>
    //             <a href="#">Blog</a>
    //             <a href="#">Dúvida</a>
    //         </nav>
    //     </div>
    // )
}

export default Nav;