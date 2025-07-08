"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


type ProjectProps = {
  params: { slug: string };
};

const project = {
  title: "Education Management Application [Extracurricular]",
  description:
  "A mobile application designed to enhance student participation in extracurricular activities by offering real-time communication, certificate tracking, and performance monitoring — supporting both academic and personal development.",
  technologies: ["Flutter", "Firebase", "Mobile Application"],
  image: "/images/edutrack.png",
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
            <p className="text-muted-foreground text-justify mb-15">
                This system addresses the real-world challenge of low student engagement in extracurriculars by creating an inclusive platform that connects students, teachers, and administrators. It serves as a digital bridge toward the UN Sustainable Development Goal 4, promoting lifelong learning beyond traditional classrooms.
            </p>
            <h2 className="text-2xl font-bold text-center mb-12">Role-Based Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                <CardHeader>
                    <CardTitle>Admin</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc ml-4 text-muted-foreground space-y-1">
                    <li>Login / Logout</li>
                    <li>Create Group Chat</li>
                    <li>Manage User</li>
                    <li>Delete Activities</li>
                    <li>Post Announcements</li>
                    <li>Manage Announcements</li>
                    </ul>
                </CardContent>
                </Card>

                <Card>
                <CardHeader>
                    <CardTitle>Teacher</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc ml-4 text-muted-foreground space-y-1">
                    <li>Login / Logout</li>
                    <li>Forgot Password</li>
                    <li>Register</li>
                    <li>Edit Profile</li>
                    <li>Send Message in Group Chat</li>
                    <li>View Announcements</li>
                    <li>Create / Manage Activity</li>
                    <li>View Student Attendance</li>
                    <li>Create / Manage Certificate</li>
                    </ul>
                </CardContent>
                </Card>

                <Card>
                <CardHeader>
                    <CardTitle>Student</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc ml-4 text-muted-foreground space-y-1">
                    <li>Login / Logout</li>
                    <li>Forgot Password</li>
                    <li>Register</li>
                    <li>Edit Profile</li>
                    <li>Send Message in Group Chat</li>
                    <li>View Announcement</li>
                    <li>Join / Quit Activity</li>
                    <li>Manage To-Do Tasks</li>
                    <li>View Individual Attendance</li>
                    <li>View Certificate Comments</li>
                    </ul>
                </CardContent>
                </Card>
            </div>                            
            <div className="space-y-3 text-base leading-relaxed mt-15">
                <h2 className="text-2xl font-semibold">Tech Stack & Architecture : </h2>
                <p>- Frontend: Flutter</p>
                <p>- Backend & Realtime Sync: Firebase</p>
                <p>- Designed with Agile methodology, ensuring continuous testing, user feedback, and iterative improvements for higher system reliability.</p>
            </div>
            <h2 className="text-2xl font-semibold">Demo Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <video controls autoPlay muted className="w-full h-full object-cover">
                    <source src="/videos/demovideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </motion.div>
        <p className="mt-4 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-center mx-25">
            ⚠️ Note: This demo video may appear slightly laggy due to being recorded on an emulator.
        </p>
      </section>
    </>
  );
}
