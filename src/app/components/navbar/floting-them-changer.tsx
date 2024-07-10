import Image from 'next/image'
import React, { SetStateAction } from 'react'
import nightModeIcon from "@/assets/photos/icons/night-mode.png"

function FlotingThemChanger({
    setIsDark
}:{
    setIsDark:(setDarkDark: SetStateAction<boolean>) => void
}) {
    return (
        <div className="fixed right-3 top-3 border p-2 rounded-full cursor-pointer" onClick={()=>setIsDark(pre=>!pre)}>
            <Image width={20} height={20} alt='' src={nightModeIcon} />
        </div>
    )
}

export default FlotingThemChanger
