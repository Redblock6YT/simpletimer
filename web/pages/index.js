import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import anime from 'animejs';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  function view(a, b) {
    animateUI();
    setTimeout(() => {
      if (a == "timer") {
        router.push("/timer");
      }
    }, 1000);
  }

  function animateUI() {
    const header = document.getElementById("header");
    const buttongrid = document.getElementById("buttongrid");
    const text = document.getElementById("text");
    const animate = text.animate({ opacity: 0 }, { duration: 300 });
    animate.onfinish = () => {
      text.style.opacity = 0;
    };
    anime({
      targets: header,
      translateY: -100,
      easing: 'easeInOutQuad',
    })
    anime({
      targets: buttongrid.children,
      scale: 0,
      opacity: 0,
      easing: 'easeInOutQuad',
      delay: anime.stagger(100),
      duration: 300,
    })
  }


  return (
    <div>
      <Head>
        <title>SimpleTimer</title>
      </Head>
      <div id="header" className={styles.header}>
        <h1 className={styles.logotext}>SimpleTimer</h1>
      </div>

      <div id="body" className={styles.body}>
        <div id="text">
          <h1 className={styles.text}>Create your first SimpleTimer</h1>
          <p className={styles.subtext}>Choose between Stopwatch, Timer or Clock</p>
        </div>
        <div className={styles.buttongrid} id="buttongrid">
          <button className={styles.lbutton} onClick={() => view("timer")}>+</button>
        </div>
      </div>
    </div>
  )
}
