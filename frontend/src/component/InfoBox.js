import React from 'react'

function InfoBox({text,number,bg = 'info'}) {
    return (
        <div className="info-box">
            <span className="info-box-icon bg-{bg} elevation-1"><i className="fas fa-cog" /></span>
            <div className="info-box-content">
            <span className="info-box-text">{text}</span>
                <span className="info-box-number">
                    {number}
                <small>%</small>
                </span>
            </div>
            {/* /.info-box-content */}
        </div>
    )
}

export default InfoBox
