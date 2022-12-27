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
            const timer1a = document.getElementById("timer1a");
            const timer1b = document.getElementById("timer1b");
            const timer2a = document.getElementById("timer2a");
            const timer2b = document.getElementById("timer2b");
            const timer3a = document.getElementById("timer3a");
            const timer3b = document.getElementById("timer3b");

            //if any timer value is equal to "", change the value to "00"
            if (timer1a.value == "") {
                timer1a.value = "0";
            }
            if (timer1b.value == "") {
                timer1b.value = "0";
            }
            if (timer2a.value == "") {
                timer2a.value = "0";
            }
            if (timer2b.value == "") {
                timer2b.value = "0";
            }
            if (timer3a.value == "") {
                timer3a.value = "0";
            }
            if (timer3b.value == "") {
                timer3b.value = "0";
            }
            timer1t = parseInt(timer1a.value) + "" + parseInt(timer1b.value);
            timer2t = parseInt(timer2a.value) + "" + parseInt(timer2b.value);
            timer3t = parseInt(timer3a.value) + "" + parseInt(timer3b.value);
            play.innerHTML = "pause_circle"
            start();
        }
    }

    function start() {
        //start the timer
        const timer1a = document.getElementById("timer1a");
        const timer1b = document.getElementById("timer1b");
        const timer2a = document.getElementById("timer2a");
        const timer2b = document.getElementById("timer2b");
        const timer3a = document.getElementById("timer3a");
        const timer3b = document.getElementById("timer3b");
        //every minute (60 seconds) timer1 will decrease by 1
        var i = 0;
        setTimeout(() => {
            timer1t--;
            timer2t = 60;
            const anim = timer1a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
            anim.onfinish = () => {
                timer1a.style.marginTop = "100px";
                timer1a.style.opacity = "0";
                if (timer1t <= 10) {
                    timer1a.value = "0";
                } else {
                    timer1a.value = timer1t.toString().split("")[0];
                }
                const anim2 = timer1a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                anim2.onfinish = () => {
                    timer1a.style.marginTop = "0px";
                    timer1a.style.opacity = "1";
                };
            };
            const animb = timer1b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
            animb.onfinish = () => {
                timer1b.style.marginTop = "100px";
                timer1b.style.opacity = "0";
                if (timer1t < 10) {
                    console.log("less than 10")
                    timer1b.value = timer1t.toString().split("")[0];
                } else {
                    console.log("not less than 10")
                    timer1b.value = timer1t.toString().split("")[1];
                }
                const anim2 = timer1b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                anim2.onfinish = () => {
                    timer1b.style.marginTop = "0px";
                    timer1b.style.opacity = "1";
                };
            };
        }, 1000);
        var timer1s = setInterval(() => {
            i++;
            if (timer1t > 0 && i == 1) {
                timer1t--;
                const anim = timer1a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim.onfinish = () => {
                    timer1a.style.marginTop = "100px";
                    timer1a.style.opacity = "0";
                    if (timer2t <= 10) {
                        timer1a.value = "0";
                    } else {
                        timer1a.value = timer1t.toString().split("")[0];
                    }
                    const anim2 = timer1a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer1a.style.marginTop = "0px";
                        timer1a.style.opacity = "1";
                    };
                };
                const animb = timer1b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                animb.onfinish = () => {
                    timer1b.style.marginTop = "100px";
                    timer1b.style.opacity = "0";
                    if (timer1t < 10) {
                        console.log("less than 10")
                        timer1b.value = timer1t.toString().split("")[0];
                    } else {
                        console.log("not less than 10")
                        timer1b.value = timer1t.toString().split("")[1];
                    }
                    const anim2 = timer1b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer1b.style.marginTop = "0px";
                        timer1b.style.opacity = "1";
                    };
                };
                i--;
            } else if (timer1t == 0 && i == 1) {
                timer2t = 59;
                clearInterval(timer1s);
                console.log("clear interval 1")
                const anim = timer2a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim.onfinish = () => {
                    timer2a.style.marginTop = "100px";
                    timer2a.style.opacity = "0";
                    timer2a.value = timer2t.toString().split("")[0];
                    const anim2 = timer2a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2a.style.marginTop = "0px";
                        timer2a.style.opacity = "1";
                    };
                };
                const anim1a = timer2b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim1a.onfinish = () => {
                    timer2b.style.marginTop = "100px";
                    timer2b.style.opacity = "0";
                    timer2b.value = timer2t.toString().split("")[1];
                    const anim2 = timer2b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2b.style.marginTop = "0px";
                        timer2b.style.opacity = "1";
                    };
                };
                i--;
            }
        }, 3600000);
        //every 10 minutes (600 seconds) timer2 will decrease by 1
        var i2 = 0;
        setTimeout(() => {
            if (timer2t > 0) {
                timer2t--;
                console.log("timer2t = " + timer2t)
                console.log("i = " + i2)
                const anim = timer2a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                anim.onfinish = () => {
                    timer2a.style.marginTop = "100px";
                    timer2a.style.opacity = "0";

                    if (timer2t <= 10) {
                        timer2a.value = "0";
                    } else {
                        timer2a.value = timer2t.toString().split("")[0];
                    }
                    const anim2 = timer2a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2a.style.marginTop = "0px";
                        timer2a.style.opacity = "1";
                    };
                };
                const animb = timer2b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                animb.onfinish = () => {
                    timer2b.style.marginTop = "100px";
                    timer2b.style.opacity = "0";
                    if (timer2t < 10) {
                        console.log("less than 10")
                        timer2b.value = timer2t.toString().split("")[0];
                    } else {
                        console.log("not less than 10")
                        timer2b.value = timer2t.toString().split("")[1];
                    }
                    const anim2 = timer2b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2b.style.marginTop = "0px";
                        timer2b.style.opacity = "1";
                    };
                };
            }
        }, 1000);
        var timer2s = setInterval(() => {
            console.log(timer2t)
            console.log("i2=" + i2)
            if (timer2t > 0) {
                timer2t--;
                console.log("timer2t = " + timer2t)
                console.log("i = " + i2)
                // every 10 iterations, timer2a will decrease by 1
                if (i2 === 10 && timer2a.value !== "0") {
                    i2 = 0;
                    const anim = timer2a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    anim.onfinish = () => {
                        timer2a.style.marginTop = "100px";
                        timer2a.style.opacity = "0";

                        if (timer2t <= 10) {
                            timer2a.value = "0";
                        } else {
                            timer2a.value = timer2t.toString().split("")[0];
                        }
                        const anim2 = timer2a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer2a.style.marginTop = "0px";
                            timer2a.style.opacity = "1";
                        };
                    };
                }
                const animb = timer2b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                animb.onfinish = () => {
                    timer2b.style.marginTop = "100px";
                    timer2b.style.opacity = "0";
                    if (timer2t < 10) {
                        console.log("less than 10")
                        timer2b.value = timer2t.toString().split("")[0];
                    } else {
                        console.log("not less than 10")
                        timer2b.value = timer2t.toString().split("")[1];
                    }
                    const anim2 = timer2b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer2b.style.marginTop = "0px";
                        timer2b.style.opacity = "1";
                    };
                };
            } else {
                console.log("timer2a.value = " + timer2a.value)
                console.log("timer2b.value = " + timer2b.value)
                if (timer2a.value == "0" && timer2b.value == "0") {
                    clearInterval(timer2s);
                    console.log("clear interval 3")
                } else {
                    timer2t = 59;
                    const anim = timer2a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    anim.onfinish = () => {
                        timer2a.style.marginTop = "100px";
                        timer2a.style.opacity = "0";
                        if (timer2t < 10) {
                            timer2a.value = "0";
                        } else {
                            timer2a.value = timer2t.toString().split("")[0];
                        }
                        const anim2 = timer2a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer2a.style.marginTop = "0px";
                            timer2a.style.opacity = "1";
                        };
                    };
                    const animb = timer2b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    animb.onfinish = () => {
                        timer2b.style.marginTop = "100px";
                        timer2b.style.opacity = "0";
                        timer2b.value = timer2t.toString().split("")[1];
                        const anim2 = timer2b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer2b.style.marginTop = "0px";
                            timer2b.style.opacity = "1";
                        };
                    };
                }

            }
            i2++;
        }, 60000);

        //every hour (3600 seconds) timer3 will decrease by 1

        var i = 10;
        var timer3s = setInterval(() => {
            console.log(timer3t)
            if (timer3t > 0) {
                timer3t--;
                console.log("timer3t = " + timer3t)
                console.log("i = " + i)
                // every 10 iterations, timer3a will decrease by 1
                if (i === 10 && timer3a.value !== "0") {
                    i = 0;
                    const anim = timer3a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    anim.onfinish = () => {
                        timer3a.style.marginTop = "100px";
                        timer3a.style.opacity = "0";

                        if (timer3t <= 10) {
                            timer3a.value = "0";
                        } else {
                            timer3a.value = timer3t.toString().split("")[0];
                        }
                        const anim2 = timer3a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer3a.style.marginTop = "0px";
                            timer3a.style.opacity = "1";
                        };
                    };
                }
                const animb = timer3b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                animb.onfinish = () => {
                    timer3b.style.marginTop = "100px";
                    timer3b.style.opacity = "0";
                    if (timer3t < 10) {
                        console.log("less than 10")
                        timer3b.value = timer3t.toString().split("")[0];
                    } else {
                        console.log("not less than 10")
                        timer3b.value = timer3t.toString().split("")[1];
                    }
                    const anim2 = timer3b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                    anim2.onfinish = () => {
                        timer3b.style.marginTop = "0px";
                        timer3b.style.opacity = "1";
                    };
                };
                i++;
            } else {
                if (timer1a.value == "0" && timer1b.value == "0" && timer2a.value == "0" && timer2b.value == "0") {
                    clearInterval(timer3s);
                    console.log("clear interval 3")
                } else {
                    timer3t = 59;
                    const anim = timer3a.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    anim.onfinish = () => {
                        timer3a.style.marginTop = "100px";
                        timer3a.style.opacity = "0";
                        if (timer3t < 10) {
                            timer3a.value = "0";
                        } else {
                            timer3a.value = timer3t.toString().split("")[0];
                        }
                        const anim2 = timer3a.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer3a.style.marginTop = "0px";
                            timer3a.style.opacity = "1";
                        };
                    };
                    const animb = timer3b.animate({ marginTop: "-100px", opacity: "0" }, { duration: 300, easing: "ease-in-out" });
                    animb.onfinish = () => {
                        timer3b.style.marginTop = "100px";
                        timer3b.style.opacity = "0";
                        timer3b.value = timer3t.toString().split("")[1];
                        const anim2 = timer3b.animate({ marginTop: "0px", opacity: "1" }, { duration: 300, easing: "ease-in-out" });
                        anim2.onfinish = () => {
                            timer3b.style.marginTop = "0px";
                            timer3b.style.opacity = "1";
                        };
                    };
                }

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
        const timer1a = document.getElementById("timer1a");
        const timer1b = document.getElementById("timer1b");
        const timer2a = document.getElementById("timer2a");
        const timer2b = document.getElementById("timer2b");
        const timer3a = document.getElementById("timer3a");
        const timer3b = document.getElementById("timer3b");
        const compiled1 = timer1a.value + "" + timer1b.value;
        const compiled2 = timer2a.value + "" + timer2b.value;
        const compiled3 = timer3a.value + "" + timer3b.value;
        const smallmodal = document.getElementById("smallmodal");
        if (compiled1 == "00" && compiled2 == "00" && compiled3 == "00") {
            animateUI("3");
        } else if (smallmodal.style.marginBottom == "-100px") {
            animateUI("2");
        }

        if (a == 1) {
            if (timer1a.value.length == 1) {
                timer1b.value = ""
                timer1b.focus();
            }
        } else if (a == 2) {
            if (timer1b.value.length == 1) {
                timer2a.value = ""
                timer2a.focus();
            } else if (timer1b.value.length == 0) {
                timer1a.focus();
                const len = timer1a.value.length;
                timer1a.setSelectionRange(len, len);
            }
        } else if (a == 3) {
            if (timer2a.value.length == 1) {
                timer2b.focus();
            } else if (timer2a.value.length == 0) {
                timer1b.focus();
                const len = timer1b.value.length;
                timer1b.setSelectionRange(len, len);
            }
        } else if (a == 4) {
            if (timer2b.value.length == 1) {
                timer3a.focus();
            } else if (timer2b.value.length == 0) {
                timer2a.focus();
                const len = timer2a.value.length;
                timer2a.setSelectionRange(len, len);
            }
        } else if (a == 5) {
            if (timer3a.value.length == 1) {
                timer3b.focus();
            } else if (timer3a.value.length == 0) {
                timer2b.focus();
                const len = timer2b.value.length;
                timer2b.setSelectionRange(len, len);
            }
        } else if (a == 6) {
            if (timer3b.value.length == 0) {
                timer3a.focus();
                const len = timer3a.value.length;
                timer3a.setSelectionRange(len, len);
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
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(1); if (e.target.value == "0") e.target.value = "" }} id="timer1a" maxlength="1" defaultValue="0" onInput={() => inputChange(1)}></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(2); if (e.target.value == "0") e.target.value = "" }} id="timer1b" maxlength="1" defaultValue="0" onInput={() => inputChange(2)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(3); if (e.target.value == "0") e.target.value = "" }} id="timer2a" maxlength="1" defaultValue="0" onInput={() => inputChange(3)}></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(4); if (e.target.value == "0") e.target.value = "" }} id="timer2b" maxlength="1" defaultValue="0" onInput={() => inputChange(4)}></input>
                <input className={styles.colon} value=":" disabled></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(5); if (e.target.value == "0") e.target.value = "" }} id="timer3a" maxlength="1" defaultValue="0" onInput={() => inputChange(5)}></input>
                <input className={styles.fullscreentxt} onFocus={(e) => { setCurrentFocus(6); if (e.target.value == "0") e.target.value = "" }} id="timer3b" maxlength="1" defaultValue="0" onInput={() => inputChange(6)}></input>
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
