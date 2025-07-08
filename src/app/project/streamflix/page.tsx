"use client";

import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const images = [
  "/images/streamflix2.png",
  "/images/streamflix3.png",
  "/images/streamflix4.png",
  "/images/streamflix5.png",
  "/images/streamflix6.png",
  "/images/streamflix11.png",
];

const admin = [
    "/images/streamflix7.png",
    "/images/streamflix8.png",
    "/images/streamflix9.png",
    "/images/streamflix10.png",
  ];



const project = {
  title: "Streamflix",
  description:
    "StreamsFlix is a cloud-based video streaming platform built using AWS architecture. The frontend, developed with Next.js, communicates with a backend hosted on Amazon EC2, which handles application logic and API requests. User data and video metadata are securely stored in Amazon RDS. In the second phase, Amazon S3 was integrated to manage media assets like video files, thumbnails, and titles, ensuring scalable, cost-effective, and high-performance content delivery. This setup mirrors real-world practices, providing insights into building efficient, media-rich applications using AWS cloud services.",
  technologies: ["Next Js", "ASP.Net", "Amazon S3", "RDS", "EC2"],
  image: "/images/streamflix.png",
  demo: "",
  github: "",
};

export default function ProjectDetails() {
  const router = useRouter();
  const [userCurrent, setUserCurrent] = useState(0);
  const [adminCurrent, setAdminCurrent] = useState(0);

  const nextUserSlide = () => {
    setUserCurrent((prev: number) => (prev + 1) % images.length);
  };
  
  const prevUserSlide = () => {
    setUserCurrent((prev: number) => (prev - 1 + images.length) % images.length);
  };
  const nextAdminSlide = () => {
    setAdminCurrent((prev: number) => (prev + 1) % admin.length);
  };
  
  const prevAdminSlide = () => {
    setAdminCurrent((prev: number) => (prev - 1 + admin.length) % admin.length);
  };
  

  return (
    <>
      {/* Fixed Back Button */}
      <button
        onClick={() => router.push("/#projects")}
        className="fixed top-6 left-6 z-50 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-muted/70 bg-background"
        aria-label="Back"
      >
        <ArrowLeft className="w-5 h-5 text-primary" />
      </button>

      <section className="container pt-16 pb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full rounded-xl object-cover shadow-md mb-10"
          />

          <p className="text-lg text-muted-foreground mb-6 text-justify">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="px-4 py-1.5 bg-muted rounded-full text-sm font-medium border"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Extra Explanation Section */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-semibold">Project Details</h2>
            <p>User Features :</p>
            <div className="relative w-full max-w-2xl mx-auto mt-6">
                <Image
                    src={images[userCurrent]}
                    alt={`User Slide ${userCurrent + 1}`}
                    width={800}
                    height={500}
                    className="rounded-xl shadow-md object-cover w-full h-auto"
                />

                <button
                    onClick={prevUserSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
                    aria-label="Previous"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={nextUserSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
                    aria-label="Next"
                >
                    <ChevronRight />
                </button>

                <div className="text-center mt-4 text-sm text-muted-foreground">
                    Image {userCurrent + 1} of {images.length}
                </div>
            </div>
            <p>Admin Features :</p>
            <div className="relative w-full max-w-2xl mx-auto mt-6">
                <Image
                    src={admin[adminCurrent]}
                    alt={`Admin Slide ${adminCurrent + 1}`}
                    width={800}
                    height={500}
                    className="rounded-xl shadow-md object-cover w-full h-auto"
                />

                <button
                    onClick={prevAdminSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
                    aria-label="Previous"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={nextAdminSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition"
                    aria-label="Next"
                >
                    <ChevronRight />
                </button>

                <div className="text-center mt-4 text-sm text-muted-foreground">
                    Image {adminCurrent + 1} of {admin.length}
                </div>
                </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
