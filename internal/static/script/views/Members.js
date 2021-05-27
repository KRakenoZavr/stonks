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
        <div id="primary" class="content-area col-lg-8 col-md-8 col-sm-12 col-xs-12 pull-right">
          <main id="main" class="site-main">
            <article class="ot_service type-ot_service status-publish has-post-thumbnail hentry">
              <div class="inner-post">
                <section class="wpb_row row-fluid">
                  <div class="container">
                    <div class="row">
                      <div class="wpb_column column_container col-sm-12">
                        <div class="column-inner">
                          <div class="wpb_wrapper">
                            <h2>Список Брокеров</h2>
                            <div class="wpb_text_column wpb_content_element post_content">
                              <div class="wpb_wrapper">
                                <p></p>
                              </div>
                              <div class="wpb_wrapper">
                                <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="103%"
                                  style="width: 103%">
                                  <tbody>
                                    <tr>
                                      <td width="4%" style="
                                          width: 4.12%;
                                          border-width: 1pt;
                                          border-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">№<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">п/п<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="30%" style="
                                          width: 30.94%;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: windowtext;
                                          border-right-color: windowtext;
                                          border-bottom-color: windowtext;
                                          border-left: none;
                                          padding: 3.75pt 2.25pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Наименование<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">брокера/дилера<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="17%" style="
                                          width: 17.52%;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: windowtext;
                                          border-right-color: windowtext;
                                          border-bottom-color: windowtext;
                                          border-left: none;
                                          padding: 3.75pt 2.25pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Директор<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="37%" style="
                                          width: 37.12%;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: windowtext;
                                          border-right-color: windowtext;
                                          border-bottom-color: windowtext;
                                          border-left: none;
                                          padding: 3.75pt 2.25pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Контактная информация<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="10%" style="
                                          width: 10.3%;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: windowtext;
                                          border-right-color: windowtext;
                                          border-bottom-color: windowtext;
                                          border-left: none;
                                          padding: 3.75pt 2.25pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Стаж работы в сфере товарных бирж<o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 1; height: 74.6pt">
                                      <td width="4%" style="
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
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">1<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="30%" style="
                                          width: 30.94%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 74.6pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ТОО «КазБизнесКонсалтинг<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ВОСТОК »<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="17%" style="
                                          width: 17.52%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 74.6pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Антюхов Дмитрий Викторович<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="37%" style="
                                          width: 37.12%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 74.6pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Республика Казахстан
                                            г.Усть-Каменогорск, ул. Головкова
                                            25<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">тел:8(7232)24-37-65<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">26-45-86, 57-82-90<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="10%" style="
                                          width: 10.3%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 74.6pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">05.2010 г.<o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 11; height: 46.05pt">
                                      <td width="4%" style="
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
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">2<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="30%" style="
                                          width: 30.94%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 46.05pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ТОО «Добрый Фермер»<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="17%" style="
                                          width: 17.52%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 46.05pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Спасова Т.В.<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="37%" style="
                                          width: 37.12%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 46.05pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Республика Казахстан<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">г.Нур-Султан<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ул.Сүиінбай ақына 85<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="10%" style="
                                          width: 10.3%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 46.05pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">05.2018 г.<o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 25; height: 11.7pt">
                                      <td width="4%" style="
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
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">3<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="30%" style="
                                          width: 30.94%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <a name="_Hlk64901663"><span style="
                                                font-size: 9.5pt;
                                                line-height: 107%;
                                              ">&nbsp;</span></a><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">
                                            <o:p></o:p>
                                          </span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ТОО «</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Tesoro Broker</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">»<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">&nbsp;<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="17%" style="
                                          width: 17.52%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Альпеисова А.М.<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="37%" style="
                                          width: 37.12%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">010000; РК, г. Нур-Султан, район
                                            Сарыарка, Жилой массив К</span><span lang="KZ" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ө</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ктал, улица Жаяу М</span><span lang="KZ" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ұ</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">са дом 23<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Тел.: +7&nbsp;</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">(</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">747</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">)</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">&nbsp;481-92-90<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">tesorobroker</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">@</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">bk</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">.</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ru</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">
                                            <o:p></o:p>
                                          </span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">&nbsp;<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="10%" style="
                                          width: 10.3%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">01.2021 г.<o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="
                                        mso-yfti-irow: 27;
                                        mso-yfti-lastrow: yes;
                                        height: 11.7pt;
                                      ">
                                      <td width="4%" style="
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
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">4<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="30%" style="
                                          width: 30.94%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">ТОО «</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Veg Consulting</span><span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">»</span><span lang="EN-US" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">
                                            <o:p></o:p>
                                          </span>
                                        </p>
                                      </td>
                                      <td width="17%" style="
                                          width: 17.52%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Жаймаганбетова Б.Ж.<o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td width="37%" style="
                                          width: 37.12%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                            tab-stops: 52.5pt;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">РК, город Нур-Султан, улица </span><span lang="KZ" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Сүйінбай акына 85, офис 101<o:p></o:p></span>
                                        </p>
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                            tab-stops: 52.5pt;
                                          ">
                                          <span lang="KZ" style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">Тел:87172273566</span>
                                        </p>
                                      </td>
                                      <td width="10%" style="
                                          width: 10.3%;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: windowtext;
                                          border-right-width: 1pt;
                                          border-right-color: windowtext;
                                          padding: 3.75pt 2.25pt;
                                          height: 11.7pt;
                                        ">
                                        <p class="MsoNormal" align="center" style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: center;
                                          ">
                                          <span style="
                                              font-size: 9.5pt;
                                              line-height: 107%;
                                            ">12.2016г.<o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p class="MsoNormal" align="center" style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: center;
                                  ">
                                  <span style="font-size: 9.5pt; line-height: 107%">&nbsp;</span><span
                                    style="font-size: 10.5pt; line-height: 107%">
                                    <o:p></o:p>
                                  </span>
                                </p>
  
                                <p class="MsoNormal" style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  ">
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
  
        <aside id="sidebar" class="widget-area service-sidebar col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <section id="nav_menu-1" class="widget widget_nav_menu">
            <h4 class="widget-title">Члены биржи</h4>
            <div class="menu-service-menu-container">
              <ul id="menu-service-menu" class="menu">
                <li class="current-menu-item">
                  <a href="https://utb.kz/post/spisok-brokerov-774/">Список Брокеров</a>
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
