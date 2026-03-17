import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './KnowledgeWorkerSlide.module.css'

export default function KnowledgeWorkerSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.knowledgeWorker}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>🎬 Why Deckio</p>
        <h1 className={styles.title}>
          Stop making slides.<br />
          <span className={styles.highlight}>Start describing them.</span>
        </h1>
        <p className={styles.subtitle}>
          Deckio turns a single prompt into a polished, brand-ready presentation — no templates, no drag-and-drop, no wasted afternoon.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <h3>Minutes, Not Hours</h3>
            <p>Describe your deck in plain English. Copilot builds it live — structure, content, and styling — while you watch.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔁</div>
            <h3>Iterate by Talking</h3>
            <p>"Make the intro punchier." "Add a metrics slide." Every refinement is a conversation, not a click-hunt through menus.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🎨</div>
            <h3>Pixel-Perfect, Always</h3>
            <p>Themes, typography, spacing, and color tokens are built in. Your deck looks designed because the engine enforces it.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🧩</div>
            <h3>Real Components</h3>
            <p>Cards, badges, buttons, animations — not clip art. Built on React, Tailwind, and shadcn/ui. Extend anything.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🚀</div>
            <h3>Zero Setup</h3>
            <p>One command. Dev container spins up, browser opens, Copilot is ready. You're presenting in under sixty seconds.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔓</div>
            <h3>You Own Everything</h3>
            <p>Every slide is source code in your repo. Version it, branch it, review it, ship it — just like the rest of your work.</p>
          </div>
        </div>
      </div>

      <BottomBar text="deckio" />
    </Slide>
  )
}
