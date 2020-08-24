import React from 'react'
import TableNotas from './TableNotas'
import Charts from './Charts'



function Home({ citas }) {

    const citasCerradas = citas.filter(cita => {
        return cita.done === true
    })

    const citasCriticas = citas.filter(cita => {
        return cita.priority === "Critical"
    })

    const citasNormal = citas.filter(cita => {
        return cita.priority === "Normal"
    })

    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Cantidad Notas</span>
                        <span className="info-box-number">{citas.length} <small>citas</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-green elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas cerradas</span>
                        <span className="info-box-number">{citasCerradas.length} <small>citas</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas criticas</span>
                        <span className="info-box-number">{citasCriticas.length} <small>citas</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-yellow elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas normales</span>
                        <span className="info-box-number">{citasNormal.length} <small>citas</small></span>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <div className="card-header border-0">
                        <h3 className="card-title">Notas</h3>
                    </div>
                    <div className="card-body p-1">
                        <TableNotas
                            citas={citas}
                        />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header border-0">
                        <h3 className="card-title">High chart 3 </h3>
                    </div>
                    <div className="card-body p-1">

                        <Charts>

                        </Charts>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
