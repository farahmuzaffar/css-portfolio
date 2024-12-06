import React from "react";
import styles from "@/components/portfolio/portfolio-cards/portfolioCard.module.css";
import Image from "next/image";
import { portfolioCards } from "@/constant/portfolioCard";
import Link from "next/link";

function PortfolioCard() {
  return (
    <>
      {portfolioCards.map((item, index) => {
        return (
          <div className={styles.card} key={index}>
            <Link href={item.href}>
            <div className={styles.cardImage}>
              {item.type == "image" ? (
                <Image
                  src={item.src}
                  alt={"profile picture"}
                  width={407}
                  height={407}
                  className={styles.img}/>
              ) : (
                <video src={item.src} controls loop muted width={407}></video>
              )}
            </div>
            </Link>
            <div className={styles.cardText}>{item.title}</div>
          </div>
        );
      })}
    </>
  );
}

export default PortfolioCard;
