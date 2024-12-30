"use client";
import React, { useEffect, useRef } from "react";
import styles from "./card.module.css";
import gsap from "gsap";
import Image from "next/image";
import { useIsPhone } from "@/hooks/IsPhone";

const InvitationCard = () => {
    const envelopeRef = useRef(null);
    const letterRef = useRef(null);
    const topRef = useRef(null);
    const isMobileView = useIsPhone();

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const tl = gsap.timeline();

                if (entry.isIntersecting) {
                    // Animate forward when intersecting
                    tl.to(topRef.current, {
                        rotationX: 180,
                        transformOrigin: "top",
                        duration: 0.5,
                        zIndex: 2,
                    })

                        .to('.top', {

                            zIndex: 0,

                        })
                        .to(letterRef.current, {
                            y: "-100%",
                            zIndex: 2,
                            duration: 1,


                        }, 'card')
                        .to('.card', {
                            boxShadow: "0px -20px 40px 10px rgba(0, 255, 0, 0.5)", // Set the target shadow
                        }, 'card')
                        .to('.letter', {
                            zIndex: 8,
                        })

                        .to(".letter", {
                            y: "0%",
                            duration: 2.5,
                            zIndex: 6,
                            scale: 1.4,
                        }, "a");
                } else {
                    // Reset to initial state when scrolling back up
                    tl.to(".letter", { y: "0%", scale: 1, duration: 1, zIndex: 1 })
                        .to(".line1", { zIndex: 4, duration: 0.3 }, "reset")
                        .to(".line2", { zIndex: 4, duration: 0.3 }, "reset")
                        .to(topRef.current, {
                            rotationX: 0,
                            transformOrigin: "top",
                            duration: 0.5,
                            zIndex: 3,
                        });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: .5,
        });

        if (envelopeRef.current) {
            observer.observe(envelopeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`flex flex-col items-center h-[60vh] justify-center mt-[25vh] ${isMobileView ? "" : ""
                }`}
        >
            <div className={` ${styles.envelope}  md:scale-[1.2] scale-[0.9] flex items-center justify-center`} ref={envelopeRef}>
                <div className={`${styles.shadow}`}></div>
                <div className={`bg-slate-900 ${styles.back}`}></div>
                <div className={`letter  ${styles.letter}`} ref={letterRef}>
                    <Image
                        src="/assets/images/invitation.png"
                        alt="invitation"
                        width={800}
                        height={800}
                        className="card rounded-[16px]"
                    />
                </div>
                <div className={`${styles.front}`}>
                    <svg width="348" height="248" viewBox="0 0 348 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2_3)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.21848 1.34141C0.864867 2.44152 0 4.11976 0 5.99999V242C0 245.314 2.68628 248 5.99999 248H357C360.314 248 363 245.314 363 242V6C363 2.68629 360.314 0 357 0H348L278 39L249.5 104H99.5L64.5 39L2.21848 1.34141Z" fill="#B2D99A" />
                            <path d="M100 103C45.7231 163.046 30.1436 180.086 29.1385 181.1L2 245" stroke="white" strokeWidth="1.5" />
                            <path d="M249 104C303.277 164.046 318.856 181.086 319.862 182.1L347 246" stroke="white" strokeWidth="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_3">
                                <rect width="348" height="248" rx="5" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                </div>
                <div className={`top ${styles.top}`} ref={topRef}></div>
            </div>

        </div>
    );
};

export default InvitationCard;