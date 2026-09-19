
import { useEffect, useRef, useState } from "react";
import "./App.css";
import photoOne from "./assets/one.jpeg";
import photoTwo from "./assets/Two.jpeg";
import photoFour from "./assets/Four.jpeg";
import kuttyHema from "./assets/KuttyHema.jpeg";
import chinnaHema from "./assets/chinnaHema.jpeg";
import clgHema from "./assets/ClgHema.jpeg";
import onamImg from "./assets/onam.jpeg";
import saryHema from "./assets/saryHema.jpeg";
import kaaduHema from "./assets/KaaduHema.jpeg";
import kovilHema from "./assets/kovilTwoHema.jpeg";
import hemzKodai from "./assets/HemzKodai.jpeg";
import dayanHema from "./assets/DayanHema.jpeg";
import hemaAndMeee from "./assets/HemaAndMeee.jpeg";
import birthdayMusic from "./assets/audio/Unakkul-Naane-MassTamilan.dev.mp3";

/* =========================
   YOUR DATA
========================= */

const birthdayPerson = "Hema"; // Change this to the birthday person's name

const photos = [
  {
    src: hemaAndMeee,
    year: "Namma Combo",
    caption: "Namma sernthu irunthaale semma happy vibes thaan! 👫❤️",
  },
  {
    src: kuttyHema,
    year: "Kutty Days",
    caption: "Chinna vayasulaye semma vaalu and cute-u! 👶✨",
  },
  {
    src: hemzKodai,
    year: "Kodai Trip",
    caption: "Antha chill climate-la jolly-a oru mass pose! ❄️🏔️",
  },
  {
    src: saryHema,
    year: "Saree Look",
    caption: "Saree-la paaka devathai maathiri romba azhagu! 💖😍",
  },
  {
    src: dayanHema,
    year: "Dracula Mood",
    caption: "Intha naughty smile-ku naan eppovume fan! 😜🔥",
  },
  {
    src: chinnaHema,
    year: "School Days",
    caption: "Appo paaka innocent maathiri, aana semma naughty! 🙈🌸",
  },
  {
    src: onamImg,
    year: "Onam Vibes",
    caption: "Traditional look-la semma gorgeous-ah irukka! 🌼🪔",
  },
  {
    src: clgHema,
    year: "College Days",
    caption: "College time-la full fun and mass-aana naatkal! 🎓😎",
  },
  {
    src: kovilHema,
    year: "Kovil Days",
    caption: "Kovil-la manasula nimmadhiya edutha sweet click! 🙏✨",
  },
  {
    src: kaaduHema,
    year: "Nature Trip",
    caption: "Kaatukulla cool breeze-la oru beautiful candid! 🌿🍃",
  },
  {
    src: photoOne,
    year: "Special Day",
    caption: "Namma story start aana antha golden memory! 💫❤️",
  },
  {
    src: photoTwo,
    year: "Sweet Moments",
    caption: "Kannula sirippu, manasula sandhosham neranja naal! 🥰✨",
  },
  {
    src: photoFour,
    year: "Forever Smile",
    caption: "Innum neraya memories, eppovum ipdiye sirichite irukanum! 💖🎉",
  },
];

const timeline = [
  {
    date: "2019",
    title: "Aarambam ❤️",
    text: "Namma beautiful journey start aana antha sweet beginning! ❤️",
    image: photoOne,
  },
  {
    date: "2022",
    title: "Jolly Moments ✨",
    text: "Evvalavu sirippu, sandhosham, and marakka mudiyatha nalla memories!",
    image: photoTwo,
  },
  {
    date: "2025",
    title: "Adventures 🏔️",
    text: "Time poga poga namma bond innum romba special and strong aachu. 🥰",
    image: hemzKodai,
  },
  {
    date: "2026",
    title: "Eppovum Sirippu illai morappu 🥰",
    text: "Innum neraya beautiful memories create panni eppovume sirichite irukanum! ❤️",
    image: photoFour,
  },
];


/* =========================
   SVG GIFT
========================= */

function GiftSVG() {
  return (
    <svg
      className="gift-svg"
      viewBox="0 0 300 260"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="150"
        cy="235"
        rx="85"
        ry="12"
        fill="rgba(0,0,0,0.2)"
      />

      {/* Box */}
      <rect
        x="75"
        y="105"
        width="150"
        height="110"
        rx="8"
        fill="#e63968"
      />

      {/* Box highlight */}
      <rect
        x="90"
        y="120"
        width="25"
        height="80"
        rx="10"
        fill="rgba(255,255,255,0.1)"
      />

      {/* Vertical ribbon */}
      <rect
        x="132"
        y="105"
        width="36"
        height="110"
        fill="#ffd166"
      />

      {/* Lid */}
      <rect
        className="gift-lid-svg"
        x="62"
        y="78"
        width="176"
        height="38"
        rx="8"
        fill="#ff477e"
      />

      {/* Lid ribbon */}
      <rect
        x="132"
        y="78"
        width="36"
        height="38"
        fill="#ffd166"
      />

      {/* Bow left */}
      <path
        d="M150 78 C105 35 72 52 88 78 C98 95 128 92 150 78Z"
        fill="#ffd166"
      />

      {/* Bow right */}
      <path
        d="M150 78 C195 35 228 52 212 78 C202 95 172 92 150 78Z"
        fill="#ffd166"
      />

      {/* Bow center */}
      <circle
        cx="150"
        cy="78"
        r="15"
        fill="#ffb703"
      />

      {/* Sparkles */}
      <text x="35" y="65" fontSize="25">✨</text>
      <text x="245" y="80" fontSize="22">✨</text>
      <text x="45" y="190" fontSize="18">💖</text>
    </svg>
  );
}


/* =========================
   SVG CAKE
========================= */

function CakeSVG() {
  return (
    <svg
      className="cake-svg"
      viewBox="0 0 300 280"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="150"
        cy="250"
        rx="100"
        ry="12"
        fill="rgba(0,0,0,0.18)"
      />

      {/* Plate */}
      <ellipse
        cx="150"
        cy="225"
        rx="105"
        ry="25"
        fill="#ffd6e0"
      />

      {/* Bottom cake */}
      <path
        d="M65 145 H235 V215 Q150 240 65 215Z"
        fill="#ff6f91"
      />

      {/* Cream */}
      <path
        d="M65 145
           Q85 130 105 145
           Q125 160 145 145
           Q165 130 185 145
           Q205 160 235 145
           V165
           Q205 180 185 165
           Q165 150 145 165
           Q125 180 105 165
           Q85 150 65 165Z"
        fill="#fff"
      />

      {/* Top layer */}
      <path
        d="M75 105 H225 V150 Q150 170 75 150Z"
        fill="#ff8fab"
      />

      {/* Top cream */}
      <path
        d="M75 105
           Q95 90 115 105
           Q135 120 150 105
           Q165 90 185 105
           Q205 120 225 105
           V125
           Q205 140 185 125
           Q165 110 150 125
           Q135 140 115 125
           Q95 110 75 125Z"
        fill="#fff"
      />

      {/* Candles */}
      <rect x="105" y="62" width="12" height="42" rx="4" fill="#ffd166"/>
      <rect x="144" y="55" width="12" height="50" rx="4" fill="#ffd166"/>
      <rect x="183" y="62" width="12" height="42" rx="4" fill="#ffd166"/>

      {/* Flames */}
      <text x="101" y="55" fontSize="22">🔥</text>
      <text x="140" y="48" fontSize="22">🔥</text>
      <text x="179" y="55" fontSize="22">🔥</text>

      {/* Decoration */}
      <circle cx="95" cy="190" r="6" fill="#ffd166"/>
      <circle cx="150" cy="200" r="6" fill="#ffd166"/>
      <circle cx="205" cy="190" r="6" fill="#ffd166"/>
    </svg>
  );
}


/* =========================
   APP
========================= */

function App() {
  const [step, setStep] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const audioRef = useRef(null);

  /* =========================
     MUSIC
  ========================= */

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => {
          console.log("Music playback requires user interaction.");
        });
    }
  };

  useEffect(() => {
    if (step >= 2 && audioRef.current && !musicPlaying) {
      audioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => {});
    }
  }, [step]);

  /* =========================
     NEXT STEP
  ========================= */

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 6));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <main className={`birthday-app step-${step}`}>

      {/* MUSIC */}
      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
      />

      {/* MUSIC BUTTON */}
      {step >= 2 && (
        <button
          className={`music-button ${
            musicPlaying ? "playing" : ""
          }`}
          onClick={toggleMusic}
        >
          {musicPlaying ? "🎵" : "🔇"}
        </button>
      )}


      {/* =========================
          STEP 1
      ========================= */}

      {step === 1 && (
        <section className="screen opening-screen">

          <div className="floating-hearts">
            <span>❤️</span>
            <span>💕</span>
            <span>💖</span>
            <span>💗</span>
            <span>❤️</span>
          </div>

          <div className="opening-content">

            <p className="eyebrow">
              ✨ Something special is waiting for you ✨
            </p>

            <h1>
              You Have a
              <br />
              <span>Surprise! 🎁</span>
            </h1>

            <div className="gift-wrapper">
              <GiftSVG />
            </div>

            <p className="hint">
              There's something inside just for you ❤️
            </p>

            <button
              className="primary-button"
              onClick={nextStep}
            >
              Open Your Surprise
              <span>→</span>
            </button>

          </div>
        </section>
      )}


      {/* =========================
          STEP 2
      ========================= */}

      {step === 2 && (
        <section className="screen birthday-screen">

          <Confetti />

          <div className="birthday-content">

            <div className="cake-wrapper">
              <CakeSVG />
            </div>

            <p className="eyebrow">
              ✨ Today is all about you ✨
            </p>

            <h1 className="birthday-title">
              Happy Birthday
            </h1>

            <h2 className="person-name">
              {birthdayPerson} ❤️
            </h2>

            <div className="sparkle-divider">
              ✨ ❤️ ✨
            </div>

            <p className="birthday-text">
              May your day be filled with happiness,
              beautiful moments, endless smiles,
              and everything your heart wishes for.
            </p>

            <p className="birthday-text">
              This little surprise was made
              especially for you. 💖
            </p>

            <button
              className="primary-button"
              onClick={nextStep}
            >
              See Your Memories 📸
              <span>→</span>
            </button>

          </div>
        </section>
      )}


      {/* =========================
          STEP 3
      ========================= */}

      {step === 3 && (
        <section className="screen gallery-screen">

          <div className="section-container">

            <p className="eyebrow">
              📸 A few moments worth remembering
            </p>

            <h1 className="section-title">
              Our Memories
            </h1>

            <p className="section-subtitle">
              Some pictures may fade with time,
              but the memories never do. ❤️
            </p>

            <div className="photo-grid">

              {photos.map((photo, index) => (
                <button
                  className="photo-card"
                  key={`${photo.src}-${index}`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="photo-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <img
                    src={photo.src}
                    alt={photo.caption}
                  />

                  <div className="photo-overlay">
                    <span>{photo.year}</span>
                    <p>{photo.caption}</p>
                  </div>
                </button>
              ))}

            </div>

            <button
              className="primary-button"
              onClick={nextStep}
            >
              Walk Through Our Story ❤️
              <span>→</span>
            </button>

          </div>

          {/* LIGHTBOX */}

          {selectedPhoto && (
            <div
              className="lightbox"
              onClick={() => setSelectedPhoto(null)}
            >
              <button
                className="close-button"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
              />

              <p>
                {selectedPhoto.caption}
              </p>
            </div>
          )}

        </section>
      )}


      {/* =========================
          STEP 4
      ========================= */}

      {step === 4 && (
        <section className="screen timeline-screen">

          <div className="section-container">

            <p className="eyebrow">
              ❤️ Chapter by chapter
            </p>

            <h1 className="section-title">
              Our Story
            </h1>

            <p className="section-subtitle">
              A collection of little moments
              that became beautiful memories.
            </p>

            <div className="timeline">

              {timeline.map((item, index) => (
                <div
                  className={`timeline-item ${
                    index % 2 === 0
                      ? "left"
                      : "right"
                  }`}
                  key={item.date}
                >

                  <div className="timeline-dot">
                    ❤️
                  </div>

                  <div className="timeline-card">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="timeline-info">

                      <span className="timeline-date">
                        {item.date}
                      </span>

                      <h2>
                        {item.title}
                      </h2>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            <button
              className="primary-button"
              onClick={nextStep}
            >
              There's One More Thing 🎵
              <span>→</span>
            </button>

          </div>
        </section>
      )}


      {/* =========================
          STEP 5
      ========================= */}

      {step === 5 && (
        <section className="screen music-screen">

          <div className="music-content">

            <div className="music-icon">
              {musicPlaying ? "🎵" : "🎶"}
            </div>

            <p className="eyebrow">
              🎵 A little soundtrack for your day
            </p>

            <h1 className="section-title">
              This Song Is For You
            </h1>

            <p className="section-subtitle">
              Turn up the volume and let the memories
              play along with the music. ❤️
            </p>

            <div className="music-player">

              <div className="disc">
                💿
              </div>

              <div className="music-details">
                <strong>
                  Unakkul Naane 🎵
                </strong>

                <span>
                  Special song for {birthdayPerson} ❤️
                </span>
              </div>

              <button
                className="play-button"
                onClick={toggleMusic}
              >
                {musicPlaying ? "❚❚" : "▶"}
              </button>

            </div>

            <button
              className="primary-button"
              onClick={nextStep}
            >
              Open The Final Surprise 💌
              <span>→</span>
            </button>

          </div>

        </section>
      )}


      {/* =========================
          STEP 6
      ========================= */}

      {step === 6 && (
        <section className="screen final-screen">

          <div className="final-hearts">
            ❤️ 💕 💖 💗 ❤️
          </div>

          <div className="letter">

            <div className="letter-top">
              💌
            </div>

            <p className="eyebrow">
              A little message from my heart
            </p>

            <h1>
              For You,
              {birthdayPerson} ❤️
            </h1>

            <div className="letter-divider">
              ─── ✨ ───
            </div>

            <p>
              Some people come into our lives
              and quietly become a beautiful
              part of our story.
            </p>

            <p>
              Every laugh, every conversation,
              every silly moment and every
              unforgettable day becomes a memory
              worth keeping.
            </p>

            <p>
              Today, I just want you to know
              how special you are and how much
              happiness you deserve.
            </p>

            <p>
              I hope this new year of your life
              brings you countless reasons to smile,
              beautiful adventures and memories
              that you will treasure forever.
            </p>

            <h2>
              Happy Birthday {birthdayPerson}! 🎂
              Love you ❤️
            </h2>

            <div className="final-signature">
              Made with ❤️
            </div>

          </div>

          <p className="final-footer">
            ✨ End of the surprise...😉
          </p>

        </section>
      )}

    </main>
  );
}


/* =========================
   CONFETTI COMPONENT
========================= */

const CONFETTI_ITEMS = Array.from({ length: 60 }, (_, index) => ({
  id: index,
  left: `${((index * 37) % 100)}%`,
  animationDelay: `${((index * 13) % 20) / 10}s`,
  animationDuration: `${2 + ((index * 7) % 20) / 10}s`,
  char: index % 2 === 0 ? "✦" : "•",
}));

function Confetti() {
  return (
    <div className="confetti">
      {CONFETTI_ITEMS.map((item) => (
        <span
          key={item.id}
          style={{
            left: item.left,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration,
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}

export default App;
