const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const splitMarker = `</script>
        font-size:clamp(0.55rem,1.1vw,0.7rem);`;

const headerBlock = `</script>
</head>
<body class="antialiased">

  <!-- STICKY HEADER WRAPPER -->
  <header class="site-header" id="siteHeader">
    <!-- TOP UTILITY BAR (LINE 1) -->
    <div class="topbar">
      <div class="topbar-inner">
        <div class="topbar-item email-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:info@royalkandytours.com">info@royalkandytours.com</a>
        </div>
        <div class="divider-dot"></div>
        <div class="topbar-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:+94770266988">Call Nalinda</a>
        </div>
        <a class="book-pill" href="book.html">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
          Book Your Tour
        </a>
      </div>
    </div>

    <!-- MAIN NAV BAR (LINE 2) -->
    <nav class="navbar" id="navbar">
      <div class="nav-inner">
        <a href="index.html" class="logo">
          <img src="assets/logo.png" alt="Royal Kandy Tours">
        </a>

        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="tours.html">Tours</a></li>
          <li><a href="destinations.html">Destinations</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div class="nav-icons">
          <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
            <div class="bars"><span></span><span></span><span></span></div>
            MENU
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- MOBILE DRAWER -->
  <div class="scrim" id="scrim"></div>
  <div class="mobile-drawer" id="mobileDrawer">
    <button class="close-drawer" id="closeDrawer">&times;</button>
    <a href="index.html" class="active">Home</a>
    <a href="#about">About Us</a>
    <a href="tours.html">Tours</a>
    <a href="destinations.html">Destinations</a>
    <a href="#reviews">Reviews</a>
    <a href="#gallery">Gallery</a>
    <a href="#faq">FAQ</a>
  </div>

  <!-- =============================================
       HERO — Nordic Horizons-style cinematic hero
       ============================================= -->
  <section id="home" class="rkt-hero">

    <!-- Full-bleed background image -->
    <div class="rkt-hero__bg">
      <img
        src="assets/kandy-lake-bg.jpg"
        alt="Lush Sri Lankan highlands at sunrise"
        class="rkt-hero__bg-img"
      />
      <div class="rkt-hero__vignette"></div>
    </div>

    <!-- Royal brand overlay -->
    <div style="
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-55%);
      z-index: 10;
      text-align: center;
      pointer-events: none;
      padding: 0 1.5rem;
      animation: rktFadeUp 1.2s ease-out both;
    ">
      <!-- Gold divider top -->
      <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:18px;">
        <div style="width:60px;height:1px;background:linear-gradient(to right,transparent,rgba(212,175,55,0.8));"></div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37" style="opacity:0.9;flex-shrink:0;"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
        <div style="width:60px;height:1px;background:linear-gradient(to left,transparent,rgba(212,175,55,0.8));"></div>
      </div>

      <!-- Tagline -->
      <p style="
        font-family:'Inter',sans-serif;
        font-size:clamp(0.55rem,1.1vw,0.7rem);`;

if (html.includes(splitMarker)) {
  html = html.replace(splitMarker, headerBlock);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log('Successfully inserted headerBlock!');
} else {
  console.log('Split marker not found, let us check index of </script>');
  const idx = html.indexOf('</script>\r\n        font-size:clamp(0.55rem,1.1vw,0.7rem);') !== -1
    ? html.indexOf('</script>\r\n        font-size:clamp(0.55rem,1.1vw,0.7rem);')
    : html.lastIndexOf('</script>');
  console.log('Last index of </script>:', idx);
  // Replace from last </script>
  const before = html.substring(0, idx + 9);
  const after = html.substring(idx + 9);
  const fixedAfter = after.replace(/^\s*font-size:clamp\(0\.55rem,1\.1vw,0\.7rem\);/, '');
  html = before + '\n' + headerBlock.replace('</script>\n', '') + fixedAfter;
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log('Replaced using fallback index method.');
}
