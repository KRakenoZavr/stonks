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
import SignUp from "../views/SignUp.js";
import Trade from "../views/Trade.js";
import TradeView from "../views/TradeView.js";
import CreateTrade from "../views/CreateTrade.js";

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
    { path: "/trade", view: Trade, fetchQuery: "posts" },
    { path: "/posts/:id", view: TradeView, fetchQuery: "posts" },
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
    { path: "/createtrade", view: CreateTrade, fetchQuery: "all" },
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

  routes[2].fetchQuery = `post/${getParams(match).id}`;

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  try {
    data = await fetchData(match.route.fetchQuery);
  } catch (error) {
    console.log("Fetch error: ", error);
  }

  // console.log(data);

  const view = new match.route.view(getParams(match), data);
  document.querySelector("#content").innerHTML = await view.getHtml();
  view.handleNav();
  view.handleBtn();
  await view.handleScript();
  
  let s4 = document.createElement("script");
  s4.id = "script4";
  s4.type = "text/javascript";
  s4.src = "/static/assets/js/header-footer.js";

  document.getElementById("sign_in_box").after(s4);

};
