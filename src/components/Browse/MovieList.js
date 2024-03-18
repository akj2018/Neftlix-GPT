import MovieCard from "./MovieCard";

import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <IoIosArrowForward
      onClick={onClick}
      className={className}
      style={{
        ...style,
        height: "100%",
        color: "white",
        transition: "background-color 0.3s",
        zIndex: 2,
      }}
      radius={"2px"}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)")
      } // Change background color on hover
      onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <IoIosArrowBack
      onClick={onClick}
      className={className}
      style={{
        ...style,
        height: "100%",
        color: "white",
        transition: "background-color 0.3s",
        zIndex: 2,
      }}
      radius={"2px"}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)")
      } // Change background color on hover
      onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
    />
  );
}

var settings = {
  dots: false,
  infinite: true,
  vertical: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 5,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MovieList = ({ title, listData }) => {
  if (!listData) return null;

  return (
    <div className="flex flex-col py-5">
      <p className="text-[0.8rem] font-semibold text-white lg:text-[1.3rem]">
        {title}
      </p>
      <div className="px-12 pt-4">
        {listData.length >= 3 ? (
          <Slider {...settings}>
            {listData.map((movieItem) => {
              const { id, title, poster_path } = movieItem;
              return (
                <MovieCard key={id} imgFilePath={poster_path} title={title} />
              );
            })}
          </Slider>
        ) : (
          <div className="w-full lg:h-[18rem]">
            {listData.map((movieItem) => {
              const { id, title, poster_path } = movieItem;
              return (
                <MovieCard key={id} imgFilePath={poster_path} title={title} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
