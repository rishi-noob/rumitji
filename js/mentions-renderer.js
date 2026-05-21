/* ==========================================================================
   MENTIONS-RENDERER.JS — Rumit Walia Portfolio
   Renders mention cards dynamically from MENTIONS_DATA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderMentions();
});

/* ── Gradient palette for mention cards ───────────────────────────────── */

const MENTION_GRADIENTS = [
  'linear-gradient(135deg, #1a1f3a 0%, #457b9d 100%)',
  'linear-gradient(135deg, #2d6a4f 0%, #4db8ab 100%)',
  'linear-gradient(135deg, #7d4e7f 0%, #a4161a 100%)',
  'linear-gradient(135deg, #f4a261 0%, #e76f51 100%)',
  'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)',
  'linear-gradient(135deg, #2a9d8f 0%, #264653 100%)',
  'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)',
  'linear-gradient(135deg, #4a4a46 0%, #6b6b66 100%)',
  'linear-gradient(135deg, #264653 0%, #2a9d8f 100%)',
  'linear-gradient(135deg, #457b9d 0%, #1d3557 100%)',
  'linear-gradient(135deg, #a4161a 0%, #7d4e7f 100%)'
];

/* ── Category badge color map ─────────────────────────────────────────── */

const CATEGORY_COLORS = {
  'Magazine':          'var(--color-plum)',
  'International Body':'var(--color-teal)',
  'News':              'var(--color-coral)',
  'Organization':      'var(--color-environment)',
  'Media':             'var(--color-peace)'
};

function renderMentions() {
  const container = document.getElementById('mentions-container');
  if (!container || !window.MENTIONS_DATA) return;

  const html = window.MENTIONS_DATA.map((mention, i) => {
    const gradient = MENTION_GRADIENTS[i % MENTION_GRADIENTS.length];
    const catColor = CATEGORY_COLORS[mention.category] || 'var(--color-navy)';
    const linkAttr = mention.link && mention.link !== '#'
      ? `href="${mention.link}" target="_blank" rel="noopener"`
      : `href="#"`;

    return `
      <div class="mention-card reveal">
        <div class="mention-card__preview" style="background: ${gradient}; color: white; font-size: 1.5rem; font-weight: 700; font-family: var(--font-display);">${mention.source}</div>
        <div class="mention-card__body">
          <span class="mention-card__source">${mention.source}</span>
          <h3 class="mention-card__title">${mention.description}</h3>
          <div class="mention-card__meta">
            <span class="mention-card__date">${mention.date}</span>
            <span class="mention-card__category" style="color: ${catColor};">${mention.category}</span>
          </div>
          <a ${linkAttr} class="mention-card__link">Read Article →</a>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = html;
}
