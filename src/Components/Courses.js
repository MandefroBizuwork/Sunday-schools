import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const categories = [
    { title: "የመጽሐፍ ቅዱስ ጥናት", icon: "bi bi-book text-primary" },
    { title: "የቤተክርስቲያን ታሪክ", icon: "bi bi-people text-success" },
    { title: "መንፈሳዊ ጽሁፎች", icon: "bi bi-heart text-danger" },
    { title: "የመዝሙር ትምህርት", icon: "bi bi-music-note-beamed text-warning" },
  ];

  return (
    <section id="courses" className="mt-10 bg-light shadow-sm"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">ትምህርቶች</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            በሰንበት ትምህርት ቤታችን ተማሪዎች ከመጽሐፍ ቅዱስ፣ ከቤተክርስቲያን ታሪክ፣
            ከመንፈሳዊ ትምህርቶች ጋር የተያያዘ እውቀት ይማራሉ።
          </p>
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {categories.map((cat, index) => (
            <div key={index} className="col-sm-6 col-lg-4">
              <Link to={`/courses/${encodeURIComponent(cat.title)}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow text-center p-3">
                  <i className={`${cat.icon} fs-1 mb-3`}></i>
                  <h5 className="fw-bold">{cat.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
