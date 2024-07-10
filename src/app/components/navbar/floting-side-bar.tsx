import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

function FlotingSideBar({
    icons
}: {
    icons: {
        icon: string | StaticImport,
        alt: string,
        to:string
    }[]
}) {
    return (
        <div className="fixed bottom-0 left-24 -translate-x-1/2 flex flex-col justify-center items-center pt-10 rounded-t-3xl">
            {icons.map((icon,id) =>
                <a href={icon.to} key={""+id}>
                    <Image alt="" width={50} height={50} src={icon.icon} className="m-0.5" />
                    </a>
            )}
            <br />
            <div className="w-0.5 h-32 bg-blue-600 rounded-xl"></div>
        </div>
    )
}

export default FlotingSideBar
