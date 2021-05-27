import AbstractView from "./AbstractView.js";

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
          <h1 class="page-title">
            Правила осуществления клиринговой деятельности
          </h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/" data-link>Главная</a></li>
            <li class="active">
              Правила осуществления клиринговой деятельности
            </li>
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
                            Правила осуществления клиринговой деятельности
                          </h2>
                          <div
                            class="wpb_text_column wpb_content_element post_content"
                          >
                            <div class="wpb_wrapper">
                              <p></p>
                            </div>
                            <div class="wpb_wrapper">
                              <p class="MsoNormal" style="text-align: justify">
                                <b
                                  ><i
                                    >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; 1. Общие положения</i
                                  ></b
                                >
                              </p>
                              <p class="MsoNormal" style="text-align: justify">
                                <b><i>Клиринг</i></b> – процесс определения,
                                проверки и передачи информации о требованиях и
                                (или) обязательствах членов товарной биржи в
                                результате заключения биржевых сделок, в том
                                числе в результате осуществления неттинга
                                обязательств, и подготовка документов
                                (информации), являющихся основанием прекращения
                                и (или) исполнения таких обязательств;<o:p
                                ></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <b
                                  ><i
                                    ><span lang="KZ"
                                      >Товарная биржа (Биржа)</span
                                    ></i
                                  ></b
                                ><span lang="KZ"
                                  >- АО «Универсальная товарная биржа
                                  «Астана»<o:p></o:p
                                ></span>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <b
                                  ><i
                                    ><span lang="KZ">Клиринговый центр</span></i
                                  ></b
                                ><span lang="KZ">
                                  <b><i>Биржи</i></b
                                  >– ТОО «Клиринговый центр «Астана»;<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <b
                                  ><i
                                    ><span lang="KZ">У</span>частники биржевой
                                    торговли –
                                  </i></b
                                >клиенты, брокеры и дилеры, взаимодействующие на
                                товарной бирже по установленным правилам
                                биржевой торговли;<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <b><i>Участники биржевых торгов</i></b> –
                                брокеры и (или) дилеры, прошедшие процедуру
                                аккредитации в товарной бирже и имеющие право на
                                осуществление биржевых сделок на товарной
                                бирже;<o:p></o:p>
                              </p>

                              <p class="Pa4" style="text-align: justify">
                                <span class="A6"
                                  ><b
                                    ><i
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: Times New Roman, serif;
                                        "
                                        >Биржевой брокер (брокер)</span
                                      ></i
                                    ></b
                                  ></span
                                ><span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                  >
                                    – юридическое лицо, осуществляющее свою
                                    деятельность на товарной бирже и совершающее
                                    сделки с биржевым товаром по поручению, за
                                    счет и в интересах клиента;</span
                                  ></span
                                ><span
                                  style="font-family: Times New Roman, serif"
                                  ><o:p></o:p
                                ></span>
                              </p>

                              <p class="Pa4" style="text-align: justify">
                                <span class="A6"
                                  ><b
                                    ><i
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: Times New Roman, serif;
                                        "
                                        >Биржевой дилер (дилер)</span
                                      ></i
                                    ></b
                                  ></span
                                ><span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                  >
                                    – юридическое лицо, осуществляющее свою
                                    деятельность на товарной бирже и совершающее
                                    сделки с биржевым товаром в своих интересах
                                    и за свой счет;</span
                                  ></span
                                ><span
                                  style="font-family: Times New Roman, serif"
                                  ><o:p></o:p
                                ></span>
                              </p>

                              <p class="Pa4" style="text-align: justify">
                                <span class="A6"
                                  ><b
                                    ><i
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: Times New Roman, serif;
                                        "
                                        >Биржевой сбор</span
                                      ></i
                                    ></b
                                  ></span
                                ><span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                  >
                                    – комиссия, взимаемая товарной биржей за
                                    организацию биржевых торгов;</span
                                  ></span
                                ><span
                                  style="font-family: Times New Roman, serif"
                                  ><o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <span class="A6"
                                  ><b
                                    ><i
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: Times New Roman, serif;
                                        "
                                        >Клиент</span
                                      ></i
                                    ></b
                                  ></span
                                ><span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                  >
                                    – физическое или юридическое лицо,
                                    пользующееся услугами брокера и (или) дилера
                                    для совершения сделок с биржевым товаром<o:p
                                    ></o:p></span
                                ></span>
                              </p>

                              <p
                                class="Pa4"
                                style="text-align: justify; line-height: normal"
                              >
                                <span class="A6"
                                  ><b
                                    ><i
                                      ><span
                                        style="
                                          mso-ansi-font-size: 12pt;
                                          mso-bidi-font-size: 12pt;
                                          font-family: Times New Roman, serif;
                                          mso-fareast-language: AR-SA;
                                        "
                                        >Правила биржевой торговли –
                                      </span></i
                                    ></b
                                  ></span
                                ><span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                      mso-fareast-language: AR-SA;
                                    "
                                    >документ, устанавливающий порядок ведения
                                    биржевой торговли для каждой товарной биржи,
                                    разработанный на основе типовых правил
                                    биржевой торговли;<o:p></o:p></span
                                ></span>
                              </p>

                              <p class="Default">
                                <b
                                  ><i
                                    ><span
                                      style="
                                        font-family: Times New Roman, serif;
                                      "
                                      >Биржевые торги</span
                                    ></i
                                  ></b
                                ><span
                                  style="font-family: Times New Roman, serif"
                                >
                                  – процесс, проводимый в рамках правил биржевой
                                  торговли, направленный на совершение сделок по
                                  биржевым товарам, нестандартизированным
                                  товарам на основе электронных заявок, поданных
                                  в электронную торговую систему товарной биржи,
                                  обеспечивающую автоматизацию процесса
                                  заключения биржевых сделок;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <b
                                  ><i
                                    ><span
                                      style="
                                        font-family: Times New Roman, serif;
                                      "
                                      >Биржевой товар</span
                                    ></i
                                  ></b
                                ><span
                                  style="font-family: Times New Roman, serif"
                                >
                                  – стандартизированный однородный товар,
                                  включенный в Единую товарную номенклатуру
                                  внешнеэкономической деятельности Евразийского
                                  экономического союза, единицы которого
                                  идентичны во всех отношениях, имеют сходные
                                  характеристики и состоят из схожих
                                  компонентов, что позволяет им выполнять те же
                                  функции, обладающие свойством полной
                                  взаимозаменяемости партий от различных
                                  производителей, а также срочный контракт;<o:p
                                  ></o:p
                                ></span>
                              </p>

                              <p
                                class="Pa4"
                                style="text-align: justify; line-height: normal"
                              >
                                <b
                                  ><i
                                    ><span
                                      style="
                                        font-family: Times New Roman, serif;
                                      "
                                      >Приказ/поручение</span
                                    ></i
                                  ></b
                                ><span
                                  style="font-family: Times New Roman, serif"
                                >
                                  — документ, представляемый клиентом с
                                  указанием осуществления определенного
                                  действия;<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <b><i>Б</i></b
                                ><b
                                  ><i
                                    ><span lang="KZ"
                                      >иржевое обеспечение (обеспечение) –
                                    </span></i
                                  ></b
                                ><span lang="KZ"
                                  >денежное обеспечение, вносимое на возвратной
                                  основе участниками биржевой торговли
                                  клиринговому центру товарной биржи для участия
                                  в биржевых торгах в качестве обеспечения
                                  исполнения своих обязательств по заключаемым
                                  биржевым сделкам.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <b
                                  ><i
                                    ><span lang="KZ">Участник клиринга</span></i
                                  ></b
                                ><span lang="KZ">
                                  - лицо, заключившее договор об осуществлении
                                  клирингового обслуживания с Клиринговым
                                  центром.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <o:p>&nbsp;</o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="text-align: justify; tab-stops: 81.75pt"
                              >
                                <span
                                  lang="KZ"
                                  style="color: red; mso-ansi-language: KZ"
                                  ><o:p>&nbsp;</o:p></span
                                >
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b
                                  >2. Порядок регистрации участников
                                  клиринга.</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                2.1. Для прохождения клиентом регистрации на
                                Бирже в качестве&nbsp; участника биржевой
                                торговли, клиенты должны заключить договор на
                                клиринговое обслуживание с клиринговым центром
                                Биржи (КЦ).<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                2.2. Для осуществления регистрации клиент
                                предоставляет в клиринговый центр Биржи справку
                                с банка(ов) о наличии банковских счетов
                                <span lang="KZ">и</span><span lang="KZ"> </span
                                ><span lang="KZ"
                                  >свидетельство о государственной регистрации
                                  юридического лица.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                Каждому участнику клиринга присваивается
                                индивидуальный номер клиента. <o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                2.3. После регистрации участника клиринга, КЦ
                                вносит клиента в Реестр участников клиринга.<o:p
                                ></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                2.4. В случае изменения регистрационных данных
                                юридического лица, смены руководителя и/или лица
                                имевшего право подписи, изменении банковских
                                реквизитов участник клиринга обязан
                                незамедлительно уведомить об этом КЦ и
                                представить&nbsp; соответствующие документы.<o:p
                                ></o:p>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >2.5. В случае нарушения п.2.4 настоящих
                                  Правил &nbsp;КЦ не несет ответственности за
                                  перечисление денежных средств на ненадлежащий
                                  банковский счет участника клиринга.</span
                                ><span
                                  lang="KZ"
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                    mso-ansi-language: KZ;
                                  "
                                  ><o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  lang="KZ"
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                    mso-ansi-language: KZ;
                                  "
                                  ><o:p>&nbsp;</o:p></span
                                >
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b>3. Требования к договорам,<o:p></o:p></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b>&nbsp;заключаемым Клиринговым центром</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p class="MsoNormal">
                                3.1. &nbsp;&nbsp;Договор на клиринговое
                                обслуживание заключаются в письменной форме.<o:p
                                ></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                3.2. Договор на клиринговое обслуживание может
                                быть изменён и дополнен по соглашению Сторон.
                                Все изменения и дополнения к договору на
                                клиринговое обслуживание должны быть составлены
                                в письменной форме и подписаны уполномоченными
                                представителями сторон.<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-top: 12pt;
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b>4. Конфиденциальность.</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <span lang="KZ">&nbsp;</span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                4.1. Сведения, составляющие коммерческую тайну
                                на товарной бирже, не подлежат разглашению, за
                                исключением случаев, предусмотренных действующим
                                законодательством Республики Казахстан.<o:p
                                ></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <span class="FontStyle66"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                    >&nbsp;</span
                                  ></span
                                ><span lang="KZ"><o:p></o:p></span>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b
                                  >5. Порядок и способы обеспечения <o:p></o:p
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b
                                  >исполнения обязательств участников
                                  клиринга</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b>&nbsp;</b>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <span class="A6"
                                  ><span
                                    style="
                                      mso-ansi-font-size: 12pt;
                                      mso-bidi-font-size: 12pt;
                                      font-family: Times New Roman, serif;
                                    "
                                    >5.1.
                                  </span></span
                                >Расчеты участников биржевой торговли с товарной
                                биржей производятся в соответствии с правилами
                                осуществления клиринговой деятельности по
                                биржевым сделкам и договорами на клиринговое
                                обслуживание.<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                5.2. &nbsp;Оплата и поставка биржевого товара по
                                сделкам, заключенным на товарной бирже, могут
                                осуществляться следующими способами:<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;1) оплата товара путем открытия счета в
                                расчетной организации, с которой товарной биржей
                                или клиринговой центром, осуществляющей клиринг
                                по результатам биржевых торгов, заключен
                                договор, предусматривающий участие расчетной
                                организации в осуществлении расчетов по сделкам
                                заключенным на биржевых торгах, раскрываемого в
                                случае представления документов, подтверждающих
                                поставку биржевого товара, предусмотренных
                                Правилами Биржи, на которой заключена
                                соответствующая сделка;<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;2) оплата товара через расчетную
                                организацию без открытия счета на условиях
                                "поставка против платежа" при условии
                                депонирования в специализированной организации,
                                определенной Правилами Биржи, в которой
                                заключена соответствующая сделка, простого или
                                двойного складского свидетельства (складского
                                свидетельства, отделенного от залогового
                                свидетельства) или иных документов, определенных
                                Правилами Биржи, подтверждающих факт наличия или
                                отгрузки биржевого товара;<o:p></o:p>
                              </p>

                              <p class="MsoNormal">
                                3)&nbsp; поставка товара на условиях предоплаты
                                товара покупателем;<br />
                                4) &nbsp;оплата товара на условиях предпоставки
                                товара продавцом.<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <span style="letter-spacing: 0.1pt"
                                  >5.3. В Правилах биржи допускается
                                  предусматривать возможность одного или
                                  нескольких способов расчетов по сделкам,
                                  заключенным на биржевых торгах.<o:p></o:p
                                ></span>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <span style="letter-spacing: 0.1pt"
                                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; В случае если
                                  Правилами биржи предусмотрено несколько
                                  способов расчетов по сделкам, заключенным на
                                  биржевых торгах в определенном режиме
                                  торговли, стороны выбирают только один из этих
                                  способов.<o:p></o:p
                                ></span>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                5.4. КЦ&nbsp; несет ответственность,
                                предусмотренную действующим законодательством
                                Республики Казахстан, за сохранность и
                                своевременный возврат&nbsp; обеспечения,
                                вносимых участниками&nbsp; биржевой торговли,
                                зачисленных на банковский счет КЦ.<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                5.5. &nbsp;&nbsp;КЦ выполняет следующие
                                функции:<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) осуществляют
                                сбор и обработку информации по заключенным
                                биржевым сделкам;<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) проводят учет
                                и подтверждение условий заключенных биржевых
                                сделок;<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3) осуществляют
                                зачет взаимных требований и обязательств сторон,
                                участвующих в расчетах, осуществляемых в
                                результате совершения биржевых сделок;<o:p
                                ></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4) принимают и
                                ведут учет биржевого обеспечения участников
                                биржевых торгов;<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5) определяют
                                требования и (или) обязательства сторон по
                                биржевым сделкам, организуют по ним расчеты;<o:p
                                ></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6) оказывают
                                поддержку в исполнении биржевых сделок.<o:p
                                ></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                5.6. Клиринговое обслуживание осуществляется на
                                основании заключенных договоров на клиринговое
                                обслуживание (далее Договор). Договора,
                                заключаемые Клиринговым центром с участниками
                                биржевой торговли должны содержать ссылку на
                                Правила осуществления клиринговой деятельности
                                по биржевым сделкам.<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                <o:p>&nbsp;</o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                "
                              >
                                <b
                                  >6. Порядок внесения и возврата <o:p></o:p
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                "
                              >
                                <b>обеспечения.</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  margin-left: 62.95pt;
                                  text-align: center;
                                  text-indent: -62.95pt;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                6.1. Для участия в торгах, участники клиринга
                                зачисляют обеспечение в КЦ, путем перечисления
                                денежных средств на банковский счет КЦ, в сроки
                                установленные Правилами биржевой торговли.<o:p
                                ></o:p>
                              </p>

                              <p
                                class="MsoBodyText"
                                style="
                                  text-align: justify;
                                  text-indent: -1.2pt;
                                  tab-stops: 49.65pt;
                                "
                              >
                                <span
                                  style="font-family: Times New Roman, serif"
                                  >6.2. Если участник биржевой торговли по
                                  результатам торгов не был признан победителем,
                                  то сумма обеспечения подлежит возврату в
                                  течение трех рабочих дней.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoBodyText"
                                style="
                                  text-align: justify;
                                  text-indent: -1.2pt;
                                  tab-stops: 49.65pt;
                                "
                              >
                                <span
                                  style="font-family: Times New Roman, serif"
                                  >6.3.&nbsp; Возврат обеспечения на участие в
                                  торгах&nbsp; осуществляет специалист
                                  клирингового центра, путем перечисления
                                  денежных средств&nbsp; на расчетный счет
                                  участника клиринга.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-indent: -1.2pt;
                                  tab-stops: 49.65pt 2cm;
                                "
                              >
                                6.4. Если участник биржевой торговли по
                                результатам торгов был признан победителем, то
                                сумма обеспечения подлежит возврату в течение
                                трех рабочих дней, при условии исполнения
                                обязательств по сделки.<span
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
                                >
                                </span
                                ><o:p></o:p>
                              </p>

                              <p
                                class="a0"
                                style="
                                  margin-left: -1.35pt;
                                  text-indent: 0cm;
                                  mso-list: none;
                                  tab-stops: 0cm 2cm;
                                "
                              >
                                <span
                                  style="font-family: Times New Roman, serif"
                                >
                                  6.5.<span
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
                                  >
                                    В случае невыполнения участником биржевой
                                    торговли своих обязательств по биржевой
                                    сделке, внесенное им биржевое обеспечение
                                    подлежит перечислению клиринговым центром
                                    Биржи в пользу пострадавшей стороны</span
                                  >.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="a0"
                                style="
                                  margin-left: 0cm;
                                  text-indent: 0cm;
                                  mso-list: none;
                                  tab-stops: 0cm 2cm;
                                "
                              >
                                <span
                                  lang="KZ"
                                  style="
                                    font-family: Times New Roman, serif;
                                    mso-ansi-language: KZ;
                                  "
                                  >&nbsp;</span
                                >
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b
                                  >7. Порядок формирования реестров<o:p></o:p
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b>&nbsp;Клиринговым центром</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                7.1. КЦ ведет следующие реестры:<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                1) реестр договоров на клиринговое
                                обслуживание;<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                2) реестр участников клиринга;<o:p></o:p>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >3) реестр возврата денежных залогов
                                  участников клиринга; <o:p></o:p
                                ></span>
                              </p>

                              <p class="ConsNormal" style="text-align: justify">
                                <span
                                  style="font-family: Times New Roman, serif"
                                  >Указанные реестры и журналы ведутся
                                  Клиринговым центром в бумажной и/или в
                                  электронной форме. <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >7.2. Реестр участников клиринга
                                  &nbsp;предназначен для однозначной
                                  идентификации участников клиринга и содержит
                                  следующую информацию: <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >1) полное наименование; <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >2) индивидуальный номер участника клиринга;
                                  <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >3) юридический адрес;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >4) почтовый адрес, адрес электронной
                                  почты;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >5) номер телефона, факса;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >6) реквизиты участников клиринга, по которым
                                  осуществляются расчеты;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >7) Ф. И.О. и должность первого
                                  руководителя;<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >8) информацию о принятых Клиринговым центром
                                  дисциплинарных мерах по приостановлению
                                  проведения клиринга по сделкам участника
                                  клиринга или об исключении из списка
                                  участников клиринга.<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >7.3. Реестр возврата денежных залогов
                                  участников клиринга содержит следующую
                                  информацию: <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >1) индивидуальный номер; <o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >2) размер&nbsp; внесенного денежного
                                  залога<o:p></o:p
                                ></span>
                              </p>

                              <p class="Default" style="text-align: justify">
                                <span
                                  style="
                                    font-family: Times New Roman, serif;
                                    color: windowtext;
                                  "
                                  >3) дату и номер реестра возврата.<o:p></o:p
                                ></span>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                7.4. Реестр договоров на клиринговое
                                обслуживание содержит следующую информацию:<o:p
                                ></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                1) дата заключения договора<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                2) наименование клиента<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                3) номер договора.<o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                7.4. Информация, подлежащая отражению в
                                соответствующих реестрах, заносится ежедневно по
                                окончании операционного дня. <o:p></o:p>
                              </p>

                              <p
                                class="MsoNormal"
                                style="
                                  text-align: justify;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b
                                  ><span lang="KZ">8</span>. Общий порядок
                                  осуществления клиринга</b
                                ><b
                                  ><span lang="KZ"><o:p></o:p></span
                                ></b>
                              </p>

                              <p
                                class="MsoNormal"
                                align="center"
                                style="
                                  text-align: center;
                                  text-autospace: ideograph-numeric;
                                "
                              >
                                <b><span lang="KZ">&nbsp;</span></b>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                8.1. &nbsp;Обеспечение поступает непосредственно
                                на банковский &nbsp;счет КЦ.<o:p></o:p>
                              </p>

                              <p class="MsoNormal" style="text-align: justify">
                                8.2. Участник клиринга вправе распоряжаться
                                своими средствами, находящимися на
                                &nbsp;банковском счете КЦ, путем подачи
                                распоряжения КЦ в письменном виде. Все расчеты
                                производятся только по письменному поручению
                                участника клиринга (либо доверенного
                                лица).&nbsp;<o:p></o:p>
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
          <h4 class="widget-title">
            Правила осуществления клиринговой деятельности
          </h4>
          <div class="menu-service-menu-container">
            <ul id="menu-service-menu" class="menu">
              <li class="current-menu-item">
                <a data-link
                  href="/clearing"
                  >Правила осуществления клиринговой деятельности</a
                >
              </li>
              <li>
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
