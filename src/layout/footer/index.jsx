import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const companies = [
    {
        label:'About us',
        to:'#'
    },
    {
        label:'Services',
        to:'#'
    },
    {
        label:'Case Studies',
        to:'#'
    },
    {
        label:'Contact us',
        to:'#'
    },
    {
        label:'Blog',
        to:'#'
    },
    {
        label:'About us',
        to:'#'
    },
]
const supports = [
    {
        label:'Communities',
        to:'#'
    },
    {
        label:'Resources',
        to:'#'
    },
    {
        label:'Faqs',
        to:'#'
    },
    {
        label:'Privacy Policy',
        to:'#'
    },
    {
        label:'Careers',
        to:'#'
    },
    
]
const Footer = () =>{
    return(
        <div className="bg-slate-200 py-16" style={{
            minHeight:350  
        }}>
            <div className='w-3/4 mx-auto'>
            <div className="grid md:grid-cols-4 gap-10 ">
                <div className='flex flex-col gap-y-7'>
                    <img src="/img/logo.png" alt="logo" className='w-28' />
                    <p className=' w-44'>Appie WordPress is theme is the last theme you will ever have.</p>
                    <button className='flex items-center gap-x-1 font-bold hover:text-blue-600'>Read More <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div>
                    <h4 className='font-semibold text-lg py-2'>Company</h4>
                    <div className='flex flex-col gap-y-2'>
                    {
                        companies.map((item,index)=>(
                            <Link key={index} to={item.to} className='hover:text-blue-600'>{item.label}</Link>
                        ))
                    }
                    </div>
                </div>
                <div>
                <h4 className='font-semibold text-lg py-2'>Supports</h4>
                    <div className='flex flex-col gap-y-2'>
                    {
                        supports.map((item,index)=>(
                            <Link key={index} to={item.to} className='hover:text-blue-600'>{item.label}</Link>
                        ))
                    }
                    </div>  
                </div>
                <div className='flex flex-col gap-y-2'>
                <h4 className='font-semibold text-lg py-2'>Get In Touch</h4>
                    <span><FontAwesomeIcon icon={faEnvelope} /> support@appie.com</span>
                    <span><FontAwesomeIcon icon={faPhone} /> +(642) 342 762 44</span>
                    <span><FontAwesomeIcon icon={faLocationDot} /> 442 Bakal Aangrej Road 7, England</span>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;