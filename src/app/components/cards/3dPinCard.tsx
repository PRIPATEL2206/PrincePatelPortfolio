"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pinui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function AnimatedPinCard(
  {
    project,
    key
  }: {

    project:{linkTitle:string;
    link:string;
    title:string;
    about:string;
    image:StaticImport | string
  },
  key?:string
  }
) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center " key={key}>
      <PinContainer
        title= {project.linkTitle}
        href={project.link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {project.about}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
            <Image src={project.image} alt={project.title}/>
          </div>


        </div>
      </PinContainer>
    </div>
  );
}
