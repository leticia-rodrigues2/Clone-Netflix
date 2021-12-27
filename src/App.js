import React, { useEffect,useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header"
export default () =>{
  const [movieList , setMovieList] = useState([]);
  const [featureData , setFeatureData ] = useState(null);


  useEffect(() => {
      const loadAll = async () => {
        //Lista total
        let list = await Tmdb.getHomeList();
        console.log(list);
        setMovieList(list);
       // Pegar Feature para os destaque
       let originals = list.filter (i =>i.slug === 'originals')
        let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length -1));
        let chosen = originals[0].items.results[randomChosen];
        console.log(chosen)
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id ,'tv');
        setFeatureData(chosenInfo);
        console.log(chosenInfo)
            }
  loadAll();
  },[]);

  return(
  <div className="page">
    <Header/>

    {featureData && 
      <FeatureMovie item={featureData}/> 
    }
    
    <section className="lists">
      {movieList.map((item, key)=>
      <div>
        <MovieRow key={key} title ={item.title} items ={item.items}/>
      </div>
      )}
    </section>
    </div>
   );
}
