import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMoviesInDb from './LastMoviesInDb';

const ContentRowTop = () => {
    let genres = ["Accion","Animacion","Aventura","Ciencia Ficcion", "Comedia","Documental", "Drama", "Fantasia", "Infantiles", "Musical"]
    return (
        <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
            
               <ContentRowMovies/>
    


                <div className="row">
                
                  <LastMoviesInDb peli = "Mandalorian" />
                {/* peli es una propiedad del componente */}
                   <GenresInDb
                   genres = {genres}/* a través de las props paso el array */
                   />
                </div>
            </div>
    );
}

export default ContentRowTop;
