document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const parser = new DOMParser();
    const main_nav = parser.parseFromString(
        `<nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div class="container">
  
          <div class="navbar-brand">
            <a href="../oddduckgames.github.io/index.html" class="navbar-item is-family-secondary is-size-4 is-hidden-desktop">oddduck games</a>
            <a href="../oddduckgames.github.io/index.html" class="navbar-item is-family-secondary is-size-3 is-hidden-mobile is-hidden-tablet-only">oddduck games</a>
            <div class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu-options">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
  
          <div id="menu-options" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  games
                </a>
                <div class="navbar-dropdown">
                  <a href="../oddduckgames.github.io/pages/the-line.html" class="navbar-item">The Line</a>
                  <hr class="navbar-divider">
                  <a href="../oddduckgames.github.io/pages/ina.html" class="navbar-item">Tales of the Basilisk: Ina</a>
                </div>
              </div>
              <a href="../oddduckgames.github.io/pages/about.html" class="navbar-item">about</a>
              <a href="../oddduckgames.github.io/pages/forums.html" class="navbar-item">forums</a>
              <a href="../oddduckgames.github.io/pages/blog.html" class="navbar-item">dev-blog</a>
              <a href="../oddduckgames.github.io/pages/contact.html" class="navbar-item">contact</a>
            </div>
            <div class="navbar-end">
              <a href="https://www.youtube.com/channel/UCqzFJQ7_h8XI3jNtAsrEq9w/" class="navbar-item"><span style="color: #c4302b;"><i class="fab fa-youtube"></i></span>
                <span class="is-hidden-desktop">
                  <strong>The official YouTube channel</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tutorials, gameplay and more</em>
                </span>
              </a>
              <a href="https://twitter.com/oddduckgames" class="navbar-item"><span style="color: #00acee;"><i class="fab fa-twitter"></i></span>
                <span class="is-hidden-desktop">
                  <strong>The official Twitter</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stay updated or @ us</em>
                </span>
              </a>
              <a href="https://www.twitch.tv/oddduckgames" class="navbar-item"><span style="color: #6441a5 ;"><i class="fab fa-twitch"></i></span>
                <span class="is-hidden-desktop">
                  <strong>The official Twitch stream</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live announcments and tutorials</em>
                </span>
              </a>
              <a href="https://github.com/oddduckgames" class="navbar-item"><i class="fab fa-github"></i>
                <span class="is-hidden-desktop">
                  <strong>The official GitHub</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We love open source</em>
                </span>
              </a>
            </div>
  
          </div>
  
        </div>
      </nav>`, "text/html").getElementsByTagName("nav")[0]
    
    const body_container = document.getElementsByTagName('body')[0];
    if(body_container.firstChild != null) body_container.insertBefore(main_nav, body_container.firstChild)
    else body_container.appendChild(main_nav)
    
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });