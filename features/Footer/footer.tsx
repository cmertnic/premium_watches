import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import styles from './footer.module.scss'
import logo from "@/public_img/footer/logo.svg"
import Image from "next/image";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_row}>
                <div className={styles.footer_top}>
                    <Link href={ROUTER.HOME} className={styles.text}><Image src={logo} alt="logo" /></Link>
                    <ul>
                        <Link href={ROUTER.ABOUT}><li>About Us</li></Link>
                        <Link href={ROUTER.CATALOG}><li>Catalog</li></Link>
                        <Link href={ROUTER.SALE}><li>Sale</li></Link>
                    </ul>
                </div>
                <div className={styles.footer_bottom}>
                <Link href={ROUTER.ABOUT}><p>Privacy Policy</p></Link>
                <Link href={ROUTER.ABOUT}><p>Terms of Service</p></Link>
                </div>
            </div>
        </footer>
    )

}

export default Footer;