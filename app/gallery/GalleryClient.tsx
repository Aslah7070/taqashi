"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./gallery.css";

const data = [
  {
    place: "YEMENI AUTHENTIC",
    title: "LAMB",
    title2: "HANEETH",
    description: "Slow-cooked to perfection, our signature Lamb Haneeth Mandi is a royal feast of tender meat and aromatic rice.",
    image: "/images/gallery/mandi-1.png",
  },
  {
    place: "STONE GRILLED",
    title: "CHICKEN",
    title2: "MADHBI",
    description: "Grilled over stones for an authentic smoky flavor, served with fragrant Mandi rice.",
    image: "/images/gallery/mandi-2.png",
  },
  {
    place: "TRADITIONAL SIDES",
    title: "ARABIC",
    title2: "GRILL",
    description: "A platter of our finest grilled meats, perfectly seasoned and charred.",
    image: "/images/gallery/grill.png",
  },
  {
    place: "ROYAL DESSERT",
    title: "TRADITIONAL",
    title2: "KUNAFA",
    description: "A sweet conclusion to your meal with our warm, pistachio-topped Kunafa.",
    image: "/images/gallery/kunafa.png",
  },
  {
    place: "SIGNATURE MANDI",
    title: "ROYAL",
    title2: "SAFFRON",
    description: "Our finest saffron-infused rice served with slow-roasted mutton, a true taste of royalty.",
    image: "/images/dishes/Mandhi.jpg",
  },
  {
    place: "AUTHENTIC GAHWA",
    title: "ARABIC",
    title2: "COFFEE",
    description: "Complete your experience with our traditional Arabic coffee, served with premium dates.",
    image: "/images/gallery/coffee.png",
  },
];

export default function GalleryClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let order = [0, 1, 2, 3, 4, 5];
    let detailsEven = true;
    let offsetTop = 200;
    let offsetLeft = 700;
    let cardWidth = 200;
    let cardHeight = 300;
    let gap = 40;
    let numberSize = 50;
    const ease = "sine.inOut";
    let clicks = 0;
    let timeoutId: NodeJS.Timeout;

    const ctx = gsap.context(() => {
      function getCard(index: number) {
        return `#card${index}`;
      }
      function getCardContent(index: number) {
        return `#card-content-${index}`;
      }
      function getSliderItem(index: number) {
        return `#slide-item-${index}`;
      }

      function init() {
        const [active, ...rest] = order;
        const detailsActive = detailsEven ? "#details-even" : "#details-odd";
        const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
        const { innerHeight: height, innerWidth: width } = window;
        offsetTop = height - 430;
        offsetLeft = width - 830;

        gsap.set(".gallery-pagination", {
          top: offsetTop + 330,
          left: offsetLeft,
          y: 200,
          opacity: 0,
          zIndex: 60,
        });

        gsap.set(getCard(active), {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        });
        gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
        gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
        gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });

        gsap.set(".progress-sub-foreground", {
          width: 500 * (1 / order.length) * (active + 1),
        });

        rest.forEach((i, index) => {
          gsap.set(getCard(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 4,
          });
          gsap.set(getCardContent(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            zIndex: 40,
            y: offsetTop + cardHeight - 100,
          });
          gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
        });

        gsap.set(".gallery-indicator", { x: -window.innerWidth });

        const startDelay = 0.6;

        gsap.to(".gallery-cover", {
          x: width + 400,
          delay: 0.5,
          ease,
          onComplete: () => {
            setTimeout(() => {
              loop();
            }, 500);
          },
        });
        rest.forEach((i, index) => {
          gsap.to(getCard(i), {
            x: offsetLeft + index * (cardWidth + gap),
            zIndex: 30,
            delay: startDelay + 0.05 * index,
            ease,
          });
          gsap.to(getCardContent(i), {
            x: offsetLeft + index * (cardWidth + gap),
            zIndex: 40,
            delay: startDelay + 0.05 * index,
            ease,
          });
        });
        gsap.to(".gallery-pagination", { y: 0, opacity: 1, ease, delay: startDelay });
        gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
      }

      function step() {
        return new Promise((resolve) => {
          order.push(order.shift()!);
          detailsEven = !detailsEven;

          const detailsActive = detailsEven ? "#details-even" : "#details-odd";
          const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

          const activeData = data[order[0]];

          const activeEl = document.querySelector(detailsActive);
          if (activeEl) {
            const placeText = activeEl.querySelector(".place-box .text");
            const title1 = activeEl.querySelector(".title-1");
            const title2 = activeEl.querySelector(".title-2");
            const desc = activeEl.querySelector(".desc");
            if (placeText) placeText.textContent = activeData.place;
            if (title1) title1.textContent = activeData.title;
            if (title2) title2.textContent = activeData.title2;
            if (desc) desc.textContent = activeData.description;
          }

          gsap.set(detailsActive, { zIndex: 22 });
          gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
          gsap.to(`${detailsActive} .text`, {
            y: 0,
            delay: 0.1,
            duration: 0.7,
            ease,
          });
          gsap.to(`${detailsActive} .title-1`, {
            y: 0,
            delay: 0.15,
            duration: 0.7,
            ease,
          });
          gsap.to(`${detailsActive} .title-2`, {
            y: 0,
            delay: 0.15,
            duration: 0.7,
            ease,
          });
          gsap.to(`${detailsActive} .desc`, {
            y: 0,
            delay: 0.3,
            duration: 0.4,
            ease,
          });
          gsap.to(`${detailsActive} .cta`, {
            y: 0,
            delay: 0.35,
            duration: 0.4,
            onComplete: resolve,
            ease,
          });
          gsap.set(detailsInactive, { zIndex: 12 });

          const [active, ...rest] = order;
          const prv = rest[rest.length - 1];

          gsap.set(getCard(prv), { zIndex: 10 });
          gsap.set(getCard(active), { zIndex: 20 });
          gsap.to(getCard(prv), { scale: 1.5, ease });

          gsap.to(getCardContent(active), {
            y: offsetTop + cardHeight - 10,
            opacity: 0,
            duration: 0.3,
            ease,
          });
          gsap.to(getSliderItem(active), { x: 0, ease });
          gsap.to(getSliderItem(prv), { x: -numberSize, ease });
          gsap.to(".progress-sub-foreground", {
            width: 500 * (1 / order.length) * (active + 1),
            ease,
          });

          gsap.to(getCard(active), {
            x: 0,
            y: 0,
            ease,
            width: window.innerWidth,
            height: window.innerHeight,
            borderRadius: 0,
            onComplete: () => {
              const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
              gsap.set(getCard(prv), {
                x: xNew,
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                zIndex: 30,
                borderRadius: 4,
                scale: 1,
              });

              gsap.set(getCardContent(prv), {
                x: xNew,
                y: offsetTop + cardHeight - 100,
                opacity: 1,
                zIndex: 40,
              });
              gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

              gsap.set(detailsInactive, { opacity: 0 });
              gsap.set(`${detailsInactive} .text`, { y: 100 });
              gsap.set(`${detailsInactive} .title-1`, { y: 100 });
              gsap.set(`${detailsInactive} .title-2`, { y: 100 });
              gsap.set(`${detailsInactive} .desc`, { y: 50 });
              gsap.set(`${detailsInactive} .cta`, { y: 60 });
              clicks -= 1;
              if (clicks > 0) {
                step();
              }
            },
          });

          rest.forEach((i, index) => {
            if (i !== prv) {
              const xNew = offsetLeft + index * (cardWidth + gap);
              gsap.set(getCard(i), { zIndex: 30 });
              gsap.to(getCard(i), {
                x: xNew,
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                ease,
                delay: 0.1 * (index + 1),
              });

              gsap.to(getCardContent(i), {
                x: xNew,
                y: offsetTop + cardHeight - 100,
                opacity: 1,
                zIndex: 40,
                ease,
                delay: 0.1 * (index + 1),
              });
              gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
            }
          });
        });
      }

      function animate(target: string, duration: number, properties: any) {
        return new Promise((resolve) => {
          gsap.to(target, {
            ...properties,
            duration: duration,
            onComplete: resolve,
          });
        });
      }

      let isLooping = true;

      async function loop() {
        if (!isLooping) return;
        await animate(".gallery-indicator", 2, { x: 0 });
        if (!isLooping) return;
        await animate(".gallery-indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
        gsap.set(".gallery-indicator", { x: -window.innerWidth });
        if (!isLooping) return;
        await step();
        if (isLooping) {
          timeoutId = setTimeout(loop, 100);
        }
      }

      async function loadImages() {
        const promises = data.map(
          ({ image }) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve(img);
              img.onerror = reject;
              img.src = image;
            })
        );
        return Promise.all(promises);
      }

      async function start() {
        try {
          await loadImages();
          init();
        } catch (error) {
          console.error("One or more images failed to load", error);
        }
      }

      start();

      return () => {
        isLooping = false;
        clearTimeout(timeoutId);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="gallery-slider-body">
      <div className="gallery-indicator"></div>

      {data.map((i, index) => (
        <div
          key={`card-${index}`}
          className="gallery-card"
          id={`card${index}`}
          style={{ backgroundImage: `url(${i.image})` }}
        />
      ))}

      {data.map((i, index) => (
        <div
          key={`card-content-${index}`}
          className="gallery-card-content"
          id={`card-content-${index}`}
        >
          <div className="content-start"></div>
          <div className="content-place">{i.place}</div>
          <div className="content-title-1">{i.title}</div>
          <div className="content-title-2">{i.title2}</div>
        </div>
      ))}

      {/* Details blocks */}
      {[true, false].map((isEven) => {
        const initialData = isEven ? data[0] : data[1];
        return (
          <div
            key={`details-${isEven}`}
            className="gallery-details"
            id={isEven ? "details-even" : "details-odd"}
          >
            <div className="place-box">
              <div className="text">{initialData.place}</div>
            </div>
            <div className="title-box-1">
              <div className="title-1">{initialData.title}</div>
            </div>
            <div className="title-box-2">
              <div className="title-2">{initialData.title2}</div>
            </div>
            <div className="desc">{initialData.description}</div>
            <div className="cta">
              <button className="bookmark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="discover">Discover Location</button>
            </div>
          </div>
        );
      })}

      <div className="gallery-pagination" id="pagination">
        <div className="arrow arrow-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="arrow arrow-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground"></div>
          </div>
        </div>
        <div className="slide-numbers" id="slide-numbers">
          {data.map((_, index) => (
            <div className="item" key={`slide-item-${index}`} id={`slide-item-${index}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-cover"></div>
    </div>
  );
}