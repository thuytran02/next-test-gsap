"use client";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/src/helper/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef<HTMLDivElement>(null);

  const initialRef = useRef(false);

  useEffect(() => {
    initialRef.current = false;
  }),
    [];

  useEffect(() => {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        //snap: 1 / (sections.length - 1),
        markers: true,
      },
    });

    console.log(1 / (sections.length - 1));

    //Progress bar animation

    // gsap.to(mask, {
    //   width: "100%",
    //   scrollTrigger: {
    //     trigger: ".wrapper",
    //     start: "top left",
    //     scrub: 1,
    //   },
    // });

    // whizz around the sections
    sections.forEach((section) => {
      // grab the scoped text
      // let text = section.querySelectorAll(".anim");
      // bump out if there's no items to animate
      // if (text.length === 0) return;
      // do a little stagger
      // gsap.from(text, {
      //   y: -130,
      //   opacity: 0,
      //   duration: 2,
      //   ease: "elastic",
      //   stagger: 0.1,
      //   scrollTrigger: {
      //     trigger: section,
      //     containerAnimation: scrollTween,
      //     start: "left center",
      //     markers: true
      //   }
      // });
    });
  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const container = main.current;
  //     const sections = gsap.utils.toArray(".container section");
  //     const texts = gsap.utils.toArray(".anim");
  //     const mask = document.querySelector(".mask");

  //     let scrollTween = gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".container",
  //         pin: true,
  //         scrub: 1,
  //         end: "+=3000",
  //         //snap: 1 / (sections.length - 1),
  //         markers: true,
  //       },
  //     });

  //     console.log(1 / (sections.length - 1));
  //   }, main);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className=" w-full text-black">
      <div className="h-[20vh] w-full">this is the first move</div>
      <div className="wrapper">
        <div className="container scrollx" ref={main}>
          <section className="sec1 pin">
            <span>Advanced</span>
            <h1>Signify Elegance</h1>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec2 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="col anim">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec3 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="col anim">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
