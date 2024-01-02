import React from "react";
//import "../styles/"
//./Franquicia.html
const Sidebar = ({}) => {
    return (
        <div class="sidebar">
        <ul>
            <li>
                <a href="./#">
                    <span class="icon"><i class="fa-solid"></i></span>
                    <span class="text">Inicio</span>
                </a>
            </li>
            <li>
                <a href="./#">
                    <span class="icon" style="background-image: url('../iconos/espada-de-luz.png');"><i class="fa-solid"></i></span>
                    <span class="text">Franquicias</span>
                </a>
            </li>
            <li>
                <a href="./#">
                    <span class="icon" style="background-image: url('../iconos/anime.png');"><i class="fa-solid"></i></span>
                    <span class="text">Anime</span>
                </a>
            </li>
            <li>
                <a href="./#">
                    <span class="icon" style="background-image: url('../iconos/palanca-de-mando.png');"><i class="fa-solid"></i></span>
                    <span class="text">Videojuegos</span>
                </a>
            </li>
            <li>
                <a href="./Pintering.html">
                    <span class="icon" style="background-image: url('../iconos/cepillo-de-pintura.png');"><i class="fa-solid"></i></span>
                    <span class="text">Pintering</span>
                </a>
            </li>
            <li>
                <a href="./LogIn.html" style>
                    <span class="icon" style="background-image: url('../iconos/boton-cuadrado.png');"></span>
                    <span class="text">Log in</span>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar;