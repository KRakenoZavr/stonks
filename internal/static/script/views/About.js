import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("О бирже");
  }

  async getHtml() {
    return `
    <div class="page-header">
  <div class="container">
    <div class="breadc-box no-line">
      <div class="row">
        <div class="col-md-6">
          <h1 class="page-title">Гарантийный и страховой фонд</h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/" data-link>Главная</a></li>
            <li class="active">Гарантийный и страховой фонд</li>
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
                          <h2>Гарантийный и страховой фонд</h2>
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
                                  margin-bottom: 7.5pt;
                                  text-align: justify;
                                  text-indent: 35.4pt;
                                  line-height: normal;
                                "
                              >
                                <span
                                  style="
                                    font-size: 12pt;
                                    font-family: 'Times New Roman', serif;
                                  "
                                  >Размер гарантийного фонда &nbsp;составляет
                                  -10 000 000 тенге</span
                                ><span
                                  style="
                                    font-size: 9.5pt;
                                    color: rgb(5, 38, 53);
                                  "
                                  ><o:p></o:p
                                ></span>
                              </p>
                              <p
                                class="MsoNormal"
                                style="
                                  margin-bottom: 7.5pt;
                                  text-align: justify;
                                  text-indent: 35.4pt;
                                  line-height: normal;
                                "
                              >
                                <span
                                  style="
                                    font-size: 12pt;
                                    font-family: 'Times New Roman', serif;
                                  "
                                  >Размер&nbsp;страхового&nbsp;фонда составляет
                                  - 5 000 000 тенге</span
                                ><span
                                  style="
                                    font-size: 9.5pt;
                                    color: rgb(5, 38, 53);
                                  "
                                  ><o:p></o:p
                                ></span>
                              </p>
                              <p
                                class="MsoNormal"
                                style="
                                  font-size: 12.8118px;
                                  color: rgb(5, 38, 53);
                                  font-family: Arial, Verdana, Helvetica,
                                    sans-serif;
                                  text-align: justify;
                                  text-indent: 35.4pt;
                                "
                              ></p>
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
          <h4 class="widget-title">Гарантийный и страховой фонд</h4>
          <div class="menu-service-menu-container">
            <ul id="menu-service-menu" class="menu">
              <li class="current-menu-item">
                <a data-link href="/about"
                  >Гарантийный и страховой фонд</a
                >
              </li>
              <li><a data-link href="/post/kontakty">Контакты</a></li>
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
