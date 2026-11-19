import React from 'react'
import { InfiniteMovingAnimation } from '../ui/infinite-moving-animation'

function InfiniteMovingCard(
    { items,
        direction = "left",
        speed = "normal",
        pauseOnHover = true,
        className,
     }: {
        items: {
            quote: string;
            name: string;
            title: string;
            title2: string;
            year: string;
        }[];
        direction?: "left" | "right";
        speed?: "fast" | "normal" | "slow";
        pauseOnHover?: boolean;
        className?: string;
    }
) {
    return (
        <InfiniteMovingAnimation
        direction = {direction}
        speed = {speed}
        pauseOnHover ={pauseOnHover}
        className={className}
        >

            {items.map((item, idx) => (
                <li
                    className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-gray-200 dark:border-slate-700 px-8 py-6 md:w-[450px]"
                    style={{
                        background: "linear-gradient(180deg, var(--slate-800, #f8fafc), var(--slate-900, #f1f5f9))",
                    }}
                    key={item.name}
                >
                    <blockquote>
                        <div
                            aria-hidden="true"
                            className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                        ></div>
                        <div className="  flex flex-row items-center mb-5">
                            <span className=" text-sm leading-[1.6] text-gray-700 dark:text-gray-400 font-normal">
                                {item.name}
                            </span>
                            <span className=" text-sm leading-[1.6] ml-auto text-gray-700 dark:text-gray-400 font-normal">
                                {item.year}
                            </span>
                        </div>
                        <span className=" relative z-20 text-sm leading-[1.6] text-gray-800 dark:text-gray-100 font-normal">
                            {item.quote}
                        </span>
                        <div className="relative z-20 mt-6  flex flex-row  self-end">
                            <span className="flex flex-col gap-1">

                                <span className=" text-sm leading-[1.6] text-gray-700 dark:text-gray-400 font-normal">
                                    {item.title}
                                </span>
                                <span className=" text-sm leading-[1.6] text-gray-700 dark:text-gray-400 font-normal">
                                    {item.title2}
                                </span>
                            </span>
                        </div>
                    </blockquote>
                </li>
            ))}
        </InfiniteMovingAnimation>

    )
}

export default InfiniteMovingCard;
