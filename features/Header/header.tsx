'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import style from './header.module.scss'
import Image from "next/image";
import logo from "@/public_img/header/logo.png"
import { useState } from "react";
import anime from 'animejs';
import { useEffect, useRef } from 'react';
const Header = () => {
    const [ismodal, setmodal] = useState(false)
    const  Text=useRef(null)
    useEffect(()=>{
    anime({
      targets:Text.current,
      translateX:{
        value:[200,0],
        duration:5000
      }
    })
    },[]);
    return (
        <>
            {ismodal &&
                <div className={style.modal}>
                    <div className={style.modal_top} >
                        <div className={style.logo} onClick={() => setmodal(!ismodal)}>
                            <Link href={ROUTER.HOME} className={style.text}><Image src={logo} alt="logo" /></Link>
                        </div>
                        <button onClick={() => setmodal(!ismodal)} className={style.btn_exit}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 6L18 18" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className={style.modal_content}>
                        <div className={style.flex}>
                            <div className={style.info}>
                                <div className={style.textdiv}>
                                    <Link href={ROUTER.ABOUT} onClick={() => setmodal(!ismodal)} className={style.text1}><p className={style.text1}>ABOUT US</p></Link>
                                    <Link href={ROUTER.CATALOG} onClick={() => setmodal(!ismodal)} className={style.text2}><p className={style.text2}>CATALOG</p></Link>
                                    <Link href={ROUTER.SALE} onClick={() => setmodal(!ismodal)} className={style.text3}><p className={style.text3}>SALE</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <header className={style.header} >

                <div className={style.header_row}>
                    <div className={style.header_left_block}>
                        <div className={style.logo}>
                            <Link href={ROUTER.HOME} className={style.text}><Image src={logo} alt="logo" /></Link>
                        </div>
                        <div  className={style.menu}>
                            <Link href={ROUTER.ABOUT}><p className={style.text}>ABOUT US</p></Link>
                            <Link href={ROUTER.CATALOG}><p className={style.text}>CATALOG</p></Link>
                            <Link href={ROUTER.SALE}><p className={style.text}>SALE</p></Link>
                        </div>
                        <button  onClick={() => setmodal(!ismodal)} className={style.burger}>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.995C0 0.445 0.446 0 0.995 0H9.005C9.26889 7.86455e-09 9.52197 0.10483 9.70857 0.291429C9.89517 0.478027 10 0.731109 10 0.995C10 1.25889 9.89517 1.51197 9.70857 1.69857C9.52197 1.88517 9.26889 1.99 9.005 1.99H0.995C0.731109 1.99 0.478028 1.88517 0.291429 1.69857C0.10483 1.51197 0 1.25889 0 0.995ZM0 7C0 6.45 0.446 6.005 0.995 6.005H19.005C19.2689 6.005 19.522 6.10983 19.7086 6.29643C19.8952 6.48303 20 6.73611 20 7C20 7.26389 19.8952 7.51697 19.7086 7.70357C19.522 7.89017 19.2689 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7ZM0.995 12.01C0.731109 12.01 0.478028 12.1148 0.291429 12.3014C0.10483 12.488 0 12.7411 0 13.005C0 13.2689 0.10483 13.522 0.291429 13.7086C0.478028 13.8952 0.731109 14 0.995 14H13.005C13.2689 14 13.522 13.8952 13.7086 13.7086C13.8952 13.522 14 13.2689 14 13.005C14 12.7411 13.8952 12.488 13.7086 12.3014C13.522 12.1148 13.2689 12.01 13.005 12.01H0.995Z" fill="white" />
                            </svg>
                        </button>

                    </div>
                    <Link href={ROUTER.HOME}  >
                        <button className={style.number_button}>
                            <p>+000000000</p>
                        </button>
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Header;