import React, { useEffect,useState } from "react";
import Tmdb from "../../Tmdb";
import MovieRow from "../../components/MovieRow";
import './home.css'
import FeatureMovie from "../../components/FeatureMovie";
import Header from "../../components/Header"
export default () =>{
  const [movieList , setMovieList] = useState([]);
  const [featureData , setFeatureData ] = useState(null);
  const [blackHeader, setBlackHeader] = useState (false);

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
// Nav Bar regra para quando deve ficar transparente 
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return()=> {
      window.removeEventListener('scroll' , scrollListener);
    }
  }, []);

  return(
  <div className="page">
    <Header black= {blackHeader}/>

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

        <footer>
          Feito com ♥ pela B7Web - 
          Replicado por Leticia Rodrigues ♥ -
          Direitos de imagem para netflix - 
          Dados pegos do site TheMoviedb.org 
        </footer>
    </div>
   );
}
