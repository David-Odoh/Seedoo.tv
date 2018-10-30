import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';

import './tile.css';

const tile = (props) => {
    return (
        <div>
            <div className="tile">
                <div className="title-head">
                    <img className="card-img-top" src={props.tileImg} alt="Card image cap" />
                </div>
                <div className="tile-body">
                    <TextTruncate
                        className="tile-title"
                        line={1}
                        truncateText="…"
                        text={props.tileTitle}
                    />
                    <hr />
                    <TextTruncate
                        className="tile-text"
                        line={3}
                        truncateText="…"
                        text={props.tileSum}
                    />
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
