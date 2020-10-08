import React from "react";
import './Reviews.css';

export default function Reviews({ reviews }) {
  return (
    <div className="ui cards review-card">
    {reviews.map((r) => 
      <div class="card" id="review">
        <div class="content" id="review">
          <div class="header">{r.author_name}</div>
          <div class="meta">{r.relative_time_description}</div>
          <div class="description">
           {r.text}
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
