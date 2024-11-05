import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import logo_starwars from "../../img/starwars_logo_1_sf2.png"

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const location	=useLocation();

	const navbarBg = location.pathname.includes("/detailsElement")
? "https://preview.redd.it/5od2h1d35bs21.jpg?auto=webp&s=ea7d5ee1dd584bcd3182829181c9311eb7e171b2"
: location.pathname.includes ("/homeBlog")
? "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/02/existe-tierra-universo-peliculas-series-star-wars-3269769.jpg?tf=3840x"	
: logo_starwars;

return (
	<div style={{
		position: "relative", // Asegura que el fondo y el navbar estén posicionados correctamente
		width: "100%",
		height: "13vh",
		backgroundImage: `url(${navbarBg})`, // Imagen de fondo en el contenedor externo
		backgroundSize: "cover",
		backgroundPosition: "top", // Posiciona la imagen en la parte superior
	}}>
		<nav className="navbar navbar-light"
			style={{
				position: "fixed", // Posiciona el navbar sobre el fondo
				top: 0,
				left: 0,
				width: "100%",
				height: "14vh",
				backgroundColor: "rgba(255, 255, 255, 0.1)", // Capa semitransparente
				backdropFilter: "blur(5px)", // Efecto glass
				WebkitBackdropFilter: "blur(10px)", // Compatibilidad con WebKit
				zIndex: 50,  // Mantiene el navbar sobre el fondo
				padding: 0, // Elimina padding adicional del navbar
				display: "flex",
				justifyContent: "space-between", // Distribuye espacio entre elementos
				alignItems: "center", // Alinea verticalmente los elementos del navbar
			}}>
			<Link to="/homeBlog">
				<span className="navbar-brand" 
					style={{
						width: "10rem", // Tamaño del logo
						height: "4rem", 
						backgroundImage: `url(${logo_starwars})`, // Logo de Star Wars
						backgroundSize: "cover",
						backgroundPosition: "center",
						display: "inline-block"
					}}
				></span>	
			</Link>
			
			<div className="ml-auto me-5">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" 
						type="button" 
						id="dropdownMenuButton1" 
						data-bs-toggle="dropdown" 
						aria-expanded="false">
						Favorite
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((characterFavorite, index) => (
							<li key={index}>
								<div className="dropdown-item d-flex justify-content-between align-items-center">
									{characterFavorite}
									<i className="bi bi-trash3-fill ms-5 ps-4" 
										onClick={() => actions.deleteFavorite(characterFavorite)} 
									></i>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	</div>
);
}
export default Navbar;