import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { AutomaticPrefetchPlugin } from "webpack";



const DetailsElement = () => {
	const { type, id } = useParams();
	console.log(type, id)
	const { store } = useContext(Context);
	const [objectArray, setObjectArray] = useState(null);


	useEffect(() => {
		const arraySelected =
			type === "people" ? store.charactersLearnMore
				: type === "planets" ? store.planetsLearnMore
					: type === "vehicles" ? store.vehiclesLearnMore
						: [];

		if (arraySelected && arraySelected.length > 0) {
			const foundObject = arraySelected.find((object) => object.id === parseInt(id));
			console.log(foundObject);
			if (foundObject) {
				setObjectArray(foundObject);
			}
		}
	}, []);
	if (!objectArray) {
		return <div>Vista no disponible!! en reparacion...</div>;
	}

	return (
		<div className="container-fluid py-1 px-0" style={{
			 minHeight: " 100vh" ,
			 backgroundImage: `url("https://preview.redd.it/5od2h1d35bs21.jpg?auto=webp&s=ea7d5ee1dd584bcd3182829181c9311eb7e171b2")`,
			 padding: 0,
			 backgroundSize:"cover",
			 backgroundPosition: "top",
			 }}>
			<div className="card border-0 d-flex flex-column" 
				style={{ width: "100%", 
					     minHeight: "100%", 
						 backgroundColor: "rgba(255, 255, 255, 0.7)",  // Fondo translúcido
    					 backdropFilter: "blur(10px)",  // Desenfoque para efecto glass
    					 borderRadius: "15px",  // Bordes redondeados para mayor elegancia
    					 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Sombra para darle profundidad
    					 border: "1px solid rgba(255, 255, 255, 0.3)",
						 overflow: "hidden"
						}}>
				<div className="row g-0" style={{ height: "100%" }}>
					<div className="col-12 col-md-7">
						{/* Ajustamos el contenedor de la imagen */}
						<div className="px-0 flex-grow-1" >
							<img
								src={objectArray.url_img}
								className="img-fluid rounded"
								alt={objectArray.name}
								style={{
									width: "100%", // Asegura que la imagen ocupe todo el ancho del contenedor
									flex: "1 0 auto", // Asegura que la imagen ocupe el espacio disponible en el contenedor
									objectFit: "cover", // Ajusta la imagen para cubrir el área del contenedor
								}}
							/>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<p>
									<strong style={{ fontWeight: "bold", marginRight: "2px", fontSize: "0.75rem" }}>Darth Vader</strong>
									<span style={{ fontWeight: "lighter", fontSize: "0.75rem" }}>in film Star Wars: Episode IV - A New Hope.</span>
								</p>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 px-0" style={{ borderRight: "4px solid black", width: "100%" }}>
							<h5 className="card-title fs-4 text-center fst-italic"><strong>Caracteristicas Principales:</strong></h5>
							<div className="row">
								<div className="col-md-3" style={{ borderRight: "4px solid black", maxWidth: "20%" }}>
									<p className="text-center fst-italic"> Force Side</p>
								</div>
								<div className="col-md-3 " style={{ borderRight: "4px solid black", maxWidth: "20%" }}>
									<p className="text-center fst-italic">Type Warrior</p>
								</div>
								<div className="col-md-3 " style={{ borderRight: "4px solid black", maxWidth: "20%" }}>
									<p className="text-center fst-italic">Parents</p>
								</div>
								<div className="col-md-3 " style={{ borderRight: "4px solid black", maxWidth: "20%" }}>
									<p className="text-center fst-italic">Teacher</p>
								</div>
								<div className="col " 
								style={{ borderRight: "4px solid black", 
								maxWidth: "18%",
								flex: "0 0 22%"}}>
									<p className="text-center fst-italic">Age</p>
								</div>
						</div>
					</div>
					
				</div>
				<div className="col-12 col-md-5" style={{ minHeight: "100%" }}>
						<p className="text-center fs-2 fst-italic">{objectArray.name}</p>
						<div>
							<p className="fs-5 fst-light"
							style={{textAlign: "justify"}} 
							>{objectArray.descripcion}</p>
						</div>
						<div className="col-12 col-sm-12" 
						style={{ 
							
								width: "100%", // Ajusta el ancho al 100%
							 // Relación de aspecto 16:9 (ajústala según prefieras)
							 }}>
							<p className=" text-center fs-3 fst-italic">Starship favourite</p>
							<div className="px-0 m-auto">
								<img
									src={rigo-baby}								
									alt={objectArray.name}
									style={{
									width: "70%", // Asegura que la imagen ocupe todo el ancho del contenedor
									height: "20%",
									// Asegura que la imagen ocupe el espacio disponible en el contenedor
									objectFit: "cover", // Ajusta la imagen para cubrir el área del contenedor
									display: "block",
                    				margin: "0 auto"
									
								}}
								>
								
								</img>
							</div>
							
						</div>
					</div>
			</div>
		</div>
	</div>
	)
};
export default DetailsElement;
