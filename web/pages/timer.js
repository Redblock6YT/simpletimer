import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import anime from 'animejs';
import { useState } from 'react';

export default function Home() {
    function view() {
        animateUI();
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

    function inputChange(a) {
        const timer1 = document.getElementById("timer1");
        const timer2 = document.getElementById("timer2");
        const timer3 = document.getElementById("timer3");
        if (a == 1) {
            if (timer1.value.length == 2) {
                timer2.value = ""
                timer2.focus();
            }
        } else if (a == 2) {
            if (timer2.value.length == 2) {
                timer3.value = ""
                timer3.focus();
            } else if (timer2.value.length == 0) {
                timer1.focus();
                const len = timer1.value.length;
                timer1.setSelectionRange(len, len);
            }
        } else if (a == 3) {
            if (timer3.value.length == 0) {
                timer2.focus();
                const len = timer2.value.length;
                timer2.setSelectionRange(len, len);
            }
        }
    }

    const [currentFocus, setCurrentFocus] = useState(0);
    var lastFocued = 0;

    useState(() => {
        console.log("usestate")
        if (lastFocued != 0) {
            console.log("lastfocued" + lastFocued)
            const timer = document.getElementById("timer" + lastFocued);
            if (timer.value == "") {
                timer.value = "00";
            }
            lastFocued =  currentFocus;
        } else {
            console.log("lastfocused is 0")
            lastFocued = currentFocus;
        }
    }, [currentFocus]);


    return (
        <div>
            <Head>
                <title>Timer | SimpleTimer</title>
            </Head>

            <div id="body" className={styles.timergrid}>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(1); if (e.target.value == "00") e.target.value = "" }} id="timer1" maxlength="2" defaultValue="00" onInput={() => inputChange(1)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(2); if (e.target.value == "00") e.target.value = "" }} id="timer2" maxlength="2" defaultValue="00" onInput={() => inputChange(2)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(3); if (e.target.value == "00") e.target.value = "" }} id="timer3" maxlength="2" defaultValue="00" onInput={() => inputChange(3)}></input>
            </div>
        </div>
    )
}
