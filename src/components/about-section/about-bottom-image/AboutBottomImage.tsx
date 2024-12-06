import React from 'react'
import styles from '@/components/about-section/about-bottom-image/AboutBottomImage.module.css'
import Image from 'next/image'

function AboutBottomImage() {
  return (
    <>
    <section className={styles.aboutBottomImage}>
        <Image src={'/html.png'} alt={'html picture'} width={96} height={96}></Image>
        <Image src={'/css.png'} alt={'css picture'} width={96} height={96}></Image>
        <Image src={'/typescript.png'} alt={'typescript picture'} width={92} height={92}></Image>
        <Image src={'/git.png'} alt={'git picture'} width={96} height={96}></Image>
        <Image src={'/figma.png'} alt={'figma picture'} width={96} height={96}></Image>
        <Image src={'/react.png'} alt={'react picture'} width={96} height={96}></Image>
        <Image src={'/node.png'} alt={'node picture'} width={96} height={96}></Image>
        <Image src={'/next.png'} alt={'next picture'} width={96} height={96}></Image>
    </section>
    </>
  )
}

export default AboutBottomImage