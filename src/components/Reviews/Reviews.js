import React from "react";
import './Reviews.css';

export default function Reviews({ reviews }) {
  return (
    <div className="ui cards review-card">
    {reviews.map((r) => 
      <div className="card" id="review" key={r.time}>
        <div className="content" id="review">
          <div className="header">{r.author_name}</div>
          <div className="meta">{r.relative_time_description}</div>
          <div className="description">
           {r.text}
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
