import { fetchData } from "../fetcher/fetcher.js";
import MessageBox from "../components/alert.js";

export default class {
  constructor(params, data) {
    this.params = params;
    this.data = data;
    this.toggler = false;
    this.alerter = new MessageBox(
      "#msgbox-area",
      {
        closeTime: 5000,
      },
      "alert"
    );
    this.accepter = new MessageBox(
      "#msgbox-area",
      {
        closeTime: 5000,
        hideCloseButton: true,
      },
      "accept"
    );
  }

  handleNav() {
    // if (localStorage.getItem('gotUnread') === 'true')
    //     document.getElementById('chat_container').parentElement.classList.add('unreadMsg')
    // if (this.data.Authed) {
    //     if (document.querySelector("a[href='/signup']")) {
    //         document.querySelectorAll(".item.button").forEach(el => el.remove());
    //         this.toggler = false;
    //     }
    //     if (!document.querySelector("#logout")) {
    //         document.querySelector(".menu").insertAdjacentHTML('beforeend', `
    //             <li class="item button secondary"><a id="logout" class="nav__link" data-link style="cursor: pointer;">Logout</a></li>
    //         `)
    //     }
    //     document.querySelector("#logout").addEventListener("click", (e) => {
    //         e.preventDefault();
    //         if (this.data) closeWs(this.data.User.Username);
    //         try {
    //             this.data = fetchData("logout");
    //         } catch (error) {
    //             console.log('Fetch error: ', error);
    //         }
    //     })
    // } else {
    //     if (!document.querySelector("a[href='/signup']")) {
    //         document.querySelector(".menu").insertAdjacentHTML('beforeend', `
    //             <li class="item button"><a href="/signup" class="nav__link" data-link>Sign Up</a></li>
    //             <li class="item button secondary"><a href="/login" class="nav__link" data-link>Log In</a></li>
    //         `)
    //     }
    //     if (document.querySelector("#logout")) {
    //         document.querySelector(".item.button").remove();
    //         this.toggler = false;
    //     }
    // }
    // if (!document.getElementById('content').classList.contains('handled')) this.handleThis()
  }

  handleThis() {
    //     document.getElementById('content').classList.add('handled')
    //     const toggle = document.querySelector(".toggle");
    //     const menu = document.querySelector(".menu");
    //     /* Toggle mobile menu */
    //     const toggleMenu = () => {
    //         if (menu.classList.contains("active")) {
    //             menu.classList.remove("active");
    //             toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    //         } else {
    //             menu.classList.add("active");
    //             toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    //         }
    //     }
    //     if (menu.classList.contains("active")) toggleMenu();
    //     if (!this.toggler) {
    //         toggle.addEventListener("click", toggleMenu);
    //         this.toggler = true;
    //     }
  }

  handleBtn() {}

  async handleScript() {
    document.querySelectorAll("#script1")?.forEach(el => el.remove());
    document.querySelectorAll("#script2")?.forEach(el => el.remove());
    document.querySelectorAll("#script3")?.forEach(el => el.remove());
    document.querySelectorAll("#script4")?.forEach(el => el.remove());
    document.querySelectorAll("#script5")?.forEach(el => el.remove());
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
