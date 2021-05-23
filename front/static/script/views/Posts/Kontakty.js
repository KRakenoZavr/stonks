import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Контакты");
  }

  async getHtml() {
    return `
    <div class="page-header">
    <div class="container">
      <div class="breadc-box no-line">
        <div class="row">
          <div class="col-md-6">
            <h1 class="page-title">Контакты</h1>
          </div>
          <div class="col-md-6 mobile-left text-right">
            <ul id="breadcrumbs" class="breadcrumbs none-style">
              <li><a href="/" data-link>Главная</a></li>
              <li class="active">Контакты</li>
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
                            <h2>Контакты</h2>
                            <div
                              class="wpb_text_column wpb_content_element post_content"
                            >
                              <div class="wpb_wrapper">
                                <p>Контакты</p>
                              </div>
                              <div class="wpb_wrapper">
                                <p
                                  class="MsoNormal"
                                  style="
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
                                      font-size: 9.5pt;
                                      color: rgb(5, 38, 53);
                                    "
                                    >Адрес: 010000, Республика Казахстан,
                                    г.Нур-Султан,&nbsp;район Есиль, БЦ SAAD, улица
                                    Достык, здание 2 (два), нежилое помещение 2
                                    (два), 7 этаж, тел:8(7172)27-03-33.<o:p></o:p
                                  ></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
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
                                      font-size: 9.5pt;
                                      color: rgb(5, 38, 53);
                                    "
                                    >Председатель Правления - Аллахвердиев Адалат
                                    Махмуд-Оглы<o:p></o:p
                                  ></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
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
                                      font-size: 9.5pt;
                                      color: rgb(5, 38, 53);
                                    "
                                    >Главный бухгалтер - Абильдинова Куралай
                                    Камзельевна<o:p></o:p
                                  ></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
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
                                      font-size: 9.5pt;
                                      color: rgb(5, 38, 53);
                                    "
                                    ><o:p>&nbsp;</o:p></span
                                  >
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
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
                                      font-size: 9.5pt;
                                      color: rgb(5, 38, 53);
                                    "
                                    >&nbsp;<o:p></o:p
                                  ></span>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                  width="46%"
                                  style="
                                    width: 46.7%;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                  "
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        height: 28.5pt;
                                      "
                                    >
                                      <td
                                        width="184"
                                        style="
                                          width: 137.85pt;
                                          padding: 0cm 0cm 0cm 0cm;
                                          height: 28.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            mso-margin-top-alt: auto;
                                            mso-margin-bottom-alt: auto;
                                            line-height: normal;
                                          "
                                        >
                                          <span
                                            style="
                                              font-size: 9.5pt;
                                              color: rgb(5, 38, 53);
                                            "
                                            >Время<o:p></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="269"
                                        style="
                                          width: 201.95pt;
                                          padding: 0cm 0cm 0cm 0cm;
                                          height: 28.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            mso-margin-top-alt: auto;
                                            mso-margin-bottom-alt: auto;
                                            line-height: normal;
                                          "
                                        >
                                          <span
                                            style="
                                              font-size: 9.5pt;
                                              color: rgb(5, 38, 53);
                                            "
                                            >Пн - Пт с 9:00 -до 18:00&nbsp;<br />
                                            Обеденный перерыв с 13:00 до 14:00<o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr
                                      style="
                                        mso-yfti-irow: 1;
                                        mso-yfti-lastrow: yes;
                                        height: 15.4pt;
                                      "
                                    >
                                      <td
                                        width="184"
                                        style="
                                          width: 137.85pt;
                                          padding: 0cm 0cm 0cm 0cm;
                                          height: 15.4pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            mso-margin-top-alt: auto;
                                            mso-margin-bottom-alt: auto;
                                            line-height: normal;
                                          "
                                        >
                                          <span
                                            style="
                                              font-size: 9.5pt;
                                              color: rgb(5, 38, 53);
                                            "
                                            >Выходные дни<o:p></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="269"
                                        style="
                                          width: 201.95pt;
                                          padding: 0cm 0cm 0cm 0cm;
                                          height: 15.4pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            mso-margin-top-alt: auto;
                                            mso-margin-bottom-alt: auto;
                                            line-height: normal;
                                          "
                                        >
                                          <span
                                            style="
                                              font-size: 9.5pt;
                                              color: rgb(5, 38, 53);
                                            "
                                            >Суббота, Воскресенье.<o:p></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p class="MsoNormal"><o:p>&nbsp;</o:p></p>
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
            <h4 class="widget-title">Контакты</h4>
            <div class="menu-service-menu-container">
              <ul id="menu-service-menu" class="menu">
                <li>
                  <a data-link href="/about"
                    >Гарантийный и страховой фонд</a
                  >
                </li>
                <li  class="current-menu-item"><a data-link href="/post/kontakty">Контакты</a></li>
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
