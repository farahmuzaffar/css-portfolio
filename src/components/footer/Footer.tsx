import React from 'react'
import styles from './Footer.module.css'
import { caveatFont } from '@/font'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h1 className={caveatFont.className}>© 2024 Farah Muzaffar. All rights reserved.</h1>
      </footer>
    </>
  )
}

export default Footer