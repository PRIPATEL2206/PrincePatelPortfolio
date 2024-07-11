import Image from 'next/image'
import React, { SetStateAction } from 'react'
import nightModeIcon from "@/assets/photos/icons/night-mode.png"
import lightModeIcon from "@/assets/photos/icons/sunIcon.png"

function FlotingThemChanger({
    setIsDark,
    isDark
}:{
    setIsDark:(setDarkDark: SetStateAction<boolean>) => void,
    isDark:boolean

}) {
    return (
        <div className="fixed right-3 top-3 border p-2 rounded-full cursor-pointer" onClick={()=>setIsDark(pre=>!pre)}>
            <Image width={20} height={20} alt='mode' src={isDark ?lightModeIcon : nightModeIcon  } />
        </div>
    )
}

export default FlotingThemChanger
