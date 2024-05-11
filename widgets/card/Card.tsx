"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/card/Card.module.scss";
import { useState } from "react";
interface CardProps {
    img: StaticImageData;
    title: string;
    text: string;
}
const Card = ({ title, img, text }: CardProps) => {
    const [ismodal, setmodal] = useState(false)


    return (
        <>
            {ismodal &&
                <div className={style.modal}>
                    <button onClick={() => setmodal(!ismodal)} className={style.btn_exit}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#141414" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 6L18 18" stroke="#141414" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div className={style.modal_back}></div>
                    <div className={style.modal_content}>
                        <div className={style.flex}>
                            <div className={style.info}>
                                <div className={style.image}>
                                    <Image src={img} alt={text} />
                                </div>

                                <div className={style.textdiv}>
                                    <div className={style.text}>
                                        {title}
                                    </div>
                                    <div className={style.text2}>
                                        {text}
                                    </div>
                                </div>
                            </div>

                            <form className={style.conf}>
                                <div className={style.inputs}>
                                    <p>Full name</p>
                                    <input type="text"required placeholder="Enter your full name" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Email</p>
                                    <input type="mail"required placeholder="Enter your email" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Card number</p>
                                    <input type="number"required placeholder=" Enter card" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Comments</p>
                                    <textarea className={style.coment} required placeholder=" Enter your text" />
                                   
                                </div>
                                <div className={style.submit}>
                                    <input type="submit" className={style.submit_btn}  value="submit"/>
                                    <p>By clicking on “Submit” button, you agree to our Privacy Policy,<br />
                                        and allow Promodo to use this information for marketing purposes.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
            <div className={style.Card} onClick={() => setmodal(!ismodal)}>

                    <Image src={img} alt={text} />

                <div className={style.textdiv}>
                    <div className={style.text}>
                        {title}
                    </div>
                    <div className={style.text2}>
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;