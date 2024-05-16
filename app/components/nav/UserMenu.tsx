'use client'

import { useCallback, useState } from "react";
import Avatar from "../Avatar";

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleOpen = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])


    return <>
        <div className="relative z-30">
            <div onClick={toogleOpen} className="hover:shadow-md cursor-pointer">
                <Avatar/>
                <h2>testing</h2>
            </div>
        </div>
    </>
}

export default UserMenu;