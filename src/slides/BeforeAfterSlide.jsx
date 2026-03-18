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
      <div className={`orb ${styles.orb3}`} />
      <div className={styles.scanlines} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.blink}>▌</span> deckio sketch-to-slide skill
          </p>
          <h1 className={styles.title}>
            <span className={styles.mono}>$</span> napkin{' '}
            <span className={styles.pipe}>|</span>{' '}
            <span className={styles.highlight}>polished_deck</span>
          </h1>
        </div>

        <div className={styles.prompt}>
          <div className={styles.promptHeader}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
            <span className={styles.promptFile}>the prompt</span>
          </div>
          <div className={styles.promptBody}>
            <span className={styles.promptPrefix}>&gt;</span>
            <p>
              Based on this sketch, explain who is Deckio for and add a sick CTA
              including the Deckio's mascot. Make it geeky.
            </p>
          </div>
        </div>

        <div className={styles.comparison}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.statusDot} data-status="old" />
              <span className={styles.label}>input.sketch</span>
              <span className={styles.tag}>RAW</span>
            </div>
            <div className={styles.imgWrap}>
              <img
                src={sketchBefore}
                alt="Hand-drawn sketch"
                className={styles.screenshot}
              />
              <div className={styles.glitchOverlay} />
            </div>
          </div>

          <div className={styles.diffArrow}>
            <span className={styles.diffLine} />
            <span className={styles.diffIcon}>⚡</span>
            <span className={styles.diffLine} />
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.statusDot} data-status="new" />
              <span className={`${styles.label} ${styles.labelAfter}`}>output.slide</span>
              <span className={`${styles.tag} ${styles.tagSuccess}`}>RENDERED</span>
            </div>
            <div className={styles.imgWrap}>
              <img
                src={slideAfter}
                alt="Final polished slide"
                className={styles.screenshot}
              />
              <div className={styles.glowOverlay} />
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <img src={mascot} alt="Deckio mascot" className={styles.statsMascot} />
          <div className={styles.stat}>
            <span className={styles.statValue}>1</span>
            <span className={styles.statLabel}>sketch</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>1</span>
            <span className={styles.statLabel}>prompt</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>∞</span>
            <span className={styles.statLabel}>vibes</span>
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
