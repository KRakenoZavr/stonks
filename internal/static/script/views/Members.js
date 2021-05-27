import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Члены Биржи");
  }

  async getHtml() {
    return `
<div class="page-header">
  <div class="container">
    <div class="breadc-box no-line">
      <div class="row">
        <div class="col-md-6">
          <h1 class="page-title">Члены биржи</h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/">Главная</a></li>
            <li class="active">Члены биржи</li>
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
                          <h2>Список Брокеров</h2>
                          <div
                            class="wpb_text_column wpb_content_element post_content"
                          >
                            <div class="wpb_wrapper">
                              <p></p>
                            </div>
                            <div class="wpb_wrapper">
                              <table
                                class="MsoNormalTable"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                width="103%"
                                style="width: 103%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-width: 1pt;
                                        border-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >№<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >п/п<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top-width: 1pt;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-top-color: windowtext;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Наименование<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >брокера/дилера<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top-width: 1pt;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-top-color: windowtext;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Директор<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top-width: 1pt;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-top-color: windowtext;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Контактная информация<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top-width: 1pt;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-top-color: windowtext;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Стаж работы в сфере товарных бирж<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 1; height: 74.6pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 74.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >1<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 74.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «КазБизнесКонсалтинг<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ВОСТОК »<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 74.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Антюхов Дмитрий Викторович<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 74.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан
                                          г.Усть-Каменогорск, ул. Головкова
                                          25<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >тел:8(7232)24-37-65<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >26-45-86, 57-82-90<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 74.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >05.2010 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >2<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Инаят&nbsp;Plus»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Лютакова Н.А<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан, г.Актобе<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул.Жанкожа батыра д.28, офис 402<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >тел:87776003618<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >05.2014 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >3<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «M-Connect»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Алиев М.Ш.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан, г.Павлодар ул.
                                          1 Мая,38 офис 115<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:87018885803<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >07.2013<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >4<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Пайдалы»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Утепов А.Б.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан г.Алматы,<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Ул.Шашкина 36-66<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 87777221002<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >03.2011 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >5<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Market&amp;Stocs LTD»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Алирахимов Дауир<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан г.Алматы,<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул. Маркова д.43<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 87017241194<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >07.2010 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >6<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Mолшылык 2011»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Бейсебаев Нуржан Николаевич<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан г.Алматы,<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул. Сатпаева д.18<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 87479646515<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >11.2011 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 7; height: 103.6pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 103.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >7<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 103.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «FirstBroker»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 103.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Фаткулина М.Р.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 103.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан, 050000, г.
                                          Нур-Султан, район Есиль<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >улица Сарайшык, здание 7/7<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >8 (7172) 72-58-61<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >info</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >@</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >firstbroker</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >.</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >kz</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a
                                          href="http://www.firstbroker.kz/"
                                          target="_blank"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >http://www.firstbroker.kz/</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 103.6pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >04.2014 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 8; height: 69.35pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 69.35pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >09<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 69.35pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «MG-finance»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 69.35pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Волынская Т.А.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 69.35pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан г.Павлодар ул.
                                          Ак. Сатпаева д.75<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:8 (7182) 663606<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 69.35pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >06.2015 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 9; height: 60.5pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 60.5pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >10<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 60.5pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «BatyrTrade»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 60.5pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тлегенова Э.Н.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 60.5pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >г.Нур-Султан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул. Кызылкениш 9<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a href="mailto:dpo2030@mail.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >dpo2030@mail.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 60.5pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >07.2017 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 10; height: 41pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 41pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >11<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 41pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «ТТМ-Трейд»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 41pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тоганов М.К.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 41pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >г.Шымкент, Северо-Запад участок
                                          516<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >тел:87012500206<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 41pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >12.2017 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr
                                    style="mso-yfti-irow: 11; height: 46.05pt"
                                  >
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 46.05pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >12<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 46.05pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Добрый Фермер»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 46.05pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Спасова Т.В.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 46.05pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >г.Нур-Султан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул.Сүиінбай ақына 85<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 46.05pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >05.2018 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >13<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Helpmate Group»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Жанапина К.К.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >020000, г. Кокшетау, ул. Абая 85 офис
                                          313,&nbsp;</span
                                        ><a
                                          href="https://e.mail.ru/compose?To=gkorlan@mail.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >gkorlan@mail.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp; сот. +7&nbsp;701&nbsp;500 19
                                          12<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >06.2018 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >14<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО "CONSULTINVEST"<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Воевутко И.Ю.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Республика Казахстан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >г.Кокшетау<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ул.Момышулы 62-95<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >тел.:&nbsp;+77015203733<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >email:&nbsp;</span
                                        ><a href="mailto:consultinvest@inbox.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >consultinvest@inbox.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >15<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «СМ Брокер»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Кудайбергенова С.М.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >РК, 010000, г.Нур-Султан, район
                                          Алматы, ул Габидена Мустафина 21/2, кв
                                          101<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a href="mailto:smbroker0220@mail.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >smbroker0220@mail.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >8 705 581 48 10<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >16<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «РУДстандарт»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Панкова Е.А.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >РК&nbsp;г.&nbsp;Рудный, улица
                                          Гагарина, 9-10<br />
                                          тел:&nbsp;8-775-8773384<br /> </span
                                        ><a
                                          href="https://e.mail.ru/compose?To=toorudstandart@mail.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >toorudstandart@mail.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >02.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >17<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «A&amp;S Profit»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Магзумов Д.С.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >РК,010000, г.Нур-Султан<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Улица &nbsp;ул.Сүиінбай ақына 85<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 87074873309<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a href="mailto:asprofit@bk.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >asprofit@bk.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >06.2017г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >18<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО “ADT com”<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Танырбергенова А.Д<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >РК, 010000, г. Нур-Султан,<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >пр.Мангилик ел, дом 54/2, кв 18<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 8 778 410 40 91<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a href="mailto:adt.com@mail.ru"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >adt.com@mail.ru</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >10.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >19<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;«IN TOUCH BUSINESS SERVICES”
                                          (</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ИН</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТАЧ</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >БИЗНЕС</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >СЕРВИСЕЗ</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >)»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Дюсенбаева М.М.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >010000, г.Нур-Султан, пр.Женис 5/1,
                                          кв.40<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Tel.: +77712238882<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >e-mail:&nbsp;</span
                                        ><a href="mailto:bs@intouch.kz"
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                              color: rgb(51, 122, 183);
                                            "
                                            >bs@intouch.kz</span
                                          ></a
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >10.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 19; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >20<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >M-EXPERT</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Кариев&nbsp;</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Т.А.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >110000, г.Костанай<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Улица Чкалова 15А, кв.50<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел 87776949494<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >.2015 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 20; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >21<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «Akberdi-Servis»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Акбердиева М.К.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >160000, г.Шымкент , мкр. Северо-Запад
                                          1740<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >тел: 87058440970<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >11.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 21; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >22<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «АСАР-</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >broker</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Солодкова М.В.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >110000, г.Костанай<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Улица Дощанова д.64, каб. 2<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 87770371415<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >03.2012 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 22; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >23<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Hermes KZ</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Калелов А.Ж.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >010000, РК, г.Нур-Султан,
                                          ул.Туркестана 34Б, вп 3<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:87017472444<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2021 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 23; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >24<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «VA5»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Валиев А.Ж.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >010000, РК , Нур-Султан, район
                                          Байконыр, Микрорайон Жастар, улица
                                          Александра Кравцова, дом 2/1, кв.
                                          44<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел: 8(701)533-05-75
                                          va5broker@mail.ru<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2021 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 24; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >25<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >InvestCapital</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Баранов В.В.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >050000, РК, г.Алматы<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Алатауский р-н,мкр.Айгерим-1<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Ул.В.Бенберина 94, 3<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:&nbsp;+7 (707) 508-09-48<o:p
                                          ></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Investcapital</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >2020@</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >mail</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >.</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ru</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >05.2020 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 25; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >26<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <a name="_Hlk64901663"
                                          ><span
                                            style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            "
                                            >&nbsp;</span
                                          ></a
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Tesoro Broker</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Альпеисова А.М.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >010000; РК, г. Нур-Султан, район
                                          Сарыарка, Жилой массив К</span
                                        ><span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ө</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ктал, улица Жаяу М</span
                                        ><span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ұ</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >са дом 23<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел.: +7&nbsp;</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >(</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >747</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >)</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;481-92-90<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >tesorobroker</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >@</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >bk</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >.</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ru</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >&nbsp;<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2021 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="mso-yfti-irow: 26; height: 11.7pt">
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >27<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «ДинАй Капитал»<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Муратов Б.А<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >020000, РК, </span
                                        ><span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >г. Алматы, улица Туркебаева д.63,
                                          кв.214<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:8(701)534-10-06<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >8(775)653-38-01<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >dinai_kapital@mail.ru<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >01.2013 г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      mso-yfti-irow: 27;
                                      mso-yfti-lastrow: yes;
                                      height: 11.7pt;
                                    "
                                  >
                                    <td
                                      width="4%"
                                      style="
                                        width: 4.12%;
                                        border-right-width: 1pt;
                                        border-bottom-width: 1pt;
                                        border-left-width: 1pt;
                                        border-right-color: windowtext;
                                        border-bottom-color: windowtext;
                                        border-left-color: windowtext;
                                        border-top: none;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >28<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="30%"
                                      style="
                                        width: 30.94%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >ТОО «</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Veg Consulting</span
                                        ><span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >»</span
                                        ><span
                                          lang="EN-US"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          ><o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="17%"
                                      style="
                                        width: 17.52%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Жаймаганбетова Б.Ж.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                    <td
                                      width="37%"
                                      style="
                                        width: 37.12%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >РК, город Нур-Султан, улица </span
                                        ><span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Сүйінбай акына 85, офис 101<o:p></o:p
                                        ></span>
                                      </p>
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                          tab-stops: 52.5pt;
                                        "
                                      >
                                        <span
                                          lang="KZ"
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >Тел:87172273566</span
                                        >
                                      </p>
                                    </td>
                                    <td
                                      width="10%"
                                      style="
                                        width: 10.3%;
                                        border-top: none;
                                        border-left: none;
                                        border-bottom-width: 1pt;
                                        border-bottom-color: windowtext;
                                        border-right-width: 1pt;
                                        border-right-color: windowtext;
                                        padding: 3.75pt 2.25pt;
                                        height: 11.7pt;
                                      "
                                    >
                                      <p
                                        class="MsoNormal"
                                        align="center"
                                        style="
                                          margin-bottom: 0cm;
                                          margin-bottom: 0.0001pt;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            font-size: 9.5pt;
                                            line-height: 107%;
                                          "
                                          >12.2016г.<o:p></o:p
                                        ></span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-bottom: 0cm;
                                  margin-bottom: 0.0001pt;
                                  text-align: center;
                                "
                              >
                                <span
                                  style="font-size: 9.5pt; line-height: 107%"
                                  >&nbsp;</span
                                ><span
                                  style="font-size: 10.5pt; line-height: 107%"
                                  ><o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  margin-bottom: 0cm;
                                  margin-bottom: 0.0001pt;
                                "
                              >
                                <o:p>&nbsp;</o:p>
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
          <h4 class="widget-title">Члены биржи</h4>
          <div class="menu-service-menu-container">
            <ul id="menu-service-menu" class="menu">
              <li class="current-menu-item">
                <a href="https://utb.kz/post/spisok-brokerov-774/"
                  >Список Брокеров</a
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
