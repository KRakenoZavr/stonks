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
  }

  handleThis() {}

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
