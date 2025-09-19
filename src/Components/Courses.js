import React from "react";

function Courses() {
  return (
    <section id="courses" className="mt-10 bg-light shadow-sm"
  style={{ paddingTop: "100px",paddingBottom: "100px" }}>
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
          {/* Course 1 */}
          <div className="col-sm-6 col-lg-4">
            <div className="card h-100 border-0 shadow text-center p-3">
              <i className="bi bi-book text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">የመጽሐፍ ቅዱስ ጥናት</h5>
              <p className="text-muted">
                በመጽሐፍ ቅዱስ ውስጥ ያሉ ታሪኮችን፣ ትምህርቶችን እና መልእክቶችን በግልጽ መንገድ እንማራለን።
              </p>
            </div>
          </div>

          {/* Course 2 */}
          <div className="col-sm-6 col-lg-4">
            <div className="card h-100 border-0 shadow text-center p-3">
              <i className="bi bi-people text-success fs-1 mb-3"></i>
              <h5 className="fw-bold">የቤተክርስቲያን ታሪክ</h5>
              <p className="text-muted">
                ከመጀመሪያው ዘመን እስከ ዛሬ ቤተክርስቲያን የተሻለችበትን ታሪክ እንመለከታለን።
              </p>
            </div>
          </div>

          {/* Course 3 */}
          <div className="col-sm-6 col-lg-4">
            <div className="card h-100 border-0 shadow text-center p-3">
              <i className="bi bi-heart text-danger fs-1 mb-3"></i>
              <h5 className="fw-bold">መንፈሳዊ ጽሁፎች</h5>
              <p className="text-muted">
                የእምነት፣ የስነምግባር እና የመንፈሳዊ ሕይወት መሠረቶችን እንዲቆሙ ትምህርቶች እንሰጣለን።
              </p>
            </div>
          </div>

          {/* Course 4 */}
          <div className="col-sm-6 col-lg-4">
            <div className="card h-100 border-0 shadow text-center p-3">
              <i className="bi bi-music-note-beamed text-warning fs-1 mb-3"></i>
              <h5 className="fw-bold">የመዝሙር ትምህርት</h5>
              <p className="text-muted">
                በቤተክርስቲያን መዝሙሮችና ቅኔዎች ላይ ትምህርት በመስጠት የመዝሙር ችሎታ እንዲያገኙ እናግዛለን።
              </p>
            </div>
          </div>

          {/* Course 5 */}
         
          {/* Course 6 */}
         
        </div>
      </div>
    </section>
  );
}

export default Courses;
