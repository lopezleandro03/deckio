import { BottomBar, Slide } from '@deckio/deck-engine'
import mascot from '../data/deckio-mascot.png'
import styles from './GetStartedSlide.module.css'

export default function GetStartedSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.getStarted}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <img src={mascot} alt="Deckio mascot" className={styles.mascot} />
        <p className={styles.eyebrow}>Get Started</p>
        <h1 className={styles.title}>
          One command.<br />
          <span className={styles.highlight}>Your deck.</span>
        </h1>
        <div className={styles.codeBlock}>
          <code>npm create deckio</code>
        </div>
        <p className={styles.subtitle}>
          That's it. Copilot takes it from here — describe your slides and ship.
        </p>
        <p className={styles.contrib}>
          Open source. Contributors welcome. ↗ github.com/deckio-art/deck-engine
        </p>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
