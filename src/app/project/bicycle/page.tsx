"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const project = {
  title: "Bicycle Project",
  description:
    "Bicycle Project uses the YOLOv10 AI package to detect bicycle parking slot occupancy. If a bicycle is present, the slot is marked as occupied; otherwise, it is empty. The AI system sends real-time parking status updates to the company's SQL Server.",
  technologies: ["PYTHON AI", "SQL", "JUPYTER", "YOLOv10"],
  image: "/images/bicycle.jpeg",
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
            <h2 className="text-2xl font-semibold">How It Works</h2>
            <p className="text-muted-foreground text-justify">
                Bicycle Project is a project that uses yolov10 AI package to detect parking slot
                situations. If there is a bicycle parked in the parking space, our application will
                display occupied, otherwise it will display empty. Therefore, the AI function is responsible for transmitting the accurate parking slot situation to the company SQL server, I have almost completed this function.
            </p>
            <p>
                This functionality needs to be performed by two functions, the first function is to set
                the parking space location for different parking areas, and the second function is the main function, which is to detect empty parking spaces.
            </p>
            <Image
              src="/images/bicycle1.png"
              alt="bicycle parking view"
              width={1000}
              height={600}
              className="rounded-xl shadow-md mx-auto"
            />        
            <p className="text-center my-5">This is the real parking situation</p>
            <Image
                src="/images/bicyclesql.png"
                alt="bicycle sql result"
                width={200}
                height={80}
                className="rounded-xl shadow-md mx-auto"
            />
            <p className="text-center my-5"> This is the result in the SQL table</p>
            <p className="text-muted-foreground text-justify">
                After capturing real-time data from the scene via cameras and storing it in the database, the mobile application frontend dynamically updates and displays the current status of bicycle parking availability across different zones. This ensures users receive accurate, up-to-date information to make informed parking decisions.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
