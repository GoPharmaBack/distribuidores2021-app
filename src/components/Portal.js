import React from 'react'



function Portal({closeModal}) {

  return (
    <div className="ModalBackground">
      <div  className="ModalContainer">
        <button onClick={()=> closeModal(false)}>x</button>
        <div className="imagen">
        <img src={""} alt="ponente" />
        </div>
        <div className="texto">
          <small>Director General LATAM</small>
          <h1 className="name">Piero Novello</h1>
          <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus incidunt, impedit ratione exercitationem a! Facere nam repellendus molestiae quae, tenetur aut eius consequatur quia dolores? Consequuntur iusto sequi nihil!</p>

        </div>
      </div>
      
    </div>
  )
}

export default Portal
