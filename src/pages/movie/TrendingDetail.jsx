import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Similar from "../../components/SimilarMovie";
import { getPopularTrailer } from "../../services/MovieService";

export default function TrendingDetail() {
  const { id } = useParams();
  const [trendingTrailerDetail, setTrendingTrailerDetail] = useState([]);
  const getTrailer = async () => {
    const data = await getPopularTrailer(id);
    setTrendingTrailerDetail(data);
  };
  useEffect(() => {
    getTrailer();
  }, [id]);

  const trailerTrending = trendingTrailerDetail?.slice(0, 3);

  return (
    <>
      {trailerTrending.length <= 0 ? (
        <h2 className=" container mx-auto text-3xl font-medium">
          Unfortunately the movie doesn't have a trailer yet
        </h2>
      ) : (
        trailerTrending?.map((trailer) => {
          return (
            <div key={trailer.id}>
              <div className="container mx-auto mt-10">
                <h2 className="text-3xl font-medium">{trailer.type} Trailer</h2>
                <div className="mt-6">
                  <iframe
                    style={{ height: "600px" }}
                    className="w-full"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })
      )}
      {/* similar */}
      <Similar id={id}></Similar>
    </>
  );
}
