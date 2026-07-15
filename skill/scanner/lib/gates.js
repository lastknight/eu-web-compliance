// gates.js — the entry point of the method.
// Turns the 16 level-1 gate answers (yes / no / dontknow) into the set of active
// areas and the perimeter (external properties/vendors the scan should look for).
// Founding principle: a scan confirms presence, never absence. So "dontknow" keeps
// an area ACTIVE in conservative mode and flags it for the interview; only an explicit
// "no" switches an area off. A missing gate answer is treated as "dontknow".

// Areas A–J always apply. K–O are conditional on gates (D and G are decided by the scan).
export const ALWAYS_ACTIVE = ['A', 'B', 'C', 'E', 'F', 'H', 'I', 'J'];

// Gate catalogue. `activates` lists conditional areas switched on by a "yes".
// `extendsPerimeter` describes the external property/vendor class a "yes" adds.
export const GATES = {
  'Q-G-01': { q: 'Newsletter or email marketing?', activates: ['K'], extendsPerimeter: 'ESP / newsletter platform' },
  'Q-G-02': { q: 'Lead generation?', activates: ['K'], extendsPerimeter: 'lead-gen platforms' },
  'Q-B-11': { q: 'CRM or marketing automation?', activates: ['K'], extendsPerimeter: 'CRM and commercial partners' },
  'Q-L-01': { q: 'Online sales with cart/checkout/payment?', activates: ['L'], extendsPerimeter: 'e-commerce, PSP / payment gateway' },
  'Q-A-05': { q: 'Channels beyond the website (app, landing pages, points of sale, phone)?', activates: [], extendsPerimeter: 'third-party properties, mobile SDK surface' },
  'Q-G-10': { q: 'Audience includes minors?', activates: [], extendsPerimeter: null },
  'Q-I-04': { q: 'Advertising (Google/Meta/TikTok/LinkedIn), custom audiences?', activates: [], extendsPerimeter: 'ad platforms' },
  'Q-B-08': { q: 'Profiling, scoring, automated personalisation or decisions?', activates: ['M'], extendsPerimeter: null },
  'Q-B-05': { q: 'DPO appointed (internal or external)?', activates: [], extendsPerimeter: null },
  'Q-M-01': { q: 'Chatbot, LLM assistant, synthetic content, training on user input?', activates: ['M'], extendsPerimeter: 'AI provider / model' },
  'Q-N-01': { q: 'Outbound commercial calls (voice bot, IVR, operator)?', activates: ['N'], extendsPerimeter: 'voice provider' },
  'Q-O-02': { q: 'UGC / platform / marketplace / third-party stores / price personalisation?', activates: ['O'], extendsPerimeter: 'marketplace, gatekeeper' },
  'Q-B-13': { q: 'External agency or suppliers processing on your behalf?', activates: [], extendsPerimeter: 'external processors' },
  'Q-I-01': { q: 'How many sites and domains?', activates: [], extendsPerimeter: 'additional domains' },
  'Q-I-08': { q: 'Controller established outside the EU?', activates: [], extendsPerimeter: null },
  'Q-D-13': { q: 'Banner patterns: cookie wall, consent-or-pay, IAB TCF?', activates: [], extendsPerimeter: 'TCF vendor list' },
};

const norm = (v) => {
  if (v === true) return 'yes';
  if (v === false) return 'no';
  const s = String(v ?? '').trim().toLowerCase();
  if (['yes', 'y', 'true', 'si', 'sì', 's'].includes(s)) return 'yes';
  if (['no', 'n', 'false'].includes(s)) return 'no';
  return 'dontknow';
};

// answers: { 'Q-G-01': 'yes' | 'no' | 'dontknow', ... } (subset allowed)
// Returns the resolved perimeter for the scan.
export function resolveGates(answers = {}) {
  const resolved = {};
  const active = new Set(ALWAYS_ACTIVE);
  const conservative = new Set(); // areas kept on by a "dontknow" — flag for interview
  const toAsk = [];               // gates not answered or answered "dontknow"
  const perimeter = new Set();

  for (const [id, def] of Object.entries(GATES)) {
    const state = norm(answers[id]);
    resolved[id] = state;
    if (state === 'yes') {
      def.activates.forEach((a) => active.add(a));
      if (def.extendsPerimeter) perimeter.add(def.extendsPerimeter);
    } else if (state === 'dontknow') {
      // conservative: keep the areas it could activate ON, but mark them to verify
      def.activates.forEach((a) => { active.add(a); conservative.add(a); });
      toAsk.push(id);
    }
    // 'no' => leave off, nothing added
  }

  return {
    resolved,
    activeAreas: [...active].sort(),
    conservativeAreas: [...conservative].sort(),
    toAsk,
    perimeter: [...perimeter].sort(),
    // Areas D (cookie banner) and G (forms) are decided by the scan itself.
    scanDecides: ['D', 'G'],
    mode: Object.keys(answers).length === 0 ? 'url-only' : 'gated',
  };
}
