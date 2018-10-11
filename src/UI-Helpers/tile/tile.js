import React, { Component } from 'react';

import './tile.css';

const tile = (props) => {
    return (
        <div>
            <div className="tile">
                <div className="title-head">
                    <img className="card-img-top" src={props.tileImg} alt="Card image cap" />
                </div>
                <div className="tile-body">
                    <h4 className="tile-title">{props.tileTitle}</h4>
                    <hr />
                    <p className="tile-text">{props.tileSum}</p>
                    <a href="#!" className="watch-vid">
                        <p className="read-more">{props.btnTitle}
                            <i className="fa fa-angle-double-right"></i>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default tile;
