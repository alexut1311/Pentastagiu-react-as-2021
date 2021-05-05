import React from 'react'
import PropTypes from 'prop-types';
import "./styles.css";

export default function VideoContainer({element}) {
    console.log(element.title)
  return (
    <>
    <div className="video-container">
            <h4>{element.title}</h4>
            <p>{element.session}</p>
            <iframe
              width="560"
              height="315"
              src={element.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
    </>
  );
}
VideoContainer.propTypes = {

}