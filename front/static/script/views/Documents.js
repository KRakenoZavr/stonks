import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Документы");
  }

  async getHtml() {
    return `
    <div
        class="page-header"
        style="
          background: url(static/assets/images/bg-pheader.jpg) no-repeat center
            center;
        "
      >
        <div class="container">
          <div class="breadc-box no-line">
            <div class="row">
              <div class="col-md-6">
                <h1 class="page-title">Документы</h1>
              </div>
              <div class="col-md-6 mobile-left text-right">
                <ul id="breadcrumbs" class="breadcrumbs none-style">
                  <li><a href="/" data-link>Главная</a></li>
                  <li class="active">Документы</li>
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
                                <h2>
                                  Перечень региональных угольных операторов (ЖД
                                  тупиков)
                                </h2>
                                <div
                                  class="wpb_text_column wpb_content_element post_content"
                                >
                                  <div class="wpb_wrapper">
                                    <a href="https://www.gov.kz/memleket/entities/zk/activities/12728?lang=ru&amp;parentId=12690">
                                      Перечень региональных угольных операторов
                                      (ЖД тупиков)
                                    </a>
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
                <h4 class="widget-title">Документы</h4>
                <div class="menu-service-menu-container">
                  <ul id="menu-service-menu" class="menu">
                    <li class="current-menu-item">
                      <a data-link
                        href="/documents"
                        >Перечень региональных угольных операторов (ЖД
                        тупиков)</a
                      >
                    </li>
                    <li>
                      <a href="/post/polozhenie" data-link
                        >ПОЛОЖЕНИЕ О ЧЛЕНСТВЕ</a
                      >
                    </li>
                    <li>
                      <a data-link
                        href="/post/pravila"
                        >Правила биржевой торговли
                      </a>
                    </li>
                    <li>
                      <a data-link
                        href="/post/perechen"
                        >Перечень биржевых товаров</a
                      >
                    </li>
                    <li>
                      <a data-link
                        href="/post/zakon"
                        >Закон «О товарных биржах»</a
                      >
                    </li>
                    <li>
                      <a data-link
                        href="/post/tipovye"
                        >Типовые Правила биржевой торговли
                      </a>
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
