import React from "react";

const PlayList = ({ videosList, setCurrentVedio }) => {
  return (
    <div className="playlist">
      {videosList.map(vedio => {
        return (
          <div
            key={vedio.id}
            className="playlist__item"
            onClick={()=>setCurrentVedio(vedio)}
          >
            <div className="playlist__item__img">
              <img alt={vedio.title} src={vedio.url} />
            </div>
            <p className="playlist__item__title">{vedio.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
