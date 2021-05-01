import React from "react";
import './styles.css';
import VideoContainer from '../video-container';

export default function Main({videoList}) {
    console.log(videoList)
  return (
    <main>
      <section>
        <div className="list-header">
          <h3>React course with Cassidy Williams</h3>
        </div>
        <div className="list-container">
        {videoList.map((videoContaier, index) => {
            return <VideoContainer key={index} element={videoContaier}/>
        })}
        </div>
      </section>
    </main>
  );
}