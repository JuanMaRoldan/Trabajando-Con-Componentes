import React from 'react';
import TableRow from './TableRow';

const Table = () => {
    const data = [
        {
            title : "Billy Elliot",
            length : 123,
            rating : 5,
            genres : ["drama","comedia"],
            awards : 2
        },
        {
            title : "Alicia in Wonderland",
            length : 142,
            rating : 4.8,
            genres : ["drama","accion","comedia"],
            awards : 3
        }
    ]
    return (
        <div className="container-fluid mb-4">
           <div className='card shadow'></div>
            <table className="table">
  <thead>
 
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Duracion</th>
      <th scope="col">Rating</th>
      <th scope="col">Generos</th>
      <th scope="col">Premios</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((movie,index) =>  <TableRow
        movie = {movie}
        key = {movie.title + index}
        />)
    }
  
  </tbody>
</table>
        </div>
    );
}

export default Table;
