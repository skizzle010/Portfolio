    import React from 'react'
    import { CircularText } from '../components/icon'
    import Link from 'next/link'
    import { PhotoCC } from '../components/icon'

    const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-[-80%]'>
            <div className='w-48 h-auto flex items-center justify center relative'>
                <CircularText className={"fill-dark animate-spin-slow absolute"}/>
                <Link href = 'mailto: raiutkarsh3219@gmail.com' className='flex items-center justify-center absolute left-1/2 top-[98]
                -translate-x-1/2 -traslate-y-1/2 bg-dark text-light font-semibold shadow-md border border-dark w-20 h-20 rounded-full
                 hover:bg-light hover:text-dark'>Hire Me</Link>
            </div>
        </div>
    )
}

    export default HireMe