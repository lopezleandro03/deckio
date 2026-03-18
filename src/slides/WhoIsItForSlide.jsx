import { BottomBar, Slide } from '@deckio/deck-engine'
import mascot from '../data/deckio-mascot.png'
import styles from './WhoIsItForSlide.module.css'

export default function WhoIsItForSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.whoIsItFor}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Built for you</p>
        <h1 className={styles.title}>
          Who is Deckio <span className={styles.highlight}>for?</span>
        </h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>👩‍💻</div>
            <h3>Developers</h3>
            <p>
              You live in the terminal. Your slides should too.
              Write decks as code, version them in Git, and ship with CI.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🤖</div>
            <h3>Agentic Engineers</h3>
            <p>
              Prompt-driven workflows are your thing. Describe a slide,
              Copilot builds it — iterate by conversation, not clicking.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>✨</div>
            <h3>You</h3>
            <p>
              Anyone tired of dragging boxes. If you can describe what you
              want, Deckio turns it into a polished deck — instantly.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <img src={mascot} alt="Deckio mascot" className={styles.ctaMascot} />
          <div className={styles.ctaContent}>
            <p className={styles.ctaText}>
              Ready to ditch the drag-and-drop?
            </p>
            <div className={styles.ctaAction}>
              <code>npm create deckio</code>
              <span className={styles.ctaArrow}>→</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
