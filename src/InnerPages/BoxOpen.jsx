import { useState } from 'react';
import "./App.css";

const BoxOpen = ({ birthdayPerson = "Hema" }) => {
   const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className={`surprise-page ${opened ? "opened" : ""}`}>

      {/* Confetti */}
      {opened && (
        <div className="confetti">
          {Array.from({ length: 40 }).map((_, index) => (
            <span key={index}>✦</span>
          ))}
        </div>
      )}

      {/* Floating hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>❤️</span>
      </div>

      {!opened ? (

        /* =========================
           OPENING SCREEN
        ========================= */

        <div className="content opening-content">

          <p className="small-text">
            ✨ Something special is waiting for you ✨
          </p>

          <h1>
            You Have a<br />
            <span>Surprise! 🎁</span>
          </h1>

          {/* Gift */}
          <div className="gift-container">

            <div className="gift-box">

              <div className="gift-lid">
                <div className="ribbon"></div>
              </div>

              <div className="gift-body">
                <div className="vertical-ribbon"></div>
              </div>

              <div className="bow">
                <div className="bow-left"></div>
                <div className="bow-right"></div>
                <div className="bow-center"></div>
              </div>

            </div>

          </div>

          <p className="hint">
            There's something inside just for you ❤️
          </p>

          <button
            className="open-button"
            onClick={handleOpen}
          >
            Open Your Surprise
            <span> →</span>
          </button>

        </div>

      ) : (

        /* =========================
           BIRTHDAY REVEAL
        ========================= */

        <div className="birthday-content">

          <div className="cake">
            🎂
          </div>

          <p className="reveal-small">
            ✨ Today is all about YOU ✨
          </p>

          <h1 className="birthday-title">
            Happy Birthday
          </h1>

          {/* Change the name here */}
          <h2 className="person-name">
            {birthdayPerson} ❤️
          </h2>

          <div className="divider">
            ✨ ❤️ ✨
          </div>

          <p className="birthday-message">
            May your day be filled with happiness,
            beautiful moments and lots of reasons to smile.
          </p>

          <p className="birthday-message second">
            And this little surprise is just the beginning... 👀
          </p>

          <button
            className="continue-button"
            onClick={() => alert("Step 3 coming next! 📸")}
          >
            Continue to Memories 📸
          </button>

        </div>

      )}

    </div>
  );
}

export default BoxOpen
