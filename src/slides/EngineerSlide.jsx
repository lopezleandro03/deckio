import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './EngineerSlide.module.css'

export default function EngineerSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.engineer}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>🎬 The Vision</p>
        <h1 className={styles.title}>
          Communication is<br />
          <span className={styles.highlight}>the work.</span>
        </h1>

        <div className={styles.statements}>
          <p>
            Software engineering is shifting left. The people building software now need product taste,
            systems thinking, and the ability to make intent legible long before the code is finished.
          </p>
          <p>
            DECKIO helps developers and product minds shape vision, explain tradeoffs, and produce
            artifacts that are persuasive to humans and actionable for teams.
          </p>
          <p className={styles.accent}>
            As agents become part of the workflow, alignment becomes paramount. Every scaffolded
            project includes instructions, skills, and structure — so agents follow your intent
            and never drift.
          </p>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
