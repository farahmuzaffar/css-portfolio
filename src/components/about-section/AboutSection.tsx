import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/font'
import Button from '../button/Button'
import Image from 'next/image'

function AboutSection() {
  return (
    <>
    <section className={styles.about}>
        <div className={styles.aboutLeftDiv}>
            <h1 className={caveatFont.className}>Farah Muzaffar</h1>
            <p className={caveatFont.className}>Freelance Web Developer</p>
            <h2 className={`${styles.detailsText} ${interFont.className}`}>Lorem ipsum dolor sit amet .
               Labore, praesentium reiciendis. Aliquam alias , 
               iste explicabo repellendus dsfrgthy magni,suscipit quasi 
               consequuntur illo hic nam dolore eos numquam distinctio
               et recusandae!</h2>

             <Button text={'Contact Me'}/>
        </div>
        <div className={styles.aboutRightDiv}>
          <Image src={"/profile.png"} alt={"profile picture"} width={400} height={400}></Image>
        </div>
    </section>
    </>
  )
}

export default AboutSection