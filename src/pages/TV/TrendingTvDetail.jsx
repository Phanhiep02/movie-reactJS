import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrailerTv } from "../../services/TvMovieService";
import SimilarMovieTv from "../../components/SimilarMovieTv";

export default function TrendingTvDetail() {
  const { id } = useParams();
  const [trendingTrailerDetailTv, setTrendingTrailerDetailTv] = useState([]);
  const getTrailer = async () => {
    const data = await getTrailerTv(id);
    setTrendingTrailerDetailTv(data);
  };
  useEffect(() => {
    getTrailer();
  }, [id]);
  console.log(trendingTrailerDetailTv);

  const trailerTrendingTv = trendingTrailerDetailTv?.slice(0, 3);
  console.log(trailerTrendingTv);

  return (
    <>
      {trailerTrendingTv.length <= 0 ? (
        <h2 className=" container mx-auto text-3xl font-medium">
          Unfortunately the movie doesn't have a trailer yet
        </h2>
      ) : (
        trailerTrendingTv?.map((trailer) => {
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
      <SimilarMovieTv id={id}></SimilarMovieTv>
    </>
  );
}
