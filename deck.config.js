import CoverSlide from './src/slides/CoverSlide.jsx'
import ExplainToddlerSlide from './src/slides/ExplainToddlerSlide.jsx'
import KnowledgeWorkerSlide from './src/slides/KnowledgeWorkerSlide.jsx'
import EngineerSlide from './src/slides/EngineerSlide.jsx'
import GetStartedSlide from './src/slides/GetStartedSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  id: 'deckio',
  title: 'Deckio',
  subtitle: 'A presentation built with deck-engine',
  description: 'A presentation built with deck-engine',
  icon: '🎬',
  accent: '#b80505',
  theme: 'dark',
  order: 1,
  slides: [
    CoverSlide,
    ExplainToddlerSlide,
    KnowledgeWorkerSlide,
    EngineerSlide,
    GetStartedSlide,
    ThankYouSlide,
  ],
}
