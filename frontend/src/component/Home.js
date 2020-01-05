import React from 'react'

function Home() {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Cantidad Notas</span>
                        <span className="info-box-number">1<small>%</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-green elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas cerradas</span>
                        <span className="info-box-number">2<small>%</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas criticas</span>
                        <span className="info-box-number">1<small>%</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                    <span className="info-box-icon bg-yellow elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Notas normales</span>
                        <span className="info-box-number">2<small>%</small></span>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header border-0">
                        <h3 className="card-title">Notas</h3>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped table-valign-middle">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Prioridad</th>
                                    <th>Fecha</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Some Product</td>
                                    <td><span className="badge bg-danger">Critical</span></td>
                                    <td>Some Product</td>
                                    <td>Some Product</td>
                                </tr>
                                <tr>
                                    <td>Some Product</td>
                                    <td><span className="badge bg-yellow">Normal</span></td>
                                    <td>Some Product</td>
                                    <td>Some Product</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
