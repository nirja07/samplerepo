import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      
      <div className="card-header">
        <h2 className="card-title">Nirja Raut</h2>
        <p className="card-subtitle">React Component</p>
      </div>
      

      <div className="card-content">
        <p className="card-text">
          This is a reusable React component with its own CSS styling. 
          eg4etgrd rthgt fh hrh gtr hthjyy  thb thb   dhbgt dbg dv  rgt r gvbg trb vr gr b 
        </p>

        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">CSS</span>
          <span className="tag">UI</span>
        </div>
      </div>

      <div className="card-footer">
        <button className="card-button">Explore More</button>
      </div>

    </div>
  );
}

export default Card;