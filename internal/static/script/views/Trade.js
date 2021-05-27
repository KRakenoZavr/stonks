import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params, data) {
        super(params);
        this.data = data
        this.setTitle("Торги");
    }

    async getHtml() {
        let generatePosts = ``
        for (let i in this.data) {
            if (i === "Posts") {
                this.data[i].forEach((posts) => {
                    generatePosts += `
                    <tr>
                      <td>${posts.Post.Id}</td>
                      <td>
                        <p><a href="/posts/${posts.Post.Id}" data-link>${posts.Post.Title}</a></p>
                        <p><strong>Брокер:</strong>${posts.Post.Broker}</p>
                      </td>
                      <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"${posts.Post.SaleMode}\">${posts.Post.SaleMode === 'Двойной встречный аукцион' ? 'ДВА' : 'СТД'}</td>
                      <td>${posts.Post.Date1}</td>
                      <td>${posts.Post.Date2}</td>
                      <td class=\"no_wrap\">${posts.Post.Sum}</td>
                    </tr>
                    `
                })
            }
        }
    
        return `
<div class=\"page-header\" style=\"background: url(/static/assets/images/trade.jpg) no-repeat center center\">
  <div class=\"container\">
    <div class=\"breadc-box no-line\">
      <div class=\"row\">
        <div class=\"col-md-6\">
          <h1 class=\"page-title\">Торги</h1>
        </div>
        <div class=\"col-md-6 mobile-left text-right\">
          <ul id=\"breadcrumbs\" class=\"breadcrumbs none-style\">
            <li><a href=\"/\">Главная</a></li>
            <li class=\"active\">Торги</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class=\"entry-content\">
  <div class=\"container\">
    <div class=\"row\">
      <div id=\"primary\" class=\"content-area col-sm-12\">
        <main id=\"main\" class=\"site-main\">
          <article class=\"ot_service type-ot_service status-publish has-post-thumbnail hentry\">
            <div class=\"inner-post\">
              <section class=\"wpb_row row-fluid\">
                <div class=\"container\">
                  <div class=\"row\">
                    <div class=\"wpb_column column_container col-sm-12\">
                      <div class=\"column-inner\">
                        <ul class=\"trade_tab\">
                          <li class=\"schedule active\" box_id=\".schedule_box\">Расписание торгов</li>
                          <li class=\"result\" box_id=\".result_box\">Итоги торгов</li>
                        </ul>
                        <div class=\"trade_box schedule_box\" style=\"display: block;\">
                          <div class=\"data_loading\">
                            <div class=\"lds-facebook\">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div class=\"search_box\">
                            <div class=\"row\">
                              <div class=\"col-sm-4\">
                                <label for=\"name_goods\">Наименование товара</label>
                                <input type=\"text\" class=\"form-control form-control-sm name_goods\"
                                  placeholder=\"Введите наименование товара ...\">
                              </div>
                              <div class=\"col-sm-2\">
                                <label for=\"auction_date\">Дата торга</label>
                                <input type=\"text\" class=\"form-control form-control-sm datepicker auction_date
                                  hasDatepicker\" placeholder=\"Введите дата торга ...\" id=\"dp1621964210435\">
                              </div>
                              <div class=\"col-sm-4\">
                                <label for=\"broker\">Брокер</label>
                                <input type=\"text\" class=\"form-control form-control-sm broker\" placeholder=\"Введите
                                  брокера инициатора ...\">
                              </div>
                              <div class=\"col-sm-2\">
                                <a class=\"btn search_btn\" box_id=\"schedule\"><i class=\"fa fa-search\"
                                    aria-hidden=\"true\"></i> &nbsp; Найти</a>
                              </div>
                            </div>
                          </div>
                          <table>
                            <thead>
                              <tr>
                                <th class=\"w50\">Номер</th>
                                <th>Наименование объявления</th>
                                <th class=\"w100\">Режим торговли</th>
                                <th class=\"w100\">Срок подачи</th>
                                <th class=\"w100\">Дата торга</th>
                                <th class=\"w150\">Сумма</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${generatePosts}
                            </tbody>
                          </table>
                          <div class=\"schedule_pagination page-pagination none-style\">
                            <ul class=\"pagination justify-content-end\">
                              <li class=\"page-item disabled\"><span class=\"page-link current prev\">«</span></li>
                              <li class=\"page-item active\"><span class=\"page-link current\">1</span></li>
                              <li class=\"page-item\"><a href=\"#page-2\" class=\"page-link\">2</a></li>
                              <li class=\"page-item\"><a href=\"#page-3\" class=\"page-link\">3</a></li>
                              <li class=\"page-item\"><a href=\"#page-4\" class=\"page-link\">4</a></li>
                              <li class=\"page-item\"><a href=\"#page-5\" class=\"page-link\">5</a></li>
                              <li class=\"page-item\"><a href=\"#page-2\" class=\"page-link next\">»</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class=\"trade_box result_box\" style=\"display: none;\">
                          <div class=\"data_loading\">
                            <div class=\"lds-facebook\">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div class=\"search_box\">
                            <div class=\"row\">
                              <div class=\"col-sm-4\">
                                <label for=\"name_goods\">Наименование товара</label>
                                <input type=\"text\" class=\"form-control form-control-sm name_goods\"
                                  placeholder=\"Введите наименование товара ...\">
                              </div>
                              <div class=\"col-sm-2\">
                                <label for=\"auction_date\">Дата торга</label>
                                <input type=\"text\" class=\"form-control form-control-sm datepicker auction_date
                                  hasDatepicker\" placeholder=\"Введите дата торга ...\" id=\"dp1621964210436\">
                              </div>
                              <div class=\"col-sm-4\">
                                <label for=\"broker\">Брокер</label>
                                <input type=\"text\" class=\"form-control form-control-sm broker\" placeholder=\"Введите
                                  брокера инициатора ...\">
                              </div>
                              <div class=\"col-sm-2\">
                                <a class=\"btn search_btn\" box_id=\"result\"><i class=\"fa fa-search\"
                                    aria-hidden=\"true\"></i> &nbsp; Найти</a>
                              </div>
                            </div>
                          </div>
                          <table>
                            <thead>
                              <tr>
                                <th class=\"w50\">Номер сделки</th>
                                <th class=\"w50\">Режим торга</th>
                                <th class=\"w50\">Дата сделки</th>
                                <th class=\"w100\">Наименование</th>
                                <th class=\"w100\">Сумма сделки</th>
                                <th class=\"w100\">Код брокера</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style=\"text-align: center\">348 (2 474)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">19.04.2117 16:57</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/benzin-ai-92-gost-32513-2013-1625/\"
                                      target=\"_blank\">Бензин АИ-92 ГОСТ 32513-2013</a></p>
                                  <p><strong>Регион и условия:</strong> Восточно-Казахстанская область, Бородулихинский
                                    район</p>
                                </td>
                                <td style=\"text-align: center\">152 145.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">Б006</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">589 (2 715)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 16:05</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/tsement-v-assortimente-2657/\"
                                      target=\"_blank\">Цемент в ассортименте</a></p>
                                  <p><strong>Регион и условия:</strong> DDP, CPT, EXW</p>
                                </td>
                                <td style=\"text-align: center\">223 814 970.40</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД028</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">588 (2 714)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 16:05</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/tsement-v-assortimente-2656/\"
                                      target=\"_blank\">Цемент в ассортименте</a></p>
                                  <p><strong>Регион и условия:</strong> DDP, CPT, EXW</p>
                                </td>
                                <td style=\"text-align: center\">252 296 060.39</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД028</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">590 (2 716)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 16:05</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/tsement-v-assortimente-2658/\"
                                      target=\"_blank\">Цемент в ассортименте</a></p>
                                  <p><strong>Регион и условия:</strong> DDP, CPT, EXW</p>
                                </td>
                                <td style=\"text-align: center\">294 661 723.50</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД028</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">587 (2 713)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 15:38</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/toplivo-dizelnoe-zimnee-2655/\"
                                      target=\"_blank\">Топливо дизельное зимнее</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">170 542 873.50</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД120</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">586 (2 712)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 15:14</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/dizelnoe-toplivo-gost-305-2013-2654/\"
                                      target=\"_blank\">Дизельное топливо ГОСТ 305-2013</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">687 000.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">Б006</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">585 (2 711)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 15:13</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/benzin-ai-92-gost-32513-2013-2653/\"
                                      target=\"_blank\">Бензин АИ-92 ГОСТ 32513-2013</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">5 778 000.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД65</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">U21.1070</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\"
                                  title=\"Стандартный аукцион\">СТД</td>
                                <td style=\"text-align: center\">25.05.2021 14:36</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/truba-d325-s10-st20-gost-8732-55-t-2652/\"
                                      target=\"_blank\">ТРУБА D325 S10 СТ20 ГОСТ 8732 (55 т.)</a></p>
                                  <p><strong>Регион и условия:</strong> Республика Казахстан, Карагандинская область,
                                    Нуринский район, пгт. Шубарколь; DDP, DAP, CIP</p>
                                </td>
                                <td style=\"text-align: center\">32 971 169.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">146</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">583 (2 709)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 13:08</td>
                                <td>
                                  <p><a href=\"https://utb.kz/custom/benzin-ai-92-gost-32513-2013-2651/\"
                                      target=\"_blank\">Бензин АИ-92 ГОСТ 32513-2013</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">519 100.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">Б006</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">582 (2 708)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 13:02</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/dizelnoe-toplivo-evro-zimnee-klassa-2-ekologicheskogo-klassa-k5-dt-z-k5-po-gost-32511-2013-en-590-2009-2650/\"
                                      target=\"_blank\">Дизельное топливо ЕВРО, зимнее, класса 2, экологического класса
                                      К5 (ДТ-З-К5) по ГОСТ 32511-2013 (EN 590:2009)</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">1 058 250.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД105</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">581 (2 707)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 11:31</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/benzin-dlya-dvigatelei-s-iskrovym-zazhiganiem-marka-ai-92-2649/\"
                                      target=\"_blank\">Бензин для двигателей с искровым зажиганием, марка АИ-92</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">210 000.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">138</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">580 (2 706)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 11:15</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/benzin-dlya-dvigatelei-s-iskrovym-zazhiganiem-marka-ai-92-2648/\"
                                      target=\"_blank\">Бензин для двигателей с искровым зажиганием, марка АИ-92</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">88 200.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">138</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">579 (2 705)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 11:14</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/benzin-dlya-dvigatelei-s-iskrovym-zazhiganiem-marka-ai-92-2647/\"
                                      target=\"_blank\">Бензин для двигателей с искровым зажиганием, марка АИ-92</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">73 150.00</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">138</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">578 (2 704)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 10:19</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-ryadovoi-0-300mm-marki-d-podgruppy-dv-dlya-pylevidnogo-szhiganiya-srednevysokoi-zolnosti-2646/\"
                                      target=\"_blank\">Уголь Рядовой (0-300мм) марки Д, подгруппы ДВ, для пылевидного
                                      сжигания, средневысокой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">677 580.56</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">577 (2 703)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 10:18</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-ryadovoi-0-300mm-marki-d-podgruppy-dv-dlya-pylevidnogo-szhiganiya-srednevysokoi-zolnosti-2645/\"
                                      target=\"_blank\">Уголь Рядовой (0-300мм) марки Д, подгруппы ДВ, для пылевидного
                                      сжигания, средневысокой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">2 032 741.68</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">576 (2 702)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 09:46</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-ryadovoi-0-300mm-marki-d-podgruppy-dv-dlya-pylevidnogo-szhiganiya-srednevysokoi-zolnosti-2644/\"
                                      target=\"_blank\">Уголь Рядовой (0-300мм) марки Д, подгруппы ДВ, для пылевидного
                                      сжигания, средневысокой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">677 580.56</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">575 (2 701)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 09:45</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-ryadovoi-0-300mm-marki-d-podgruppy-dv-dlya-pylevidnogo-szhiganiya-srednevysokoi-zolnosti-2643/\"
                                      target=\"_blank\">Уголь Рядовой (0-300мм) марки Д, подгруппы ДВ, для пылевидного
                                      сжигания, средневысокой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">1 355 161.12</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">574 (2 700)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 09:42</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-ryadovoi-0-300mm-marki-d-podgruppy-dv-dlya-pylevidnogo-szhiganiya-srednevysokoi-zolnosti-2642/\"
                                      target=\"_blank\">Уголь Рядовой (0-300мм) марки Д, подгруппы ДВ, для пылевидного
                                      сжигания, средневысокой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">1 693 951.40</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">573 (2 699)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 09:41</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-rassortirovannyi-50-300mm-marki-d-podgruppy-dv-dlya-bytovyh-nuzhd-naseleniya-nizkoi-zolnosti-2641/\"
                                      target=\"_blank\">Уголь Рассортированный (50-300мм) марки Д, подгруппы ДВ, для
                                      бытовых нужд населения, низкой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">2 175 129.60</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                              <tr>
                                <td style=\"text-align: center\">565 (2 691)</td>
                                <td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Двойной
                                  встречный аукцион\">ДВА</td>
                                <td style=\"text-align: center\">25.05.2021 09:40</td>
                                <td>
                                  <p><a
                                      href=\"https://utb.kz/custom/ugol-rassortirovannyi-50-300mm-marki-d-podgruppy-dv-dlya-bytovyh-nuzhd-naseleniya-nizkoi-zolnosti-2633/\"
                                      target=\"_blank\">Уголь Рассортированный (50-300мм) марки Д, подгруппы ДВ, для
                                      бытовых нужд населения, низкой зольности</a></p>
                                  <p><strong>Регион и условия:</strong> </p>
                                </td>
                                <td style=\"text-align: center\">9 788 083.20</td>
                                <td class=\"no_wrap\" style=\"text-align: center\">БД097</td>
                              </tr>
                            </tbody>
                          </table>
                          <div class=\"result_pagination page-pagination none-style\">
                            <ul class=\"pagination justify-content-end\">
                              <li class=\"page-item disabled\"><span class=\"page-link current prev\">«</span></li>
                              <li class=\"page-item active\"><span class=\"page-link current\">1</span></li>
                              <li class=\"page-item\"><a href=\"#page-2\" class=\"page-link\">2</a></li>
                              <li class=\"page-item\"><a href=\"#page-3\" class=\"page-link\">3</a></li>
                              <li class=\"page-item\"><a href=\"#page-4\" class=\"page-link\">4</a></li>
                              <li class=\"page-item\"><a href=\"#page-5\" class=\"page-link\">5</a></li>
                              <li class=\"page-item\"><span class=\"page-link ellipse clickable\">…</span></li>
                              <li class=\"page-item\"><a href=\"#page-89\" class=\"page-link\">89</a></li>
                              <li class=\"page-item\"><a href=\"#page-90\" class=\"page-link\">90</a></li>
                              <li class=\"page-item\"><a href=\"#page-2\" class=\"page-link next\">»</a></li>
                            </ul>
                          </div>
                        </div>
                        <script>
                          document.addEventListener('DOMContentLoaded', function () {
                            $('.search_box input').on('keyup', function (e) {
                              if (e.keyCode === 13) {
                                $('.search_btn').trigger('click');
                              }
                            });
                            var is_pagination = false;
                            $('.search_btn').on('click', function () {
                              var box_id = $(this).attr('box_id');
                              let is_result = (box_id === 'result') ? 1 : 0;
                              let name_goods = $(this).parent().parent().find('.name_goods').val().trim();
                              let auction_date = $(this).parent().parent().find('.auction_date').val().trim();
                              let broker = $(this).parent().parent().find('.broker').val().trim();

                              var post_data = new FormData();
                              post_data.append('is_result', is_result);
                              post_data.append('name_goods', name_goods);
                              post_data.append('auction_date', auction_date);
                              post_data.append('broker', broker);
                              if (is_pagination === true) {
                                post_data.append('page', page);
                              }
                              $.ajax({
                                url: '/get_customs/',
                                type: 'post',
                                async: true,
                                data: post_data,
                                cache: false,
                                contentType: false,
                                processData: false,
                                beforeSend: function () { $('.data_loading').show() },
                                complete: function () { $('.data_loading').hide() }
                              }).done(function (result) {
                                try {
                                  var ajax_data = JSON.parse(result);
                                  show_customs(ajax_data, box_id);
                                } catch (err) { }
                              });
                            });

                            function show_customs(arr_customs, box_id) {
                              $('.' + box_id + '_box table tbody').html('');
                              var new_html = '';

                              $.each(arr_customs, function (key, value) {
                                if (key !== 'count') {
                                  if (box_id === 'schedule') {
                                    new_html += '<tr><td>' + value['cus_number'] + '</td>';
                                    new_html += '<td><p><a href=\"' + value['link'] + '\" target=\"_blank\">' + value['name_goods'] + '</a></p>';
                                    new_html += '<p><strong>Брокер:</strong> ' + value['broker'] + '</p></td>';
                                    new_html += '<td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"' + value['trade_mode'] + '\">' + value['trade_short_mode'] + '</td>';
                                    new_html += '<td>' + value['deadline'] + '</td><td>' + value['auction_date'] + '</td>';
                                    new_html += '<td class=\"no_wrap\">' + value['amount'] + '</td></tr>';
                                  } else {
                                    new_html += '<tr><td style=\"text-align: center\">' + value['ex_number'] + '</td>';
                                    new_html += '<td class=\"to_center\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"' + value['trade_mode'] + '\">' + value['trade_short_mode'] + '</td>';
                                    new_html += '<td style=\"text-align: center\">' + value['results_date'] + '</td>';
                                    new_html += '<td><p><a href=\"' + value['link'] + '\" target=\"_blank\">' + value['name_goods'] + '</a></p>';
                                    new_html += '<p><strong>Регион и условия:</strong> ' + value['region'] + '</p></td>';
                                    new_html += '<td style=\"text-align: center\">' + value['all_summ'] + '</td>';
                                    new_html += '<td class=\"no_wrap\" style=\"text-align: center\">' + value['broker_code'] + '</td></tr>';
                                  }

                                } else {
                                  if (box_id === 'schedule') {
                                    $('.schedule_pagination').pagination('updateItems', value);
                                  } else {
                                    $('.result_pagination').pagination('updateItems', value);
                                  }

                                  if (is_pagination === false) {
                                    if (box_id === 'schedule') {
                                      $('.schedule_pagination').pagination('drawPage', 1);
                                    } else {
                                      $('.result_pagination').pagination('drawPage', 1);
                                    }
                                  }
                                  is_pagination = false;
                                }
                              });
                              $('.' + box_id + '_box table tbody').html(new_html);
                            }
                            if (window.location.hash === '#result') {
                              $('.trade_tab li').removeClass('active');
                              $('.result').addClass('active');
                              $('.trade_box').hide();
                              $('.result_box').show();
                              history.replaceState
                                ? history.replaceState(null, null, window.location.href.split('#')[0])
                                : window.location.hash = '';
                            }
                            $('.trade_tab li').on('click', function () {
                              $('.trade_tab li').removeClass('active');
                              $(this).addClass('active');
                              $('.trade_box').hide();
                              $($(this).attr('box_id')).show();
                            });

                            var page = 1;
                            var sh_count = 99;
                            if (sh_count > 20) {
                              $('.schedule_pagination').pagination({
                                items: sh_count,
                                currentPage: 1,
                                itemsOnPage: 20,
                                onPageClick: function (page_number, event) {
                                  is_pagination = true;
                                  page = page_number;
                                  $('.search_box .search_btn').trigger('click');
                                }
                              });
                            }
                            var res_count = 1798;
                            if (res_count > 20) {
                              $('.result_pagination').pagination({
                                items: res_count,
                                currentPage: 1,
                                itemsOnPage: 20,
                                onPageClick: function (page_number, event) {
                                  is_pagination = true;
                                  page = page_number;
                                  $('.result_box .search_btn').trigger('click');
                                }
                              });
                            }

                            //уақыт плагинін қосу
                            $('.datepicker').datepicker({
                              closeText: 'Закрыть',
                              prevText: 'Предыдущий.',
                              nextText: 'Следующий',
                              monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                              dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                              dateFormat: 'dd.mm.yy',
                              firstDay: 1,
                            });
                            $('[data-toggle=\"tooltip\"]').tooltip();
                          });
                        </script>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</div>
        `;
    }
}