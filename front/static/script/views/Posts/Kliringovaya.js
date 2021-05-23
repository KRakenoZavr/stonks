import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Клиринг");
  }

  async getHtml() {
    return `
  <div class="page-header">
    <div class="container">
      <div class="breadc-box no-line">
        <div class="row">
          <div class="col-md-6">
            <h1 class="page-title">Клиринговая организация</h1>
          </div>
          <div class="col-md-6 mobile-left text-right">
            <ul id="breadcrumbs" class="breadcrumbs none-style">
              <li><a href="/" data-link>Главная</a></li>
              <li class="active">Клиринговая организация</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="entry-content">
    <div class="container">
      <div class="row">
        <div
          id="primary"
          class="content-area col-lg-8 col-md-8 col-sm-12 col-xs-12 pull-right"
        >
          <main id="main" class="site-main">
            <article
              class="ot_service type-ot_service status-publish has-post-thumbnail hentry"
            >
              <div class="inner-post">
                <section class="wpb_row row-fluid">
                  <div class="container">
                    <div class="row">
                      <div class="wpb_column column_container col-sm-12">
                        <div class="column-inner">
                          <div class="wpb_wrapper">
                            <h2>Клиринговая организация</h2>
                            <div
                              class="wpb_text_column wpb_content_element post_content"
                            >
                              <div class="wpb_wrapper">
                                <p></p>
                              </div>
                              <div class="wpb_wrapper">
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Товарищество с ограниченной
                                    ответственностью<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >"Клиринговый Центр "Астана""<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Юридический адрес<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Казахстан, 010000<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >г.Нур-Султан,&nbsp;район Есиль,&nbsp;<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >улица Достык, здание 2 (два), нежилое
                                    помещение 2 (два), 7 этаж<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >БИН 200840028327<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >ИИК KZ728562203109909767 в валюте KZT<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >ИИК KZ928562203309910894 в валюте RUB<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >ИИК KZ568562203209910750 в валюте USD<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >ИИК KZ748562203209910814 в валюте EUR<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >Бик KCJBKZKX<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                    line-height: normal;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #333333;
                                      mso-fareast-language: RU;
                                    "
                                    >АО «БанкЦентрКредит»<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >ИИК KZ6494805KZT22033700<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Бик EURIKZKA<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Филиал №5 АО «Евразийский банк»<o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >e-mail:&nbsp;<a
                                      href="mailto:utb_cliring@mail.ru"
                                      ><span style="color: #337ab7"
                                        >utb_cliring@mail.ru</span
                                      ></a
                                    ><o:p></o:p
                                  ></span>
                                </p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    line-height: normal;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      font-family: 'Times New Roman', serif;
                                      mso-fareast-font-family: 'Times New Roman';
                                      color: #052635;
                                      mso-fareast-language: RU;
                                    "
                                    >Список обслуживаемых товарных бирж: АО
                                    «Универсальная товарная биржа «Астана»<o:p
                                    ></o:p
                                  ></span>
                                </p>
                                <p
                                  style="
                                    font-size: 12.8106px;
                                    color: rgb(5, 38, 53);
                                    font-family: Arial, Verdana, Helvetica,
                                      sans-serif;
                                  "
                                ></p>
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <span
                                    style="
                                      font-size: 14pt;
                                      line-height: 107%;
                                      font-family: 'Times New Roman', serif;
                                    "
                                    ><o:p>&nbsp;</o:p></span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </main>
          <!-- #main -->
        </div>
  
        <aside
          id="sidebar"
          class="widget-area service-sidebar col-lg-4 col-md-4 col-sm-12 col-xs-12"
        >
          <section id="nav_menu-1" class="widget widget_nav_menu">
            <h4 class="widget-title">Клиринговая организация</h4>
            <div class="menu-service-menu-container">
              <ul id="menu-service-menu" class="menu">
                <li>
                  <a data-link
                    href="/clearing"
                    >Правила осуществления клиринговой деятельности</a
                  >
                </li>
                <li class="current-menu-item">
                  <a data-link href="/post/kliringovaya"
                    >Клиринговая организация</a
                  >
                </li>
              </ul>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>  
        `;
  }
}
