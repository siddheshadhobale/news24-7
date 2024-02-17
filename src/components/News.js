import React, { Component } from 'react'

export class News extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,DateandTime,source}=this.props;
    return (
      <div>
        <div className="card my-4" style={{width: "20rem"}} >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger "style={{left: '50%',zIndex:'1'}}>{source}</span>
        <img src={!imageUrl?"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                
                <p className="card-text"><small className="text-muted">Date|Time: {new Date(DateandTime).toGMTString()}</small></p>
                <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default News
