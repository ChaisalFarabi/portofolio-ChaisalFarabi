"use client";

import { Button } from "@/components/ui/button";
import Aurora from "@/components/blocks/Backgrounds/Aurora/Aurora";
import Image from "next/image";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import * as React from "react";
import TiltedCard from "@/components/blocks/Components/TiltedCard/TiltedCard";
import ScrollVelocity from "@/components/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import BounceCards from "@/components/blocks/Components/BounceCards/BounceCards";


export default function Home() {
  const images = [
    "/mylento1.jpg",
    "/mylento2.jpg",
    "/mylento3.jpg",
    "/mylento4.jpg",
    "/mylento5.jpg",
  ];

  const cvBuilderImages = [
    "/CVBuilder1.jpg",
    "/CVBuilder2.jpg",
    "/CVBuilder3.jpg",
    "/CVBuilder4.jpg",
    "/CVBuilder5.jpg",
  ];

  const commufyImages = [
    "/commufy1.jpg",
    "/Commufy2.jpg",
    "/Commufy3.jpg",
    "/Commufy4.jpg",
    "/Commufy5.jpg",
  ];
    const clusteringImages = [
    "/clustering1.jpg",
    "/clustering2.jpg",
    "/clustering3.jpg",
    "/clustering4.jpg",
    "/clustering5.jpg",
  ];
      const AnalysisImages = [
    "/Analysis1.jpg",
    "/Analysis2.jpg",
    "/Analysis3.jpg",
  ];

    const runaddictsImages = [
    "/runaddicts1.png",
    "/runaddicts2.png",
];
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#483AA0", "#7965C1", "#FAFFCA"]}
          amplitude={0.2}
          blend={0.6}
        />
      </div>
      <div
        id="profile"
        className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-20 md:pl-20 gap-20"
      >
        <TiltedCard
          imageSrc="/ChaisalFarabi.jpg"
          altText="Chaisal Farabi"
          captionText="Chaisal Farabi"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={22}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text w-full text-center border-2 rounded-2xl bg-transparent mx-w-[250px]">
              Chaisal Farabi
            </p>
          }
        />
        <div className="flex flex-col items-start justify-center max-w-lg">
          <h3 className="text-4xl font-bold">Hi i&apos;m Chaisal Farabi</h3>
          <p className="mt-4 text-l">
I am an active 5th-semester student in the Information Systems Study Program at UPN "Veteran" Jakarta, class of 2023. 
I have a strong interest in product management and data analysis, with hands-on experience in conducting user research, developing product ideas, and planning product roadmaps through various bootcamp projects. 
I am also familiar with tools such as Google Sheets, basic SQL, Canva, Trello, and FigJam. 
Currently, I am continuously developing my skills to contribute to the creation of impactful and user-relevant digital solutions.
          </p>
          <div className="flex gap-4 text-center items-center justify-center">
            <Button className="mt-6" variant="default">
              Contact
            </Button>
            <p className="mt-6 font-bold">0822-1075-9896</p>
            <p className="mt-6 font-bold">chaisal.farabi@gmail.com</p>
          </div>
          <div className="flex mt-4 gap-4">
            <a href="https://www.linkedin.com/in/chaisal-farabi-7101a5288/">
              <Image
                src={"/linkedin.png"}
                alt={"linkedin"}
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/ChaisalFarabi">
              <Image
                src={"/github.png"}
                alt={"github"}
                width={50}
                height={50}
              />
            </a>
            
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="w-full flex flex-col items-center justify-center p-4 min-h-screen"
      >
        <h2 className="text-2xl font-semibold ">Skills</h2>
        <RollingGallery autoplay={true} pauseOnHover={false} />
      </div>
      <div id="Projects" className="py-20">
        <ScrollVelocity
          texts={["My Projects", "Scroll Down"]}
          className="custom-scroll-text"
        />
      </div>

      <div
        id="Projects"
        className="w-full flex flex-col items-center justify-center p-6 md:p-20 min-h-screen"
      >
        <div className="max-w-[80%] mx-auto">
          {/* Mylento Project */}
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-center">MyLento</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
            <p className="mt-4">
        MyLento is a digital platform focused on academics, aiming to meet the needs of Indonesian students to deepen their understanding of learning materials.
        This platform is designed to help students who struggle with specific concepts in various subjects, such as mathematics, physics, chemistry, languages, and more. 
        MyLento offers interactive features where students can ask questions and receive direct answers from experts or experienced tutors.
            </p>
          </div>
          {/* CV Builder Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">CV Builder</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={cvBuilderImages}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
            CV Builder is an object-based application designed to help students and job seekers create a curriculum vitae (CV) practically, professionally, and efficiently.
            This application provides various CV templates, personal data input features, and the ability to edit, save,
            and download CVs in ready-to-use formats like PDF.
            It utilizes Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, and polymorphism to create a modular and easily extensible application.
            </p>
          </div>
          {/* Commufy Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">Commufy</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={commufyImages}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
            Commufy is a mobile application that integrates various public transportation modes and online motorcycle taxis to provide an easy, fast, safe, and efficient travel experience for urban commuters.
            This application is designed to address traffic congestion, lack of transportation integration,
            and the lack of accurate travel information in the Greater Jakarta area.
            </p>
          </div>
          {/* Clustering Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">Clustering Analysis of Employee Absenteeism using K-Means and DBSCAN</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={clusteringImages}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
          Conducting clustering analysis on employee absence data using the “Absenteeism at Work” dataset from UCI, by applying the K-Means and DBSCAN algorithms. 
          This project includes data loading, EDA, preprocessing, feature selection, and visualization of clustering results using PCA. 
          The results show that K-Means with 3 clusters (determined through the Elbow Method) produces the best segmentation based on Silhouette Score (0.407) and DBI (0.932), while DBSCAN is effective in identifying outliers (cluster -1).
            </p>
          </div>
          {/* Analysis Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">Predictive Analysis of Employee Productivity Based on Digital Behavior using Decision Tree and Random Forest</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={AnalysisImages}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
          Building a predictive model using the “Social Media vs Productivity” dataset from Kaggle to analyze how daily digital habits affect work productivity. 
          The model was built using Decision Tree and Random Forest algorithms, where Random Forest provided the best performance with R² = 0.777 and MSE = 0.795. Feature importance analysis showed that job_satisfaction_score was the most dominant factor in predicting productivity, 
          followed by variables such as sleep hours and duration of social media use.
            </p>
          </div>
          {/* rundaddicts Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">Project Management Design for Runaddicts Application Development</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={runaddictsImages}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
          Developed a project management plan for the Runaddicts application, a digital platform designed for runners, coaches, and event organizers. 
          The planning involved creating a Gantt Chart and Work Breakdown Structure (WBS) covering five main phases: project planning, UI/UX design, development of MVP and extended features (Event, Program, Shop, Coaching, CRM), testing & QA, and launch. 
          The project was managed using the Agile Scrum approach and aimed to deliver an integrated solution that combines race events, training programs, sports equipment marketplace, coaching services, and community management in a single platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
