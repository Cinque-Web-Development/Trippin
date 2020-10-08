import React from "react";

export default function Reviews({ reviews }) {
  return (
    <div className="ui cards">
    {reviews.map((r) => 
      <div class="card">
        <div class="content">
          <div class="header">{r.author_name}</div>
    <div class="meta">{r.relative_time_description}</div>
          <div class="description">
           {r.text}.
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
