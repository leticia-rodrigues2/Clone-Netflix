import React from "react";
import './FeatureMovie.css'
export default ({item}) =>{
  return (
  <section className="featured" style={{
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundImage: `url (https://image.tmdb.org/t/p/original0${item.backdrop_path})`
    }}>

  </section>
  )
}