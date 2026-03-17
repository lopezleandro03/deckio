import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <p className={styles.eyebrow}>deckio</p>
          <h1>
            <span className={styles.highlight}>Deckio</span>
          </h1>
          <p className={styles.subtitle}>
            A presentation built with deck-engine
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project</span>
              <span className={styles.metaValue}>Deckio</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
