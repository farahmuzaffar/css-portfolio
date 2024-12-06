import React from 'react'
import styles from './Portfolio.module.css'
import { caveatFont } from '@/font'
import PortfolioCard from './portfolio-cards/PortfolioCard';


function Portfolio() {
  return (
    <>
      <section className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
          <span>M</span>y {' '}
          <span>L</span>ast {' '}
          <span>W</span>ork
        </h1>
               
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam ratione, libero debitis delectus, dicta corporis ut,<br /> 
          odit amet optio recusandae commodi quod fuga culpa laudantium. 
          Obcaecati incidunt illo aliquam ipsum.
        </p>

                
        <div className={styles.myWork}>
          <PortfolioCard/>
           </div>
      </section>
    </>
  );
}


export default Portfolio