import { BottomBar, Slide } from '@deckio/deck-engine'
import mascot from '../data/deckio-mascot.png'
import styles from './ExplainToddlerSlide.module.css'

export default function ExplainToddlerSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.explainToddler}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>🎬 deckio for little ones</p>
        <h1 className={styles.title}>
          What is <span className={styles.highlight}>Deckio</span>?
        </h1>
        <p className={styles.subtitle}>
          Imagine a magic coloring book… but for slideshows!
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.emoji}>🗣️</span>
            <h3>You Talk</h3>
            <p>You tell your robot friend what you want to see. "Make me a slide about dinosaurs!"</p>
          </div>

          <div className={styles.card}>
            <span className={styles.emoji}>🤖</span>
            <h3>Robot Draws</h3>
            <p>Your robot friend (called Copilot) listens and builds the slides for you — like magic!</p>
          </div>

          <div className={styles.card}>
            <span className={styles.emoji}>✨</span>
            <h3>It Appears!</h3>
            <p>The slides show up right away on your screen. Don't like it? Just ask again!</p>
          </div>
        </div>
        <div className={styles.callout}>
          <img src={mascot} alt="Deckio mascot" className={styles.mascot} />
          <div className={styles.calloutText}>
            <span className={styles.calloutLabel}>Psst… wanna try?</span>
            <span className={styles.calloutMessage}>
              Just say <strong>"make me a slide!"</strong> and watch the magic happen 🪄
            </span>
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
