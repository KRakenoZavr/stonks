import { fetchData, fetchSubmitLogin } from "../fetcher/fetcher.js";
import MessageBox from "../components/alert.js";
import { navigateTo } from "../router/index.js";

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
    const qs = document.querySelector.bind(document);

    // var minheight = 20;
    // var maxheight = 100;
    // var time = 1000;
    // var timer = null;
    // var toggled = false;

    // var controller = document.getElementById("mmenu_toggle");
    // var slider = qs(".mobile_nav");
    // slider.style.height = minheight + "px"; //not so imp,just for my example
    // controller.onclick = function () {
    //   controller.classList.toggle('active')
    //   clearInterval(timer);
    //   var instanceheight = parseInt(slider.style.height); // Current height
    //   var init = new Date().getTime(); //start time
    //   var height = (toggled = !toggled) ? maxheight : minheight; //if toggled

    //   var disp = height - parseInt(slider.style.height);
    //   timer = setInterval(function () {
    //     var instance = new Date().getTime() - init; //animating time
    //     if (instance <= time) {
    //       //0 -> time seconds
    //       var pos = instanceheight + Math.floor((disp * instance) / time);
    //       slider.style.height = pos + "px";
    //     } else {
    //       slider.style.height = height + "px"; //safety side ^^
    //       clearInterval(timer);
    //     }
    //   }, 1);
    // };

    const deleteAction = (e) => {
      if (!qs(".sign_in_center").contains(e.target)) {
        if (qs("#sign_in_box").style.display === "block") {
          qs("#sign_in_box").style.display = "none";
          document.removeEventListener("click", deleteAction);
        } else {
          document.removeEventListener("click", deleteAction);
        }
      }
    };

    if (!qs(".btn_box a").classList.contains("handledBtn")) {
      qs(".btn_box a").addEventListener("click", async (e) => {
        const email = qs("#sign_in_box .email input").value.trim();
        const password = qs("#sign_in_box .password input").value.trim();
        qs("#sign_in_box .password input").value = "";

        try {
          await fetchSubmitLogin(email, password);
          qs("#sign_in_box").style.display = "none";
          document.removeEventListener("click", deleteAction);
          navigateTo("/");
        } catch (error) {
          console.error("Fetch error: ", error);
          this.alerter.show(error.ErrorText);
        }
      });
      qs(".btn_box a").classList.add("handledBtn");
    }

    // if (this.data.Authed) {
    //   qs('.social-list.fright').innerHTML = `
    //   <li><a>${this.data.User.Username}</a></li>
    //   <li><a href="" data-link>Выйти</a></li>`
    // }

    // if (localStorage.getItem('gotUnread') === 'true')
    //     document.getElementById('chat_container').parentElement.classList.add('unreadMsg')
    if (this.data.Authed) {
      if (qs(".soc_btn a[href='/sign_up']")) {
        document.querySelectorAll(".soc_btn").forEach((el) => el.remove());
        qs(
          "#primary-menu"
        ).innerHTML += `<li><a href="/createtrade" data-link>Создать торг</a></li>`;
        qs(
          "#menu-main-menu"
        ).innerHTML += `<li><a href="/createtrade" data-link>Создать торг</a></li>`;
      }
      if (!qs("#logout")) {
        qs(".social-list.fright").insertAdjacentHTML(
          "beforeend",
          `
            <li class="soc_btn"><a>${this.data.User.Username}</a></li>
            <li class="soc_btn"><a id="logout" data-link style="cursor: pointer;">Выйти</a></li>
          `
        );
      }
      qs("#logout").addEventListener("click", (e) => {
        e.preventDefault();
        try {
          this.data = fetchData("logout");
        } catch (error) {
          console.log("Fetch error: ", error);
        }
      });
    } else {
      if (qs("#logout")) {
        document.querySelectorAll(".soc_btn").forEach((el) => el.remove());
        document
          .querySelectorAll('a[href="/createtrade"]')
          .forEach((el) => el.remove());
      }
      if (!qs(".soc_btn a[href='/sign_up']")) {
        qs(".social-list.fright").insertAdjacentHTML(
          "beforeend",
          `
            <li class="signIn soc_btn"><a>Войти</a></li>
            <li class="soc_btn"><a href="/sign_up" data-link>Регистрация</a></li>
          `
        );
      }
      if (qs(".signIn")) {
        qs(".signIn").addEventListener("click", () => {
          qs("#sign_in_box").style.display = "block";
          setTimeout(() => {
            document.addEventListener("click", deleteAction);
          }, 500);
        });
      }
    }
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
    document.querySelectorAll("#script1")?.forEach((el) => el.remove());
    document.querySelectorAll("#script2")?.forEach((el) => el.remove());
    document.querySelectorAll("#script3")?.forEach((el) => el.remove());
    document.querySelectorAll("#script4")?.forEach((el) => el.remove());
    document.querySelectorAll("#script5")?.forEach((el) => el.remove());
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
