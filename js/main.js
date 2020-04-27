document.addEventListener('DOMContentLoaded', () => {
    const parser = new DOMParser();
    let path = ""
    const iter = location.pathname.split("io")[1].split("/").length - 1
    for(let x = 0; x < iter; x++) path += "../"
    console.log(path)
    const main_nav = parser.parseFromString(
        `<nav class="navbar is-spaced is-dark toggle-dark" role="navigation" aria-label="main navigation">
        <div class="container">
  
          <div class="navbar-brand">
            <a href="${path}oddduckgames.github.io/index.html" class="navbar-item is-family-secondary is-size-4 is-hidden-desktop">
              <img src="${path}oddduckgames.github.io/img/duck.png">
              <strong>oddduck games</strong></a>
            <a href="${path}oddduckgames.github.io/index.html" class="navbar-item is-family-secondary is-size-2 is-hidden-mobile is-hidden-tablet-only">
              <img src="${path}oddduckgames.github.io/img/duck.png">
              <strong>oddduck games</strong></a>
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
                  <a href="${path}oddduckgames.github.io/pages/the-line.html" class="navbar-item toggle-dark">The Line</a>
                  <hr class="navbar-divider">
                  <a href="${path}oddduckgames.github.io/pages/ina.html" class="navbar-item toggle-dark">Tales of the Basilisk: Ina</a>
                </div>
              </div>
              <a href="${path}oddduckgames.github.io/pages/about.html" class="navbar-item toggle-dark">about</a>
              <a href="${path}oddduckgames.github.io/pages/forums.html" class="navbar-item toggle-dark">forums</a>
              <a href="${path}oddduckgames.github.io/pages/blog.html" class="navbar-item toggle-dark">dev-blog</a>
              <a href="${path}oddduckgames.github.io/pages/contact.html" class="navbar-item toggle-dark">contact</a>
            </div>
            <div class="navbar-end">
              <a href="https://www.youtube.com/channel/UCqzFJQ7_h8XI3jNtAsrEq9w/" class="navbar-item"><span style="color: #c4302b;"><i class="fab fa-youtube"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official YouTube channel</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tutorials, gameplay and more</em>
                </span>
              </a>
              <a href="https://twitter.com/oddduckgames" class="navbar-item"><span style="color: #00acee;"><i class="fab fa-twitter"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official Twitter</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stay updated or @ us</em>
                </span>
              </a>
              <a href="https://www.twitch.tv/oddduckgames" class="navbar-item"><span style="color: #6441a5 ;"><i class="fab fa-twitch"></i></span>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official Twitch stream</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live announcments and tutorials</em>
                </span>
              </a>
              <a href="https://github.com/oddduckgames" class="navbar-item"><i class="fab fa-github"></i>
                <span class="is-hidden-desktop toggle-dark">
                  <strong>The official GitHub</strong>
                  <br>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We love open source</em>
                </span>
              </a>
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
    console.log(dark_switches)
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