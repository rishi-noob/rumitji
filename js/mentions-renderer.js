/* ==========================================================================
   MENTIONS-RENDERER.JS — Rumit Walia Portfolio
   Renders mention cards dynamically from MENTIONS_DATA
   ========================================================================== */

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
  'Magazine': 'var(--color-plum, #7d4e7f)',
  'International Body': 'var(--color-teal, #2a9d8f)',
  'News': 'var(--color-coral, #e76f51)',
  'Organization': 'var(--color-environment, #2d6a4f)',
  'Media': 'var(--color-peace, #457b9d)'
};

function renderMentions() {
  const container = document.getElementById('mentions-container');
  if (!container) return;

  const data = (typeof MENTIONS_DATA !== 'undefined' ? MENTIONS_DATA : window.MENTIONS_DATA);

  if (!data || !Array.isArray(data) || data.length === 0) {
    setTimeout(renderMentions, 100);
    return;
  }

  // Adding 'active' alongside 'reveal' ensures opacity: 1 is applied immediately
  const html = data.map((mention, i) => {
    const gradient = MENTION_GRADIENTS[i % MENTION_GRADIENTS.length];
    const category = mention.category || 'Media';
    const catColor = CATEGORY_COLORS[category] || 'var(--color-navy, #1a1f3a)';
    const source = mention.source || 'Media Feature';
    const description = mention.description || mention.title || '';
    const date = mention.date || '';

    const isValidLink = mention.link && mention.link !== '#';
    const linkAttr = isValidLink
      ? `href="${mention.link}" target="_blank" rel="noopener noreferrer"`
      : `href="#"`;

    return `
      <div class="mention-card reveal active">
        <div class="mention-card__preview" style="background: ${gradient}; color: white; font-size: 1.25rem; font-weight: 700; font-family: var(--font-display); padding: var(--spacing-md); text-align: center; display: flex; align-items: center; justify-content: center;">
          ${source}
        </div>
        <div class="mention-card__body">
          <span class="mention-card__source">${source}</span>
          <h3 class="mention-card__title">${description}</h3>
          <div class="mention-card__meta">
            <span class="mention-card__date">${date}</span>
            <span class="mention-card__category" style="color: ${catColor}; font-weight: 600;">${category}</span>
          </div>
          ${isValidLink
        ? `<a ${linkAttr} class="mention-card__link">Read Article <i class="fa-solid fa-arrow-right" style="margin-left: 4px;"></i></a>`
        : `<span class="mention-card__link" style="opacity: 0.6; cursor: default;">Featured Article</span>`
      }
        </div>
      </div>`;
  }).join('');

  container.innerHTML = html;

  // Re-trigger reveal animation observer if available in main.js / animations.js
  if (window.Observer && typeof window.Observer.observe === 'function') {
    container.querySelectorAll('.reveal').forEach(el => window.Observer.observe(el));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderMentions);
} else {
  renderMentions();
}