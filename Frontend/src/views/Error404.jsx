import React from "react";
import {Link} from 'react-router-dom';
import "./Error404.css"
import e404 from "../assets/img/png/404.png";
import AppHeader from "../components/client/appHeader/appHeader";
export default function Error404(){
    return(
            <div>
                <AppHeader />
                <section id="err404">
                <div className="containerError404">
                <div className="errorText">
                    Page
                    <div>
                        Not Found
                    </div>
                    <div id="errorText">
                    Es posible que el enlace que seleccionaste esté dañado o que se haya eliminado de la página.

                    <p>Intenta con un enlace válido</p>
                    <button type="button"> 
                    </button>
                    </div>
                </div>
                <div className="imgError">
                    <img src={e404}
                    alt="ERROR 404 IMG" />
                </div>
            </div>
            </section>
            </div>
    )
}