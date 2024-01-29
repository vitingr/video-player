import VideoPreview from "@/components/VideoPreview";
import { VIDEOS_DATA } from "@/constants/videos";
import { VideoProps } from "@/types";
import Image from "next/image";
import React from "react";
import { SlLike, SlDislike, SlShare } from "react-icons/sl";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Home() {
  return (
    <section className="max-w-[1500px] w-full flex justify-between gap-16">
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <video className="rounded-md shadow-lg shadow-neutral-300 cursor-pointer" controls>
            <source src="/assets/video.mp4" type="video/mp4" />
            Erro ao reproduzir o vídeo
          </video>
          <h1 className="w-full font-bold text-xl mt-4">
            Construindo uma page de videos - Estudos Vitor
          </h1>
        </div>
        <div className="w-full py-4 flex justify-between">
          <div className="w-full flex gap-2 items-center">
            <img
              src="https://yt3.ggpht.com/ytc/AIf8zZRpkNLKF0ZFEF6uwMB5pRl_aevaJlVXvMOTvHVF=s68-c-k-c0x00ffffff-no-rj"
              alt="Channel Logo"  
              className="w-[32.5px] h-[32.5px] rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-base">Vitor Gabriel Silva</h1>
              <span className="text-[#717171] text-xs -mt-1">
                241 mil inscritos
              </span>
            </div>
          </div>
          <div className="flex justify-around mr-1 items-center bg-slate-200 p-2 rounded-full w-[250px]">
            <SlLike size={15} className="gray-icon cursor-pointer" />
            <SlDislike size={15} className="gray-icon cursor-pointer" />
            <SlShare size={15} className="gray-icon cursor-pointer" />
            <FaCloudDownloadAlt
              size={15}
              className="gray-icon cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-slate-100 p-6 w-full mt-2 rounded-xl text-sm text-justify flex flex-col gap-4">
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa iure
            repellendus dolorum commodi, assumenda ratione maiores debitis
            inventore illum ipsum tenetur! Perferendis magnam iste repudiandae,
            libero est magni harum quod. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Porro adipisci possimus laboriosam blanditiis
            facere illo quo, dolores vero rerum aliquid nesciunt amet omnis
            doloribus itaque odit quam, iste facilis temporibus?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            commodi voluptatibus sunt deleniti error repudiandae amet quam rem
            quibusdam. Nihil, optio sed at qui quae facilis doloremque repellat
            sapiente beatae.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            laboriosam doloremque, officiis reiciendis explicabo rerum iste
            harum incidunt eaque magni et quasi ullam unde, mollitia, voluptas
            fuga nihil omnis dolor. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia cum inventore distinctio laudantium error,
            doloribus dolorum accusamus repudiandae dolores magni optio autem
            labore excepturi voluptas fugiat minus harum ipsam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum adipisci esse minima vel, ullam illo excepturi? Quos deleniti minima natus recusandae iste nisi deserunt unde distinctio. Enim, debitis placeat.
          </p>
        </div>
        <div className="mt-6 w-full">
          <h1 className="text-lg font-bold">685 comentários</h1>
          <div className="flex gap-4 mt-4 items-center">
            <Image src={"/assets/user.png"} alt="User Image" width={40} height={40} className="rounded-full selection:bg-transparent" />
            <input type="text" name="comment" id="comment" placeholder="Publique um comentário" className="px-3 py-2 text-sm border-b border-slate-300 w-full outline-none" autoComplete="off" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[600px]">
        <div className="w-full rounded-xl h-[175px] border border-slate-200">
          <div className="h-[75px] w-full rounded-t-xl bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg)`}}></div>
          <div className="flex gap-4 p-6 items-center">
            <img src="https://yt3.ggpht.com/-kPp7Q9HemvXXn4yK8wbH9KFAvNeUTD6cCh1kmJRFE7GLtpdzIDhegtEfhcpa10xUyeKZUATvg=s88-c-k-c0x00ffffff-no-rj" alt="Picture" className="rounded-xl w-[50px] h-[50px] cursor-pointer selection:bg-transparent" />
            <div className="w-full">
              <h1 className="font-bold">Aprenda Javascript</h1>
              <p className="text-xs text-[#717171]">Patrocinado: @getulio.testes@gmail.com</p>
            </div>
            <div className="w-[200px] text-sm text-white bg-indigo-400 rounded-3xl cursor-pointer text-center px-4 py-2 transition-all duration-300 hover:bg-indigo-500">
              Saiba mais
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          {VIDEOS_DATA.map((video: VideoProps, index: number) => (
            <VideoPreview key={index} content={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
