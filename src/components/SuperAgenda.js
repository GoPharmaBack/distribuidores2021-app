import React from 'react'
import AgendaCam from './AgendaCam'
import AgendaCar from './AgendaCar'
import AgendaMx from './AgendaMx'
import AgendaPr from './AgendaPr'

function SuperAgenda() {
  return (
    <div className="contenedor-agendas">
     <AgendaCam/>
     <AgendaCar/>
     <AgendaPr/>
     <AgendaMx/>
    </div>
  )
}

export default SuperAgenda
