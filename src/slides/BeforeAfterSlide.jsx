import { BottomBar, Slide } from '@deckio/deck-engine'
import sketchBefore from '../data/sketch-before.jpg'
import slideAfter from '../data/slide-after.png'
import styles from './BeforeAfterSlide.module.css'

export default function BeforeAfterSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.beforeAfter}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Sketch → Slide</p>
          <h1 className={styles.title}>
            From napkin to <span className={styles.highlight}>polished deck</span>
          </h1>
        </div>

        <div className={styles.prompt}>
          <span className={styles.promptIcon}>💬</span>
          <p>
            "Based on this draft, explain who is Deckio for and add a sick CTA
            including the Deckio's mascot"
          </p>
        </div>

        <div className={styles.comparison}>
          <div className={styles.panel}>
            <span className={styles.label}>Before</span>
            <img
              src={sketchBefore}
              alt="Hand-drawn sketch"
              className={styles.screenshot}
            />
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.panel}>
            <span className={`${styles.label} ${styles.labelAfter}`}>After</span>
            <img
              src={slideAfter}
              alt="Final polished slide"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
