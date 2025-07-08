"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectProps = {
  params: { slug: string };
};

const project = {
  title: "Face Recognition",
  description:
    "During Internship period, I designed two version of the face recognition functions, one is to run the facerecognition function through the webcam on the computer, and the other is to runtheface recognition function through the IP camera.",
  technologies: ["PYTHON AI", "SQL", "IP Camera", "Web Cam"],
  image: "/images/facerecognition.png",
  demo: "",
  github: "",
};

export default function ProjectDetails({ params }: ProjectProps) {
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
                In the PC webcam version is self learning version, when the code is run, the computer's webcam will open and a pop-up window will appear. When the detected face matches the face stored in the SQL database table, a green box and the user's name will be displayed on the user's face. This also means that the user has been successfully recognized.                
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
            <p className="text-center my-5">
                Few sample output
            </p>
            <br></br>
            <h2 className="text-2xl font-semibold">Second Version</h2>
            <p className="text-justify">
                The second version is the one that implements the face recognition function on the IP camera. When I first received this task, I started trying to connect the IP camera, andfinally found that I needed to connect the IP camera through an RTSP link. After I successfully connected the code on the computer to the IP camera, I started trying to execute the code I designed on the IP camera. But after many attempts, I concludedthat this function was too heavy for the IP camera, so I got stuck. Therefore, I divided this function into two parts, one for screenshots and the other for face recognition. 
            </p>
            <div className="space-y-3 text-base leading-relaxed">
                <p>Functional design:</p>
                <p>- When the IP camera detects a face, it will take a screenshot of each frame</p>
                <p>- The screenshots taken will be saved to a file.</p>
                <p>- Then, the second function will start, which will get all the images in that file to identify the detected face.</p>
                <p>- If the face has been saved in the database before, the name will be displayed, which is convenient for other functions such as recording or registration.</p>
                <p>- Both functions need to be run at the same time in this process to achieve real-time face recognition.</p>
            </div>
            <Image
              src="/images/facerecog3.png"
              alt="bicycle parking view"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto"
            />        
            <Image
                src="/images/facerecog4.png"
                alt="bicycle sql result"
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
