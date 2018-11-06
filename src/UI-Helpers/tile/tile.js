import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate-html'

import './tile.css';

const tile = (props) => {
    return (
        <div>
            <div className="tile">
                <div className="title-head">
                    <img className="card-img-top" src={props.tileImg} alt="Card image cap" />
                </div>
                <div className="tile-body">
                    <Truncate
                        lines={2}
                        portrait={1}
                        responsive={false}
                        dangerouslySetInnerHTML={{
                            __html: `${props.tileTitle}...`
                        }}
                        className="tile-title"
                    />
                    <hr />
                    <Truncate
                        lines={4}
                        portrait={4}
                        responsive={false}
                        dangerouslySetInnerHTML={{
                            __html: `${props.tileSum}`
                        }}
                    />
                    <Link
                        to={{
                            pathname: "/news-details",
                            data: {
                                tileImg: props.tileImg,
                                tileTitle: props.tileTitle,
                                tileSum: props.tileSum
                            }
                        }}
                        className="watch-vid">
                        <p className="read-more">{props.btnTitle}
                            <i className="fa fa-angle-double-right"></i>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default tile;
