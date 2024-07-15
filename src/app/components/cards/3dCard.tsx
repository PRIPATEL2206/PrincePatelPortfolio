"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ThreeDCard(
  { experience
  }: {
    experience: {
      company: string,
      year: string,
      role: string,
      about: string,
      logo: string | StaticImport
    }
  }
) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">


        <div className="flex justify-between">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {experience.company}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm  text-black dark:text-white"
          >
            {experience.year}
          </CardItem>
        </div>
        <br />

        <div className="flex justify-center items-center">
          <CardItem
            translateZ="50"
            className="text-3xl font-bold  text-black dark:text-white"
          >
            <div>
              {experience.role}
            </div>
            <div className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {experience.about}
            </div>
          </CardItem>
          <CardItem translateZ="100" className="ml-10">
            <Image
              src={experience.logo}
              className="object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>


      </CardBody>
    </CardContainer>
  );
}
