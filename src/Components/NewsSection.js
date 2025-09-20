import React, { useState, useMemo } from "react";
import { Modal, Button } from "react-bootstrap";
import "../Styles/NewsSection.css"
import L1 from "../Assets/1.jpg"
import L2 from "../Assets/2.jpg"
import L3 from "../Assets/3.jpg"
import L4 from "../Assets/k.jfif"


/**
 * NewsSection - አዲስ መረጃዎች
 * - Search, Category Filter, Pagination
 * - Article Modal
 */

const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: "የእድል እና መንፈሳዊ ስርአት ክስተት",
    excerpt: "በዚህ ጊዜ ተማሪዎች በመንፈሳዊ ትምህርቶች ላይ ተሳትፈዋል...",
    content:
      "ዝርዝር ጽሑፍ — ይህ የእድል እና መንፈሳዊ ስርአት ክስተት በትምህርት ቤታችን የተደረገ ሲሆን ተማሪዎች ለተለያዩ እምነታዊ እና ባህላዊ ጉዳዮች እውቀት አግኝተዋል።",
    image:L1,
    category: "ክንውን",
    date: "2025-09-12T10:00:00Z",
  },
  {
    id: 2,
    title: "እምነታዊ ክፍሎች ለጀማሪዎች",
    excerpt: "አዲስ ኮርስ የተጀመረ — የመንፈሳዊ መርማሪያ ለጀማሪዎች...",
    content:
      "ዝርዝር ጽሑፍ — እንኳን ደህና መጡ፤ ይህ ኮርስ የጥናት ማዕከል እና የመማር መንገድ ነው።",
    image:L2,
    category: "ትምህርት",
    date: "2025-09-01T08:30:00Z",
  },
  {
    id: 3,
    title: "የመዝሙር ደረጃ ማስተካከያ",
    excerpt: "በመዝሙር ክፍል አዲስ ማስተካከያዎች ተደርጓል...",
    content:
      "ዝርዝር ጽሑፍ — የመዝሙር አቅምን ለማሳደግ እንቅስቃሴ የተዘጋጅቷል።",
    image:L3,
    category: "መዝሙር",
    date: "2025-08-25T16:15:00Z",
  },
   {
    id: 4,
    title: "የመዝሙር ደረጃ ማስተካከያ",
    excerpt: "በመዝሙር ክፍል አዲስ ማስተካከያዎች ተደርጓል...",
    content:
      "ዝርዝር ጽሑፍ — የመዝሙር አቅምን ለማሳደግ እንቅስቃሴ የተዘጋጅቷል።",
    image:
      L4,
    category: "መዝሙር",
    date: "2025-08-25T16:15:00Z",
  },
];

const PAGE_SIZE = 3;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("am-ET", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(SAMPLE_ARTICLES.map((a) => a.category));
    return ["ሁሉንም", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let arr = SAMPLE_ARTICLES.slice().sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    if (category !== "ሁሉንም") arr = arr.filter((a) => a.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q)
      );
    }
    return arr;
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategory = (c) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <section
      id="news"
      className="bg-white shadow-sm"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Title */}
      <div className="container text-center mb-5">
        <h2 className="fw-bold">ዜናዎች፣ ወቅታዊ ክንውኖች እና ልዩ ልዩ ይዘቶች</h2>
      </div>

      {/* Search & Filter */}
      <div className="container mb-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="newssearch">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="ፈልግ..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <select
              className="form-select"
              value={category}
              onChange={(e) => handleCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container">
        <div className="row g-4">
          {pageItems.length === 0 && (
            <div className="col-12">
              <div className="alert alert-info text-center">
                ምንም መረጃ አልተገኘም።
              </div>
            </div>
          )}

          {pageItems.map((a) => (
            <div key={a.id} className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow border-0">
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-100"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <div className="mb-2 d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary">{a.category}</span>
                    <small className="text-muted">{formatDate(a.date)}</small>
                  </div>

                  <h5 className="card-title">{a.title}</h5>
                  <p className="card-text text-muted">{a.excerpt}</p>

                  <div className="mt-auto">
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => setSelected(a)}
                    >
                      ተጨማሪ እይ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  ቀዳሚ
                </button>
              </li>

              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <li
                    key={n}
                    className={`page-item ${n === page ? "active" : ""}`}
                  >
                    <button className="page-link" onClick={() => setPage(n)}>
                      {n}
                    </button>
                  </li>
                );
              })}

              <li
                className={`page-item ${page === totalPages ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  ቀጣይ
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal */}
      <Modal show={!!selected} onHide={() => setSelected(null)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <>
              <img
                src={selected.image}
                alt={selected.title}
                className="img-fluid rounded mb-3"
              />
              <div className="mb-2">
                <span className="badge bg-primary me-2">{selected.category}</span>
                <small className="text-muted">{formatDate(selected.date)}</small>
              </div>
              <p>{selected.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelected(null)}>
            መዝገብ
          </Button>
          <Button variant="primary" onClick={() => setSelected(null)}>
            እንደ ሙሉ ጽሑፍ
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
