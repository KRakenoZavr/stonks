import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.setTitle("Правила биржевой торговли");
    this.data = data;
  }

  async getHtml() {
    return `
    <div class="page-header">
      <div class="container">
        <div class="breadc-box no-line">
          <div class="row">
            <div class="col-md-6">
              <h1 class="page-title">Правила биржевой торговли</h1>
            </div>
            <div class="col-md-6 mobile-left text-right">
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li><a href="/" data-link>Главная</a></li>
                <li class="active">Правила биржевой торговли</li>
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
                              <h2>Правила биржевой торговли</h2>
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
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span style="font-size: 14pt"
                                        ><o:p>&nbsp;</o:p></span
                                      ></b
                                    ><br />
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span style="font-size: 14pt"
                                        >ПРАВИЛА</span
                                      ></b
                                    ><b
                                      ><span
                                        lang="EN-US"
                                        style="
                                          font-size: 14pt;
                                          mso-ansi-language: EN-US;
                                        "
                                        ><o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span style="font-size: 14pt"
                                        >Осуществления &nbsp;биржевой торговли<o:p
                                        ></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span style="font-size: 14pt"
                                        >Акционерного общества<o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span style="font-size: 14pt"
                                        >&nbsp;«Универсальная товарная биржа
                                        «Астана»<o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="
                                      margin-top: 18pt;
                                      margin-right: 0cm;
                                      margin-bottom: 0cm;
                                      margin-left: 36pt;
                                      margin-bottom: 0.0001pt;
                                      text-align: center;
                                      text-indent: -18pt;
                                      mso-list: l1 level1 lfo1;
                                    "
                                  >
                                    <!--[if !supportLists]--><span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >1.<span
                                            style="
                                              font-variant-numeric: normal;
                                              font-variant-east-asian: normal;
                                              font-stretch: normal;
                                              font-size: 7pt;
                                              line-height: normal;
                                              font-family: 'Times New Roman';
                                            "
                                            >&nbsp;&nbsp;&nbsp;&nbsp;
                                          </span></span
                                        ></b
                                      ></span
                                    ><!--[endif]--><span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >Общие положения<o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Pa4"
                                    style="text-align: justify; text-indent: 26pt"
                                  >
                                    <span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >Настоящие&nbsp; &nbsp;Правила
                                        &nbsp;биржевой торговли АО «Универсальная
                                        товарная биржа «Астана» (далее – Правила)
                                        разработаны в соответствии с Законами
                                        &nbsp;Республики Казахстан «О товарных
                                        биржах», «О государственных закупках», «Об
                                        акционерных обществах», «О
                                        лицензировании»,</span
                                      ></span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                    >
                                      Законом Республики Казахстан «О
                                      государственном имуществе», Гражданским
                                      кодексом Республики Казахстан,
                                      <span class="apple-style-span"
                                        >«Правилами продажи объектов приватизации»,
                                        утвержденных </span
                                      ><span class="A6">&nbsp;</span
                                      ><span class="apple-style-span"
                                        >Постановлением Правительства Республики
                                        Казахстан,</span
                                      >
                                      «Правилами по организации и проведению
                                      государственных закупок, товаров, работ и
                                      услуг», утверждёнными Постановлением
                                      Правительства&nbsp; Республики Казахстан,
                                      «Типовыми правилами биржевой торговли»
                                      <span class="A0">и </span
                                      ><span class="apple-style-span">&nbsp;</span
                                      ><span class="A6"
                                        >являются основным документом,
                                        &nbsp;устанавливающим&nbsp; &nbsp;</span
                                      >порядок организации и проведения
                                      <span class="A6"
                                        >биржевых торгов АО «Универсальная товарная
                                        биржа «Астана».<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Pa4"
                                    align="center"
                                    style="
                                      margin-left: 26pt;
                                      text-align: center;
                                      text-indent: -18pt;
                                      mso-list: l0 level1 lfo2;
                                    "
                                  >
                                    <!--[if !supportLists]--><b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >1.<span
                                          style="
                                            font-variant-numeric: normal;
                                            font-variant-east-asian: normal;
                                            font-stretch: normal;
                                            font-size: 7pt;
                                            line-height: normal;
                                            font-family: 'Times New Roman';
                                          "
                                          >&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span
                                      ></b
                                    ><!--[endif]--><b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >Понятия и термины использующиеся<o:p
                                        ></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Pa4"
                                    align="center"
                                    style="margin-left: 26pt; text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >в настоящих &nbsp;Правилах<span class="A6"
                                          >:<o:p></o:p></span></span
                                    ></b>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: 26pt"
                                  >
                                    1) цена открытия – цена, с которой начинаются
                                    биржевые торги, либо цена первой совершенной
                                    биржевой сделки по конкретному биржевому товару
                                    (группе товаров) на конкретном биржевом торге;
                                    <span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z89"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      потенциальный поставщик – дилер, физическое
                                      или юридическое лицо, пользующееся услугами
                                      брокера, претендующие на заключение биржевой
                                      сделки по закупкам недропользователей,
                                      национальных управляющих холдингов,
                                      национальных холдингов, национальных
                                      управляющих компаний, национальных компаний и
                                      аффилированных с ними юридических лиц (далее –
                                      закупки недропользователей и национальных
                                      компаний);</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z90"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      биржевой сбор – комиссия, взимаемая товарной
                                      биржей с участников торгов за регистрацию
                                      биржевой сделки; </a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z91"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      биржевой брокер (далее – брокер) – юридическое
                                      лицо, осуществляющее свою деятельность на
                                      товарной бирже и совершающее сделки с биржевым
                                      товаром по поручению, за счет и в интересах
                                      клиента; </a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z92"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                      биржевой дилер (далее – дилер) – юридическое
                                      лицо, осуществляющее свою деятельность на
                                      товарной бирже и совершающее сделки с биржевым
                                      товаром в своих интересах и за свой счет; </a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z93"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) биржевое
                                      обеспечение – денежное обеспечение, вносимое
                                      на возвратной основе участниками биржевой
                                      торговли клиринговому центру товарной биржи
                                      для участия в биржевых торгах в качестве
                                      обеспечения исполнения своих обязательств по
                                      заключаемым биржевым сделкам;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z94"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7) биржевые
                                      торги – процесс, проводимый в рамках правил
                                      биржевой торговли, направленный на совершение
                                      сделок по биржевым товарам и
                                      нестандартизированным товарам на основе
                                      электронных заявок, поданных в электронную
                                      торговую систему товарной биржи,
                                      обеспечивающую автоматизацию процесса
                                      заключения биржевых сделок;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z95"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8) участники
                                      биржевой торговли – клиенты, брокеры и дилеры,
                                      взаимодействующие на товарной бирже по
                                      установленным правилам биржевой торговли;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z96"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9) участники
                                      биржевых торгов – брокеры и (или) дилеры,
                                      прошедшие процедуру аккредитации в товарной
                                      бирже и имеющие право на осуществление
                                      биржевых сделок на товарной бирже;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z97"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10) биржевой
                                      товар – стандартизированный однородный товар,
                                      включенный в Единую товарную номенклатуру
                                      внешнеэкономической деятельности Евразийского
                                      экономического союза, единицы которого
                                      идентичны во всех отношениях, имеют сходные
                                      характеристики и состоят из схожих
                                      компонентов, что позволяет им выполнять те же
                                      функции, обладающие свойством полной
                                      взаимозаменяемостью партий от различных
                                      производителей, а также срочный контракт;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z98"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11) заявка на
                                      продажу (покупку) биржевого товара,
                                      нестандартизированного товара – предложение
                                      (оферта) участника биржевых торгов о продаже
                                      (покупке) биржевого товара,
                                      нестандартизированного товара или уведомление
                                      (акцепт) участника биржевых торгов о принятии
                                      предложения о покупке (продаже) биржевого
                                      товара, нестандартизированного товара
                                      содержащее все условия, необходимые для
                                      заключения биржевой сделки в соответствии с
                                      Типовыми правилами;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z99"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12) расчетная
                                      организация – банк второго уровня или
                                      организация, осуществляющие отдельные виды
                                      банковских операций, с которой клиринговый
                                      центр товарной биржи заключил договор о
                                      порядке взаимодействия при проведении биржевых
                                      торгов и (или) осуществлении расчетов по
                                      сделкам, заключенным на биржевых торгах;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z100"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13) клиент –
                                      физическое или юридическое лицо, пользующееся
                                      услугами брокера для совершения сделок с
                                      биржевым товаром;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z101"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14)
                                      кросс-сделка – биржевая сделка, при которой
                                      брокер, действуя по поручению двух разных
                                      клиентов, выступает как со стороны продавца,
                                      так и со стороны покупателя;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z102"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15) режим
                                      двойного встречного аукциона – режим торговли,
                                      при котором биржевые сделки заключаются
                                      анонимно в результате конкуренции продавцов и
                                      покупателей, а цена на биржевой или
                                      нестандартизированный товар устанавливается на
                                      уровне равновесия спроса и предложения;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z103"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16) торговый
                                      день – день работы товарной биржи, в течение
                                      которого ею проводятся биржевые торги;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z104"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17)
                                      уполномоченный орган в области регулирования
                                      торговой деятельности (далее – уполномоченный
                                      орган) – центральный исполнительный орган,
                                      осуществляющий государственное регулирование и
                                      координацию в сфере торговой деятельности;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z105"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18) торговый
                                      лот – минимальное количество биржевого или
                                      нестандартизированного товара, кратным
                                      которому должно быть количество биржевого или
                                      нестандартизированного товара, указанное в
                                      заявке на продажу (покупку) биржевого или
                                      нестандартизированного товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z106"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19) режим
                                      торговли – совокупность условий объявления
                                      заявок и заключения сделок в торговой системе
                                      товарной биржи;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z107"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20) торговая
                                      сессия – период времени торгового дня, в
                                      течение которого трейдеры выставляют в
                                      торговую систему товарной биржи заявки на
                                      покупку (продажу) биржевого и (или)
                                      нестандартизированного товара и по ним
                                      заключаются биржевые сделки;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z108"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21)
                                      нестандартизированный товар – товар, не
                                      изъятый из оборота или не ограниченный в
                                      обороте, допущенный товарной биржей к биржевой
                                      торговле, за исключением биржевых товаров,
                                      недвижимого имущества и объектов
                                      интеллектуальной собственности;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z109"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22) режим
                                      стандартного аукциона – режим торговли, при
                                      котором биржевые сделки по
                                      нестандартизированным товарам заключаются в
                                      ходе аукциона на понижение или повышение по
                                      наилучшей цене для покупателя (продавца) -
                                      инициатора аукциона;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z110"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23)
                                      клиринговый центр товарной биржи –
                                      самостоятельная клиринговая организация, с
                                      которой товарная биржа заключила договор о
                                      клиринговом обслуживании;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z111"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24) товарная
                                      биржа – юридическое лицо, созданное в
                                      организационно–правовой форме акционерного
                                      общества, осуществляющее организационное и
                                      техническое обеспечение торгов путем их
                                      непосредственного проведения с использованием
                                      торговой системы товарной биржи;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z112"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25) трейдер –
                                      работник участника биржевых торгов,
                                      уполномоченный им на осуществление в торговой
                                      системе товарной биржи действий, связанных с
                                      заключением сделок от имени участника биржевых
                                      торгов, и зарегистрированный товарной биржей в
                                      установленном ею порядке;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z113"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26)
                                      саморегулируемая организация – некоммерческая
                                      организация в форме ассоциации (союза),
                                      основанная на добровольном участии брокеров и
                                      (или) дилеров и включенная в реестр
                                      саморегулируемых организаций в сфере товарных
                                      бирж в соответствии с подпунктом 10-2) статьи
                                      4 Закона;</a
                                    ><o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: 26pt"
                                  >
                                    27) претендент – юридическое лицо, желающее
                                    пройти процедуру аккредитации в товарной бирже в
                                    качестве брокера или дилера;&nbsp;&nbsp;&nbsp;
                                    <span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Default"
                                    style="text-align: justify; text-indent: 26pt"
                                  >
                                    <span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >1.1. Биржевая торговля&nbsp; осуществляется
                                        на основе равенства Клиентов, в соответствии
                                        с действующим законодательством Республики
                                        Казахстан.</span
                                      ></span
                                    ><span
                                      style="
                                        font-family: 'Times New Roman', serif;
                                        mso-bidi-font-family: ' Ps Times';
                                      "
                                    >
                                    </span
                                    ><span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >Настоящие Правила&nbsp; являются
                                        обязательными для всех участ­ников биржевой
                                        торговли.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Default"
                                    style="text-align: justify; text-indent: 26pt"
                                  >
                                    1.2. Товарная биржа обеспечивает всем участникам
                                    биржевых торгов равные условия по заключению
                                    биржевых сделок.<span
                                      style="font-family: 'Times New Roman', serif"
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Style2"
                                    align="center"
                                    style="
                                      margin-top: 18pt;
                                      text-align: center;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                      tab-stops: 324pt;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >2.
                                      </span></span
                                    ><span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >Структурные</span
                                        ></b
                                      ></span
                                    ><span class="FontStyle12"
                                      ><b
                                        ><span
                                          style="
                                            font-size: 8pt;
                                            font-family: 'Times New Roman', serif;
                                            mso-bidi-font-family: Arial;
                                          "
                                        >
                                          подразделения Биржи</span
                                        ></b
                                      ></span
                                    ><span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        ><o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        ><o:p>&nbsp;</o:p></span
                                      ></span
                                    >
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >2.1. Для организации &nbsp;биржевой
                                        торговли &nbsp;на Бирже &nbsp;созданы
                                        следующие структурные подразделения:<o:p
                                        ></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >Административно - управленческий персонал:
                                        &nbsp;<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >-&nbsp; Совет директоров; <o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >-&nbsp; Председатель правления;<o:p
                                        ></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >- &nbsp;Первый заместитель&nbsp;
                                        председателя правления;<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >- Заместитель председателя&nbsp; правления
                                        по юридическим вопросам;<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >- Заместитель&nbsp;&nbsp; председателя
                                        правления по организации биржевой
                                        торговли.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;Технический персонал:
                                        <o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;-&nbsp; Бухгалтерия;<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;-&nbsp; Маклерский отдел -&nbsp;
                                        отдел организации биржевых торгов;<o:p
                                        ></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;- &nbsp;Экспертно – регистрационный
                                        отдел- отдел по работе с клиентами;
                                        <o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;- &nbsp;Клиринговый центр;<o:p
                                        ></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >&nbsp;-&nbsp; Отдел информационной
                                        безопасности. <o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: justify;
                                    "
                                  >
                                    <span class="FontStyle13"
                                      ><span style="font-size: 9pt"
                                        >2.2. Для решения споров, связанных с
                                        заключением биржевых сделок&nbsp; на Бирже
                                        создан постоянно действующий биржевой
                                        арбитраж, деятельность которого
                                        регулируется&nbsp;законодательством
                                        Республики Казахстан о третейских судах.
                                        <o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: justify;
                                    "
                                  >
                                    2.3. К сотрудникам структурных подразделений
                                    предъявляются следующие квалификационные
                                    требования: <o:p></o:p>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для руководителей высшего звена наличие
                                      высшего образования, квалификация экономист,
                                      юрист, экономист-финансист, бухгалтер, стаж
                                      работы по специальности &nbsp;не менее 3
                                      лет;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >Для руководителей среднего звена:<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для начальника юридического отдела, наличие
                                      высшего образования, квалификация юрист, стаж
                                      работы &nbsp;по специальности не менее 3
                                      лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для специалистов юридического отдела,
                                      наличие высшего образования или
                                      средне-специального, квалификация юрист, стаж
                                      работы по специальности &nbsp;не менее 2
                                      лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для главного бухгалтера наличие высшего
                                      образования, квалификация бухгалтер,
                                      бухгалтер-аудитор, бухгалтер-экономист, стаж
                                      работы &nbsp;по специальности не менее 3 лет;
                                      <o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для начальника отдела информационной
                                      безопасности наличие высшего образования,
                                      квалификация автоматизированной информационной
                                      системы (АИС), стаж работы &nbsp;по
                                      специальности не менее 3 лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для начальника маклерского отдела&nbsp;
                                      наличие высшего образования, квалификация
                                      экономист, юрист, экономист-финансист,
                                      бухгалтер, стаж работы не менее 3 лет;<o:p
                                      ></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для </span
                                    ><span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >маклера</span
                                      ></span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                    >
                                      наличие высшего образования квалификация
                                      экономист, экономист-финансист, бухгалтер,
                                      стаж работы не менее 2 лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для начальника</span
                                    ><span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                      >
                                        экспертно-регистрационного
                                      </span></span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      >отдела наличие высшего образования
                                      квалификация юрист, экономист-финансист стаж
                                      работы не менее 3 лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для </span
                                    ><span class="FontStyle12"
                                      ><span
                                        style="
                                          font-size: 8pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >главного эксперт-регистратора,
                                        эксперт-регистратора,
                                      </span></span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      >наличие высшего образования квалификация
                                      юрист, экономист, экономист-финансист, стаж
                                      работы не менее 2 лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для начальника клирингового центра, наличие
                                      высшего образования, квалификация экономист,
                                      экономист-финансист, бухгалтер-аудитор, стаж
                                      работы &nbsp;в банковской сфере не менее 3
                                      лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для главного специалиста наличие высшего
                                      образования квалификация экономист,
                                      экономист-финансист, бухгалтер-аудитор, стаж
                                      работы в банковской сфере &nbsp;не менее 2
                                      лет;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >- для специалистов &nbsp; наличие высшего
                                      образования или средне-специального,
                                      квалификация экономист, экономист-финансист,
                                      бухгалтер-аудитор, стаж работы не менее 2
                                      лет.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                    ><span class="FontStyle13"
                                      ><span
                                        style="
                                          font-size: 9pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        ><o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Style2"
                                    style="
                                      text-align: justify;
                                      line-height: normal;
                                      mso-pagination: widow-orphan;
                                    "
                                  >
                                    <span class="FontStyle13"
                                      ><span
                                        style="
                                          font-size: 9pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-family: Arial;
                                        "
                                        >2.4. Функции и порядок деятельности
                                        структурных подразделений Биржи определяются
                                        иными внутренними документами Биржи.<o:p
                                        ></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="margin-left: 18pt; text-align: center"
                                  >
                                    <span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                          mso-bidi-font-weight: bold;
                                        "
                                        >&nbsp;</span
                                      ></span
                                    >
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="margin-left: 18pt; text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >3.Условия и порядок приема в члены
                                          товарной биржи,<o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="margin-left: 26pt; text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >приостановления и прекращения
                                          членства<o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >&nbsp;</span
                                      ></span
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span class="A6"
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >3.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Членами
                                        Биржи могут быть юридические лица,
                                        соответствующие требованиям, установленным
                                        Биржей и законодательством Республики
                                        Казахстан. Категории членства на Бирже,
                                        условия и порядок вступления в члены Биржи,
                                        права и обязанности членов Биржи, условия и
                                        порядок приостановления и прекращения
                                        членства на Бирже определяются Положением о
                                        членстве Биржи.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    align="center"
                                    style="
                                      margin-top: 18pt;
                                      margin-right: 0cm;
                                      margin-bottom: 0cm;
                                      margin-left: -9.05pt;
                                      margin-bottom: 0.0001pt;
                                      text-align: center;
                                      text-indent: 9.05pt;
                                    "
                                  >
                                    <b
                                      >4.&nbsp; Виды и режимы биржевой торговли<o:p
                                      ></o:p
                                    ></b>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Pa4">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >4.1. На товарной бирже совершаются:</span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) сделки с
                                      взаимной передачей прав и обязанностей в
                                      отношении спот – товара, включая сделки,
                                      взаимосвязанные с международными деловыми
                                      операциями;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) фьючерсные
                                      сделки;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) опционные
                                      сделки;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) сделки с
                                      взаимной передачей прав и обязанностей в
                                      отношении складских документов<span class="A6"
                                        >.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >4.2. Биржевые торги проводятся в следующих
                                      режимах торговли:<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) режим
                                      стандартного аукциона;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) режим
                                      двойного встречного аукциона<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >5.
                                        <span class="A6"
                                          >Регистрация участников биржевых
                                          торгов</span
                                        ><o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >5.1. Продавец/Покупатель для регистрации на
                                      Бирже, в обязательном порядке выбирает одного
                                      брокера/дилера, являющегося&nbsp;
                                      аккредитованным членом АО «Универсальная
                                      товарная биржа «Астана», который&nbsp;
                                      будет&nbsp; представлять его&nbsp; интересы и
                                      заключают с последним&nbsp; договор на
                                      оказание брокерских/дилерских услуг.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5.2. Брокер/дилер, в обязательном&nbsp; порядке
                                    предоставляет
                                    <span lang="KZ"
                                      >в экспертно-регистрационный отдел Биржи</span
                                    >
                                    для осуществления первоначальной
                                    регистрации&nbsp; участников&nbsp; биржевых
                                    торгов, следующие документы:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    1)&nbsp; Копию Устава/Положения*;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    2) копию свидетельства о государственной
                                    регистрации/перерегистрации юридического
                                    лица*;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    3) копию&nbsp; свидетельства о постановке на
                                    учет по НДС*;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    4) копию лицензии, в случае её наличия*;<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    5) Следующую информацию:&nbsp; банковские
                                    реквизиты, юридический и почтовый адреса,
                                    контактные телефоны, контактное лицо.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    * нотариально заверенную в случае
                                    непредставления оригиналов для сверки<o:p></o:p>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <i
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >**
                                      </span></i
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      >Продавец/Покупатель - нерезидент Республики
                                      Казахстан в подтверждение его правоспособности
                                      представляет те же легализованные документы,
                                      что и резиденты Республики Казахстан, либо
                                      легализованные документы, содержащие
                                      аналогичные сведения о квалификации
                                      потенциального поставщика-нерезидента
                                      Республики Казахстан, а также нотариально
                                      засвидетельствованная&nbsp; с переводом на
                                      государственный и/или русский&nbsp;
                                      языки&nbsp; легализованная выписка из
                                      торгового реестра.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    5.3. Брокер/дилер, представляющий интересы
                                    Инициатора торгов, на каждый отдельный торг,
                                    проводимый от лица Инициатора торгов, в
                                    обязательном порядке предоставляет
                                    <span lang="KZ"
                                      >в экспертно-регистрационный отдел</span
                                    >
                                    Биржи следующие документы:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    1) Письмо на имя Председателя правления Биржи
                                    (Приложение №1);<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    1) Заявка на проведение торгов (Приложение
                                    №2);<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    2) поручение брокеру (приложение №1 к договору
                                    об оказании брокерских услуг);<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    3) проект договора о закупке товаров;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    4) квалификационные требования к потенциальному
                                    поставщику, техническую спецификацию,
                                    определяющую точные функции, параметры
                                    технические и другие характеристики, размер
                                    обеспечения заявки на участие в биржевых торгах,
                                    если считает необходимым его установление, а
                                    также требования к&nbsp; сопровождающей
                                    документации на&nbsp; каждый конкретный
                                    закупаемый товар; <o:p></o:p>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >5) доверенность (приложение №3)<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    5.4. Брокеры/дилеры и/или дилеры потенциального
                                    продавца/покупателя в обязательном порядке на
                                    каждый объявленный торг, в котором&nbsp;
                                    заинтересован потенциальный продавец/покупатель,
                                    предоставляют
                                    <span lang="KZ">в </span
                                    >экспертно-регистрационный отдел Биржи следующие
                                    документы:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) заявку
                                    установленного образца; (Приложение №4)<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)&nbsp;
                                    документы&nbsp; подтверждающие&nbsp;
                                    соответствие потенциального поставщика общим и
                                    специальным квалификационным требованиям<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                    доверенность для участия в торгах (Приложение
                                    №3)<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: -1.2pt"
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5)
                                    поручение брокеру (приложение №1 к договору об
                                    оказании брокерских услуг)<o:p></o:p>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6)
                                      техническая спецификация (при наличии)<o:p
                                      ></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >5.5. Биржа вправе потребовать дополнительные
                                      документы для подтверждения соответствия
                                      квалификационных требований. <o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5.6. Биржа&nbsp; вправе отказать в принятии
                                    заявки на продажу (покупку) биржевого товара по
                                    следующим основаниям:<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    1) неправильное оформление заявки, а также
                                    нарушение установленных сроков и порядка подачи
                                    заявки; <o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    2) отсутствие биржевого обеспечения в случае
                                    совершения биржевых сделок с предварительным
                                    внесением биржевого обеспечения;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    3) неуплата участником биржевых торгов биржевого
                                    сбора, а также наличие у него иной просроченной
                                    задолженности перед товарной биржей и (или)
                                    клиринговой организацией;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    4) несоответствие клиента, участника биржевых
                                    торгов или дилера, действующего в своих
                                    интересах, квалификационным требованиям,
                                    установленным&nbsp; инициатором&nbsp; биржевого
                                    торга;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5) несоответствие&nbsp; предлагаемого&nbsp;
                                    участником биржевых&nbsp; торгов товара,&nbsp;
                                    квалификационным требованиям,
                                    установленным&nbsp;&nbsp; инициатором биржевого
                                    торга.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5.7. В случае отказа в принятии заявки на
                                    продажу (покупку) биржевого товара, Биржа
                                    незамедлительно информирует о причине отказа
                                    участника биржевых торгов.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5.8. Подача заявки на продажу (покупку)
                                    биржевого товара участником биржевых торгов
                                    означает его безоговорочное согласие совершить
                                    биржевую сделку на условиях, указанных в
                                    поданной заявке. <o:p></o:p>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >5.9.&nbsp; Принятые заявки на продажу
                                      (покупку) биржевого товара регистрируются на
                                      Бирже и включаются в торговую систему
                                      Биржи.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >5.10.&nbsp; Участником биржевых торгов
                                      допускается изменение условий заявки или отзыв
                                      ее в сроки и порядке, установленными
                                      настоящими&nbsp; Правилами биржевой
                                      торговли<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >&nbsp;</span
                                      ></b
                                    >
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >6. </span
                                      >Порядок взаимодействия с саморегулируемыми
                                      организациями, а также обеспечение брокерами и
                                      дилерами законности биржевой сделки</b
                                    ><b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        ><o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >&nbsp;</span
                                      ></b
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    6.1. В целях организации взаимодействия между
                                    товарными биржами и саморегулируемыми
                                    организациями допускается заключение соглашения
                                    или меморандума.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z270"
                                      >6.2. Взаимодействие товарных бирж с
                                      саморегулируемыми организациями осуществляется
                                      путем:<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z271"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) обмена
                                      информации;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z272"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      взаимопомощи и защиты своих интересов;<o:p
                                      ></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z273"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) проведения
                                      курсов повышения квалификации и переподготовки
                                      брокеров и (или) дилеров;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z274"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)
                                      осуществления консультативной помощи;<o:p
                                      ></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z275"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) принятия
                                      совместных решений по вопросам, возникающим
                                      при осуществлении своей деятельности.<o:p
                                      ></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z276"
                                      >6.3. Информационное взаимодействие между
                                      товарными биржами и саморегулируемыми
                                      организациями осуществляется в электронном
                                      виде.<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >6.4. Обмен документами и (или) сведениями
                                      путем представления (направления) документов и
                                      (или) сведений на бумажном носителе
                                      осуществляется в случае отсутствия технической
                                      возможности обмена документами и (или)
                                      сведениями в электронном виде<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >7. Режим стандартного аукциона<o:p
                                        ></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >&nbsp;</span
                                      ></b
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >7.1. Режим стандартного аукциона – режим
                                      торговли, при котором биржевые сделки по
                                      нестандартизированным товарам заключаются в
                                      ходе аукциона на понижение или повышение по
                                      наилучшей цене для покупателя (продавца) -
                                      инициатора аукциона.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >7.2. Биржевые торги в режиме стандартного
                                      аукциона проводятся с учетом:<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="margin-left: 35.4pt">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >1) раскрытия информации об участниках
                                      биржевой торговли или ее конфиденциальности,
                                      за исключением информации об инициаторе
                                      аукциона, которая является общедоступной;<br />
                                      2) проведения аукционов на понижение или
                                      повышение цены;<br />
                                      3) проведения аукциона по заказу покупателя
                                      или продавца биржевого товара;<br />
                                      4) участия в аукционе не менее трех участников
                                      аукциона, включая заказчика аукциона;<br />
                                      5) формирования цены на биржевой товар, по
                                      которой заключается биржевая сделка, по итогам
                                      аукциона и определения ее как наименьшей цены
                                      среди предложенных участниками аукциона на
                                      понижение и наибольшей цены среди предложенных
                                      участниками аукциона на повышение;<br />
                                      6) внесения биржевого обеспечения.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >7.3. Допускается проведение стандартных
                                      аукционов с предварительным квалификационным
                                      отбором его участников или без проведения
                                      такого отбора.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >7.4. Брокер (дилер), участвующий в
                                      стандартном аукционе, представляет в нем
                                      интересы только одного клиента.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5. Одноэтапный биржевой торг в
                                    режиме&nbsp;&nbsp; стандартного аукциона.<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.1.&nbsp; Инициатор, посредством своего
                                    брокера/дилера,&nbsp; подает Заявку на
                                    проведение биржевого торга&nbsp; в порядке и на
                                    условиях, предусмотренных&nbsp; п. 7.5.
                                    настоящих Правил.&nbsp; <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.2. Заявка на проведение торга
                                    предоставляется на Биржу в форме&nbsp; согласно
                                    Приложению №2<span style="color: red"> </span>и
                                    должна содержать:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    1) полное наименование брокера (дилера), а также
                                    полное наименование, юридический адрес,
                                    банковские реквизиты инициатора аукциона;
                                    <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    2) метод&nbsp; торга (повышение/понижение)<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    3) лот: наименование товара, его качественные
                                    характеристики (функциональные, технические,
                                    эксплуатационные и иные характеристики
                                    товара);<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    4) стартовая цена лота в тенге с точностью до
                                    двух знаков после запятой, включая расходы на
                                    транспортировку товара, страхование, оплату
                                    таможенных пошлин, налогов, сборов, а также иных
                                    расходов, предусмотренных условиями поставки
                                    товаров;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    5) количество закупаемого товара;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    6) порядок оплаты;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7) условия и место поставки товара;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    8) срок поставки товара, исчисляемый с даты
                                    заключения договора поставки;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    9) проект договора поставки с указанием его
                                    существенных условий;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    10) предлагаемая дата проведения аукциона;<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    11) квалификационные требования, установленные
                                    инициатором торга, которым&nbsp; должен
                                    соответствовать&nbsp; потенциальный поставщик
                                    товара для получения допуска к участию в
                                    аукционе через своего брокера/дилера, и перечень
                                    документов, представляемых им Бирже в качестве
                                    подтверждения его соответствия указанным
                                    требованиям;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    12) размер биржевого обеспечения, если инициатор
                                    торга установил необходимость его внесения;<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.3. Заявка на проведение биржевого торга
                                    должна быть подписана&nbsp; уполномоченным
                                    лицом&nbsp; Инициатора&nbsp; и удостоверена его
                                    печатью при отправке ее на бумажном носителе,
                                    подписана электронной цифровой подписью (далее -
                                    ЭЦП) Брокера Инициатора при отправке ее по
                                    системе электронного документооборота Биржи.<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.4. Биржа не позднее 17.00 часов&nbsp;
                                    дня&nbsp; следующего за днем принятия заявки на
                                    проведение торга публикует&nbsp;&nbsp; на
                                    собственном&nbsp; интернет-ресурсе&nbsp;
                                    объявление о предстоящем биржевом торге по
                                    заявке либо&nbsp; направляет брокеру/дилеру
                                    Инициатора&nbsp; мотивированный отказ в
                                    проведении торга. <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.5.&nbsp; Объявление&nbsp; о проведении
                                    биржевого торга в режиме стандартного аукциона
                                    должно содержать:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    1) раскрытия информации об участниках биржевой
                                    торговли или ее конфиденциальности, за
                                    исключением информации об инициаторе аукциона,
                                    которая является общедоступной; <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    2) проведения аукционов на понижение или
                                    повышение цены;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    3)качественные характеристики (функциональные,
                                    технические, эксплуатационные и иные
                                    характеристики) товара; <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    4) стартовая цена лота в тенге с точностью до
                                    двух знаков после запятой, включая расходы на
                                    транспортировку товара, страхование, оплату
                                    таможенных пошлин, налогов (в т.ч. налог на
                                    добавленную стоимость), сборов, а также иных
                                    расходов, предусмотренных условиями поставки
                                    товаров;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    5) количество закупаемого товара;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    6) порядок оплаты;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    7) срок поставки товара;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    8) проект договора поставки с указанием его
                                    существенных условий;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    9) размер биржевого обеспечения, если инициатор
                                    торга установил необходимость его внесения;<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    10) квалификационные требования, установленные
                                    инициатором торга, которым соответствует
                                    потенциальный поставщик товара для получения
                                    допуска к участию в аукционе через своего
                                    брокера/дилера, и перечень документов,
                                    представляемых им на Биржу;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal">
                                    11) дата и время проведения торга.;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal">
                                    12) срок подачи заявок на участие в торге и
                                    внесения гарантийного и (или)&nbsp; биржевого
                                    обеспечения. <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    7.5.6. Объявление о проведении одноэтапного
                                    биржевого торга в режиме&nbsp; стандартного
                                    аукциона должно быть опубликовано
                                    &nbsp;&nbsp;&nbsp;&nbsp; не позднее чем за&nbsp;
                                    5 (пять) календарных дней до даты проведения
                                    торга. Срок приема заявок на участие в&nbsp;
                                    одноэтапном биржевом торге в режиме стандартного
                                    аукциона&nbsp; и внесения&nbsp; биржевого
                                    обеспечения заканчивается в 16.00 дня
                                    предшествующего дня торга.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    7.5.7. К участию в аукционе допускаются члены
                                    биржи, представляющие интересы клиентов,
                                    соответствующих квалификационным требованиям
                                    Инициатора торга и внесшие в клиринговый центр
                                    Биржи гарантийное и (или) биржевое обеспечение.
                                    Брокер/дилер, участвующий биржевом торге в
                                    режиме&nbsp; стандартного аукциона, представляет
                                    в нем интересы только одного клиента.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.8. Торги, проводимые в режиме стандартного
                                    аукциона, признаются состоявшимися при условии,
                                    если количество участников по каждому торгу
                                    составило не менее трех участников аукциона,
                                    включая брокера/дилера, представляющего интересы
                                    инициатора аукциона.
                                    <span
                                      style="
                                        letter-spacing: 0.1pt;
                                        background-image: initial;
                                        background-position: initial;
                                        background-size: initial;
                                        background-repeat: initial;
                                        background-attachment: initial;
                                        background-origin: initial;
                                        background-clip: initial;
                                      "
                                      >В случае, если заявки поданы от менее чем
                                      двух брокеров (дилеров), аукцион признается не
                                      состоявшимся</span
                                    >.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.9. После наступления&nbsp; даты и времени
                                    начала торга участники, допущенные к торгу,
                                    делают оферты на заключение сделки, на условиях,
                                    указанных в Заявке на проведение биржевого&nbsp;
                                    торга (далее по тексту – Сделка) путем
                                    выставления заявок с указанием своих условий по
                                    цене лота. Участники аукциона могут выставлять
                                    неограниченное число заявок с ценой ниже или
                                    выше стартовой цены в зависимости от направления
                                    торга либо равной стартовой цене. Цена
                                    указывается в тенге, с точностью до двух знаков
                                    после запятой. В противном случае, заявки будут
                                    отклонены Биржей. Заявки являются
                                    безотзывными.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.10.&nbsp; По истечении периода времени,
                                    отведенного Биржей для&nbsp; проведения торга,
                                    Биржа формирует и отправляет брокеру/дилеру
                                    Инициатора протокол, подписанный ЭЦП
                                    уполномоченного сотрудника биржи, в случаи
                                    проведения биржевого торга в электронном виде,
                                    либо на бумажном носителе подписанный
                                    уполномоченным лицом Биржи и заверенный штампом,
                                    в случаи если торги проводятся голосовым
                                    способом. Протокол содержит информацию о
                                    победителе&nbsp; и условиях заключенной сделки.
                                    <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.11. В течение 10 рабочих дней с момента
                                    заключения Сделки Участники торгов,
                                    предоставляют на Биржу оригинал подписанного
                                    Договора, который регистрируется и храниться на
                                    Бирже.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.5.12. Допускается перенесение&nbsp; даты и
                                    времени&nbsp; проведения аукциона. Новые&nbsp;
                                    дата время&nbsp; проведения аукциона
                                    публикуется&nbsp; интернет-ресурсе Биржи.<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6. Двухэтапный&nbsp; биржевой торг в
                                    режиме&nbsp;&nbsp; стандартного аукциона.
                                    <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    В данном режиме проводятся закупки
                                    недропользователей и национальных компаний, в
                                    случае выступления их в качестве инициаторов
                                    торга. Двухэтапный&nbsp; биржевой торг в режиме
                                    стандартного аукциона проводится только на
                                    понижение.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.1. Инициатор, посредством своего
                                    брокера/дилера,&nbsp; подает Заявку на
                                    проведение биржевого торга&nbsp; в порядке и на
                                    условиях, предусмотренных&nbsp; п. 7.6.
                                    настоящих Правил.&nbsp; <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.2. Заявка на проведение торга
                                    предоставляется на Биржу в форме&nbsp; согласно
                                    Приложению №3 и должна содержать:<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    1) наименование инициатора аукциона (для
                                    юридического лица), фамилия, имя, отчество (при
                                    наличии) (для физического лица), фактический
                                    адрес заказчика полное наименование, банковские
                                    реквизиты;
                                    <span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z378"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) лот
                                      аукциона: техническая спецификация на
                                      закупаемый товар, с описанием функциональных,
                                      технических, качественных и эксплуатационных
                                      характеристик, а также перечень документов,
                                      подтверждающих соответствие товаров этим
                                      требованиям;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z379"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) стартовая
                                      цена лота в тенге, включая расходы на
                                      транспортировку товара, страхование, оплату
                                      таможенных пошлин, налогов (в случае если
                                      оборот по реализации товара облагается налогом
                                      на добавленную стоимость), сборов, а также
                                      иных расходов, предусмотренных условиями
                                      поставки товаров;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z380"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) количество
                                      приобретаемого товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z381"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) единица
                                      измерения;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z382"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) условия
                                      платежа;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z383"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7) условие и
                                      место поставки товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z384"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8) срок
                                      поставки товара, исчисляемый с даты заключения
                                      договора поставки;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z385"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9) проект
                                      договора поставки с указанием его существенных
                                      условий;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z386"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;10) установление
                                      требований по местному содержанию в закупаемом
                                      товаре, выраженных в процентах (от 0 до
                                      100);</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z387"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;11) способы, с
                                      помощью которых потенциальными поставщиками
                                      допускается запрашивать разъяснения по лоту у
                                      инициатора аукциона; адрес электронной почты и
                                      номера телефонов уполномоченных лиц инициатора
                                      аукциона для обращения к ним с вопросами;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z388"
                                      >&nbsp;&nbsp;&nbsp;12) номер лицензии
                                      (контракта) на недропользование, в рамках
                                      которого осуществляется закуп (при
                                      наличии);</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    &nbsp;&nbsp;&nbsp;13) квалификационные
                                    требования, установленные инициатором аукциона,
                                    которым должен соответствовать потенциальный
                                    поставщик.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    <span style="font-size: 14pt"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span
                                    >В заявке не допускается установление требования
                                    о наличии опыта работы работников потенциального
                                    поставщика.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.3. Заявка на проведение биржевого торга
                                    должна быть подписана&nbsp; уполномоченным
                                    лицом&nbsp; Инициатора&nbsp; и удостоверена его
                                    печатью при отправке ее на бумажном носителе,
                                    подписана электронной цифровой подписью (далее -
                                    ЭЦП) Брокера Инициатора при отправке ее по
                                    системе электронного документооборота Биржи. Не
                                    допускается внесение инициатором аукциона
                                    изменений и (или) дополнений в заявку на
                                    проведение аукциона на понижение с момента
                                    опубликования на интернет-ресурсе Биржи
                                    объявления о торге.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.4. Биржа не позднее 17.00 часов&nbsp;
                                    дня&nbsp; следующего за днем принятия заявки на
                                    проведение торга публикует&nbsp;&nbsp; на
                                    собственном&nbsp; интернет-ресурсе&nbsp;
                                    объявление о предстоящем биржевом торге по
                                    заявке либо&nbsp; направляет брокеру/дилеру
                                    Инициатора&nbsp; мотивированный отказ в
                                    проведении торга. <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.5.&nbsp; Объявление&nbsp; о проведении
                                    биржевого торга в режиме стандартного аукциона
                                    должно содержать:<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    1)&nbsp; Дата и время проведения торга:
                                    <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    2)&nbsp; Наименование инициатора торга:<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    3)&nbsp; Наименование лота;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    4)&nbsp; Полное содержание заявки на проведение
                                    торга;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    5) Дата окончания&nbsp; представления&nbsp;
                                    заявок&nbsp; и документов, подтверждающих
                                    квалификационные требования;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    6)&nbsp;&nbsp; Срок&nbsp; предоставления
                                    брокеру/дилеру инициатора заявок потенциальных
                                    поставщиков;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7) Дата предоставления брокером/дилером
                                    инициатора перечня допущенных потенциальных
                                    поставщиков;<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    7.6.6. Объявление о проведении
                                    двухэтапного&nbsp; биржевого торга в
                                    режиме&nbsp; стандартного аукциона должно быть
                                    опубликовано не позднее чем за&nbsp; 8 (восемь)
                                    рабочих&nbsp; дней до даты проведения торга.
                                    Прием заявок на участие в&nbsp; двухэтапном
                                    биржевом торге в режиме стандартного
                                    аукциона&nbsp; начинается с момента&nbsp;
                                    опубликования&nbsp; на интернет-ресурсе Биржи
                                    объявления и
                                    <span style="font-size: 11pt"
                                      >завершается не позднее чем за два рабочих дня
                                      до даты проведения биржевых торгов</span
                                    >. <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="
                                      text-align: justify;
                                      mso-layout-grid-align: none;
                                      text-autospace: none;
                                    "
                                  >
                                    7.6.7. За два рабочих дня до даты проведения
                                    аукциона на понижение инициатор аукциона
                                    самостоятельно в качестве дилера или через
                                    своего брокера представляет товарной бирже
                                    списки потенциальных поставщиков товаров,
                                    допущенных к участию в аукционе на понижение и
                                    не допущенных к участию в аукционе на понижение
                                    потенциальных поставщиков.
                                    <span
                                      style="
                                        letter-spacing: 0.1pt;
                                        background-image: initial;
                                        background-position: initial;
                                        background-size: initial;
                                        background-repeat: initial;
                                        background-attachment: initial;
                                        background-origin: initial;
                                        background-clip: initial;
                                      "
                                      >В случае, если к аукциону был допущен только
                                      один поставщик, то аукцион не проводится</span
                                    >. В случае если к аукциону на понижение не
                                    допущен потенциальный поставщик, инициатор
                                    аукциона самостоятельно в качестве дилера или
                                    через своего брокера представляет товарной бирже
                                    подтверждающие документы и сведения.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.8. Товарная биржа публикует списки
                                    допущенных и не допущенных к участию в аукционе
                                    на понижение потенциальных поставщиков на своем
                                    интернет–ресурсе не позднее рабочего дня,
                                    следующего за днем получения данного списка.<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.9. Участники биржевых торгов от каждого
                                    потенциального поставщика, допущенные на участие
                                    в аукционе на понижение, не позднее чем за один
                                    рабочий день до даты проведения аукциона вносят
                                    биржевое обеспечение клиринговому центру
                                    товарной биржи, не внесшие гарантийное и (или)
                                    биржевое обеспечение, к биржевым торгам не
                                    допускаются.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    7.6.10.&nbsp; Участники аукциона делают оферты
                                    на заключение сделки на условиях, указанных в
                                    заявке инициатора аукциона на проведение
                                    аукциона, путем выставления заявок с указанием
                                    своих условий по цене лота.<a name="z420">
                                      Участниками аукциона допускается выставлять
                                      неограниченное число заявок с ценой ниже
                                      стартовой цены лота. </a
                                    ><a name="z421"
                                      >Заявки являются безотзывными. Цены в заявке
                                      указываются с точностью до двух знаков после
                                      запятой. </a
                                    >Заявки, выставленные с нарушением данного
                                    требования, подлежат удалению товарной биржей из
                                    торговой системы. <o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    7.6.11. По истечении периода времени,
                                    отведенного товарной биржей для выставления
                                    заявок, товарная биржа формирует в торговой
                                    системе отчет о заявках, который содержит
                                    информацию обо всех лучших на момент прекращения
                                    приема заявках, выставленных участниками
                                    биржевых торгов от каждого потенциального
                                    поставщика.
                                    <a name="z425"
                                      >Если в течение трех минут до закрытия
                                      аукциона на понижение один их участников
                                      биржевых торгов потенциального поставщика
                                      вводит новую наименьшую цену, время закрытия
                                      аукциона на понижение автоматически
                                      продлевается на пять минут, но не более трех
                                      раз.</a
                                    ><a name="z426">
                                      По истечении периода времени, отведенного
                                      товарной биржей на рассмотрение отчета о
                                      заявках, инициатора аукциона акцептует оферту
                                      победителя аукциона путем выставления
                                      встречной заявки.</a
                                    ><a name="z427">
                                      Победителем аукциона признается потенциальный
                                      поставщик, выставивший заявку с наименьшей
                                      ценой лота согласно отчету о заявках.</a
                                    ><a name="z428">
                                      В случае если в отчете о заявках содержатся
                                      заявки с одинаковыми наименьшими ценами, то
                                      победителем аукциона признается тот
                                      потенциальный поставщик, который выставил
                                      заявку с наименьшей ценой раньше по времени. </a
                                    >После заключения биржевой сделки товарная биржа
                                    формирует в торговой системе и отправляет
                                    инициатору аукциона и победителю аукциона на
                                    понижение протокол об итогах, который содержит
                                    информацию о заключенной биржевой сделке.<o:p
                                    ></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.12.&nbsp; В случае признания&nbsp; торга не
                                    состоявшимся, инициатор подает товарной бирже, в
                                    общеустановленном порядке, повторную заявку на
                                    проведение аукциона. <o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.13. Допускается продление сроков проведения
                                    торга. Новая дата проведения торга подлежит
                                    опубликованию Биржей на своем интернет-ресурсе и
                                    должна составлять не менее 3-х календарных дней
                                    от первичной даты торга.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; tab-stops: 21.3pt"
                                  >
                                    7.6.14.&nbsp; Участники торгов организуют
                                    оформление договора в соответствии с заключенной
                                    Сделкой. Условия Договора должны соответствовать
                                    условиям, указанным в Заявке на проведение
                                    торга. Оформление Договора производится согласно
                                    законодательству Республики Казахстан.<o:p
                                    ></o:p>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >7.6.15. В течение 10 рабочих дней с момента
                                      заключения Сделки Участники торгов,
                                      предоставляет на Биржу оригинал подписанного
                                      Договора, который регистрируется и храниться
                                      на Бирже.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >8. Режим двойного встречного аукциона
                                        (ДВА)<o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >8.1. Режим двойного встречного аукциона –
                                      режим торговли, при котором биржевые сделки
                                      заключаются анонимно в результате конкуренции
                                      продавцов и покупателей, а цена на биржевой
                                      или нестандартизированный товар
                                      устанавливается на уровне равновесия спроса и
                                      предложения.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal">
                                    8.2. Биржевые торги в режиме двойного встречного
                                    аукциона проводятся с учетом: <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                    конфиденциальности информации об участниках
                                    биржевой торговли;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) запрета
                                    на заключение кросс -
                                    сделок;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<o:p
                                    ></o:p>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      формирования цены на биржевой товар, по
                                      которой заключается биржевая сделка, в
                                      процессе конкурирования предложений
                                      покупателей, продавцов и определения ее, как
                                      наилучшей цены для покупателя (минимальная
                                      цена от продавцов) или как наилучшей цены для
                                      продавца (максимальная цена от
                                      покупателей)<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;&nbsp;&nbsp;&nbsp; 4) внесения
                                      биржевого обеспечения<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >8.3. Биржевые товары указываются в Перечне
                                      биржевых товаров в соответствии с приказом
                                      Министра национальной экономики Республики
                                      Казахстан от 26 февраля 2015 года № 142 "Об
                                      утверждении перечня биржевых товаров"
                                      (зарегистрирован в Реестре государственной
                                      регистрации нормативных правовых актов за №
                                      10587) и торгуются исключительно в режиме
                                      двойного встречного аукциона.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8.4. По товарам, торгуемым в режиме двойного
                                    встречного аукциона, товарная биржа утверждает
                                    своими внутренними документами спецификацию
                                    товара, которая предусматривает:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) наименование
                                    товара, код товара и его качественные
                                    характеристики;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z240"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) условия
                                      поставки и оплаты товара;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z241"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) размер лота
                                      и минимальной поставочной партии товара, а
                                      также способ упаковки товара;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z242"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) перечень
                                      документов, подтверждающих поставку
                                      товара;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z243"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) допустимый
                                      толеранс при поставке товара;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) наличие
                                      стандартной формы договора поставки; <br />
                                      8.5. Биржевые торги в режиме двойного
                                      встречного аукциона проводятся в течение
                                      торговой сессии в порядке непрерывного
                                      автоматического сопоставления торговой
                                      системой товарной биржи заявок на покупку и
                                      продажу, по которому каждая подаваемая заявка
                                      проверяется на совпадение по количеству товара
                                      и цене со встречными заявками, которые
                                      образуют реестр (очередь) заявок.<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;При совпадении
                                      параметров подаваемой заявки с параметрами
                                      встречных заявок происходит заключение
                                      биржевой сделки.<br />
                                      &nbsp;8.6. Реестр (очередь) заявок формируется
                                      торговой системой товарной биржи в
                                      автоматическим режиме с учетом следующего.
                                      <br />
                                      &nbsp;8.6.1. независимо от времени подачи,
                                      первыми в очереди располагаются заявки с
                                      наилучшими ценами (с максимальными ценами от
                                      покупателя (по убывающей) – в очереди заявок
                                      на покупку и с минимальными ценами от продавца
                                      (по возрастающей) – в очереди заявок на
                                      продажу); при этом указанное в заявке
                                      количество реализуемого (приобретаемого)
                                      товара (объем заявки) на ее приоритет
                                      (первоочередность) не влияет;<br />
                                      8.6.2. встречные заявки удовлетворяются
                                      согласно их месту в очереди – сначала
                                      удовлетворяются заявки, определенные в очереди
                                      первыми;<br />
                                      8.6.3. при равенстве цен заявок, заявка,
                                      поданная раньше, удовлетворяется в
                                      первоочередном порядке, чем заявка, поданная
                                      позже;<br />
                                      8.6.4. сделка заключается всегда по цене
                                      заявки, находящейся в очереди встречных заявок
                                      первой;<br />
                                      8.6.5. если заявка при заключении сделки может
                                      быть удовлетворена лишь частично, то
                                      оставшаяся (неисполненная) ее часть
                                      рассматривается в качестве отдельной заявки,
                                      которая подлежит удовлетворению в общем
                                      порядке определенном настоящим пунктом Типовых
                                      правил;<br />
                                      8.6.6. заключение биржевой сделки не требует
                                      дополнительного согласия участников, подавших
                                      удовлетворяемые заявки.<br />
                                      8.7. В ходе торговой сессии, проводимой в
                                      режиме двойного встречного аукциона, участники
                                      торгов подают неограниченное количество заявок
                                      на покупку (продажу) товара. При этом любую
                                      заявку, поданную участником торгов,
                                      допускается снять им до момента заключения
                                      сделки.<br />
                                      8.8. Заявка на покупку (продажу) товара,
                                      подаваемая участником торгов при проведении
                                      биржевых торгов в режиме двойного встречного
                                      аукциона, является безусловным согласием
                                      участника торгов на заключение биржевой сделки
                                      при соблюдении указанных в заявке параметров,
                                      базовыми из которых являются:<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) код
                                      биржевого товара (торгового инструмента),
                                      допущенного к биржевым торгам;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)
                                      направленность сделки: покупка или продажа
                                      товара;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) общее
                                      количество реализуемого (приобретаемого)
                                      товара.<br />
                                      &nbsp;8.9. По окончании торговой сессии,
                                      проводимой в режиме двойного встречного
                                      аукциона, все неудовлетворенные заявки на
                                      покупку (продажу) товара аннулируются торговой
                                      системой товарной биржи. </span
                                    ><span
                                      lang="EN-US"
                                      style="
                                        font-family: 'Times New Roman', serif;
                                        mso-ansi-language: EN-US;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8.10. Особенности<span style="color: red">
                                    </span
                                    >проведения государственных закупок в режиме
                                    ДВА<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8.10.1. Государственные закупки на Бирже
                                    осуществляются по товарам, установленным
                                    законодательством о государственных закупках,
                                    исключительно в режиме ДВА.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8.10.2. Объявление в виде расписания торгов при
                                    проведении государственных закупок Биржа
                                    размещает на собственном интернет–ресурсе не
                                    позднее, чем за десять рабочих дней до даты
                                    проведения биржевых торгов.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8.10.3. Не допускается изменения или отзыв
                                    заявки по государственным закупкам по истечении
                                    3 (трех) календарных дней, со дня публикации
                                    заявки на сайте Биржи.<o:p></o:p>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >8.10.4. Услуги по осуществлению
                                      государственных закупок через Биржу
                                      оказываются на возмездной основе в рамках
                                      средств, предусмотренных в бюджете заказчика
                                      на соответствующий год.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >9. Условия и порядок приостановления
                                          <o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >и возобновления торгов на Бирже<o:p
                                          ></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Pa4">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >9.1. В случаях возникновения технических
                                      сбоев в торговой системе товарной биржи,
                                      делающих невозможным продолжение оказания
                                      услуг, связанных с организацией биржевой
                                      торговли, товарная биржа фиксирует факт и
                                      время технического сбоя в журнале технических
                                      сбоев, приостанавливает оказание услуг и
                                      незамедлительно принимает меры, направленные
                                      на:</span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) выявление и
                                      устранение причин, повлекших технический
                                      сбой;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) устранение
                                      технических последствий сбоя;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) обеспечение
                                      сохранности информации, находящейся в торговой
                                      системе товарной биржи, и восстановление
                                      информации, утраченной в результате
                                      технического сбоя.<br />
                                      9.2.&nbsp; В случае технического сбоя,
                                      делающего невозможным работу отдельного
                                      участника биржевых торгов, причины сбоя
                                      устраняются силами и средствами участника
                                      биржевых торгов, если сбои возникли по
                                      независящим от товарной биржи причинам, в иных
                                      случаях – силами и средствами товарной
                                      биржи.<br />
                                      9.3. При невозможности оперативного устранения
                                      сбоя, участником биржевых торгов посредством
                                      телефонной связи допускается представление
                                      товарной бирже заявления на удаление
                                      объявленных им заявок. Не позднее дня,
                                      следующего за днем представления заявления по
                                      телефону, указанное заявление направляется
                                      товарной бирже в письменной или электронной
                                      формах. Товарная биржа после получения
                                      заявления по телефону удаляет заявки,
                                      объявленные данным участником биржевых торгов,
                                      из торговой системы товарной биржи.<br />
                                      9.4. При обнаружении сбоя в торговой системе
                                      товарной биржи товарная биржа принимает
                                      решение о временном приостановлении торгов, о
                                      чем участники биржевых торгов извещаются с
                                      использованием торговой системы товарной биржи
                                      или другим доступным способом. После
                                      восстановления работоспособности торговой
                                      системы товарной биржи торги
                                      возобновляются.<br />
                                      9.5. Если восстановить работоспособность
                                      торговой системы товарной биржи не
                                      представляется возможным, товарная биржа
                                      принимает решение о досрочном прекращении
                                      торгов. Данное решение доводится до сведения
                                      всех участников биржевых торгов с
                                      использованием торговой системы товарной биржи
                                      или другим доступным способом.<br />
                                      9.6. Товарная биржа приостанавливает торги в
                                      случае превышения минимальных и максимальных
                                      пределов уровней цен на конкретный биржевой
                                      товар в рамках одного торгового дня, исходя из
                                      цен, сложившихся в результате предыдущих
                                      торгов<span class="A6">.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="margin-top: 12pt; text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >10. Порядок учета и регистрации сделок на
                                          Бирже<o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    10.1. По сделке, заключенной в ходе биржевых
                                    торгов, торговой системой товарной биржи
                                    автоматически генерируется отчет по биржевой
                                    сделке (далее – отчет по биржевой сделке), с
                                    присвоением уникального номера и содержит
                                    следующие сведения:<span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z331"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)
                                      наименование участника биржевых торгов и его
                                      уникальный биржевой идентификатор
                                      (индивидуальный код, присвоенный участнику
                                      биржевых торгов);</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z332"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) дату и
                                      время заключения сделки в формате – год,
                                      месяц, день, час, минута, секунда (с точностью
                                      минимум до 0,1 секунды);</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z333"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3)
                                      наименование и (или) код биржевого или
                                      нестандартизированного товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z334"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) цену за
                                      единицу товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z335"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) количество
                                      товара;</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z336"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) общую сумму
                                      сделки.</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z337"
                                      >10.2. Отчет по биржевой сделке представляется
                                      брокеру или дилеру, заключившему сделку, в
                                      системе электронного документооборота товарной
                                      биржи с обязательным подписанием электронной
                                      цифровой подписью уполномоченного работника
                                      товарной биржи сразу после окончания торговой
                                      сессии и клиринга.</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z338"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Брокер после
                                      получения отчета по биржевой сделке
                                      представляет его своему клиенту.</a
                                    ><a name="z339"></a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    10.3. По требованию участника торгов товарная
                                    биржа дополнительно к электронному отчету по
                                    биржевой сделке представляет участнику торгов
                                    бумажный отчет по биржевой сделке, подписанный
                                    уполномоченным работником биржи.<span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z340"
                                      >10.4. По итогам торгового дня участнику
                                      биржевых торгов допускается представление
                                      сводного отчета по всем заключенным им в
                                      течение торговой сессии биржевым сделкам без
                                      представления отдельных отчетов по каждой
                                      биржевой сделке.</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z341"
                                      >10.5. По итогам биржевых торгов в торговой
                                      системе товарной биржей формируется сводный
                                      реестр биржевых сделок участников биржевых
                                      торгов, совершенных в торговый день.</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z342"
                                      >10.6. Брокеры обязаны вести учет совершаемых
                                      биржевых сделок отдельно по каждому клиенту и
                                      хранить сведения об этих сделках в течение
                                      пяти лет со дня совершения сделки.</a
                                    ><span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    10.7. Товарная биржа обеспечивает сохранность
                                    сведений по всем заключенным биржевым сделкам до
                                    момента прекращения занятия деятельностью в
                                    сфере биржевой торговли.<o:p></o:p>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="margin-top: 18pt; text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >11. Порядок осуществления расчетов
                                        </span></b
                                      ></span
                                    ><b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >с товарной биржей</span
                                      ></b
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                    >
                                      <span class="A6"
                                        ><b>по заключенным<o:p></o:p></b></span
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >на биржевых торгах сделкам
                                          <o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >11.1. Расчеты участников биржевой торговли с
                                      товарной биржей производятся в соответствии с
                                      Правилами биржи и договорами на оказание услуг
                                      по организации биржевой торговли.</span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      11.2.. Оплата и поставка биржевых товаров по
                                      сделкам, заключенным на товарной бирже, но не
                                      ограничиваясь, осуществляются следующими
                                      способами:<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) оплата
                                      биржевого товара путем открытия счета в
                                      расчетной организации, с которой товарной
                                      биржей или клиринговой организацией,
                                      обслуживающей товарную биржу, заключен
                                      договор, предусматривающий участие расчетной
                                      организации в осуществлении расчетов по
                                      сделкам, заключенным на биржевых торгах,
                                      раскрываемого в случае представления
                                      документов, подтверждающих поставку биржевого
                                      товара, предусмотренных Правилами биржи, на
                                      которой заключена соответствующая
                                      сделка;</span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) оплата
                                      биржевого товара через расчетную организацию
                                      без открытия счета на условиях «поставка
                                      против платежа» при условии депонирования в
                                      специализированной организации, определенной
                                      Правилами биржи, в которой заключена
                                      соответствующая сделка, простого или двойного
                                      складского свидетельства (складского
                                      свидетельства, отделенного от залогового
                                      свидетельства) или иных документов,
                                      определенных Правилами биржи, подтверждающих
                                      факт наличия или отгрузки биржевого товара;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) поставка
                                      биржевого товара на условиях предоплаты
                                      биржевого товара покупателем;<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) оплата
                                      биржевого товара на условиях предпоставки
                                      биржевого товара продавцом.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >11.3. В Правилах биржи допускается
                                      предусматривать возможность одного или
                                      нескольких способов расчетов по сделкам,
                                      заключенным на биржевых торгах.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >11.4. Если Правилами биржи предусмотрено
                                      несколько способов расчетов по сделкам,
                                      заключенным на биржевых торгах в определенном
                                      режиме торговли, стороны выбирают только один
                                      из этих способов. <o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >11.5. Расчеты по договорам, заключенным на
                                      основании биржевых сделок с предоставлением
                                      биржевого обеспечения, допускается производить
                                      через клиринговую организацию, обслуживающую
                                      товарную биржу и принимающую такое биржевое
                                      обеспечение. </span
                                    ><span
                                      style="font-family: 'Times New Roman', serif"
                                      ><br />
                                      11.6. Клиринговое обслуживание биржевых сделок
                                      осуществляется в порядке, установленном
                                      уполномоченным органом для осуществления
                                      клиринговой деятельности по товарным биржевым
                                      сделкам<span class="A6">.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    align="center"
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: center;
                                    "
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >12. Порядок формирования и организации
                                          деятельности<o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >биржевого арбитража, а также механизмы
                                          разрешения споров, связанных с заключением
                                          биржевых сделок с биржевыми товарами<o:p
                                          ></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default"><o:p>&nbsp;</o:p></p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    12.1. Для решения споров, связанных с
                                    заключением биржевых сделок, Биржа создает в
                                    течение тридцати календарных дней после
                                    государственной регистрации в органах юстиции
                                    постоянно действующий биржевой арбитраж.
                                    Деятельность биржевого арбитража
                                    регулируется&nbsp; Законом Республики Казахстан
                                    от 8 апреля 2016 года № 488-V ЗРК «Об
                                    арбитраже».<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    12.2. Биржевой арбитраж для разрешения споров,
                                    связанных с заключением биржевых сделок,
                                    создается Биржей, как постоянно действующий
                                    арбитраж. Для образования постоянно действующего
                                    биржевого арбитража Биржа утверждает регламент,
                                    список арбитров, которые будут осуществлять
                                    деятельность в арбитраже.<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    12.3. Постоянно действующий биржевой арбитраж
                                    рассматривает споры в соответствии
                                    с&nbsp;Конституцией, законами и иными
                                    нормативными правовыми актами Республики
                                    Казахстан.<br />
                                    12.4. Постоянно действующий биржевой арбитраж
                                    принимает решение в соответствии с условиями
                                    договора и учетом обычаев делового оборота.<o:p
                                    ></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    12.5. В случае отсутствия норм права,
                                    регулирующих спорные отношения, постоянно
                                    действующий биржевой арбитраж применяет нормы
                                    права, регулирующие сходные правоотношения, а
                                    при отсутствии таких норм разрешает спор, исходя
                                    из общих начал и смысла законов.<o:p></o:p>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >12.6. Спор допускается передать на
                                      рассмотрение постоянно действующего биржевого
                                      арбитража при наличии заключенного между
                                      сторонами биржевой сделки арбитражного
                                      соглашения, то есть письменного соглашения
                                      сторон о передаче возникшего или могущего
                                      возникнуть спора на рассмотрение в постоянно
                                      действующий биржевой арбитраж<span class="A6"
                                        >.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >&nbsp;</span
                                      ></b
                                    >
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >13. Порядок принятия (утверждения)
                                          <o:p></o:p></span></b
                                    ></span>
                                  </p>

                                  <p
                                    class="Pa0"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <span class="A6"
                                      ><b
                                        ><span
                                          style="
                                            mso-ansi-font-size: 12pt;
                                            mso-bidi-font-size: 12pt;
                                            font-family: 'Times New Roman', serif;
                                          "
                                          >документов по биржевой торговле<o:p
                                          ></o:p></span></b
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    13.1. Биржа разрабатывает и утверждает следующие
                                    внутренние нормативные документы:<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    1) Правила биржи;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    2) форму либо требования к заявке на участие в
                                    биржевых торгах;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    3) реестр заявок на продажу (покупку) биржевого
                                    товара на конкретный биржевой торг;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    4) регламент постоянно действующего биржевого
                                    арбитража;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5) форму типового договора об оказании услуг по
                                    организации биржевой торговли, заключаемого
                                    товарной биржей со своими членами;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    6) форму либо требования к содержанию
                                    протокола&nbsp; для участников торгов о
                                    заключенных биржевых сделках; <o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    7) тарифы за оказываемые Биржей услуги;<o:p
                                    ></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    8)&nbsp;иные документы, необходимые товарной
                                    бирже для осуществления ее деятельности.<o:p
                                    ></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    13.2. Товарной бирже допускается принимать
                                    (утверждать) документы, регламентирующие:<o:p
                                    ></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    1) эксплуатацию торговой системы товарной
                                    биржи;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    2) организацию экспертизы качества биржевого
                                    товара, реализуемого через биржевые торги, по
                                    требованию участника биржевых торгов;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    3) условия принятия в члены биржи брокеров и
                                    дилеров и ведение товарной биржей на
                                    еженедельной основе реестра брокеров и дилеров,
                                    являющихся ее членами;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    4) публикацию на еженедельной основе на
                                    официальном сайте биржи с последующим
                                    уведомлением уполномоченного органа информации
                                    по брокерам и дилерам, являющимися ее
                                    членами;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    5) оказание организационных, консультационных,
                                    информационных, методических услуг, связанных с
                                    биржевой торговлей;<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    6) развитие международных биржевых торгов.<o:p
                                    ></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    13.3. Внутренние документы Биржи для участников
                                    торгов содержат условия обеспечения сохранности
                                    сведений, составляющих коммерческую тайну на
                                    товарной бирже, не допускающие их использования
                                    в личных интересах участников торгов, их
                                    представителей или третьих лиц.<o:p></o:p>
                                  </p>

                                  <p class="Pa4" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >13.4. Внутренние документы Биржи,
                                      регламентирующие механизм проведения биржевых
                                      торгов доводятся до сведения членов товарной
                                      биржи не позднее, чем за три рабочих дня до
                                      вступления их в силу путем их публикации на
                                      интернет–ресурсе товарной биржи<span
                                        class="A6"
                                        >.<o:p></o:p></span
                                    ></span>
                                  </p>

                                  <p class="Default">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >14. Порядок представления товарной биржей
                                        отчетов<br />
                                        уполномоченному государственному органу, а
                                        также размещения<br />
                                        информации о проводимых торгах на
                                        интернет–ресурсе товарной<br />
                                        биржи.<o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >14.1. Товарная биржа посредством электронных
                                      каналов связи представляет в уполномоченный
                                      орган электронный отчет по проведенным
                                      биржевым торгам согласно форме отчетности,
                                      установленной&nbsp;приложением к настоящим
                                      Типовым правилам.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >14.2. Отчет представляется товарной биржей
                                      уполномоченному государственному органу по
                                      состоянию на 1 января, 1 апреля, 1 июля и 1
                                      октября отчетного года в срок не позднее 31
                                      января, 30 апреля, 31 июля и 31 октября
                                      отчетного года соответственно.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >14.3. В целях раскрытия информации о товарной
                                      бирже, ее членах и результатах биржевых торгов
                                      товарная биржа обеспечивает их публикацию в
                                      средствах массовой информации.<br />
                                      14.4. По итогам каждого торгового дня товарная
                                      биржа не позднее следующего рабочего дня
                                      опубликовывает на интернет–ресурсе товарной
                                      биржи информацию о результатах биржевых
                                      торгов, включающих в себя следующие
                                      сведения:<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >1) по стандартизированным однородным
                                      товарам:<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >дату проведения торгов;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >наименование или код товара;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >количество сделок и режим биржевой торговли в
                                      котором заключены сделки; <o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >максимальную и минимальную цену сделок;<o:p
                                      ></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >общий оборот по всем сделкам за торговую
                                      сессию;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >2) по не стандартизированным
                                      (специализированным) товарам: <o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >дату проведения торгов;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >время заключения сделки и ее номер;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >наименование (электронный код) брокеров
                                      (дилеров), заключивших сделку;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >наименование товара;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >количество товара;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >цену товара;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >общую стоимость сделки;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >условия поставки;<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >режим биржевой торговли, в котором заключена
                                      сделка.<o:p></o:p
                                    ></span>
                                  </p>

                                  <p class="Default" style="text-align: justify">
                                    <span
                                      style="font-family: 'Times New Roman', serif"
                                      >&nbsp;</span
                                    >
                                  </p>

                                  <p
                                    class="Default"
                                    align="center"
                                    style="text-align: center"
                                  >
                                    <b
                                      ><span
                                        style="
                                          font-family: 'Times New Roman', serif;
                                        "
                                        >15. Основания и порядок аннулирования
                                        итогов биржевых торгов <o:p></o:p></span
                                    ></b>
                                  </p>

                                  <p
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: justify;
                                    "
                                  >
                                    <o:p>&nbsp;</o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    15.1. &nbsp;Аукцион на понижение подлежит отмене
                                    товарной биржей в следующих случаях:<o:p></o:p>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z432"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;1) по
                                      решению суда, вступившему в законную силу;<o:p
                                      ></o:p
                                    ></a>
                                  </p>

                                  <p class="MsoNormal" style="text-align: justify">
                                    <a name="z433"
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;2) в
                                      случае подачи менее двух заявок на участие в
                                      аукционе участниками торгов;<o:p></o:p
                                    ></a>
                                  </p>

                                  <p
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: justify;
                                    "
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) в случае
                                    сокращения расходов на приобретение
                                    нестандартизированных товаров, предусмотренных
                                    утвержденными годовой и (или) среднесрочной
                                    программами закупа товаров инициатора
                                    аукциона.<o:p></o:p>
                                  </p>

                                  <p
                                    class="MsoNormal"
                                    style="text-align: justify; text-indent: 35.4pt"
                                  >
                                    Отказ от сделки, заключенной на биржевых торгах,
                                    допускается только в случаях, предусмотренных
                                    Гражданским кодексом Республики Казахстан или
                                    соглашением сторон.<span
                                      style="
                                        font-size: 11pt;
                                        mso-bidi-font-size: 12pt;
                                      "
                                      ><o:p></o:p
                                    ></span>
                                  </p>

                                  <p
                                    style="
                                      margin: 0cm;
                                      margin-bottom: 0.0001pt;
                                      text-align: justify;
                                    "
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае отказа
                                    от биржевой сделки участники биржевой торговли
                                    не требуют от товарной биржи возврата ранее
                                    уплаченного ими биржевого сбора<span
                                      style="font-size: 11pt"
                                      ><o:p></o:p
                                    ></span>
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
              <h4 class="widget-title">Правила биржевой торговли</h4>
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
                  <li class="current-menu-item">
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
