import React, { useEffect, useState } from 'react';
import './news-style.css';

const NewsPage = () => {
    const [initialInews, setUpdatedNews] = useState([]);
    useEffect(() => {
        fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=0c347eeea1bf4ac78502cedcf7c06aad`,
          {
            method: "GET",
            headers: new Headers({
              Accept: "application/json"
            })
          }
        )
          .then(res => res.json())
          .then(response => {
            setUpdatedNews(response.articles);
          })
          .catch(error => console.log(error));
      }, []);

      const imageClick = (url, shouldOpenNewTab) => shouldOpenNewTab ? window.open(url, "_blank") : window.location.href = url;

    
    return (
        <div className="main-container">
           { initialInews.map((val, i) => 
                    <div className="item-container" key={i}>
                      <div className="div-width">
                          <button className="btn-style" key={i} onClick={() => imageClick(val.url, true)}>
                              <img alt='' className="img-style" src={val.urlToImage} />
                          </button>
                      </div>
                      <div className="div-width">
                          <h3 className="title-style"><b>{ val.title }</b></h3>
                          <div className="des-style">
                              <a href={val.url} rel = "noopener noreferrer" target="_blank">
                                {val.description}
                              </a>
                          </div>
                      </div>
                    </div>
                )
            }
        </div>
    )
}

export default NewsPage;