'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import FullScreenImage from './FullScreenImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectImageCarouselProps {
    images: string[];
    color: string;
}

const ProjectImageCarousel = ({ images, color }: ProjectImageCarouselProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="relative aspect-video w-full overflow-hidden group">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative aspect-video w-full cursor-zoom-in"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Project view ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                                <div className={`absolute inset-0 bg-${color}/10 
                                               hover:bg-${color}/0 transition-all duration-300`} />

                                {/* Indicateur de clic */}
                                <div className={`absolute bottom-4 right-4 text-sm font-cyber text-${color} 
                                               bg-cyber-dark/70 px-3 py-1 rounded opacity-0 
                                               group-hover:opacity-100 transition-opacity duration-300`}>
                                    Cliquez pour agrandir
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <FullScreenImage
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage}
            />
        </>
    );
};

export default ProjectImageCarousel;