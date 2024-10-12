//react
import { useState, useEffect } from "react";
// css
import "./index.css";
// pagination
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(8);
  const handleChangePagination = (e)=> {
    setCurrentPage(e)
  }
  useEffect(() => {
    try {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_pages${currentPage}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    }
  }, [currentPage]);

  return (
    <div className="xl:container mx-auto px-4 bg-[#E82677] w-full h-full flex justify-center">
      <div className="bg-white rounded-2xl mt-20 max-w-[1280px] pb-16">
        <div className="flex flex-col items-center gap-5 pt-20">
          <h1 className="font-medium font-sans text-4xl leading-8">Food Blog</h1>
          <p className="mt-5 mb-14 text-[#7D7878] font-mono max-w-[593px] text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur.
          </p>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mb-20">
          {data.length > 0 &&
            data.map(function (value, index) {
              return (
                <img
                  className="rounded-lg"
                  src={
                    value.thumbnailUrl
                      ? value.thumbnailUrl
                      : "https://static01.nyt.com/images/2023/11/09/multimedia/09piesrex3-apple/09piesrex4-lemon-cqtk-superJumbo.jpg"
                  }
                  alt="humbnail image"
                  width={255}
                  height={217}
                />
              );
            })}
        </div>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={handleChangePagination}
          maxWidth={411}
        />
      </div>
    </div>
  );
}

export default App;
