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
          <h3 className="text-4xl font-bold">Perkenalkan, saya Chaisal Farabi</h3>
          <p className="mt-4 text-l">
          Saya merupakan mahasiswa aktif Program Studi Sistem Informasi di UPN “Veteran” Jakarta, angkatan 2023. Saya memiliki ketertarikan besar dalam bidang product management dan analisis data.
          Berpengalaman dalam melakukan riset pengguna, pengembangan ide produk, serta perencanaan roadmap melalui berbagai proyek bootcamp. Terbiasa menggunakan tools seperti Google Sheets, SQL dasar, Canva, Trello, dan FigJam.
          Saat ini, saya terus mengembangkan kemampuan untuk bisa berkontribusi dalam menciptakan solusi digital yang berdampak dan relevan.
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
             MyLento adalah sebuah platform digital yang bergerak di bidang akademis, 
             bertujuan untuk memenuhi kebutuhan pelajar di Indonesia dalam memperdalam pemahaman mereka terhadap materi pembelajaran. 
             Platform ini dirancang untuk membantu siswa yang menghadapi kesulitan dalam memahami konsep-konsep tertentu di berbagai mata pelajaran, 
             seperti matematika, fisika, kimia, bahasa, dan lainnya. 
             MyLento menawarkan fitur interaktif di mana pelajar 
             dapat mengajukan pertanyaan dan mendapatkan jawaban langsung dari para ahli atau tutor berpengalaman. 
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
              CV Builder adalah aplikasi berbasis objek yang dirancang untuk membantu mahasiswa dan pencari kerja dalam menyusun Curriculum Vitae (CV) secara praktis, profesional, dan efisien.
              Aplikasi ini menyediakan berbagai template CV, fitur input data pribadi, serta kemampuan untuk mengedit, menyimpan,
              dan mengunduh CV dalam format siap pakai seperti PDF. 
              Menggunakan konsep Object-Oriented Programming (OOP) seperti enkapsulasi, pewarisan, dan polimorfisme untuk membuat aplikasi yang modular dan mudah dikembangkan.
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
             Commufy adalah aplikasi mobile yang mengintegrasikan berbagai moda transportasi publik dan ojek online untuk memberikan pengalaman perjalanan yang mudah, cepat, aman, dan efisien bagi para komuter urban. 
             Aplikasi ini hadir sebagai solusi atas kemacetan, kurangnya integrasi transportasi, 
             dan minimnya informasi perjalanan yang akurat di wilayah Jabodetabek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
