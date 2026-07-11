import { motion } from "framer-motion";
import { PhotoView } from "react-photo-view";

const rotations = [-8, 7, -5, 9, -6, 5];

const GalleryCard = ({ photo, index }) => {
  return (
    <PhotoView src={photo.image}>
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotate: rotations[index % rotations.length],
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: rotations[index % rotations.length],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
        }}
        whileHover={{
          rotate: 0,
          y: -15,
          scale: 1.08,
        }}
        className="group cursor-pointer"
      >
        <div className="bg-white rounded-3xl p-4 shadow-2xl">

          <img
            src={photo.image}
            alt=""
            className="rounded-2xl h-80 w-full object-cover"
          />

          <p className="text-center text-gray-700 mt-4 opacity-0 group-hover:opacity-100 duration-500">
            {photo.caption}
          </p>

        </div>
      </motion.div>
    </PhotoView>
  );
};

export default GalleryCard;