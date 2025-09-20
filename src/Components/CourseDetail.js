import React from "react";
import { useParams, Link } from "react-router-dom";

const courseContent = {
  "የመጽሐፍ ቅዱስ ጥናት": [
    { title: "ክፍል 1 - መጽሐፍ ቅዱስ ታሪክ", slug: "bible-history" },
    { title: "ክፍል 2 - መልእክቶች እና ትምህርቶች", slug: "bible-lessons" },
  ],
  "የቤተክርስቲያን ታሪክ": [
    { title: "ከመጀመሪያው ዘመን እስከ ዛሬ", slug: "church-history" },
  ],
  "መንፈሳዊ ጽሁፎች": [
    { title: "የእምነት መሠረት", slug: "faith-basics" },
    { title: "የስነምግባር መሠረት", slug: "ethics-basics" },
  ],
  "የመዝሙር ትምህርት": [
    { title: "ቤተክርስቲያን መዝሙሮች", slug: "church-songs" },
    { title: "ቅኔዎች እና ምሳሌዎች", slug: "hymns-poems" },
  ],
};

export default function CourseDetail() {
  const { Category } = useParams();
  const decodedCategory = decodeURIComponent(Category);
  const content = courseContent[decodedCategory] || [];

  return (
    <section className="container my-5" style={{padding:"100px 0"}}>
      <h2 className="text-center mb-4 fw-bold text-primary">{decodedCategory}</h2>
      {content.length > 0 ? (
        <ul className="list-group shadow-sm">
          {content.map((item, index) => (
            <li key={index} className="list-group-item">
              <Link
                to={`/courses/${encodeURIComponent(decodedCategory)}/${item.title}`}
                className="text-decoration-none text-dark"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted">መረጃ አልተገኘም</p>
      )}
    </section>
  );
}
