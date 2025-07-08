"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const project = {
  title: "Face Recognition",
  description:
    "During the internship period, I designed two versions of the face recognition functions: one runs through the webcam on the computer, and the other runs the face recognition function through an IP camera.",
  technologies: ["PYTHON AI", "SQL", "IP Camera", "Web Cam"],
  image: "/images/facerecognition.png",
  demo: "",
  github: "",
};

export default function ProjectDetails() {
  const router = useRouter();

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
            <p className="text-muted-foreground text-justify">
              The PC webcam version is self-learning. When the code runs, the computer&apos;s webcam opens and a pop-up window appears. If the detected face matches a face stored in the SQL database table, a green box and the user&apos;s name are displayed on the user&apos;s face. This means the user has been successfully recognized.
            </p>
            <Image
              src="/images/facerecog1.png"
              alt="face recognition"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto"
            />
            <Image
              src="/images/facerecog2.png"
              alt="face recognition"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto"
            />
            <p className="text-center my-5">Few sample output</p>
            <h2 className="text-2xl font-semibold mt-10">Second Version</h2>
            <p className="text-justify">
              The second version implements the face recognition function using an IP camera. When I first received this task, I tried connecting the IP camera and discovered it required an RTSP link. After successfully connecting it, I attempted to execute my face recognition code directly on the IP camera. However, the process was too heavy for the camera to handle.
              <br />
              <br />
              So, I divided the function into two parts: one for taking screenshots and the other for face recognition.
            </p>

            <div className="space-y-3 text-base leading-relaxed">
              <p>Functional design:</p>
              <p>- When the IP camera detects a face, it takes a screenshot of each frame.</p>
              <p>- The screenshots are saved to a folder.</p>
              <p>- A second function runs, scanning all images in that folder to identify faces.</p>
              <p>- If a face exists in the database, the name is displayed — useful for recording or registration.</p>
              <p>- Both functions run simultaneously to support real-time face recognition.</p>
            </div>

            <Image
              src="/images/facerecog3.png"
              alt="IP camera screenshot"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto"
            />
            <Image
              src="/images/facerecog4.png"
              alt="SQL result display"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
