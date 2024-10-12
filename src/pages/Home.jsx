import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../index.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotalPages] = useState(30);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePagination = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page, _limit: limit });
  };

  useEffect(() => {
    const pageParams = searchParams.get("page");
    if (pageParams) {
      setCurrentPage(parseInt(pageParams, 10));
    }
  }, [searchParams]);

  useEffect(() => {
    try {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    }
  }, [currentPage, limit]);

  return (
    <div className="xl:container mx-auto px-4 bg-[#E82677] w-full h-full flex justify-center">
      <div className="bg-white rounded-2xl mt-20 max-w-[1280px] pb-16">
        <div className="flex flex-col items-center gap-5 pt-20">
          <h1 className="font-medium font-sans text-4xl leading-8">
            Food Blog
          </h1>
          <p className="mt-5 mb-14 text-[#7D7878] font-mono max-w-[593px] text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur.
          </p>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mb-20">
          {data.length > 0 &&
            data.map((value) => (
              <div key={value.id}>
                <p>{value.id}</p>
                <img
                  className="rounded-lg"
                  src={
                    value.thumbnailUrl
                      ? value.thumbnailUrl
                      : "https://static01.nyt.com/images/2023/11/09/multimedia/09piesrex3-apple/09piesrex4-lemon-cqtk-superJumbo.jpg"
                  }
                  alt="thumbnail image"
                  width={255}
                  height={217}
                />
              </div>
            ))}
        </div>
        <ResponsivePagination
          current={currentPage}
          total={total}
          onPageChange={handleChangePagination}
          maxWidth={411}
        />
      </div>
    </div>
  );
}

export default Home;
