import Dashboard from "../views/Dashboard.js";
import { fetchData } from "../fetcher/fetcher.js";
import Documents from "../views/Documents.js";
import Polozhenie from "../views/Posts/Polozhenie.js";
import Pravila from "../views/Posts/Pravila.js";
import Perechen from "../views/Posts/Perechen.js";
import Zakon from "../views/Posts/Zakon.js";
import Tipovye from "../views/Posts/Tipovye.js";
import Clearing from "../views/Clearing.js";
import Kliringovaya from "../views/Posts/Kliringovaya.js";
import Members from "../views/Members.js";
import Arbitrage from "../views/Arbitrage.js";
import About from "../views/About.js";
import Kontakty from "../views/Posts/Kontakty.js";
import SignUp from "../views/SignUp.js"

export let data;

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  document.querySelector(".menu").classList.remove("active");

  const routes = [
    { path: "/", view: Dashboard, fetchQuery: "all" },
    { path: "/documents", view: Documents, fetchQuery: "all" },
    { path: "/post/polozhenie", view: Polozhenie, fetchQuery: "all" },
    { path: "/post/pravila", view: Pravila, fetchQuery: "all" },
    { path: "/post/perechen", view: Perechen, fetchQuery: "all" },
    { path: "/post/zakon", view: Zakon, fetchQuery: "all" },
    { path: "/post/tipovye", view: Tipovye, fetchQuery: "all" },
    { path: "/clearing", view: Clearing, fetchQuery: "all" },
    { path: "/post/kliringovaya", view: Kliringovaya, fetchQuery: "all" },
    { path: "/members", view: Members, fetchQuery: "all" },
    { path: "/arbitrage", view: Arbitrage, fetchQuery: "all" },
    { path: "/about", view: About, fetchQuery: "all" },
    { path: "/post/kontakty", view: Kontakty, fetchQuery: "all" },
    { path: "/sign_up", view: SignUp, fetchQuery: "all" },
    // { path: "/posts/:id", view: PostView },
    // { path: "/createPost", view: CreatePost, fetchQuery: "all" },
    // { path: "/signup", view: SignUp, fetchQuery: "all" },
    // { path: "/login", view: LogIn, fetchQuery: "all" },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  //   routes[2].fetchQuery = `post/${getParams(match).id}`;

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  // try {
  //     data = await fetchData(match.route.fetchQuery);
  // } catch (error) {
  //     console.log('Fetch error: ', error);
  // }

  // data = {
  //   Authed: true,
  //   User: {
  //     Username: "asd",
  //   },
  // };
  // console.log(data);

  const view = new match.route.view(getParams(match), data);
  document.querySelector("#content").innerHTML = await view.getHtml();
  view.handleNav();
  view.handleBtn();
  await view.handleScript();

  if (match.route.path === "/") {
    let s1 = document.createElement("script");
    s1.id = "script1";
    s1.type = "text/javascript";
    s1.src = "/static/assets/js/jquery.isotope.min.js";

    // let s2 = document.createElement("script");
    // s2.id = "script2";
    // s2.type = "text/javascript";
    // s2.src = "/static/assets/js/slick.min.js";

    let s3 = document.createElement("script");
    s3.id = "script3";
    s3.type = "text/javascript";
    s3.src = "/static/assets/js/scripts.js?60aa3c5e653a6";

    let s4 = document.createElement("script");
    s4.id = "script4";
    s4.type = "text/javascript";
    s4.src = "/static/assets/js/header-footer.js";

    let s5 = document.createElement("script");
    s5.id = "script5";
    s5.type = "text/javascript";
    s5.src = "/static/assets/js/sssweetalert2.all.min.js";

    // document.getElementById("sign_in_box").after(s2);

    // while (!document.querySelector("#script2")) {
    //   await new Promise((r) => setTimeout(r, 1000));
    // }

    // setTimeout(() => {
      // if (!document.getElementById("script5")) {
        // document.getElementById("script2").after(s1, s3, s4, s5);
      // }
    // }, 500);
    document.getElementById("sign_in_box").after(s1, s3, s4, s5);
  }
};
