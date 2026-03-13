(function() {
  const DISCORD_URL = "https://discord.gg/7w2BWAHSma";
  const LOGO_URL = "https://images-ext-1.discordapp.net/external/oHMiYNyU7kb5XMQ4WVjwV6mOyckRC_qQZcUYrZqk2gY/%3Fsize%3D4096/https/cdn.discordapp.com/icons/1451305417459372136/b73d024855d393a88a1ea6a3424dc989.png?format=webp&quality=lossless";
  const DISCORD_ICON = "https://media.discordapp.net/attachments/1451341708892831895/1481820095054614588/discord-white-icon.png?ex=69b4b401&is=69b36281&hm=2eaad3822d5f91737ef81fc1d0aeaa236b69e5a5b7f4378b6cdc9be8de796cc9&=&format=webp&quality=lossless";

  const depth = (document.querySelector('meta[name="nav-depth"]') || {}).content || "0";
  const prefix = depth === "1" ? "../" : "./";

  const currentPath = window.location.pathname.toLowerCase().replace(/\/index\.html$/,'').replace(/\/$/,'');
  function isActive(page) {
    if (page === 'home') {
      return currentPath.endsWith('/yunaboosts') || currentPath === '' || currentPath === '/' || (!currentPath.includes('/faq') && !currentPath.includes('/reviews') && !currentPath.includes('/tos') && !currentPath.includes('/about'));
    }
    return currentPath.includes('/' + page);
  }

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${prefix}" class="nav-brand">
        <div class="nav-logo"><img src="${LOGO_URL}" alt="YunaBoosts" /></div>
        <span class="nav-title">YunaBoosts</span>
      </a>
      <button class="nav-hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links">
        <a href="${prefix}" class="nav-link ${isActive('home') ? 'active' : ''}">Home</a>
        <a href="${prefix}reviews/" class="nav-link ${isActive('reviews') ? 'active' : ''}">Reviews</a>
        <a href="${prefix}faq/" class="nav-link ${isActive('faq') ? 'active' : ''}">FAQ</a>
        <a href="${prefix}about/" class="nav-link ${isActive('about') ? 'active' : ''}">About</a>
        <a href="${prefix}tos/" class="nav-link ${isActive('tos') ? 'active' : ''}">TOS</a>
        <a href="${DISCORD_URL}" target="_blank" class="nav-discord">
          <img src="${DISCORD_ICON}" alt="" class="nav-discord-icon" />
          Join Discord
        </a>
      </div>
    </div>
  `;

  const container = document.querySelector('.container');
  if (container) {
    const oldHeader = container.querySelector('header');
    if (oldHeader) {
      container.insertBefore(nav, oldHeader);
      oldHeader.remove();
    } else {
      container.insertBefore(nav, container.firstChild);
    }
  }

  const hamburger = nav.querySelector('.nav-hamburger');
  const links = nav.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    hamburger.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Remove any old footer
  const oldFooter = document.querySelector('footer');
  if (oldFooter) oldFooter.remove();
})();
