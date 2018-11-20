import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate-html';

import './tile.css';
import NoImage from '../../img/no-image.png';

const tile = (props) => {

    function separateVideoAndPictureTypes() {
        if (props.tileImg.slice(-1) == 4) {
            return (
                <img className="image" src={NoImage} alt="Card Image" />
            )
        } else return (<img className="image" src={props.tileImg} alt="Card Image" />);
    }

    function routeVideoAndPictureProperly() {
        if (props.tileImg.slice(-1) == 4) {
            return (
                <Link
                    to={{
                        pathname: "/videos-details",
                        data: {
                            tileVid: props.tileImg,
                            tileTitle: props.tileTitle,
                            tileSum: props.tileSum,
                            tileView: props.tileViews
                        }
                    }}
                    className="watch-vid">
                    <p className="read-more">{props.btnTitle}
                        <i className="fa fa-angle-double-right"></i>
                    </p>
                </Link>
            )
        } else return (
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
        );
    }

    return (
        <div>
            <div className="tile">
                <div className="title-head">
                    {separateVideoAndPictureTypes()}
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
                    {routeVideoAndPictureProperly()}
                </div>
            </div>
        </div>
    )
}
export default tile;
