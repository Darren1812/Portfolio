"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Linkedin, Mail, GraduationCap, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Bicycle Project",
      description: "Bicycle Project uses the YOLOv10 AI package to detect bicycle parking slot occupancy. If a bicycle is present, the slot is marked as occupied; otherwise, it is empty. The AI system sends real-time parking status updates to the company SQL Server.",
      technologies: ["PYTHON AI", "SQL", "JUPYTER", "YOLOv10"],
      github: "#",
      demo: "/project/bicycle", 
      image: "/images/bicycle.jpeg",
    },
    {
      title: "Face Recognition",
      description: "I developed a face recognition system in two versions: one using a PC webcam and the other using an IP camera. In the webcam version, the system captures live video, detects faces, compares them with entries in an SQL database, and displays a green box with the user's name upon a successful match. For the IP camera version, I connected the device via an RTSP link. Since real-time processing was too heavy for the camera, I split the functionality into two parts: the IP camera captures screenshots, while the computer handles face recognition.",
      technologies: ["PYTHON AI", "SQL", "IP Camera", "Web Cam"],
      github: "#",
      demo: "/project/facerecognition", 
      image: "/images/facerecognition.png",
    },
    {
      title: "Streamflix",
      description: "StreamsFlix is a cloud-based video streaming platform built using AWS architecture. The frontend, developed with Next.js, communicates with a backend hosted on Amazon EC2, which handles application logic and API requests. User data and video metadata are securely stored in Amazon RDS. In the second phase, Amazon S3 was integrated to manage media assets like video files, thumbnails, and titles, ensuring scalable, cost-effective, and high-performance content delivery. This setup mirrors real-world practices, providing insights into building efficient, media-rich applications using AWS cloud services.",
      technologies: ["Next Js", "ASP.Net", "Amazon S3", "RDS", "EC2"],
      github: "#",
      demo: "/project/streamflix", 
      image: "/images/streamflix.png",
    },
    {
      title: "Education Management Application [Extracurricular]",
      description: "The Smart Education Management System is a user-friendly platform designed to boost student engagement in extracurricular activities through real-time notifications, certificate tracking, and group messaging. By combining gamification and digital certification, it encourages active participation, supports lifelong learning aligned with SDG 4, and enhances communication between students, teachers, and administrators. Built with Flutter and Firebase, the system ensures cross-platform compatibility and real-time updates, while agile development ensured continuous improvement.",
      technologies: ["Flutter", "Firebase", "Mobile Application"],
      github: "#",
      demo: "/project/edutrack", 
      image: "/images/edutrack.png",
    },
  ]

  const skills = {
    "SKILL SET": ["Java", "JavaScript", "Python", "C#", "TypeScript", "HTML", "CSS", "JS", "Flutter", "Android Studio", "Microsoft SQL", "PostgreSQL", "Firebase"],
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const} }
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex" style={{marginLeft: 30}}>
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Darren Wong Chyn Chen</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end" style={{marginRight: 40}}>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" onClick={() => scrollToSection('about')} className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" onClick={() => scrollToSection('skills')} className="hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ marginTop: "70px" , marginBottom: "50px" }}>
              Hello, I&apos;m <br></br><span className="text-primary">Darren Wong Chyn Chen</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-lg md:text-xl" style={{ fontSize: "18px" }}>
              Fresh Graduate Software Engineer passionate about creating innovative solutions and building impactful
              applications.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>BSc (Hons) Software Engineering • Asia Pacific University</span>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section id="about" className="container py-24 bg-gray-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Hi, I&apos;m Darren Wong, a passionate and detail-oriented Software Engineering graduate from Asia Pacific University. I enjoy building modern, user-focused applications — from responsive web platforms to interactive mobile apps.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During my studies and internship, I gained hands-on experience in full-stack development, cloud deployment, and AI integration. I&apos;ve worked with tools and frameworks like Flutter, Next.js, ASP.NET, and AWS, and I love seeing applications come to life — step by step — through clean, functional code.               
                </p>
                <p>
                  I&apos;m especially interested in frontend design, mobile app development, and creating seamless user experiences. I&apos;m always eager to learn, experiment with new technologies, and contribute to real-world solutions that make a difference.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">BSc (Hons) Software Engineering</p>
                      <p className="text-sm text-muted-foreground">Asia Pacific University</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-extrabold tracking-tight text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card className="overflow-hidden border border-gray-200 shadow-sm rounded-xl transition-all duration-300">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          className="border-white text-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/10 hover:shadow-lg"
                          asChild
                        >
                          <Link
                            href={project.demo}
                            aria-label="Open Project"
                          >
                            OPEN
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-justify">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Skills Section */}
      <section
        id="skills"
        className="flex items-center justify-center min-h-screen py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="w-full">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-center text-white mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-1 sm:gap-x-6 lg:gap-x-24 mx-auto w-full max-w-6xl px-4">
          {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-8 py-6 rounded-2xl bg-gradient-to-br from-gray-700/40 to-gray-600/20 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold tracking-wide mb-5 text-white flex items-center justify-center text-center">
                  <Code className="mr-3 h-6 w-6 text-primary" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I&apos;m currently looking for new opportunities and would love to hear from you. Whether you have a question or
            just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="tel:+601133321237"
              className="flex flex-col items-center space-y-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-8 w-8" />
              <span className="text-sm">+60 11-3332-1237</span>
            </Link>
            <Link
              href="mailto: darrenwong512@gmail.com"
              className="flex flex-col items-center space-y-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
              <span className="text-sm">darrenwong512@gmail.com</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/darren-wong-5a6b2a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-primary-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span className="text-sm">LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-sm text-gray-400">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Darren Wong Chyn Chen.</p>
        </div>
      </footer>
    </div>
  );
}
