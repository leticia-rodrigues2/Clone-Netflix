import React from "react";
import './contas.css'
import Header from "../../components/Header";
export default () => {
  return (
 <header className="user">
    <div className="header--logo">
      <a>
        <img src = "https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png" alt="netflix"/>
      </a>
    </div>
    <div className="header--user-contas">
        <section>     <h1> Quem está assistindo ? </h1>
          <a href="/">
            <img src ="https://i.pinimg.com/originals/c2/a8/97/c2a89710d195937bc865a5dacaed0d69.jpg" />
          </a>
          <a href="/">
            <img src ="https://www.accessorize.com.br/wp-content/uploads/2021/08/fotos-para-perfil-whastapp-3.jpg"/>
          </a>
          <a href="/">
            <img src ="http://pm1.narvii.com/6400/61f183c00ce994bdbbb4a4220956d716707b0a1d_00.jpg"/>
          </a>
          <a href="/">
            <img src ="https://i.pinimg.com/564x/da/ff/c3/daffc381180fd5c892fda45ca80111c8.jpg"/>
          </a>
        </section>
   
    </div>

  </header>
  )
}