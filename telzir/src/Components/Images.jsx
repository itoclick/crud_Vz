import React from "react";
import Fm30 from '../images/FM30.png' 
import Fm60 from '../images/FM60.png'
import Fm120 from '../images/FM120.png'

export default  function images() {
  return (
    <div className="all_images">
      <img src={Fm30} alt="imagem do plano fale mais 30 minutos" />
      <img src={Fm60} alt="imagem do plano fale mais 60 minutos" />
      <img src={Fm120} alt="imagem do plano fale mais 120 minutos" />
    </div>
  )  
}

