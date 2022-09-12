import React from "react";
import Metric from "./Metric";

const ContentRowMovies = () => {
  const data = [
    /* perteneciente a metric en el objeto */
    {
      color: "danger",
      title: "Movies in database",
      value: 21,
      icon: "fa-film",
    },
    {
      color: "warning",
      title: "Actors quantify",
      value: 49,
      icon: "fa-user",
    },
    {
      color: "success",
      title: "Total Awards",
      value: 79,
      icon: "fa-award",
    },
  ];
  return (
    <div className="row">
         {/*recorrer el array creado arriba */}
         {
            data.map(({color,title,value,icon},index) => <Metric color={color} title={title} value={value} icon={icon} key= {title + index}/>)
         }

     
    </div>
  );
};

export default ContentRowMovies;
