import { Carousel } from "@material-tailwind/react";
 
export default function Slider() {
  return (
    <Carousel
      className="pt-2 pb-2  bg-red-800"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img style={{height:'600px'}}
        src="https://www.hdcarwallpapers.com/walls/2018_rolls_royce_raith_luminary_collection_4k-HD.jpg"
        alt="image 1"
        className="w-full object-cover"
      />
      <img style={{height:'600px'}}
        src="https://mediapool.bmwgroup.com/cache/P9/201912/P90379109/P90379109-the-million-stitch-rolls-royce-phantom-2248px.jpg"
        alt="image 2"
        className=" w-full object-cover"
      />
      <img style={{height:'600px'}}
        src="https://www.pixel4k.com/wp-content/uploads/2018/03/Rolls%20Royce%20Phantom%20EWB%202017%204K540584510.jpg"
        alt="image 3"
        className=" w-full object-cover"
      />
    </Carousel>
  );
}