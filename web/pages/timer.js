import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import anime from 'animejs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        animateUI("1");
    }, [router.isReady]);


    var timer1t = 0;
    var timer2t = 0;
    var timer3t = 0;

    function pause() {

    }

    function play() {
        const play = document.getElementById("play");
        if (play.innerHTML == "pause_circle") {
            play.innerHTML = "play_circle";
            pause();
        } else {
            const timer1 = document.getElementById("timer1");
            const timer2 = document.getElementById("timer2");
            const timer3 = document.getElementById("timer3");
            timer1t = parseInt(timer1.value);
            timer2t = parseInt(timer2.value);
            timer3t = parseInt(timer3.value);
            //if any timer value is equal to "", change the value to "00"
            if (timer1.value == "") {
                timer1.value = "00";
            }
            if (timer2.value == "") {
                timer2.value = "00";
            }
            if (timer3.value == "") {
                timer3.value = "00";
            }
            play.innerHTML = "pause_circle"
            start();
        }
    }

    function start() {
        //start the timer
        const timer1 = document.getElementById("timer1");
        const timer2 = document.getElementById("timer2");
        const timer3 = document.getElementById("timer3");
        //every minute (60 seconds) timer1 will decrease by 1
        var timer1s = setInterval(() => {
            if (timer1t > 0) {
                timer1t--;
                anime({
                    targets: timer1,
                    marginBottom: "30px",
                    opacity: "0",
                    easing: 'easeInOutQuad',
                    complete: () => {
                        timer1.style.marginBottom = "-30px";
                        timer1.value = timer1t.toString(8);
                        anime({
                            targets: timer1,
                            marginBottom: "0px",
                            opacity: "1",
                            easing: 'easeInOutQuad',
                        })
                    }
                })
            } else {
                timer2t = 59;
                clearInterval(timer1s);
            }
        }, timer2t * 1000000);
        //every 10 minutes (600 seconds) timer2 will decrease by 1
        var timer2s = setInterval(() => {
            if (timer2t > 0) {
                timer2t--;
                const anim = timer2.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim.onfinish = () => {
                    timer2.style.marginTop = "100px";
                    timer2.style.opacity = "0";
                    if (timer2t < 10) {
                        timer2.value = "0" + timer2t.toString();
                    } else {
                        timer2.value = timer2t.toString();
                    }
                    const anim2 = timer2.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2.style.marginTop = "0px";
                        timer2.style.opacity = "1";
                    };
                };
            } else {
                clearInterval(timer2s);
            }
        }, timer1t * 10000);

        //every hour (3600 seconds) timer3 will decrease by 1
        var timer3s = setInterval(() => {
            if (timer3t > 0) {
                timer3t--;
                /*
                anime({
                    targets: timer3,
                    marginBottom: "30px",
                    opacity: "0",
                    easing: 'easeInOutQuad',
                    complete: () => {
                        timer3.style.marginBottom = "-30px";
                        timer3.value = timer3t.toString();
                        anime({
                            targets: timer3,
                            marginBottom: "0px",
                            opacity: "1",
                            easing: 'easeInOutQuad',
                        })
                    }
                })
                */
                const anim = timer3.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim.onfinish = () => {
                    timer3.style.marginTop = "100px";
                    timer3.style.opacity = "0";
                    if (timer3t < 10) {
                        timer3.value = "0" + timer3t.toString();
                    } else {
                        timer3.value = timer3t.toString();
                    }
                    const anim2 = timer3.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer3.style.marginTop = "0px";
                        timer3.style.opacity = "1";
                    };
                };
            } else {
                if (timer1t == 0 && timer2t == 0) {
                    clearInterval(timer1s);
                }
                timer3t = 59;
            }
        }, 1000);
    }

    function animateUI(a) {
        if (a == "1") {
            const timer = document.getElementById("body");
            anime({
                targets: timer,
                translateX: "-50%",
                translateY: "-50%",
                scale: 1,
                opacity: 1,
                duration: 1000,
                easing: "easeInOutQuad",
            })
        } else if (a == "2") {
            anime({
                targets: "#smallmodal",
                marginBottom: "15px",
            })
        } else if (a == "3") {
            anime({
                targets: "#smallmodal",
                marginBottom: "-100px",
            })
        }
    }

    function inputChange(a) {
        const timer1 = document.getElementById("timer1");
        const timer2 = document.getElementById("timer2");
        const timer3 = document.getElementById("timer3");
        const smallmodal = document.getElementById("smallmodal");
        if (timer1.value == "00" && timer2.value == "00" && timer3.value == "00") {
            animateUI("3");
        } else if (smallmodal.style.marginBottom == "-100px") {
            animateUI("2");
        }

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


    return (
        <div>
            <Head>
                <title>Timer | SimpleTimer</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>

            <div id="body" className={styles.timergrid} style={{ opacity: 0, transform: "scale(0) translateY(-50%) translateX(-50%)" }}>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(1); if (e.target.value == "00") e.target.value = "" }} id="timer1" maxlength="2" defaultValue="00" onInput={() => inputChange(1)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(2); if (e.target.value == "00") e.target.value = "" }} id="timer2" maxlength="2" defaultValue="00" onInput={() => inputChange(2)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(3); if (e.target.value == "00") e.target.value = "" }} id="timer3" maxlength="2" defaultValue="00" onInput={() => inputChange(3)}></input>
            </div>
            <div id="smallmodal" className={styles.smallmodal} style={{ marginBottom: "-100px" }}>
                <div id="icongrid" className={styles.icongrid}>
                    <span class="material-symbols-rounded" id="play" style={{ fontSize: "40px", textAlign: "center", cursor: "pointer" }} onClick={() => { play() }}>play_circle</span>
                    <span class="material-symbols-rounded" style={{ fontSize: "40px", textAlign: "center", cursor: "pointer" }}>cast</span>
                    <span class="material-symbols-rounded" style={{ fontSize: "40px", textAlign: "center", cursor: "pointer" }}>settings</span>
                    <span class="material-symbols-rounded" style={{ fontSize: "40px", textAlign: "center", cursor: "pointer" }}>notifications</span>
                </div>
            </div>
        </div>
    )
}
