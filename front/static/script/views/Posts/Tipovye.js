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
            <h1 class="page-title">Типовые Правила биржевой торговли</h1>
          </div>
          <div class="col-md-6 mobile-left text-right">
            <ul id="breadcrumbs" class="breadcrumbs none-style">
              <li><a href="/" data-link>Главная</a></li>
              <li class="active">Типовые Правила биржевой торговли</li>
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
                            <h2>Типовые Правила биржевой торговли</h2>
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
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <b
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >Об утверждении Типовых правил биржевой
                                      торговли</span
                                    ></b
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <span
                                    lang="EN-US"
                                    style="font-size: 14pt; line-height: 115%"
                                    >Приказ и.о. Министра национальной экономики
                                    Республики Казахстан от 30 марта 2015 года №
                                    280. Зарегистрирован в Министерстве юстиции
                                    Республики Казахстан 8 мая 2015 года №
                                    10993.</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z2"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В
                                      соответствии с подпунктом 2-1) статьи 4
                                      Закона Республики Казахстан от 4 мая 2009
                                      года "О товарных биржах"
                                      <b>ПРИКАЗЫВАЮ:</b></span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z3"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.
                                      Утвердить прилагаемые Типовые правила
                                      биржевой торговли. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z4"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.
                                      Департаменту регулирования торговой
                                      деятельности Министерства национальной
                                      экономики Республики Казахстан обеспечить: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <span
                                    lang="EN-US"
                                    style="font-size: 14pt; line-height: 115%"
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                    государственную регистрацию настоящего приказа
                                    в Министерстве юстиции Республики
                                    Казахстан;</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <span
                                    lang="EN-US"
                                    style="font-size: 14pt; line-height: 115%"
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) в течение
                                    десяти календарных дней после государственной
                                    регистрации настоящего приказа в Министерстве
                                    юстиции Республики Казахстан его направление
                                    на официальное опубликование в периодических
                                    печатных изданиях и в информационно-правовой
                                    системе "Әділет";</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <span
                                    lang="EN-US"
                                    style="font-size: 14pt; line-height: 115%"
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                    опубликование настоящего приказа на
                                    официальном интернет-ресурсе Министерства
                                    национальной экономики Республики
                                    Казахстан.</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z5"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Контроль
                                      за исполнением настоящего приказа оставляю
                                      за собой.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z6"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Настоящий
                                      приказ вводится в действие по истечении
                                      десяти календарных дней после дня его
                                      первого официального опубликования.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="339"
                                        style="
                                          width: 254.5pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Исполняющий обязанности</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="481"
                                        style="
                                          width: 360.5pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr
                                      style="
                                        mso-yfti-irow: 1;
                                        mso-yfti-lastrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="339"
                                        style="
                                          width: 254.5pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Министра</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="481"
                                        style="
                                          width: 360.5pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Т. Жаксылыков</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <span lang="EN-US"
                                    ><br />
                                    <!--[if !supportLineBreakNewLine]--><br />
                                    <!--[endif]--><o:p
                                    ></o:p
                                  ></span>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        mso-yfti-lastrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="519"
                                        style="
                                          width: 389pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
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
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >&nbsp;</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="307"
                                        style="
                                          width: 230pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
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
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Утвержден</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >приказом Министра</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >национальной экономики</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Республики Казахстан</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >от 30 марта 2015 года № 280</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z1"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Типовые правила биржевой
                                        торговли</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <span
                                    lang="EN-US"
                                    style="
                                      font-size: 14pt;
                                      mso-bidi-font-size: 11pt;
                                      line-height: 115%;
                                      color: red;
                                    "
                                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сноска.
                                    Типовые правила в редакции приказа Министра
                                    торговли и интеграции РК от 03.09.2019 № 30
                                    (вводится в действие по истечении десяти
                                    календарных дней после дня его первого
                                    официального опубликования).</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z7"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 1. Общие требования</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z8"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.
                                      Настоящие Типовые правила биржевой торговли
                                      (далее – Типовые правила) разработаны в
                                      соответствии с подпунктом 2-1) статьи 4
                                      Закона Республики Казахстан от 4 мая 2009
                                      года "О товарных биржах" (далее – Закон) и
                                      определяют порядок деятельности членов
                                      товарной биржи при совершении биржевых
                                      сделок с биржевыми и нестандартизированными
                                      товарами.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z9"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Основные
                                      понятия, которые используются в настоящих
                                      Типовых правилах:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z10"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      цена открытия – цена, с которой начинаются
                                      биржевые торги, либо цена первой совершенной
                                      биржевой сделки по конкретному биржевому
                                      товару (группе товаров) на конкретном
                                      биржевом торге; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z11"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      потенциальный поставщик – дилер, физическое
                                      или юридическое лицо, пользующееся услугами
                                      брокера, претендующие на заключение биржевой
                                      сделки по закупкам недропользователей,
                                      национальных управляющих холдингов,
                                      национальных холдингов, национальных
                                      управляющих компаний, национальных компаний
                                      и аффилированных с ними юридических лиц
                                      (далее – закупки недропользователей и
                                      национальных компаний);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z12"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      биржевой сбор – комиссия, взимаемая товарной
                                      биржей с участников торгов за регистрацию
                                      биржевой сделки; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z13"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      биржевой брокер (далее – брокер) –
                                      юридическое лицо, осуществляющее свою
                                      деятельность на товарной бирже и совершающее
                                      сделки с биржевым товаром по поручению, за
                                      счет и в интересах клиента; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z14"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      биржевой дилер (далее – дилер) – юридическое
                                      лицо, осуществляющее свою деятельность на
                                      товарной бирже и совершающее сделки с
                                      биржевым товаром в своих интересах и за свой
                                      счет; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z15"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) биржевое
                                      обеспечение – денежное обеспечение, вносимое
                                      на возвратной основе участниками биржевой
                                      торговли клиринговому центру товарной биржи
                                      для участия в биржевых торгах в качестве
                                      обеспечения исполнения своих обязательств по
                                      заключаемым биржевым сделкам;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z16"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7) биржевые
                                      торги – процесс, проводимый в рамках правил
                                      биржевой торговли, направленный на
                                      совершение сделок по биржевым товарам и
                                      нестандартизированным товарам на основе
                                      электронных заявок, поданных в электронную
                                      торговую систему товарной биржи,
                                      обеспечивающую автоматизацию процесса
                                      заключения биржевых сделок;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z17"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8) участники
                                      биржевой торговли – клиенты, брокеры и
                                      дилеры, взаимодействующие на товарной бирже
                                      по установленным правилам биржевой
                                      торговли;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z18"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9) участники
                                      биржевых торгов – брокеры и (или) дилеры,
                                      прошедшие процедуру аккредитации в товарной
                                      бирже и имеющие право на осуществление
                                      биржевых сделок на товарной бирже;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z19"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10) биржевой
                                      товар – стандартизированный однородный
                                      товар, включенный в Единую товарную
                                      номенклатуру внешнеэкономической
                                      деятельности Евразийского экономического
                                      союза, единицы которого идентичны во всех
                                      отношениях, имеют сходные характеристики и
                                      состоят из схожих компонентов, что позволяет
                                      им выполнять те же функции, обладающие
                                      свойством полной взаимозаменяемостью партий
                                      от различных производителей, а также срочный
                                      контракт;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z20"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11) заявка
                                      на продажу (покупку) биржевого товара,
                                      нестандартизированного товара – предложение
                                      (оферта) участника биржевых торгов о продаже
                                      (покупке) биржевого товара,
                                      нестандартизированного товара или
                                      уведомление (акцепт) участника биржевых
                                      торгов о принятии предложения о покупке
                                      (продаже) биржевого товара,
                                      нестандартизированного товара содержащее все
                                      условия, необходимые для заключения биржевой
                                      сделки в соответствии с Типовыми
                                      правилами;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z21"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12)
                                      расчетная организация – банк второго уровня
                                      или организация, осуществляющие отдельные
                                      виды банковских операций, с которой
                                      клиринговый центр товарной биржи заключил
                                      договор о порядке взаимодействия при
                                      проведении биржевых торгов и (или)
                                      осуществлении расчетов по сделкам,
                                      заключенным на биржевых торгах;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z22"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13) клиент –
                                      физическое или юридическое лицо,
                                      пользующееся услугами брокера для совершения
                                      сделок с биржевым товаром;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z23"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14)
                                      кросс-сделка – биржевая сделка, при которой
                                      брокер, действуя по поручению двух разных
                                      клиентов, выступает как со стороны продавца,
                                      так и со стороны покупателя;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z24"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15) режим
                                      двойного встречного аукциона – режим
                                      торговли, при котором биржевые сделки
                                      заключаются анонимно в результате
                                      конкуренции продавцов и покупателей, а цена
                                      на биржевой или нестандартизированный товар
                                      устанавливается на уровне равновесия спроса
                                      и предложения;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z25"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16) торговый
                                      день – день работы товарной биржи, в течение
                                      которого ею проводятся биржевые торги;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z26"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17)
                                      уполномоченный орган в области регулирования
                                      торговой деятельности (далее –
                                      уполномоченный орган) – центральный
                                      исполнительный орган, осуществляющий
                                      государственное регулирование и координацию
                                      в сфере торговой деятельности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z27"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18) торговый
                                      лот – минимальное количество биржевого или
                                      нестандартизированного товара, кратным
                                      которому должно быть количество биржевого
                                      или нестандартизированного товара, указанное
                                      в заявке на продажу (покупку) биржевого или
                                      нестандартизированного товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z28"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19) режим
                                      торговли – совокупность условий объявления
                                      заявок и заключения сделок в торговой
                                      системе товарной биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z29"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20) торговая
                                      сессия – период времени торгового дня, в
                                      течение которого трейдеры выставляют в
                                      торговую систему товарной биржи заявки на
                                      покупку (продажу) биржевого и (или)
                                      нестандартизированного товара и по ним
                                      заключаются биржевые сделки;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z30"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21)
                                      нестандартизированный товар – товар, не
                                      изъятый из оборота или не ограниченный в
                                      обороте, допущенный товарной биржей к
                                      биржевой торговле, за исключением биржевых
                                      товаров, недвижимого имущества и объектов
                                      интеллектуальной собственности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z31"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22) режим
                                      стандартного аукциона – режим торговли, при
                                      котором биржевые сделки по
                                      нестандартизированным товарам заключаются в
                                      ходе аукциона на понижение или повышение по
                                      наилучшей цене для покупателя (продавца) -
                                      инициатора аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z32"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23)
                                      клиринговый центр товарной биржи –
                                      самостоятельная клиринговая организация, с
                                      которой товарная биржа заключила договор о
                                      клиринговом обслуживании;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z33"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24) товарная
                                      биржа – юридическое лицо, созданное в
                                      организационно–правовой форме акционерного
                                      общества, осуществляющее организационное и
                                      техническое обеспечение торгов путем их
                                      непосредственного проведения с
                                      использованием торговой системы товарной
                                      биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z34"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25) трейдер
                                      – работник участника биржевых торгов,
                                      уполномоченный им на осуществление в
                                      торговой системе товарной биржи действий,
                                      связанных с заключением сделок от имени
                                      участника биржевых торгов, и
                                      зарегистрированный товарной биржей в
                                      установленном ею порядке;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z35"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26)
                                      саморегулируемая организация –
                                      некоммерческая организация в форме
                                      ассоциации (союза), основанная на
                                      добровольном участии брокеров и (или)
                                      дилеров и включенная в реестр
                                      саморегулируемых организаций в сфере
                                      товарных бирж в соответствии с подпунктом
                                      10-2) статьи 4 Закона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z36"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27)
                                      претендент – юридическое лицо, желающее
                                      пройти процедуру аккредитации в товарной
                                      бирже в качестве брокера или дилера.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z37"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Иные понятия
                                      и термины, используемые в настоящих Типовых
                                      правилах, применяются в соответствии с
                                      законодательством Республики
                                      Казахстан.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z38"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. На основе
                                      Типовых правил каждая товарная биржа
                                      разрабатывает и утверждает внутренними
                                      документами собственные Правила биржевой
                                      торговли (далее – Правила биржи).</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z39"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.
                                      Участники биржевой торговли соблюдают
                                      требования, установленные Законом,
                                      законодательными актами Республики
                                      Казахстан, Типовыми правилами и внутренними
                                      документами товарной биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z40"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Товарная
                                      биржа обеспечивает всем участникам биржевой
                                      торговли равные условия по заключению
                                      биржевых сделок и является гарантом
                                      законности биржевых сделок.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z41"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 2. Условия и порядок
                                        аккредитации членов товарной биржи,
                                        приостановления и прекращения их
                                        аккредитации</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z42"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.
                                      Аккредитация в товарной бирже дает право
                                      брокерам и дилерам участвовать на биржевых
                                      торгах и осуществлять биржевые сделки в
                                      соответствии Законом, Типовыми правилами и
                                      Правилами биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z43"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Членами
                                      товарной биржи являются брокеры и (или)
                                      дилеры, прошедшие процедуру аккредитации в
                                      товарной бирже и заключившие с товарной
                                      биржей бессрочный договор об оказании услуг
                                      по организации биржевой торговли.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z44"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Брокер и
                                      (или) дилер является членом только одной
                                      товарной биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z45"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Физическое
                                      лицо не может быть руководителем двух и
                                      более брокеров и (или) дилеров.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z46"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Члены
                                      товарной биржи не допускают действий
                                      (бездействия), которые могут повлечь
                                      разглашения сведений, составляющих
                                      коммерческую тайну на товарной бирже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z47"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Для
                                      прохождения аккредитации в товарной бирже
                                      претенденту предъявляются следующие
                                      требования:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z48"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) обладать
                                      гражданской правоспособностью;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z49"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) являться
                                      платежеспособным, не иметь налоговой
                                      задолженности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z50"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) не
                                      подлежать процедуре банкротства либо
                                      ликвидации, на его имущество не наложен
                                      арест, его финансово-хозяйственная
                                      деятельность не приостановлена;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z51"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) наличие у
                                      работников, занимающих руководящие
                                      должности, высшего образования.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z52"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Товарная
                                      биржа устанавливает требования к
                                      претенденту, касающиеся размера уставного и
                                      (или) собственного капитала, деловой
                                      репутации и резидентства, в том числе по
                                      отдельным торговым секциям в товарной бирже,
                                      если такие требования установлены правилами
                                      аккредитации брокеров и (или) дилеров в
                                      товарной бирже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z53"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10. Для
                                      аккредитации в товарной бирже претендент
                                      представляет товарной бирже следующие
                                      документы и сведения:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z54"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) заявление
                                      о приеме в члены товарной биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z55"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) копия
                                      положения и (или) устава, утвержденного в
                                      установленном законодательством порядке, с
                                      учетом внесенных изменений и (или)
                                      дополнений (нотариально заверенную в случае
                                      непредставления оригиналов для
                                      сверки);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z56"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) справка о
                                      постановке претендента на налоговый учет в
                                      качестве плательщика налога на добавленную
                                      стоимость (при наличии);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z57"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) оригинал
                                      финансовой отчетности за последний
                                      финансовый год, подписанной первым
                                      руководителем или лицом, его замещающим, а
                                      также главным бухгалтером (при
                                      наличии);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z58"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) справка о
                                      государственной регистрации
                                      (перерегистрации) юридического лица;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z59"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) квитанция
                                      об оплате вступительного взноса
                                      претендентом;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z60"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7) копия
                                      договора о клиринговом обслуживании с
                                      клиринговым центром товарной биржи
                                      (нотариально заверенную в случае
                                      непредставления оригиналов для
                                      сверки).</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z61"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Товарная
                                      биржа запрашивает представление
                                      дополнительных документов и сведений,
                                      необходимых для вступления членов товарной
                                      биржи по отдельным торговым секциям в
                                      товарной бирже, если вступление по отдельным
                                      торговым секциям в товарной бирже было
                                      установлено правилами аккредитации брокеров
                                      и (или) дилеров в товарной бирже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z62"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.
                                      Решение об аккредитации в товарной бирже
                                      принимается товарной биржей в течение десяти
                                      рабочих дней с момента приема заявления и
                                      документов, указанных в пункте 10 настоящих
                                      Типовых правил. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z63"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; О принятом
                                      решении претенденту сообщается письменно в
                                      течение одного рабочего дня.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z64"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Решение
                                      считается врученным в следующих
                                      случаях:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z65"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) нарочно –
                                      с даты отметки о получении;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z66"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) почтой –
                                      заказным письмом;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z67"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      электронным способом – с даты отправки на
                                      электронный адрес, указанный в письме
                                      товарной биржей.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z68"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12. В
                                      аккредитации в товарной бирже отказывается в
                                      следующих случаях:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z69"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      несоответствие претендента требованиям,
                                      установленным пунктом 9 настоящих Типовых
                                      правил, правил аккредитации брокеров и (или)
                                      дилеров в товарной бирже;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z70"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      непредставление, представление не в полном
                                      объеме и (или) представление содержащих
                                      недостоверную информацию документов и
                                      сведений;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z71"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) в
                                      отношении претендента имеется вступившее в
                                      законную силу решение суда о запрещении
                                      деятельности или отдельных видов
                                      деятельности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z72"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      включение претендента и (или) его первого
                                      руководителя в Перечень организаций и лиц,
                                      связанных с финансированием терроризма и
                                      экстремизма в порядке, предусмотренном
                                      Законом Республики Казахстан от 28 августа
                                      2009 года "О противодействии легализации
                                      (отмыванию) доходов, полученных преступным
                                      путем, и финансированию терроризма";</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z73"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) в
                                      отношении претендента и (или) его первого
                                      руководителя имеется вступившее в законную
                                      силу решение (приговор) суда, на основании
                                      которого претендент и (или) его первый
                                      руководитель лишен специального права,
                                      связанного с получением аккредитации в
                                      товарной бирже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z74"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13. В случае
                                      получения необоснованного отказа в
                                      аккредитации в товарной бирже претендент
                                      обжалует решение товарной биржи в
                                      уполномоченный орган.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z75"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Основаниями
                                      для обжалования в уполномоченный орган
                                      являются:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z76"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      несоответствие выводов, изложенных в решении
                                      об аккредитации в товарной бирже и
                                      обстоятельствам необоснованного
                                      отказа;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z77"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      неправильное применение норм
                                      законодательства Республики Казахстан в
                                      сфере товарных бирж при решении отказа в
                                      аккредитации в товарной бирже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z78"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      несогласия с решением уполномоченного органа
                                      претендент обращается в суд.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z79"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14.
                                      Приостановление аккредитации в товарной
                                      бирже осуществляется по следующим
                                      основаниям:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z80"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) в случае
                                      принятия решения члена товарной биржи с
                                      представлением им соответствующего заявления
                                      с указанием в нем следующих сведений:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z81"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; причина
                                      приостановления аккредитации;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z82"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; срок
                                      приостановления аккредитации;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z83"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; об
                                      отсутствии у него неисполненных обязательств
                                      по заключенным им биржевым сделкам;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z84"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) при
                                      неуплате (два и более раз) установленных
                                      платежей за пользование имуществом биржи,
                                      информационно-технического и клирингового
                                      обслуживание, а также биржевого сбора;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z85"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) в
                                      случае обнаружения товарной биржей
                                      несоблюдения членом товарной биржи
                                      требований, установленных статьями 20 и 22
                                      Закона, настоящих Типовых правил и
                                      внутренних документов товарной биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z86"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      обнаружения несоблюдения членом биржи
                                      требований, установленных настоящим пунктом
                                      Типовых правил, товарная биржа в течение
                                      трех рабочих дней направляет в письменном
                                      виде уведомление о приостановлении
                                      аккредитации с указанием сроков.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z87"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15.
                                      Возобновление аккредитации в товарной бирже
                                      осуществляется по следующим
                                      основаниям:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z88"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) по
                                      заявлению члена товарной биржи - в случае
                                      приостановления аккредитации в товарной
                                      бирже по собственному желанию;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z89"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      представление подтверждающих документов об
                                      устранении условий, предусмотренных пунктом
                                      14 настоящих Типовых правил.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z90"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16.
                                      Прекращение аккредитации в товарной бирже
                                      осуществляется по следующим
                                      основаниям:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z91"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) в случае
                                      принятия решения члена товарной биржи с
                                      представлением им соответствующего заявления
                                      с указанием в нем следующих сведений:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z92"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; причина
                                      прекращения аккредитации;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z93"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; об
                                      исполнении им всех обязательств по
                                      заключенным биржевым сделкам;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z94"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      неустранения требований, послуживших
                                      основанием для приостановления аккредитации
                                      в товарной бирже, за исключением заявления
                                      по собственному желанию;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z95"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) в случае
                                      ликвидации члена товарной биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z96"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) имеется
                                      вступившее в законную силу решение суда о
                                      запрещении деятельности или отдельных видов
                                      деятельности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z97"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) в случае
                                      подтверждения факта манипулирования ценами
                                      со стороны члена товарной биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z98"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17. Товарная
                                      биржа рассматривает заявления о
                                      приостановлении, возобновлении и прекращении
                                      аккредитации в товарной бирже в течение
                                      десяти рабочих дней с момента приема
                                      заявления. В случае выявления у члена
                                      товарной биржи неисполненных обязательств по
                                      биржевым сделкам товарная биржа отклоняет
                                      рассмотрение заявления до исполнения им всех
                                      обязательств по биржевым сделкам.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z99"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18. Сроки
                                      устранения требований, послуживших
                                      основанием для приостановления аккредитации
                                      в товарной бирже, устанавливаемые товарной
                                      биржей, не превышают тридцати рабочих
                                      дней.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z100"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19. Доходы
                                      товарной биржи формируются за счет
                                      вступительных и ежегодных взносов членов
                                      товарной биржи, платежей за пользование
                                      имуществом биржи, регистрацию и оформление
                                      биржевых сделок и за счет других
                                      поступлений, не запрещенных Законом.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z101"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20. Размер
                                      биржевого сбора определяется в процентном
                                      соотношении от размера сделки и
                                      устанавливается товарной биржей в одинаковом
                                      размере для каждой стороны сделки, за
                                      исключением случаев проведения
                                      государственных закупок, закупок субъектов
                                      естественных монополий,
                                      социально-предпринимательских корпораций, а
                                      также закупок недропользователей и
                                      национальных компаний.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z102"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21.
                                      Товарная биржа устанавливает иные виды
                                      взносов и платежей в соответствии со статьей
                                      14 Закона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z103"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22. Убытки,
                                      причиненные клиенту, заключившему договор на
                                      брокерское обслуживание, или имущественный
                                      вред, причиненный третьим лицам вследствие
                                      неправомерных действий брокера, подлежат
                                      возмещению в соответствии с гражданским
                                      законодательством Республики
                                      Казахстан.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z104"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 3. Порядок проведения
                                        биржевых торгов, в том числе срочными
                                        контрактами</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z105"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23. Товарная
                                      биржа проводит биржевые торги в
                                      установленные ею торговые дни. Время начала
                                      и окончания торгового дня, предторгового
                                      периода (в случае его проведения), торговой
                                      сессии и клиринга устанавливаются товарной
                                      биржей с учетом средней продолжительности
                                      торгового дня не менее пяти часов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z106"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24. Товарная
                                      биржа проводит биржевые торги с учетом
                                      особенностей режимов торговли.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z107"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25. Каждому
                                      биржевому и нестандартизированному товару,
                                      допущенному к биржевым торгам в режиме
                                      двойного встречного аукциона, товарная биржа
                                      присваивает отдельный код торгового
                                      инструмента, который идентифицирует данный
                                      товар, его качественные характеристики, а
                                      также базовые условия поставки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z108"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26. Биржевые
                                      торги проводятся с предварительным внесением
                                      биржевого обеспечения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z109"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Размер
                                      биржевого обеспечения для участия в биржевых
                                      торгах устанавливается товарной биржей в
                                      процентом соотношении к планируемой
                                      участником торгов к заключению суммы
                                      биржевой сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z110"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      невыполнения участником биржевой торговли
                                      своих обязательств по биржевой сделке,
                                      внесенное им биржевое обеспечение подлежит
                                      перечислению клиринговому центру товарной
                                      биржи в пользу пострадавшей стороны.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z111"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Порядок
                                      внесения, возврата и перечисления биржевого
                                      обеспечения в пользу пострадавшей стороны
                                      определяется клиринговым центром товарной
                                      биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z112"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27.
                                      Участник биржевых торгов, желающий продать
                                      (купить) товар, допущенный к биржевой
                                      торговле, в течение торговой сессии биржи
                                      подает товарной бирже заявку на продажу
                                      (покупку) биржевого или
                                      нестандартизированного товара. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z113"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Заявка на
                                      продажу (покупку) биржевого или
                                      нестандартизированного товара, подаваемая
                                      участником биржевых торгов, является
                                      безусловным согласием участника биржевых
                                      торгов на заключение биржевой сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z114"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Форма и
                                      содержание заявки на продажу (покупку)
                                      биржевого или нестандартизированного товара
                                      устанавливаются товарной биржей с учетом
                                      особенностей применяемого режима
                                      торговли.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z115"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28. При
                                      проведении биржевых торгов в режиме двойного
                                      встречного аукциона в заявке указываются
                                      следующее:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z116"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; код товара
                                      (торгового инструмента);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z117"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      направленность заявки: покупка или продажа
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z118"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; количество
                                      реализуемого (приобретаемого) товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z119"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; цена
                                      товара (указывается в заявке на покупку и в
                                      заявке на продажу). </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z120"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 29. Товарная
                                      биржа отказывает в принятии заявки на
                                      продажу (покупку) биржевого или
                                      нестандартизированного товара по следующим
                                      основаниям:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z121"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      неправильное оформление заявки; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z122"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) нарушение
                                      установленных сроков подачи заявки;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z123"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      отсутствие биржевого обеспечения;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z124"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) неуплата
                                      участником биржевых торгов биржевого сбора
                                      по ранее совершенным биржевым сделкам, а
                                      также наличие у него задолженностей перед
                                      товарной биржей и (или) клиринговым центром
                                      товарной биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z125"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      приостановление и прекращение аккредитации в
                                      товарной бирже брокера или дилера подавшего
                                      заявку;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z126"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6)
                                      установление факта неисполнения участником
                                      биржевой торговли обязательств по
                                      заключенным ранее биржевым сделкам.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z127"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30. В случае
                                      отказа в принятии заявки на продажу
                                      (покупку) биржевого или
                                      нестандартизированного товара, товарная
                                      биржа в течение торгового дня информирует о
                                      причине отказа участника биржевых торгов
                                      посредством электронной торговой
                                      системы.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z128"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 31. Принятые
                                      заявки на продажу (покупку) биржевого или
                                      нестандартизированного товара подлежат
                                      регистрации на товарной бирже и включению в
                                      торговую систему товарной биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z129"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32.
                                      Отказ от сделки, заключенной на биржевых
                                      торгах, допускается только в случаях,
                                      предусмотренных Гражданским кодексом
                                      Республики Казахстан или соглашением
                                      сторон.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z130"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      отказа от биржевой сделки участники биржевой
                                      торговли не требуют от товарной биржи
                                      возврата ранее уплаченного ими биржевого
                                      сбора.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z131"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33. Биржевые
                                      торги проводятся в следующих режимах
                                      торговли:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z132"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) режим
                                      стандартного аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z133"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) режим
                                      двойного встречного аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z134"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 34. Биржевые
                                      торги в режиме стандартного аукциона
                                      проводятся с учетом:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z135"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) раскрытия
                                      информации об участниках биржевой торговли
                                      или ее конфиденциальности, за исключением
                                      информации об инициаторе аукциона, которая
                                      является общедоступной;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z136"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      проведения аукционов на понижение или
                                      повышение цены;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z137"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      проведения аукциона по заказу покупателя или
                                      продавца нестандартизированного
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z138"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) участия в
                                      аукционе не менее трех участников аукциона,
                                      включая брокера, представляющего интересы
                                      инициатора аукциона, или дилера, являющегося
                                      инициатором аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z139"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      формирования цены нестандартизированного
                                      товара, по которой заключается биржевая
                                      сделка, по итогам аукциона и определения ее
                                      как наименьшей цены среди предложенных
                                      участниками аукциона на понижение и
                                      наибольшей цены среди предложенных
                                      участниками аукциона на повышение;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z140"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) внесения
                                      биржевого обеспечения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z141"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35. Товарная
                                      биржа проводит биржевые торги в режиме
                                      стандартного аукциона с соблюдением
                                      следующих последовательных этапов:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z142"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      представление товарной бирже заявки на
                                      продажу (покупку) нестандартизированного
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z143"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      размещение на собственном интернет-ресурсе
                                      объявления о проведении биржевых торгов в
                                      режиме стандартного аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z144"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      регистрация и рассмотрение заявок дилеров
                                      или брокеров потенциальных поставщиков на
                                      соответствие квалификационным
                                      требованиям;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z145"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      публикация на собственном интернет-ресурсе
                                      допущенных к участию в стандартном аукционе
                                      дилеров или брокеров потенциальных
                                      поставщиков;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z146"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) внесения
                                      биржевого обеспечения;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z147"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6)
                                      определение победителя биржевых
                                      торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z148"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7)
                                      заключение договора с победителем на
                                      основании протокола об итогах биржевых
                                      торгов в порядке, установленном настоящими
                                      Типовыми правилами.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z149"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 36. Брокер,
                                      участвующий в стандартном аукционе,
                                      представляет в нем интересы только одного
                                      клиента.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z150"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 37. Торги,
                                      проводимые в режиме стандартного аукциона,
                                      признаются состоявшимися при условии, если
                                      количество участников по каждому аукциону
                                      составило не менее трех участников аукциона,
                                      включая брокера, представляющего интересы
                                      инициатора аукциона или дилера, являющегося
                                      инициатором аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z151"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 38. Биржевая
                                      сделка по итогам проведения стандартного
                                      аукциона заключается между дилером,
                                      являющимся инициатором аукциона или
                                      брокером, представляющим интересы инициатора
                                      аукциона, и победителем аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z152"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 39.
                                      Биржевые торги в режиме двойного встречного
                                      аукциона проводятся с учетом: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z153"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      конфиденциальности информации об участниках
                                      биржевой торговли;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z154"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      запрета на заключение кросс - сделок; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z155"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      формирования цены на биржевой и
                                      нестандартизированный товар, по которой
                                      заключается биржевая сделка, в процессе
                                      конкурирования предложений покупателей,
                                      продавцов и определения ее, как наилучшей
                                      цены для покупателя (минимальная цена от
                                      продавцов) или как наилучшей цены для
                                      продавца (максимальная цена от покупателей); </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z156"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) внесения
                                      биржевого обеспечения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z157"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40.
                                      Биржевые товары указываются в Перечне
                                      биржевых товаров в соответствии с приказом
                                      Министра национальной экономики Республики
                                      Казахстан от 26 февраля 2015 года № 142 "Об
                                      утверждении перечня биржевых товаров"
                                      (зарегистрирован в Реестре государственной
                                      регистрации нормативных правовых актов за №
                                      10587) и торгуются исключительно в режиме
                                      двойного встречного аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z158"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 41.
                                      Брокер, участвующий в биржевых торгах
                                      биржевыми товарами в режиме двойного
                                      встречного аукциона, представляет в нем
                                      интересы одного и более клиентов. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z159"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 42. Брокер,
                                      участвующий в биржевых торгах
                                      нестандартизированными товарами в режиме
                                      двойного встречного аукциона, представляет в
                                      нем интересы только одного клиента.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z160"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 43. По
                                      товарам, торгуемым в режиме двойного
                                      встречного аукциона, товарная биржа
                                      утверждает своими внутренними документами
                                      спецификацию товара, которая
                                      предусматривает:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z161"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      наименование товара, код товара и его
                                      качественные характеристики;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z162"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) условия
                                      поставки и оплаты товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z163"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) размер
                                      лота и минимальной поставочной партии
                                      товара, а также способ упаковки
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z164"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) перечень
                                      документов, подтверждающих поставку
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z165"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      допустимый толеранс при поставке
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z166"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) наличие
                                      стандартной формы договора поставки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z167"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 44. Биржевые
                                      торги в режиме двойного встречного аукциона
                                      проводятся в течение торговой сессии в
                                      порядке непрерывного автоматического
                                      сопоставления торговой системой товарной
                                      биржи заявок на покупку и продажу, по
                                      которому каждая подаваемая заявка
                                      проверяется на совпадение по количеству
                                      товара и цене со встречными заявками,
                                      которые образуют реестр (очередь)
                                      заявок.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z168"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; При
                                      совпадении параметров подаваемой заявки с
                                      параметрами встречных заявок происходит
                                      заключение биржевой сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z169"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45.
                                      Реестр (очередь) заявок формируется торговой
                                      системой товарной биржи в автоматическом
                                      режиме с учетом следующего: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z170"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      независимо от времени подачи, первыми в
                                      очереди располагаются заявки с наилучшими
                                      ценами (с максимальными ценами от покупателя
                                      (по убывающей) – в очереди заявок на покупку
                                      и с минимальными ценами от продавца (по
                                      возрастающей) – в очереди заявок на
                                      продажу); при этом указанное в заявке
                                      количество реализуемого (приобретаемого)
                                      товара (объем заявки) на ее приоритет
                                      (первоочередность) не влияет;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z171"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) встречные
                                      заявки удовлетворяются согласно их месту и
                                      цене в очереди – сначала удовлетворяются
                                      заявки, определенные в очереди
                                      первыми;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z172"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) при
                                      равенстве цен заявок, заявка, поданная
                                      раньше, удовлетворяется в первоочередном
                                      порядке, чем заявка, поданная позже;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z173"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) сделка
                                      заключается всегда по цене заявки,
                                      находящейся в очереди встречных заявок
                                      первой;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z174"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) если
                                      заявка при заключении сделки удовлетворяется
                                      частично, то оставшаяся (неисполненная) ее
                                      часть рассматривается в качестве отдельной
                                      заявки, которая подлежит удовлетворению в
                                      общем порядке, определенном настоящим
                                      пунктом Типовых правил;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z175"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6)
                                      заключение биржевой сделки не требует
                                      дополнительного согласия участников,
                                      подавших удовлетворяемые заявки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z176"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46. В ходе
                                      торговой сессии, проводимой в режиме
                                      двойного встречного аукциона, участники
                                      биржевых торгов подают неограниченное
                                      количество заявок на покупку (продажу)
                                      товара, при достаточном размере биржевого
                                      обеспечения. При этом любую заявку, поданную
                                      участником биржевых торгов, допускается
                                      снять им до момента заключения сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z177"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 47. По
                                      окончании торговой сессии, проводимой в
                                      режиме двойного встречного аукциона, все
                                      неудовлетворенные заявки на покупку
                                      (продажу) товара аннулируются торговой
                                      системой товарной биржи, либо переносятся на
                                      следующий торговый день, если последнее было
                                      предусмотрено заявкой.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z178"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48. При
                                      возникновении конфликта интересов между
                                      заявками на покупку (продажу) биржевого
                                      товара от клиентов брокера, брокер исполняет
                                      заявку клиента, полученную им раньше по
                                      времени, чем другие клиентские заявки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z179"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 4. Порядок осуществления
                                        расчетов по заключенным на биржевых торгах
                                        сделкам с товарами</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z180"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 49. Расчеты
                                      участников биржевой торговли с товарной
                                      биржей производятся в соответствии с
                                      Правилами биржи и договорами на оказание
                                      услуг по организации биржевой
                                      торговли.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z181"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50. Оплата и
                                      поставка по сделкам, заключенным на товарной
                                      бирже, осуществляются следующими
                                      способами:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z182"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) оплата
                                      товара путем открытия счета в расчетной
                                      организации, с которой товарной биржей или
                                      клиринговым центром заключен договор,
                                      предусматривающий участие расчетной
                                      организации в осуществлении расчетов по
                                      сделкам, заключенным на биржевых торгах,
                                      раскрываемого в случае представления
                                      документов, подтверждающих поставку
                                      биржевого товара, предусмотренных Правилами
                                      биржи, на которой заключена соответствующая
                                      сделка;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z183"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) оплата
                                      товара через расчетную организацию без
                                      открытия счета на условиях "поставка против
                                      платежа" при условии депонирования в
                                      специализированной организации, определенной
                                      Правилами биржи, в которой заключена
                                      соответствующая сделка, простого или
                                      двойного складского свидетельства
                                      (складского свидетельства, отделенного от
                                      залогового свидетельства) или иных
                                      документов, определенных Правилами биржи,
                                      подтверждающих факт наличия или отгрузки
                                      биржевого товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z184"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) поставка
                                      товара на условиях предоплаты товара
                                      покупателем;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z185"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) оплата
                                      товара на условиях предпоставки товара
                                      продавцом.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z186"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 51. В
                                      Правилах биржи допускается предусматривать
                                      возможность одного или нескольких способов
                                      расчетов по сделкам, заключенным на биржевых
                                      торгах.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z187"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      если Правилами биржи предусмотрено несколько
                                      способов расчетов по сделкам, заключенным на
                                      биржевых торгах в определенном режиме
                                      торговли, стороны выбирают только один из
                                      этих способов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z188"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 52.
                                      Клиринговое обслуживание биржевых сделок
                                      осуществляется в соответствии с приказом
                                      исполняющего обязанности Министра
                                      национальной экономики Республики Казахстан
                                      от 25 ноября 2015 года № 729 "Об утверждении
                                      Правил осуществления клиринговой
                                      деятельности по биржевым сделкам и
                                      Требований к аппаратно-программному
                                      комплексу клирингового центра товарной
                                      биржи" (зарегистрирован в Реестре
                                      государственной регистрации нормативных
                                      правовых актов за № 12605).</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z189"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53. Валютой
                                      для осуществления расчетов по заключенным на
                                      биржевых торгах сделкам с биржевыми и (или)
                                      нестандартизированными товарами является
                                      валюта Республики Казахстан – тенге по
                                      официальному курсу, установленному
                                      Национальным Банком Республики Казахстан на
                                      дату проведения торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z190"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 5. Порядок взаимодействия с
                                        саморегулируемыми организациями, а также
                                        обеспечение брокерами и дилерами
                                        законности биржевой сделки</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z191"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 54. В целях
                                      организации взаимодействия между товарными
                                      биржами и саморегулируемыми организациями
                                      допускается заключение соглашения или
                                      меморандума.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z192"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55.
                                      Взаимодействие товарных бирж с
                                      саморегулируемыми организациями
                                      осуществляется путем:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z193"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) обмена
                                      информации;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z194"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      взаимопомощи и защиты своих интересов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z195"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      проведения курсов повышения квалификации и
                                      переподготовки брокеров и (или)
                                      дилеров;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z196"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      осуществления консультативной помощи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z197"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) принятия
                                      совместных решений по вопросам, возникающим
                                      при осуществлении своей деятельности.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z198"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56.
                                      Информационное взаимодействие между
                                      товарными биржами и саморегулируемыми
                                      организациями осуществляется в электронном
                                      виде.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z199"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 57. Обмен
                                      документами и (или) сведениями путем
                                      представления (направления) документов и
                                      (или) сведений на бумажном носителе
                                      осуществляется в случае отсутствия
                                      технической возможности обмена документами и
                                      (или) сведениями в электронном виде.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z200"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 6. Условия и порядок
                                        приостановления и возобновления торгов на
                                        товарной бирже</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z201"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58. В
                                      случаях возникновения технических сбоев в
                                      торговой системе товарной биржи, делающих
                                      невозможным продолжение оказания услуг,
                                      связанных с организацией биржевой торговли,
                                      товарная биржа документально фиксирует факт
                                      и время технического сбоя в журнале
                                      технических сбоев, приостанавливает оказание
                                      услуг и незамедлительно принимает меры,
                                      направленные на:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z202"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      обнаружение и устранение причин, повлекших
                                      технический сбой;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z203"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      устранение технических последствий
                                      сбоя;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z204"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      обеспечение полной сохранности информации,
                                      находящейся в торговой системе товарной
                                      биржи, и восстановление информации,
                                      утраченной в результате технического
                                      сбоя.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z205"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 59.
                                      При обнаружении сбоя в торговой системе
                                      товарной биржи товарная биржа принимает
                                      решение о временном приостановлении торгов,
                                      о чем участники биржевых торгов извещаются с
                                      использованием торговой системы товарной
                                      биржи или другим доступным способом. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z206"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; После
                                      восстановления работоспособности торговой
                                      системы товарной биржи торги
                                      возобновляются.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z207"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 60.
                                      Если восстановить работоспособность торговой
                                      системы товарной биржи не представляется
                                      возможным, товарная биржа принимает решение
                                      о досрочном прекращении торгов. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z208"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Решение
                                      доводится до сведения всех участников
                                      биржевых торгов с использованием торговой
                                      системы товарной биржи или другим доступным
                                      способом.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z209"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 7. Порядок формирования и
                                        организации деятельности биржевого
                                        арбитража, а также механизмы разрешения
                                        споров, связанных с заключением биржевых
                                        сделок с биржевыми товарами</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z210"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 61.
                                      Биржевой арбитраж для разрешения споров,
                                      связанных с заключением биржевых сделок,
                                      создается товарной биржей, как постоянно
                                      действующий арбитраж согласно пункту 1
                                      статьи 8 Закона. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z211"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Деятельность биржевого арбитража
                                      регулируется пунктом 2 статьи 4 Закона
                                      Республики Казахстан от 8 апреля 2016 года
                                      "Об арбитраже".</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z212"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 62.
                                      Для образования постоянно действующего
                                      биржевого арбитража товарная биржа
                                      утверждает регламент арбитража, реестр
                                      арбитров, которые будут осуществлять
                                      деятельность в данном арбитраже. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z213"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Регламент
                                      постоянно действующего биржевого арбитража
                                      товарной биржи содержит:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z214"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Общие
                                      положения;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z215"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Организации
                                      арбитражного разбирательства;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z216"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Начало
                                      арбитражного разбирательства;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z217"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Порядок
                                      образования Состава арбитража;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z218"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Порядок
                                      рассмотрения споров;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z219"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Порядок
                                      вынесение арбитражного решения и прекращение
                                      разбирательства;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z220"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Расходы,
                                      связанные с рассмотрением дел в
                                      арбитраже.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z221"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 63. В
                                      случаях, когда спорные отношения прямо не
                                      урегулированы законодательством или
                                      соглашением сторон и отсутствуют применимые
                                      к ним обычаи, к таким отношениям, поскольку
                                      это не противоречит их существу, применяются
                                      нормы права, регулирующие сходные
                                      правоотношения, а при отсутствии таких норм
                                      спор разрешается исходя из общих начал и
                                      смысла гражданского законодательства.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z222"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 64. К
                                      ценовому манипулированию относятся следующие
                                      действия участников биржевых торгов: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z223"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; указание
                                      ложной или недостоверной информации в
                                      выставленных заявках на покупку или продажу
                                      биржевого или нестандартизированного
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z224"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      одновременное выставление заявок на покупку
                                      и продажу биржевых или нестандартизированных
                                      товаров по ценам, имеющим существенное
                                      отклонение от цен по аналогичным
                                      сделкам.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z225"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 65.
                                      Товарная биржа принимает следующие меры для
                                      выявления факта манипулирования ценами: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z226"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      устанавливает границы колебаний цен на
                                      соответствующие биржевые или
                                      нестандартизированные товары; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z227"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      осуществляет контроль за размещаемыми в
                                      электронной торговой системе товарной биржи
                                      заявками на покупку, продажу биржевого или
                                      нестандартизированного товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z228"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      осуществляет мониторинг цен биржевых или
                                      нестандартизированных товаров по заключенным
                                      биржевым сделкам; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z229"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      осуществляет анализ уровней цен на
                                      конкретный биржевой или
                                      нестандартизированный товар в рамках одного
                                      торгового дня, исходя из цен, сложившихся в
                                      результате предыдущих торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z230"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      запрашивает документы и сведения, прямо или
                                      косвенно касающиеся биржевых торгов от
                                      участников биржевых торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z231"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6)
                                      осуществляет мониторинг превышения
                                      минимальных и максимальных пределов уровней
                                      цен на конкретный биржевой или
                                      нестандартизированный товар в рамках одного
                                      торгового дня, исходя из цен, сложившихся в
                                      результате предыдущих торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z232"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 66. При
                                      выявлении факта возможного манипулирования
                                      товарная биржа приостанавливает биржевые
                                      торги, о чем участники биржевой торговли
                                      извещаются с использованием торговой системы
                                      товарной биржи или другим доступным
                                      способом.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z233"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 8. Порядок принятия
                                        (утверждения) документов по биржевой
                                        торговле</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z234"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67. Товарная
                                      биржа разрабатывает и утверждает следующие
                                      внутренние документы:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z235"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) Правила
                                      биржи;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z236"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) форму и
                                      содержание заявки на продажу (покупку)
                                      биржевого и (или) нестандартизированного
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z237"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) регламент
                                      постоянно действующего биржевого арбитража и
                                      реестр арбитров;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z238"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) форму
                                      типового договора об оказании услуг по
                                      организации биржевой торговли;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z239"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) тарифы за
                                      оказываемые товарной биржей услуги;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z240"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) правила
                                      аккредитации брокеров и (или) дилеров в
                                      товарной бирже;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z241"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7)
                                      спецификацию товара, допущенного к биржевым
                                      торгам в режиме двойного встречного аукциона
                                      и стандартную форму договора поставки;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z242"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8) порядок
                                      присвоения кодов торгового инструмента
                                      биржевых и нестандартизированных товаров,
                                      допущенных к биржевым торгам в режиме
                                      двойного встречного аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z243"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9) правила
                                      внутреннего контроля и программы его
                                      осуществления в целях противодействия
                                      легализации (отмыванию) доходов, полученных
                                      преступным путем, и финансированию
                                      терроризма;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z244"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10) кодекс
                                      брокерской (дилерской) этики;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z245"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11)
                                      документы, необходимые товарной бирже для
                                      осуществления ее деятельности;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z246"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12)
                                      требования к аппаратно–программному
                                      комплексу клирингового центра товарной
                                      биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z247"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 68. Товарная
                                      биржа осуществляет:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z248"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      организацию экспертизы качества биржевого
                                      товара, реализуемого через биржевые торги,
                                      по требованию участника биржевых
                                      торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z249"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) оказание
                                      организационных, консультационных,
                                      информационных, методических услуг,
                                      связанных с биржевой торговлей;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z250"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) развитие
                                      международных биржевых торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z251"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 9. Порядок учета и
                                        регистрации сделок на товарной бирже</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z252"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 69. По
                                      сделке, заключенной в ходе биржевых торгов,
                                      торговой системой товарной биржи
                                      автоматически генерируется отчет по биржевой
                                      сделке (далее – отчет по биржевой сделке), с
                                      присвоением уникального номера и содержит
                                      следующие сведения:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z253"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      наименование участника биржевых торгов и его
                                      уникальный биржевой идентификатор
                                      (индивидуальный код, присвоенный участнику
                                      биржевых торгов);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z254"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) дату и
                                      время заключения сделки в формате – год,
                                      месяц, день, час, минута, секунда (с
                                      точностью минимум до 0,1 секунды);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z255"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      наименование и (или) код биржевого или
                                      нестандартизированного товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z256"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) цену за
                                      единицу товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z257"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      количество товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z258"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) общую
                                      сумму сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z259"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70. Отчет по
                                      биржевой сделке представляется брокеру или
                                      дилеру, заключившему сделку, в системе
                                      электронного документооборота товарной биржи
                                      с обязательным подписанием электронной
                                      цифровой подписью уполномоченного работника
                                      товарной биржи сразу после окончания
                                      торговой сессии и клиринга.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z260"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Брокер после
                                      получения отчета по биржевой сделке
                                      представляет его своему клиенту.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z261"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 71. По
                                      требованию участника торгов товарная биржа
                                      дополнительно к электронному отчету по
                                      биржевой сделке представляет участнику
                                      торгов бумажный отчет по биржевой сделке,
                                      подписанный уполномоченным работником
                                      биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z262"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 72. По
                                      итогам торгового дня участнику биржевых
                                      торгов допускается представление сводного
                                      отчета по всем заключенным им в течение
                                      торговой сессии биржевым сделкам без
                                      представления отдельных отчетов по каждой
                                      биржевой сделке.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z263"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 73. По
                                      итогам биржевых торгов в торговой системе
                                      товарной биржей формируется сводный реестр
                                      биржевых сделок участников биржевых торгов,
                                      совершенных в торговый день.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z264"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 74. Брокеры
                                      обязаны вести учет совершаемых биржевых
                                      сделок отдельно по каждому клиенту и хранить
                                      сведения об этих сделках в течение пяти лет
                                      со дня совершения сделки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z265"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 75.
                                      Товарная биржа обеспечивает сохранность
                                      сведений по всем заключенным биржевым
                                      сделкам до момента прекращения занятия
                                      деятельностью в сфере биржевой торговли. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z266"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 10. Порядок представления
                                        товарной биржей отчетов уполномоченному
                                        органу, а также размещения информации о
                                        проводимых торгах на собственном
                                        интернет-ресурсе товарной биржи</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z267"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 76. Товарная
                                      биржа размещает документы, изменения и
                                      дополнения к ним, указанные в пункте 67
                                      настоящих Типовых правил, а также иную
                                      информацию о своей деятельности, в том числе
                                      о принимаемых решениях в отношении
                                      участников биржевой торговли, на собственном
                                      интернет-ресурсе в течение одного рабочего
                                      дня со дня их утверждения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z268"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 77. Товарная
                                      биржа посредством электронных каналов связи
                                      представляет в уполномоченный орган
                                      электронный отчет по проведенным биржевым
                                      торгам согласно форме отчетности,
                                      установленной приложением к настоящим
                                      Типовым правилам, что является официальным
                                      извещением уполномоченного органа.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z269"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Отчет
                                      представляется товарной биржей
                                      уполномоченному органу ежемесячно не позднее
                                      седьмого числа месяца, следующего за
                                      отчетным периодом.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z270"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 78. По
                                      итогам каждого торгового дня товарная биржа
                                      не позднее следующего рабочего дня размещает
                                      в специальном разделе собственного
                                      интернет-ресурса информацию о результатах
                                      биржевых торгов, включающих в себя следующие
                                      сведения:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z271"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) режим
                                      биржевой торговли, в котором заключена
                                      сделка;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z272"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; по
                                      биржевым товарам: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z273"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; дату
                                      проведения торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z274"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; наименование
                                      или код товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z275"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; количество
                                      заключенных сделок;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z276"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; цена
                                      открытия и закрытия торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z277"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; максимальную
                                      и минимальную и средневзвешенную цену
                                      сделок;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z278"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      условия поставки; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z279"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; общий оборот
                                      по всем сделкам за торговую сессию.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z280"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) по
                                      нестандартизированным товарам: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z281"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; дату
                                      проведения торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z282"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; время
                                      заключения сделки и ее номер;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z283"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; биржевой
                                      идентификатор (индивидуальный код,
                                      присвоенный участнику биржевых торгов)
                                      заключивших сделку;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z284"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; наименование
                                      товара:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z285"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; количество
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z286"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; цену
                                      товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z287"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; общую
                                      стоимость сделки;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z288"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; условия и
                                      место поставки.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z289"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 79. Товарная
                                      биржа размещает актуальный перечень
                                      аккредитованных членов товарной биржи
                                      согласно форме отчетности, установленной
                                      приложением к настоящим Типовым правилам в
                                      специальном разделе собственного
                                      интернет-ресурса, что является официальным
                                      извещением уполномоченного органа.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z290"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; При
                                      изменении наименования, места нахождения, а
                                      также смене руководителя и (или) изменении
                                      состава сотрудников членов товарной биржи
                                      товарная биржа обновляет перечень в течение
                                      трех рабочих дней с момента поступления в
                                      товарную биржу информации от членов товарной
                                      биржи.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z291"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80. Товарная
                                      биржа ежемесячно не позднее 5 числа месяца,
                                      следующего за отчетным периодом, размещает в
                                      специальном разделе собственного
                                      интернет-ресурса котировки на биржевые
                                      товары.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z292"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Глава 11. Порядок проведения
                                        государственных и иных закупок через
                                        товарную биржу</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z293"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 81.
                                      Государственные закупки, закупки субъектов
                                      естественных монополий,
                                      социально-предпринимательских корпораций, а
                                      также закупки недропользователей и
                                      национальных компаний биржевых товаров через
                                      товарные биржи осуществляются в режиме
                                      двойного встречного аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z294"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 82. Закупки
                                      недропользователей и национальных компаний,
                                      субъектов естественных монополий
                                      нестандартизированных товаров через товарные
                                      биржи осуществляются в режиме стандартного
                                      или двойного встречного аукциона в порядке,
                                      установленном настоящей главой Типовых
                                      правил.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z295"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 83.
                                      Объявление в виде расписания торгов при
                                      проведении государственных закупок товарная
                                      биржа размещает на собственном
                                      интернет–ресурсе не позднее, чем за десять
                                      рабочих дней до даты проведения биржевых
                                      торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z296"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 84. Услуги
                                      по осуществлению государственных закупок
                                      через товарные биржи оказываются на
                                      возмездной основе в рамках средств,
                                      предусмотренных в бюджете инициатора на
                                      соответствующий год.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z297"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85. Закупки
                                      недропользователей и национальных компаний,
                                      субъектов естественных монополий в режиме
                                      стандартного аукциона, в случае выступления
                                      их в качестве инициаторов аукциона
                                      проводятся в виде аукциона на
                                      понижение.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z298"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 86. Для
                                      проведения аукциона на понижение инициатор
                                      аукциона самостоятельно в качестве дилера
                                      или через своего брокера подает товарной
                                      бирже заявку, в которой указываются
                                      следующие сведения и условия:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z299"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      наименование инициатора аукциона (для
                                      юридического лица), фамилия, имя, отчество
                                      (при наличии) (для физического лица),
                                      фактический адрес заказчика полное
                                      наименование, банковские реквизиты; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z300"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) лот
                                      аукциона: техническая спецификация на
                                      закупаемый товар, с описанием
                                      функциональных, технических, качественных и
                                      эксплуатационных характеристик, а также
                                      перечень документов, подтверждающих
                                      соответствие товаров этим требованиям;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z301"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) стартовая
                                      цена лота в тенге, включая расходы на
                                      транспортировку товара, страхование, оплату
                                      таможенных пошлин, налогов (в случае если
                                      оборот по реализации товара облагается
                                      налогом на добавленную стоимость), сборов, а
                                      также иных расходов, предусмотренных
                                      условиями поставки товаров;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z302"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      количество приобретаемого товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z303"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) единица
                                      измерения;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z304"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) условия
                                      платежа;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z305"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7) условие и
                                      место поставки товара;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z306"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8) срок
                                      поставки товара, исчисляемый с даты
                                      заключения договора поставки;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z307"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9) проект
                                      договора поставки с указанием его
                                      существенных условий;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z308"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10)
                                      установление требований по местному
                                      содержанию в закупаемом товаре, выраженных в
                                      процентах (от 0 до 100);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z309"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11) способы,
                                      с помощью которых потенциальными
                                      поставщиками допускается запрашивать
                                      разъяснения по лоту у инициатора аукциона;
                                      адрес электронной почты и номера телефонов
                                      уполномоченных лиц инициатора аукциона для
                                      обращения к ним с вопросами;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z310"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12) номер
                                      лицензии (контракта) на недропользование, в
                                      рамках которого осуществляется закуп (при
                                      наличии);</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z311"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13)
                                      квалификационные требования, установленные
                                      инициатором аукциона, которым должен
                                      соответствовать потенциальный
                                      поставщик.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z312"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 87. В заявке
                                      не допускается установление требования о
                                      наличии опыта работы работников
                                      потенциального поставщика.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z313"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 88. В
                                      случае проведения закупок
                                      нестандартизированных товаров в режиме
                                      двойного встречного аукциона в заявке не
                                      допускаются указания на товарные знаки,
                                      знаки обслуживания, фирменные наименования,
                                      патенты, полезные модели, промышленные
                                      образцы, наименование места происхождения
                                      товара и наименование производителя, а также
                                      иные характеристики, определяющие
                                      принадлежность приобретаемого товара. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z314"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89.
                                      Инициатору аукциона допускается установление
                                      к потенциальным поставщикам требований о
                                      наличии опыта работы на рынке закупаемых
                                      товаров.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z315"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 90.
                                      Требования к опыту работы на рынке
                                      закупаемых товаров потенциального поставщика
                                      устанавливаются в заявке согласно следующим
                                      критериям:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z316"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) до двух
                                      лет, если выделенная сумма на осуществление
                                      стандартного аукциона превышает
                                      пятидесятитысячекратный размер месячного
                                      расчетного показателя, установленного на
                                      соответствующий финансовый год;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z317"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) до пяти
                                      лет, если выделенная сумма на осуществление
                                      стандартного аукциона превышает
                                      двухсоттысячекратный размер месячного
                                      расчетного показателя, установленного на
                                      соответствующий финансовый год.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z318"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 91. Не
                                      допускается внесение инициатором аукциона
                                      изменений и (или) дополнений в заявку на
                                      проведение аукциона на понижение.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z319"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 92. Товарная
                                      биржа в течение двух рабочих дней со дня
                                      получения заявки на проведение аукциона на
                                      понижение принимает решение о проведении
                                      аукциона либо об отказе в проведении
                                      аукциона и уведомляет о принятом решении
                                      брокера или дилера, от которого поступила
                                      заявка.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z320"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 93.
                                      Объявление о проведении закупок
                                      нестандартизированных товаров размещается
                                      товарной биржей на собственном
                                      интернет–ресурсе не менее чем за восемь
                                      рабочих дней до даты проведения биржевых
                                      торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z321"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Допускается
                                      продление сроков проведения аукциона на
                                      понижение. Новая дата проведения аукциона
                                      подлежит опубликованию товарной биржей на
                                      своем интернет–ресурсе.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z322"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 94.
                                      Объявление содержит: </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z323"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      наименование лота аукциона;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z324"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      полное содержание заявки на проведение
                                      аукциона; </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z325"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) срок
                                      подачи заявки на участие в аукционе.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z326"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95. Срок
                                      подачи заявок на участие в аукционе на
                                      понижение составляет не менее шести рабочих
                                      дней и завершается не позднее чем за два
                                      рабочих дня до даты проведения биржевых
                                      торгов.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z327"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 96. Не
                                      допускается представление заявок до
                                      опубликования объявления о проведение
                                      аукциона на понижения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z328"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 97. Брокер,
                                      представляющий интересы инициатора аукциона,
                                      не представляет интересы потенциальных
                                      поставщиков.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z329"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 98.
                                      Потенциальные поставщики представляют свои
                                      заявки на участие в аукционе на понижение
                                      инициатору аукциона в сроки и порядке,
                                      установленными настоящей главой Типовых
                                      правил.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z330"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99.
                                      Потенциальный поставщик не допускается к
                                      участию в аукционе на понижение по одному из
                                      следующих оснований:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z331"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      непредставление документа (документов) для
                                      подтверждения соответствия квалификационным
                                      требованиям потенциального поставщика, а
                                      также требованиям технической
                                      спецификации;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z332"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      установления факта несоответствия
                                      квалификационным требованиям на основании
                                      информации, содержащейся в документах,
                                      представленных потенциальным поставщиком для
                                      подтверждения его соответствия;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z333"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      установления факта предоставления
                                      недостоверной информации по квалификационным
                                      требованиям.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z334"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100.
                                      За два рабочих дня до даты проведения
                                      аукциона на понижение инициатор аукциона
                                      самостоятельно в качестве дилера или через
                                      своего брокера представляет товарной бирже
                                      списки потенциальных поставщиков товаров,
                                      допущенных к участию в аукционе на понижение
                                      и не допущенных к участию в аукционе на
                                      понижение потенциальных поставщиков. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z335"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае
                                      если к аукциону на понижение не допущен
                                      потенциальный поставщик, инициатор аукциона
                                      самостоятельно в качестве дилера или через
                                      своего брокера представляет товарной бирже
                                      подтверждающие документы и сведения.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z336"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 101. Если к
                                      аукциону на понижение был допущен только
                                      один потенциальный поставщик, то аукцион на
                                      понижение не проводится.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z337"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 102.
                                      Товарная биржа публикует списки допущенных и
                                      не допущенных к участию в аукционе на
                                      понижение потенциальных поставщиков на своем
                                      интернет–ресурсе не позднее рабочего дня,
                                      следующего за днем получения данного
                                      списка.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z338"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 103.
                                      Участники биржевых торгов от каждого
                                      потенциального поставщика, допущенные на
                                      участие в аукционе на понижение, не позднее
                                      чем за один рабочий день до даты проведения
                                      аукциона вносят биржевое обеспечение
                                      клиринговому центру товарной биржи. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z339"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Участники
                                      биржевых торгов от каждого потенциального
                                      поставщика, не внесший биржевое обеспечение,
                                      к аукциону на понижение не
                                      допускается.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z340"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Параграф 1. Проведение аукциона на
                                        понижение</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z341"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 104.
                                      Участники аукциона делают оферты на
                                      заключение сделки на условиях, указанных в
                                      заявке инициатора аукциона на проведение
                                      аукциона, путем выставления заявок с
                                      указанием своих условий по цене лота.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z342"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Участниками аукциона допускается выставлять
                                      неограниченное число заявок с ценой ниже
                                      стартовой цены лота. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z343"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Заявки
                                      являются безотзывными. Цены в заявке
                                      указываются с точностью до двух знаков после
                                      запятой. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z344"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      Заявки, выставленные с нарушением данного
                                      требования, подлежат удалению товарной
                                      биржей из торговой системы. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z345"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 105. В
                                      случае если заявки поданы менее чем от двух
                                      потенциальных поставщиков, аукцион
                                      признается несостоявшимся.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z346"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 106.
                                      По истечении периода времени, отведенного
                                      товарной биржей для выставления заявок,
                                      товарная биржа формирует в торговой системе
                                      отчет о заявках, который содержит информацию
                                      обо всех лучших на момент прекращения приема
                                      заявках, выставленных участниками биржевых
                                      торгов от каждого потенциального поставщика. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z347"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Если в
                                      течение трех минут до закрытия аукциона на
                                      понижение один их участников биржевых торгов
                                      потенциального поставщика вводит новую
                                      наименьшую цену, время закрытия аукциона на
                                      понижение автоматически продлевается на пять
                                      минут, но не более трех раз.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z348"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 107.
                                      По истечении периода времени, отведенного
                                      товарной биржей на рассмотрение отчета о
                                      заявках, инициатора аукциона акцептует
                                      оферту победителя аукциона путем выставления
                                      встречной заявки. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z349"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 108.
                                      Победителем аукциона признается
                                      потенциальный поставщик, выставивший заявку
                                      с наименьшей ценой лота согласно отчету о
                                      заявках. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z350"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В
                                      случае если в отчете о заявках содержатся
                                      заявки с одинаковыми наименьшими ценами, то
                                      победителем аукциона признается тот
                                      потенциальный поставщик, который выставил
                                      заявку с наименьшей ценой раньше по времени. </span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z351"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 109. После
                                      заключения биржевой сделки товарная биржа
                                      формирует в торговой системе и отправляет
                                      инициатору аукциона и победителю аукциона на
                                      понижение протокол об итогах, который
                                      содержит информацию о заключенной биржевой
                                      сделке.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z352"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 110. В
                                      случае признания аукциона на понижение
                                      несостоявшимся, инициатор аукциона повторно
                                      подает товарной бирже заявку на проведение
                                      аукциона в общеустановленном порядке.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z353"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 111. Аукцион
                                      на понижение подлежит отмене товарной биржей
                                      в следующих случаях:</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z354"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) по
                                      решению суда, вступившему в законную
                                      силу;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z355"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) в случае
                                      подачи менее двух заявок на участие в
                                      аукционе участниками торгов;</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z356"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) в случае
                                      сокращения расходов на приобретение
                                      нестандартизированных товаров,
                                      предусмотренных утвержденными годовой и
                                      (или) среднесрочной программами закупа
                                      товаров инициатора аукциона.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                    text-align: justify;
                                  "
                                >
                                  <a name="z357"
                                    ><span
                                      lang="EN-US"
                                      style="font-size: 14pt; line-height: 115%"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 112.
                                      Информация об отмене проведения аукциона на
                                      понижение подлежит опубликованию товарной
                                      биржей на собственном интернет-ресурсе в
                                      течение торгового дня.</span
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        mso-yfti-lastrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="519"
                                        style="
                                          width: 389pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
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
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >&nbsp;</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="307"
                                        style="
                                          width: 230pt;
                                          padding: 0.75pt 0.75pt 0.75pt 0.75pt;
                                          height: 1.5pt;
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
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Приложение</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >к Типовым правилам</span
                                          ><span lang="EN-US"><br /> </span
                                          ><span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >биржевой торговли</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z359"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Форма отчета по проведенным
                                        биржевым торгам</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                  style="margin-left: 5.75pt; border: none"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="66"
                                        rowspan="3"
                                        style="
                                          width: 49.8pt;
                                          border-width: 1pt;
                                          border-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <a name="z360"
                                            ><span
                                              lang="EN-US"
                                              style="
                                                font-size: 10pt;
                                                line-height: 115%;
                                              "
                                              >№ п/п</span
                                            ><span lang="EN-US"><o:p></o:p></span
                                          ></a>
                                        </p>
                                      </td>
  
                                      <td
                                        width="65"
                                        rowspan="3"
                                        style="
                                          width: 48.45pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >По видам товаров</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        colspan="2"
                                        rowspan="2"
                                        style="
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Биржевая сделка</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        colspan="3"
                                        rowspan="2"
                                        style="
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Товар</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        colspan="4"
                                        style="
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Участник биржевых торгов</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        rowspan="2"
                                        style="
                                          width: 33.65pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Режим торгов</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 1; height: 1.5pt">
                                      <td
                                        colspan="2"
                                        style="
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Покупатель</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        colspan="2"
                                        style="
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Продавец</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 2; height: 1.5pt">
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Время проведения</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Номер сделки</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="28"
                                        style="
                                          width: 20.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Количество товара</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="108"
                                        style="
                                          width: 80.9pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Сумма лота (тенге)</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.75pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование покупателя и (или)
                                            дилера</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование брокера</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.8pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование продавца и (или)
                                            дилера</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование брокера</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 3; height: 1.5pt">
                                      <td
                                        width="66"
                                        rowspan="2"
                                        style="
                                          width: 49.8pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-left-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left-color: rgb(207, 207, 207);
                                          border-top: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="65"
                                        rowspan="2"
                                        style="
                                          width: 48.45pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="28"
                                        style="
                                          width: 20.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="108"
                                        style="
                                          width: 80.9pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.75pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.8pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr style="mso-yfti-irow: 4; height: 1.5pt">
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="28"
                                        style="
                                          width: 20.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="108"
                                        style="
                                          width: 80.9pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.75pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="142"
                                        style="
                                          width: 106.8pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="45"
                                        style="
                                          width: 33.65pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr
                                      style="
                                        mso-yfti-irow: 5;
                                        mso-yfti-lastrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        colspan="2"
                                        style="
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-left-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left-color: rgb(207, 207, 207);
                                          border-top: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <a name="z414"
                                            ><span
                                              lang="EN-US"
                                              style="
                                                font-size: 10pt;
                                                line-height: 115%;
                                              "
                                              >Общий объем совершенных сделок,
                                              тысяч тенге</span
                                            ><span lang="EN-US"><o:p></o:p></span
                                          ></a>
                                        </p>
                                      </td>
  
                                      <td
                                        colspan="10"
                                        style="
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <a name="z417"
                                    ><b
                                      ><span lang="EN-US"
                                        >&nbsp;Форма отчета по актуальному перечню
                                        аккредитованных членов товарной
                                        биржи</span
                                      ></b
                                    ><span lang="EN-US"><o:p></o:p></span
                                  ></a>
                                </p>
  
                                <table
                                  class="MsoNormalTable"
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                  style="margin-left: 5.75pt; border: none"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        mso-yfti-irow: 0;
                                        mso-yfti-firstrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="83"
                                        style="
                                          width: 62pt;
                                          border-width: 1pt;
                                          border-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <a name="z418"
                                            ><span
                                              lang="EN-US"
                                              style="
                                                font-size: 10pt;
                                                line-height: 115%;
                                              "
                                              >№ п/ п</span
                                            ><span lang="EN-US"><o:p></o:p></span
                                          ></a>
                                        </p>
                                      </td>
  
                                      <td
                                        width="98"
                                        style="
                                          width: 73.6pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Наименование аккредитованных членов
                                            товарной биржи</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="408"
                                        style="
                                          width: 305.85pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Фамилия, имя и отчество (если оно
                                            указано в документе, удостоверяющем
                                            личность) руководителя и сотрудников
                                            аккредитованных членов товарной
                                            биржи</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="116"
                                        style="
                                          width: 86.75pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Контактная информация аккредитованных
                                            членов товарной биржи</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                      <td
                                        width="116"
                                        style="
                                          width: 86.8pt;
                                          border-top-width: 1pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-top-color: rgb(207, 207, 207);
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-top: 0cm;
                                            margin-right: 0cm;
                                            margin-bottom: 1pt;
                                            margin-left: 1pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span
                                            lang="EN-US"
                                            style="
                                              font-size: 10pt;
                                              line-height: 115%;
                                            "
                                            >Стаж работы в сфере товарных
                                            бирж</span
                                          ><span lang="EN-US"><o:p></o:p></span>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr
                                      style="
                                        mso-yfti-irow: 1;
                                        mso-yfti-lastrow: yes;
                                        height: 1.5pt;
                                      "
                                    >
                                      <td
                                        width="83"
                                        style="
                                          width: 62pt;
                                          border-right-width: 1pt;
                                          border-bottom-width: 1pt;
                                          border-left-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-left-color: rgb(207, 207, 207);
                                          border-top: none;
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="98"
                                        style="
                                          width: 73.6pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="408"
                                        style="
                                          width: 305.85pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="116"
                                        style="
                                          width: 86.75pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                      <td
                                        width="116"
                                        style="
                                          width: 86.8pt;
                                          border-top: none;
                                          border-left: none;
                                          border-bottom-width: 1pt;
                                          border-bottom-color: rgb(207, 207, 207);
                                          border-right-width: 1pt;
                                          border-right-color: rgb(207, 207, 207);
                                          padding: 0.75pt;
                                          height: 1.5pt;
                                        "
                                      >
                                        <p
                                          class="MsoNormal"
                                          style="
                                            margin-bottom: 0cm;
                                            margin-bottom: 0.0001pt;
                                            text-align: justify;
                                          "
                                        >
                                          <span lang="EN-US"
                                            ><br />
                                            <!--[if !supportLineBreakNewLine]--><br />
                                            <!--[endif]--><o:p
                                            ></o:p
                                          ></span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <span lang="EN-US"
                                    ><br />
                                    <br />
                                    <!--[if !supportLineBreakNewLine]--><br />
                                    <!--[endif]--><o:p
                                    ></o:p
                                  ></span>
                                </p>
  
                                <p
                                  class="MsoNormal"
                                  style="
                                    margin-bottom: 0cm;
                                    margin-bottom: 0.0001pt;
                                  "
                                >
                                  <span lang="EN-US"
                                    ><br />
                                    <br />
                                    <!--[if !supportLineBreakNewLine]--><br />
                                    <!--[endif]--><o:p
                                    ></o:p
                                  ></span>
                                </p>
  
                                <p class="disclaimer">
                                  <span lang="EN-US"
                                    >© 2012. РГП на ПХВ «Институт законодательства
                                    и правовой информации Республики Казахстан»
                                    Министерства юстиции Республики
                                    Казахстан</span
                                  ><span lang="EN-US"><o:p></o:p></span>
                                </p>
  
                                <p
                                  style="
                                    font-size: 12.8106px;
                                    color: rgb(5, 38, 53);
                                    font-family: Arial, Verdana, Helvetica,
                                      sans-serif;
                                  "
                                ></p>
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
            <h4 class="widget-title">Типовые Правила биржевой торговли</h4>
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
                <li>
                  <a data-link href="/post/perechen"
                    >Перечень биржевых товаров</a
                  >
                </li>
                <li>
                  <a data-link href="/post/zakon"
                    >Закон «О товарных биржах»</a
                  >
                </li>
                <li class="current-menu-item">
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


