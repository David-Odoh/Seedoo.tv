import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate-html';

import './listItem.css';
import NoImage from '../../img/no-image.png'

const ListItem = (props) => {

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
            <div className="listItem">
                <div className="list-wrapper">
                    <div className="image-section">
                        {separateVideoAndPictureTypes()}
                    </div>
                    <div className="text-section">
                        <div className="title">{props.tileTitle}</div>
                        <div className="category"></div>
                        <hr />
                        <Truncate
                            lines={5}
                            portrait={4}
                            responsive={false}
                            dangerouslySetInnerHTML={{
                                __html: `${props.tileSum}...`
                            }}
                            className="summary"
                        />
                        <div className="bottom-section">
                            <div className="views">
                                <span>Views: </span>&nbsp;
                                <div>{props.tileViews}</div>
                            </div>

                            {routeVideoAndPictureProperly()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListItem;
