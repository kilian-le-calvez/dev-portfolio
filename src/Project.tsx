import React from 'react'
import styles from './Project.module.css'

export interface ProjectProps {
  videoUrl: string,
  backgroundImg: string,
  id: string,
  link: string
}

export interface TextPanelProps {
  text: string,
  id: string,
  link: string
}

export function Project({videoUrl, backgroundImg, id, link}: ProjectProps) {
  return (
    <div id={id} className={styles.page}>
      <img className={styles.background} src={backgroundImg} alt="bg img"></img>
      <div className={styles.video}>
        <iframe title='the legend of clouds' width="600" height="340" frameBorder={0} src={videoUrl} allowFullScreen></iframe>
      </div>
      <a href={"/#" + link} className={styles.bottomNav}>Next</a>
    </div>
  )
}

export function TextPanel({text, link, id}: TextPanelProps) {
  return (
    <div id={id} className={`${styles.page} ${styles.blackBackground}`}>
      <div className={styles.titleText}>{text}</div>
      <a href={"/#" + link} className={styles.bottomNav}>Next</a>
    </div>
  )
}

export function ContactPanel() {
  return (
    <div id="contactpanel" className={`${styles.page} ${styles.blackBackground}`}>
        <div className={styles.titleText}>Games link</div>
        <div className={styles.sizedBox100px}></div>
        <div className={styles.row}>
          <iframe frameBorder="0" src="https://itch.io/embed/1901404?linkback=true&amp;dark=true" width="552" height="167"><a href="https://kilian-le-calvez.itch.io/thelegendofclouds">The Legend of Clouds by Kilian</a></iframe>
          <div className={styles.sizedBox100px}></div>
          <iframe frameBorder="0" src="https://itch.io/embed/1948399?linkback=true&amp;dark=true" width="552" height="167"><a href="https://kilian-le-calvez.itch.io/soft-drinks-only">Soft Drinks Only by Kilian</a></iframe>
        </div>
        <div className={styles.sizedBox100px}></div>
        <div className={styles.titleText}>Contacts</div>
        <div className={styles.sizedBox100px}></div>
        <a href={"mailto:kilianlecalvez.dev@gmail.com"}>Mail: kilianlecalvez.dev@gmail.com</a>
        <a href={"tel:+33646618939"}>Phone: 0646618939</a>
      </div>
  )
}