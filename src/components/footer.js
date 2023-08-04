import React from 'react'
import Link from 'next/link'
import Layout from './Layout'   

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                    Built with <span className='text-red-500'>❤</span> by Utkarsh Rai
                </div>
            </Layout>
        </footer>
    )
}

export default Footer