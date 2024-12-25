import React from 'react'
import "./fotter.css"
import Note from './Note'
import FooterLink from './FooterLink'

const Footer = () => {
    return (
        <div className='flex w-full justify-evenly pb-8'>
            <Note />
            <div className='flex flex-col gap-3'>
                <div className='text-gray-400 text-lg'>ELSEWHERE</div>
                <div className='flex flex-col gap-1'>
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='instagram' />
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='facebook' />
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='linkedin' />
                <FooterLink link='/' msg='Website' />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-gray-400 text-lg'>ELSEWHERE</div>
                <div className='flex flex-col gap-1'>
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='instagram' />
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='facebook' />
                    <FooterLink link='https://www.instagram.com/ikshit_04/' msg='linkedin' />
                <FooterLink link='/' msg='Website' />
                </div>
            </div>
        </div>

    )
}

export default Footer
