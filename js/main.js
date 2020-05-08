document.addEventListener('DOMContentLoaded', () => {
    const testing = false;

    let levels_from_root
    if(testing) levels_from_root = location.pathname.split("io")[1].split("/").length - 1
    else levels_from_root = location.pathname.split("/").length - 1

    let path_to_root = ""
    for(let x = 0; x < levels_from_root; x++) path_to_root += "../"

    const socials = {
      main: {
        twitter: "https://twitter.com/oddduckgames",
        twitch: "https://www.twitch.tv/oddduckgames",
        github: "https://github.com/oddduckgames",
        youtube: "https://www.youtube.com/channel/UCqzFJQ7_h8XI3jNtAsrEq9w/"
      },
      
      dono: {
        patreon: "https://www.patreon.com/oddduckgames",
        kofi: "https://ko-fi.com/oddduckgames",
        paypal: "https://paypal.me/oddduckgames?locale.x=en_US"
      },
      other: {
        email: "oddduckgames@gmail.com"
      }
    }

    const $path_to_root = path_to_root + "oddduckgames.github.io/"
    const path_to_pages = $path_to_root + "pages/"
    const path_to_games = path_to_pages + "games/"
    const path_to_about = path_to_pages + "about/"
    const main_nav = {
      brand: {
        index: `${$path_to_root}index.html`,
        logo: `${$path_to_root}img/brand/logo.png`,
        name: `oddduck games`,
        slogan: "what's wrong with that duck?"
      },
      start: {
        games: {
          the_line: `${path_to_games}the-line.html`,
          ina: `${path_to_games}ina.html`
        },
        about: {
          culture: `${path_to_about}culture.html`,
          purpose: `${path_to_about}purpose.html`,
          team: `${path_to_about}team.html`
        },
        forums: `${path_to_pages}forums.html`,
        blog: `${path_to_pages}blog.html`,
        contact: `${path_to_pages}contact.html`
      },
      end: socials
    }

    const parser = new DOMParser();
    const nav_html = parser.parseFromString(
        `<nav class="navbar is-spaced toggle-dark" role="navigation" aria-label="main navigation">
        <div class="container">
  
          <div class="navbar-brand">
            <a href="${main_nav.brand.index}" class="navbar-item is-family-secondary is-size-4 is-hidden-desktop">
              <img src="${main_nav.brand.logo}">
              <strong>${main_nav.brand.name}</strong></a>
            <a href="${main_nav.brand.index}" class="navbar-item is-family-secondary is-size-2 is-hidden-mobile is-hidden-tablet-only">
              <img src="${main_nav.brand.logo}">
              <strong>${main_nav.brand.name}</strong></a>
            <span class="navbar-item">
            <div class="field dark-switch is-hidden-desktop">
              <input id="dark-mode-switch" type="checkbox" name="dark-mode-switch" class="switch dark-mode-switch is-rtl is-small" checked="checked">
              <label for="dark-mode-switch">
                <label for="dark-mode-switch-desktop">
                  <span class="off-bulb" style="color: white;"><i class="far fa-lightbulb off-bulb"></i></span>
                  <span class="on-bulb hide" style="color: orange;"><i class="fas fa-lightbulb"></i></span>
                </label>
              </label>
            </div>
            </span>
            <div class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu-options">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          
          <div id="menu-options" class="navbar-menu toggle-dark">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link toggle-dark">
                  games
                </a>
                <div class="navbar-dropdown toggle-dark">
                  <a href="${main_nav.start.games.the_line}" class="navbar-item toggle-dark">The Line</a>
                  <hr class="navbar-divider is-hidden-desktop">
                  <a href="${main_nav.start.games.ina}" class="navbar-item toggle-dark">Tales of the Basilisk: Ina</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link toggle-dark">
                  about
                </a>
                <div class="navbar-dropdown toggle-dark">
                  <a href="${main_nav.start.about.culture}" class="navbar-item toggle-dark">our culture</a>
                  <hr class="navbar-divider is-hidden-desktop">
                  <a href="${main_nav.start.about.purpose}" class="navbar-item toggle-dark">our purpose</a>
                  <hr class="navbar-divider is-hidden-desktop">
                  <a href="${main_nav.start.about.team}" class="navbar-item toggle-dark">our team</a>
                </div>
              </div>

              <a href="${main_nav.start.forums}" class="navbar-item toggle-dark">forums</a>
              <a href="${main_nav.start.blog}" class="navbar-item toggle-dark">dev-blog</a>
              <a href="${main_nav.start.contact}" class="navbar-item toggle-dark">contact</a>
            </div>
            <div class="navbar-end">
              <a href="${socials.main.youtube}" class="navbar-item"><span style="color: #c4302b;"><i class="fab fa-youtube"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official YouTube channel</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tutorials, gameplay and more</em>
                </span>
              </a>
              <a href="${socials.main.twitter}" class="navbar-item"><span style="color: #00acee;"><i class="fab fa-twitter"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official Twitter</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stay updated or @ us</em>
                </span>
              </a>
              <a href="${socials.main.twitch}" class="navbar-item"><span style="color: #6441a5 ;"><i class="fab fa-twitch"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official Twitch stream</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live announcments and tutorials</em>
                </span>
              </a>
              <a href="${socials.main.github}" class="navbar-item"><i class="fab fa-github"></i>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official GitHub</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We love open source</em>
                </span>
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link toggle-dark">
                  <span style="color: #00e600 ;"><i class="fas fa-donate"></i></span>
                </a>
                <div class="navbar-dropdown toggle-dark">
                  <a href="${socials.dono.patreon}" class="navbar-item toggle-dark">
                    <span style="color: #fb664e;"><i class="fab fa-patreon"></i></span>&nbsp;&nbsp;Support us on patreon
                  </a>
                  <hr class="navbar-divider is-hidden-desktop">
                  <a href="${socials.dono.kofi}" class="navbar-item toggle-dark">
                    <span style="color: #29abe0;"><span class="iconify" data-icon="simple-icons:ko-fi" data-inline="false"></span></span>&nbsp;&nbsp;Buy us a coffee on Kofi
                  </a>
                </div>
              </div>

              <div class="field dark-switch is-hidden-mobile is-hidden-tablet-only">
                <input id="dark-mode-switch-desktop" type="checkbox" name="dark-mode-switch" class="switch dark-mode-switch is-rtl is-small" checked="checked">
                <label for="dark-mode-switch-desktop">
                  <span class="off-bulb" style="color: white;"><i class="far fa-lightbulb off-bulb"></i></span>
                  <span class="on-bulb hide" style="color: orange;"><i class="fas fa-lightbulb"></i></span>
                </label>
              </div>
            </div>
  
          </div>
  
        </div>
      </nav>`, "text/html").getElementsByTagName("nav")[0]
    
    const body_container = document.getElementsByTagName('body')[0];
    if(body_container.firstChild != null) body_container.insertBefore(nav_html, body_container.firstChild)
    else body_container.appendChild(nav_html)
    
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

    document.getElementsByTagName("html")[0].classList.add("toggle-dark");
    const dark_toggles = document.getElementsByClassName("toggle-dark");
    const on_bulbs = document.getElementsByClassName("on-bulb");
    const off_bulbs = document.getElementsByClassName("off-bulb");
    for(let el of dark_toggles)
    {
      el.classList.add("has-background-dark");
      el.classList.add("has-text-white");
      el.classList.add("is-dark");
    }
    const dark_switches = document.getElementsByClassName("dark-mode-switch");
    for (let el of dark_switches) {
      el.addEventListener('click', (event) => {
        if(el.getAttribute("checked") === "checked")
        {
          el.setAttribute("checked", "unchecked");
          for(let toggle of dark_toggles)
          {
            toggle.classList.remove("has-background-dark");
            toggle.classList.remove("has-text-white");
            toggle.classList.remove("is-dark");
          }
          for(let bulb of on_bulbs) bulb.classList.remove("hide");
          for(let bulb of off_bulbs) bulb.classList.add("hide"); 
        }
        else
        {
          el.setAttribute("checked", "checked");
          for(let toggle of dark_toggles)
          {
            toggle.classList.add("has-background-dark");
            toggle.classList.add("has-text-white");
            toggle.classList.add("is-dark");
          }
          for(let bulb of on_bulbs) bulb.classList.add("hide");
          for(let bulb of off_bulbs) bulb.classList.remove("hide");  
        }   
      });
    }
  });