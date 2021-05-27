import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Биржевой Арбитраж");
  }

  async getHtml() {
    return `
    <div class="page-header">
  <div class="container">
    <div class="breadc-box no-line">
      <div class="row">
        <div class="col-md-6">
          <h1 class="page-title">Биржевой арбитраж</h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/" data-link>Главная</a></li>
            <li class="active">Биржевой арбитраж</li>
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
                          <h2>Положение об арбитражных расходах и сборах</h2>
                          <div
                            class="wpb_text_column wpb_content_element post_content"
                          >
                            <div class="wpb_wrapper">
                              <p></p>
                            </div>
                            <div class="wpb_wrapper">
                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Положение об арбитражных расходах и сборах
                                    в Биржевом арбитраже</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >при АО «Универсальная товарная биржа
                                    «Астана»</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >&nbsp;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Настоящее Положение устанавливает порядок и
                                    правила исчисления арбитражных расходов и
                                    сборов Биржевого арбитража при АО
                                    «Универсальная товарная биржа
                                    «Астана».</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >&nbsp;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 1. Состав расходов, связанных с
                                    разрешением споров в Арбитраже (третейском
                                    суде)</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1. Расходы, связанные с разрешением спора
                                    в Арбитраже, включают в себя:</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.1. Арбитражный сбор;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.2. Суммы, подлежащие выплате экспертам
                                    и переводчикам;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.3. Расходы, связанные с осмотром и
                                    исследованием письменных и вещественных
                                    доказательств на месте их нахождения;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.4. Расходы на оплату услуг
                                    представителя стороной, в пользу которой
                                    состоялось решение Арбитража;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.5. Иные расходы, определяемые
                                    Арбитражем.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >1.1.6.Расходы Арбитража, указанные в
                                    пунктах: 1.1.2-1.1.5 не включаются в сумму
                                    Арбитражного сбора.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 2.&nbsp;Арбитражный сбор</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >2.1. Арбитраж по каждому принятому к
                                    рассмотрению делу взимает арбитражный
                                    сбор.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >2.2. Суммы арбитражного сбора идут на
                                    покрытие общих расходов, связанных с
                                    деятельностью Арбитража (гонорары судьям,
                                    вознаграждение юридических и технических
                                    сотрудников).</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >2.3. Расходы Арбитража - это специальные
                                    издержки Арбитража, связанные с организацией
                                    арбитражного разбирательства дел (издержки
                                    на проведение экспертизы и переводы
                                    документов, других материалов дела, суммы,
                                    подлежащие выплате экспертам, переводчикам и
                                    свидетелям, командировочные расходы, оплата
                                    транспорта при необходимости выезда для
                                    осмотра на месте доказательств и
                                    т.д.).</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >2.4. Каждая сторона сама несет
                                    произведенные ею расходы в связи с защитой
                                    своих интересов в Арбитраже (командировочные
                                    расходы сторон, гонорары представителям и
                                    т.д.).</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 3.&nbsp;Исчисление Арбитражного
                                    сбора</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.1. Размер арбитражного сбора
                                    устанавливается Арбитражем в зависимости от
                                    цены иска.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.2. Арбитражный сбор взимается в тенге или
                                    в валюте, в которой выражена цена иска.
                                    Сумма арбитражного сбора определяется в
                                    твердой сумме и в процентном отношении в
                                    зависимости от цены иска по следующей
                                    шкале:</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <table
                                class="MsoNormalTable"
                                border="1"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-cellspacing: 0cm;
                                  margin-left: -27.6pt;
                                  mso-yfti-tbllook: 1184;
                                  mso-padding-alt: 0cm 0cm 0cm 0cm;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="312"
                                      valign="top"
                                      style="
                                        width: 233.9pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: -1cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          line-height: normal;
                                        "
                                      >
                                        <b
                                          ><span
                                            style="
                                              font-size: 12pt;
                                              font-family: 'Times New Roman',
                                                serif;
                                              mso-fareast-font-family: 'Times New Roman';
                                              mso-fareast-language: RU;
                                            "
                                            >При сумме иска</span
                                          ></b
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: -1cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          line-height: normal;
                                        "
                                      >
                                        <b
                                          ><span
                                            style="
                                              font-size: 12pt;
                                              font-family: 'Times New Roman',
                                                serif;
                                              mso-fareast-font-family: 'Times New Roman';
                                              mso-fareast-language: RU;
                                            "
                                            >(в тенге)</span
                                          ></b
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="351"
                                      valign="top"
                                      style="
                                        width: 262.95pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: -1cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          line-height: normal;
                                        "
                                      >
                                        <b
                                          ><span
                                            style="
                                              font-size: 12pt;
                                              font-family: 'Times New Roman',
                                                serif;
                                              mso-fareast-font-family: 'Times New Roman';
                                              mso-fareast-language: RU;
                                            "
                                            >Размер арбитражного сбора от суммы
                                            иска</span
                                          ></b
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: -1cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          line-height: normal;
                                        "
                                      >
                                        <b
                                          ><span
                                            style="
                                              font-size: 12pt;
                                              font-family: 'Times New Roman',
                                                serif;
                                              mso-fareast-font-family: 'Times New Roman';
                                              mso-fareast-language: RU;
                                            "
                                            >(в тенге)</span
                                          ></b
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="312"
                                      valign="top"
                                      style="
                                        width: 233.9pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: 6.3pt;
                                          margin-bottom: 0.0001pt;
                                          text-align: justify;
                                          line-height: normal;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 12pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          >до 2 000 000 тенге</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="351"
                                      valign="top"
                                      style="
                                        width: 262.95pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: 6.3pt;
                                          margin-bottom: 0.0001pt;
                                          text-align: justify;
                                          line-height: normal;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 12pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          >500&nbsp;000 (пятьсот тысяч)
                                          тенге</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="312"
                                      valign="top"
                                      style="
                                        width: 233.9pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: 6.3pt;
                                          margin-bottom: 0.0001pt;
                                          text-align: justify;
                                          line-height: normal;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 12pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          >свыше 2 000 000 тенге</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="351"
                                      valign="top"
                                      style="
                                        width: 262.95pt;
                                        padding: 0cm 0cm 0cm 0cm;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        style="
                                          margin-top: 0cm;
                                          margin-right: 0cm;
                                          margin-bottom: 0cm;
                                          margin-left: 6.3pt;
                                          margin-bottom: 0.0001pt;
                                          text-align: justify;
                                          line-height: normal;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 12pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          >1 000 000 (один миллион) тенге</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            font-family: 'Times New Roman',
                                              serif;
                                            mso-fareast-font-family: 'Times New Roman';
                                            mso-fareast-language: RU;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.3.Арбитражный сбор по делам
                                    неимущественного характера составляет 1 000
                                    000 (один миллион) тенге.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.4. С исковых заявлений по спорам,
                                    возникающим при заключении, изменении или
                                    расторжении договоров, и по спорам о
                                    признании сделок недействительными,
                                    арбитражный сбор составляет 1 000 000 (один
                                    миллион) тенге.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.5. За выдачу копий решений, определений
                                    Арбитража и иных документов из дела,
                                    выдаваемых Арбитражем по просьбе сторон,
                                    арбитражный сбор составляет 10 000 (десять
                                    тысяч) тенге за каждую страницу
                                    документа.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.6. За исковое заявление, содержащее
                                    одновременно требования имущественного и
                                    неимущественного характера, одновременно
                                    уплачиваются арбитражный сбор, установленный
                                    для исковых заявлений имущественного
                                    характера, и арбитражный сбор, установленный
                                    для исковых заявлений неимущественного
                                    характера.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.7. Гонорары судей (арбитров)
                                    устанавливаются в соответствии со штатным
                                    расписанием АО «Универсальная товарная биржа
                                    «Астана».</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >3.8. Если цена иска выражена в иностранной
                                    валюте, то пересчет цены иска в тенге
                                    производится по текущему курсу Центрального
                                    Банка РК на дату предъявления иска.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 4. Отсрочка и рассрочка арбитражного
                                    сбора</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >4.1. Судья Арбитража в исключительных
                                    случаях может предоставить отсрочку или
                                    рассрочку по оплате арбитражного сбора до
                                    вынесения решения по существу с последующим
                                    взысканием сумм сбора в пользу Арбитража, о
                                    чем делается соответствующая запись в
                                    резолютивной части решения. В случае
                                    неисполнения указанной части решения по
                                    заявлению Арбитража компетентным судом может
                                    быть выдан исполнительный лист на
                                    принудительное исполнение указанной части
                                    решения.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >4.2. К ходатайству об отсрочке уплаты
                                    арбитражного сбора прилагаются документы,
                                    подтверждающие невозможность оплаты
                                    арбитражного сбора до начала рассмотрения
                                    дела.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 5. Увеличение, уменьшение и
                                    частичный возврат арбитражного сбора</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >5.1. При увеличении размера исковых
                                    требований недостающая сумма арбитражного
                                    сбора, определенная Арбитражем, уплачивается
                                    истцом в соответствии с увеличенной ценой
                                    иска. В случае если истец не уплатил
                                    недостающую сумму арбитражного сбора,
                                    Арбитраж оставляет заявление об увеличении
                                    исковых требований без рассмотрения.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >5.2. При уменьшении цены иска уплаченный
                                    арбитражный сбор не возвращается.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 6. Арбитражный сбор при встречном
                                    иске</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >6.1. К встречному иску применяются те же
                                    правила об Арбитражном сборе, что и к
                                    первоначальному иску.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 7. Распределение расходов по
                                    арбитражному сбору между сторонами</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >7.1. Если стороны не договорились об ином,
                                    арбитражный сбор возлагается на сторону,
                                    против которой состоялось решение.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >7.2. Если иск удовлетворен частично, то
                                    арбитражный сбор возлагается на ответчика
                                    пропорционально размеру удовлетворенных
                                    исковых требований и на истца -
                                    пропорционально той части исковых
                                    требований, в которой иск не
                                    удовлетворен.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 8. Покрытие дополнительных
                                    расходов</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >8.1. Арбитраж может возложить на стороны
                                    или на одну из них обязанность внести аванс
                                    на покрытие дополнительных расходов
                                    Арбитража в связи с ведением арбитражного
                                    разбирательства.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >8.2. Аванс на покрытие дополнительных
                                    расходов может быть, в частности, затребован
                                    Арбитражем от стороны, заявившей о
                                    необходимости осуществления могущего вызвать
                                    дополнительные расходы действия по
                                    разбирательству спора, если такое заявление
                                    будет признано обоснованным. Арбитраж может
                                    поставить выполнение таких действий в
                                    зависимости от внесения этой стороной в
                                    установленный срок аванса на возмещение
                                    дополнительных расходов.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >8.3. Если по просьбе одной из сторон при
                                    разбирательстве дела осуществляется перевод
                                    объяснений сторон, их заявлений и т.п.,
                                    равно как и вопросов, пояснений и указаний
                                    состава Арбитража, то расходы по переводу
                                    оплачиваются указанной стороной.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >8.4.Арбитраж может потребовать от
                                    соответствующей стороны или сторон внесения
                                    аванса на оплату этих расходов. Те же
                                    правила действуют и в отношении перевода
                                    решений.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 9. Порядок уплаты сумм арбитражных
                                    расходов и сборов</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >9.1. Суммы арбитражных расходов и сборов,
                                    причитающиеся Арбитражу, считаются
                                    уплаченными в день их зачисления на счет АО
                                    «Универсальная товарная биржа
                                    «Астана».</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >9.2. При этом в платежном поручении в графе
                                    «Назначение платежа» должно быть
                                    указано&nbsp;<u
                                      >«арбитражный сбор (взнос) за рассмотрение
                                      спора между…..»</u
                                    >, наименование истца и ответчика.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >9.3. Издержки по банковскому переводу сумм
                                    арбитражных расходов и сборов, уплачиваемых
                                    Арбитражу, возлагаются на сторону,
                                    осуществляющую соответствующий платеж.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 10. Издержки сторон</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >10.1. Сторона, в пользу которой вынесено
                                    решение, может потребовать возложить на
                                    другую сторону возмещение понесенных ею
                                    разумных издержек, возникших в связи с
                                    арбитражным разбирательством, в частности
                                    расходов, связанных с защитой своих
                                    интересов через представителей.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 11. Иное распределение арбитражных
                                    расходов и сборов</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >11.1. С учетом обстоятельств конкретного
                                    дела Арбитраж может установить иное, чем это
                                    предусмотрено в настоящем Положении,
                                    распределение между сторонами арбитражного
                                    сбора, дополнительных расходов Арбитража и
                                    издержек сторон, в частности взыскать в
                                    пользу одной из сторон с другой стороны
                                    понесенные первой излишние расходы,
                                    вызванные нецелесообразными или
                                    недобросовестными действиями другой стороны,
                                    в том числе действиями, вызвавшими
                                    неоправданную затяжку арбитражного
                                    разбирательства.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >11.2. признания судом арбитражного судьи
                                    (арбитра) недееспособным или ограниченно
                                    дееспособным;</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >11.3. разглашения информации о спорах,
                                    разрешаемых Арбитражем.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 12.&nbsp;Ответственный секретарь
                                    Арбитража</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >12.1. Ответственный секретарь Арбитража
                                    (далее - ответственный секретарь)
                                    осуществляет полномочия, необходимые для
                                    обеспечения деятельности Арбитража, в
                                    соответствии с настоящим Положением и
                                    Регламентом Биржевого арбитража.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >12.2. Ответственный секретарь назначается
                                    Председателем правления (Президентом) АО
                                    «Универсальная товарная биржа
                                    «Астана».</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >12.3. Ответственный секретарь организует
                                    ведение делопроизводства Арбитража,
                                    проведение заседаний Арбитража по разрешению
                                    конкретного спора, осуществляет
                                    взаимодействие со структурными
                                    подразделениями АО «Универсальная товарная
                                    биржа «Астана», а также выполняет иные
                                    функции, предусмотренные Регламентом
                                    Биржевого арбитража.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >12.4. Ответственный секретарь вправе
                                    заверять копии документов Арбитража.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >12.5. Ответственный секретарь участвует в
                                    заседаниях Арбитража в качестве секретаря
                                    арбитражного (судебного) заседания.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 13. Арбитражные сборы и расходы
                                    Арбитража</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >13.1. Порядок исчисления, распределения и
                                    уплаты арбитражных сборов и расходов
                                    Арбитража регламентируется Положением об
                                    арбитражных расходах и сборах в Биржевом
                                    арбитраже при АО «Универсальная товарная
                                    биржа «Астана», утверждаемым Председателем
                                    правления (Президентом) АО «Универсальная
                                    товарная биржа «Астана».</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 14. Сохранение коммерческой и
                                    банковской тайны</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >14.1. Арбитры (судьи), Ответственный
                                    секретарь и иные специалисты и работники
                                    Арбитража, которым в силу своих обязанностей
                                    в процессе рассмотрения дела стала известна
                                    конфиденциальная информация, относящаяся к
                                    коммерческой или иной тайне участвующих в
                                    делах лиц, не вправе разглашать ставшие им
                                    известными сведения без письменного на то
                                    согласия самих сторон.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 15. Архив Арбитража</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >15.1. Рассмотренные Арбитражем дела
                                    хранятся в его архиве в течение 5 лет.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >Статья 16. Печать Арбитража</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-top: 0cm;
                                  margin-right: 0cm;
                                  margin-bottom: 0cm;
                                  margin-left: -1cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: justify;
                                  line-height: normal;
                                "
                              >
                                <b
                                  ><span
                                    style="
                                      font-size: 12pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    >16.1. Арбитраж имеет круглую печать,
                                    содержащую его полное наименование на
                                    государственном и русском языке, угловой
                                    штамп со своим наименованием.</span
                                  ></b
                                ><b
                                  ><span
                                    style="
                                      font-size: 9.5pt;
                                      font-family: 'Times New Roman', serif;
                                      color: rgb(5, 38, 53);
                                      background-image: initial;
                                      background-position: initial;
                                      background-size: initial;
                                      background-repeat: initial;
                                      background-attachment: initial;
                                      background-origin: initial;
                                      background-clip: initial;
                                    "
                                    ><o:p></o:p></span
                                ></b>
                              </p>

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
          <h4 class="widget-title">Биржевой арбитраж</h4>
          <div class="menu-service-menu-container">
            <ul id="menu-service-menu" class="menu">
              <li class="current-menu-item">
                <a data-link
                  href="/arbitrazh"
                  >Положение об арбитражных расходах и сборах</a
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
