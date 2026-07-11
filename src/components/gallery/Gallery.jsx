import GalleryHeader from "./GalleryHeader";
import GalleryCard from "./GalleryCard";
import photos from "../../data/photos";

import { PhotoProvider } from "react-photo-view";
import Reveal from "../common/Reveal";

const Gallery = () => {
  return (
    <Reveal>
    <section
      id="gallery"
      className="py-32 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">

        <GalleryHeader />

        <PhotoProvider>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {photos.map((photo, index) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                index={index}
              />
            ))}

          </div>

        </PhotoProvider>

      </div>
    </section>
    </Reveal>
  );
};

export default Gallery;