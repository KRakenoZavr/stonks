import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Перечень биржевых товаров");
  }

  async getHtml() {
    return `
    <div class="page-header">
  <div class="container">
    <div class="breadc-box no-line">
      <div class="row">
        <div class="col-md-6">
          <h1 class="page-title">Перечень биржевых товаров</h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/">Главная</a></li>
            <li class="active">Перечень биржевых товаров</li>
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
                          <h2>Перечень биржевых товаров</h2>
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
                                "
                              >
                                <br />
                              </p>
                              <p
                                class="MsoNormal"
                                style="
                                  margin-bottom: 0cm;
                                  margin-bottom: 0.0001pt;
                                "
                              >
                                <br
                                  style="
                                    font-family: monospace;
                                    font-size: 13px;
                                  "
                                />
                              </p>
                              <p
                                align="right"
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              ></p>
                              <table
                                border="0"
                                style="
                                  margin: 0px auto;
                                  padding: 0px;
                                  border: 0px;
                                  font-size: 13px;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  border-spacing: 0px;
                                  overflow-wrap: break-word;
                                  table-layout: fixed;
                                  width: 892px;
                                  font-family: monospace;
                                "
                              >
                                <tbody
                                  style="
                                    margin: 0px;
                                    padding: 0px;
                                    border: 0px;
                                    vertical-align: baseline;
                                    background: transparent;
                                  "
                                >
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      align="center"
                                      width="387"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-width: 0px;
                                        border-style: initial;
                                        border-color: initial;
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                    <td
                                      align="center"
                                      width="228"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-width: 0px;
                                        border-style: initial;
                                        border-color: initial;
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <a
                                        name="z5"
                                        style="
                                          margin: 0px;
                                          padding: 0px;
                                          vertical-align: baseline;
                                          background-image: initial;
                                          background-position: initial;
                                          background-size: initial;
                                          background-repeat: initial;
                                          background-attachment: initial;
                                          background-origin: initial;
                                          background-clip: initial;
                                          color: rgb(7, 58, 94);
                                        "
                                      ></a
                                      >Утвержден приказом<br />Министра
                                      национальной<br />экономики<br />Республики
                                      Казахстан<br />от 26 февраля 2015 года №
                                      142
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              ></p>
                              <h3
                                id="z6"
                                style="
                                  margin: 15px 0px 9px;
                                  padding: 0px;
                                  border: 0px;
                                  font-size: 21px;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  font-family: monospace;
                                  line-height: 26px;
                                  text-shadow: rgb(255, 255, 255) 1px 1px;
                                  color: rgb(30, 30, 30);
                                "
                              >
                                Перечень биржевых товаров
                              </h3>
                              <p
                                class="note"
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  color: red;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сноска. Перечень
                                в редакции приказа и.о. Министра торговли и
                                интеграции РК от 28.12.2020&nbsp;<a
                                  href="http://adilet.zan.kz/rus/docs/V2000021957#z6"
                                  style="
                                    margin: 0px;
                                    padding: 0px;
                                    vertical-align: baseline;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                    color: rgb(7, 58, 94);
                                    -webkit-tap-highlight-color: rgb(
                                      64,
                                      170,
                                      245
                                    );
                                  "
                                  >№ 312-НҚ</a
                                >&nbsp;(вводится в действие по истечении десяти
                                календарных дней после дня его первого
                                официального опубликования).
                              </p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              ></p>
                              <p
                                class="MsoNormal"
                                style="
                                  margin-bottom: 0cm;
                                  margin-bottom: 0.0001pt;
                                "
                              >
                                <button
                                  style="
                                    font-weight: bold;
                                    font-size: 8px;
                                    line-height: normal;
                                    font-family: Arial;
                                    width: auto;
                                    position: absolute;
                                    box-shadow: rgb(39, 104, 115) 0px 10px 14px -7px;
                                    background: linear-gradient(
                                        rgb(89, 155, 179) 5%,
                                        rgb(64, 140, 153) 100%
                                      )
                                      rgb(89, 155, 179);
                                    border-radius: 40px;
                                    color: rgb(255, 255, 255);
                                    padding-right: 8px;
                                    padding-left: 8px;
                                    text-shadow: rgb(61, 118, 138) 0px 1px 0px;
                                  "
                                >
                                  Скачать
                                </button>
                              </p>
                              <table
                                width="615"
                                style="
                                  margin: 0px auto;
                                  padding: 0px;
                                  border: 1px solid rgb(207, 207, 207);
                                  font-size: 13px;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  border-spacing: 0px;
                                  overflow-wrap: break-word;
                                  table-layout: fixed;
                                  width: 892px;
                                  font-family: monospace;
                                "
                              >
                                <tbody
                                  style="
                                    margin: 0px;
                                    padding: 0px;
                                    border: 0px;
                                    vertical-align: baseline;
                                    background: transparent;
                                  "
                                >
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        №
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Группа
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Товар
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Наименование товаров
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Код ТН ВЭД ЕАЭС
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Минимальный размер поставочной партии
                                        товара, при равенстве или превышении
                                        которого, его реализация осуществляется
                                        только через товарную биржу
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Минимальная доля товара, подлежащая
                                        обязательной реализации через товарные
                                        биржи и категории субъектов, на которых
                                        распространяется указанная обязанность
                                      </p>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        3
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        4
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        5
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        6
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        7
                                      </p>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      rowspan="2"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1
                                      </p>
                                    </td>
                                    <td
                                      rowspan="2"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Энергоносители
                                      </p>
                                    </td>
                                    <td
                                      rowspan="2"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Уголь
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Уголь каменный; брикеты, окатыши и
                                        аналогичные виды твердого топлива,
                                        полученные из каменного угля*
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2701
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн (при реализации угледобывающими
                                        компаниями угля для коммунально-бытовых
                                        нужд)
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Лигнит или бурый уголь, агломерированный
                                        или неагломерированный, кроме гагата*
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2702
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн (при реализации угледобывающими
                                        компаниями угля для коммунально-бытовых
                                        нужд)
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      rowspan="7"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2
                                      </p>
                                    </td>
                                    <td
                                      rowspan="7"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Cельскохозяйственная продукция
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Пшеница и меслин
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Пшеница и меслин
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1001 19 000 0, 1001 91 900 0, 1001 99
                                        000 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        300 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        мука пшеничная 1 сорта***
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        мука пшеничная 1 сорта
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1101001500
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Сахар
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Сахар
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1701
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Ячмень
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Ячмень
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1003 10 000 0, 1003 90 000 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        600 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Соевые бобы, дробленые или недробленые
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Соевые бобы, дробленые или недробленые
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        1201
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Картофель свежий или охлажденный:
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        0701
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Волокно хлопковое, подвергнутое
                                        кардо-или гребнечесанию
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        5203 00 000 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        600 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        3
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Минеральные продукты
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Портландцемент, цемент глиноземистый,
                                        цемент шлаковый, цемент суперсульфатный
                                        и аналогичные гидравлические цементы,
                                        неокрашенные или окрашенные, готовые или
                                        в форме клинкеров
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2523
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        60 тонн
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        4
                                      </p>
                                    </td>
                                    <td
                                      rowspan="10"
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        Нефтепродукты
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        битум****
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        битум нефтяной
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2713 20&nbsp;000 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        10%
                                      </p>
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        бензин автомобильный**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        с октановым числом 92 или более, но
                                        менее 95
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 12 413 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        бензин автомобильный**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        с октановым числом 95 или более, но
                                        менее 98
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 12 450 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        бензин автомобильный**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        с октановым числом 98 или более
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 12 490 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        топливо для реактивных двигателей**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        топливо для реактивных двигателей
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19&nbsp;210 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        дизельное топливо**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        летнее
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19&nbsp;421 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        дизельное топливо**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        зимнее
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19 422 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        дизельное топливо**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        арктическое
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19 423 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        дизельное топливо**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        межсезонное
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19 424 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      margin: 0px;
                                      padding: 0px;
                                      border: 0px;
                                      vertical-align: baseline;
                                      background: transparent;
                                    "
                                  >
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        дизельное топливо**
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        прочее
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin-bottom: 1.5em;
                                          padding: 0px;
                                          border: 0px;
                                          font-variant-numeric: normal;
                                          font-variant-east-asian: normal;
                                          font-stretch: normal;
                                          line-height: 19px;
                                          vertical-align: baseline;
                                          background: transparent;
                                          letter-spacing: 0.1px;
                                          overflow: visible;
                                          text-shadow: none;
                                        "
                                      >
                                        2710 19 425 0
                                      </p>
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                    <td
                                      style="
                                        margin: 0px;
                                        padding: 3px 5px;
                                        border-color: rgb(207, 207, 207);
                                        vertical-align: top;
                                        background: transparent;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <br />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              ></p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ________________________________
                              </p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * – указанный
                                перечень не распространяется на реализацию
                                угледобывающими компаниями коммунально-бытового
                                угля операторам, определяемых местными
                                исполнительными органами, для последующей ими
                                реализации населению для личного пользования;
                              </p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ** - вводится в
                                действие с 1 марта 2021 года, при этом объем
                                реализации бензина автомобильного, дизельного
                                топлива и топлива для реактивных двигателей
                                реализуемый через товарные биржи устанавливается
                                уполномоченным орган в области производства
                                нефтепродуктов в рамках плана поставок
                                нефтепродуктов в соответствии с&nbsp;<a
                                  href="http://adilet.zan.kz/rus/docs/Z1100000463#z485"
                                  style="
                                    margin: 0px;
                                    padding: 0px;
                                    vertical-align: baseline;
                                    background-image: initial;
                                    background-position: initial;
                                    background-size: initial;
                                    background-repeat: initial;
                                    background-attachment: initial;
                                    background-origin: initial;
                                    background-clip: initial;
                                    color: rgb(7, 58, 94);
                                    -webkit-tap-highlight-color: rgb(
                                      64,
                                      170,
                                      245
                                    );
                                  "
                                  >пунктом 7</a
                                >&nbsp;статьи 18 Закона Республики Казахстан от
                                20 июля 2011 года "О государственном
                                регулировании производства и оборота отдельных
                                видов нефтепродуктов";
                              </p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *** - вводится в
                                действие с 1 июля 2021 года;
                              </p>
                              <p
                                style="
                                  margin-bottom: 1.5em;
                                  padding: 0px;
                                  border: 0px;
                                  font-variant-numeric: normal;
                                  font-variant-east-asian: normal;
                                  font-stretch: normal;
                                  font-size: 13px;
                                  line-height: 19px;
                                  font-family: monospace;
                                  vertical-align: baseline;
                                  background-image: initial;
                                  background-position: initial;
                                  background-size: initial;
                                  background-repeat: initial;
                                  background-attachment: initial;
                                  background-origin: initial;
                                  background-clip: initial;
                                  letter-spacing: 0.1px;
                                  overflow: visible;
                                  text-shadow: none;
                                "
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **** - вводится в
                                действие с 1 марта 2021 года.
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
          <h4 class="widget-title">Перечень биржевых товаров</h4>
          <div class="menu-service-menu-container">
            <ul id="menu-service-menu" class="menu">
              <li>
                <a data-link
                  href="/documents"
                  >Перечень региональных угольных операторов (ЖД тупиков)</a
                >
              </li>
              <li>
                <a data-link href="/post/polozhenie"
                  >ПОЛОЖЕНИЕ О ЧЛЕНСТВЕ</a
                >
              </li>
              <li>
                <a data-link href="/post/pravila"
                  >Правила биржевой торговли
                </a>
              </li>
              <li class="current-menu-item">
                <a data-link href="/post/perechen"
                  >Перечень биржевых товаров</a
                >
              </li>
              <li>
                <a data-link href="/post/zakon"
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


