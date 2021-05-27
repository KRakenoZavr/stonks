import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params, data) {
        super(params);
        this.data = data;
        this.postId = params.id;
        this.setTitle(this.data.Post.Title);
    }

    async getHtml() {

        return `
        <div class="page-header" style="background: url(/static/assets/images/trade.jpg) no-repeat center center">
        <div class="container">
          <div class="breadc-box no-line">
            <div class="row">
              <div class="col-md-6">
                <h1 class="page-title">${this.data.Post.Title}</h1>
              </div>
              <div class="col-md-6 mobile-left text-right">
                <ul id="breadcrumbs" class="breadcrumbs none-style">
                  <li><a href="/">Главная</a></li>
                  <li><a href="/trade">Торги</a></li>
                  <li class="active">${this.data.Post.Title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="entry-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 content-area">
              <div class="inner-post">
                <table>
                  <tbody><tr>
                    <td class="cs_header" colspan="2">Просмотр объявления ${this.data.Post.Id}</td>
                  </tr>
                  <tr>
                    <td class="cs_row">Наименование объявления</td>
                    <td class="cs_data">${this.data.Post.Title}</td>
                  </tr>
                              <tr>
                    <td class="cs_row">Срок подачи заявки</td>
                    <td class="cs_data">${this.data.Post.Date1}</td>
                  </tr>
                                          <tr>
                    <td class="cs_row">Дата торга</td>
                    <td class="cs_data">${this.data.Post.Date2}</td>
                  </tr>
                              <tr>
                    <td class="cs_row">Сумма</td>
                    <td class="cs_data">${this.data.Post.Sum}</td>
                  </tr>
                              <tr>
                    <td class="cs_row">Инициатор/Заказчик торга</td>
                    <td class="cs_data"> ${this.data.Authed ? this.data.Post.Initiator : 'Для просмотра <a class="signIn"> войдите в систему</a> или <a href="/sign_up" data-link>зарегестрируйтесь</a>'} </td>
                  </tr>
                  <tr>
                    <td class="cs_row">Брокер Инициатора/Заказчика торга</td>
                    <td class="cs_data">${this.data.Post.Broker}</td>
                  </tr>
                              <tr>
                    <td class="cs_row">Режим торговли</td>
                    <td class="cs_data">${this.data.Post.SaleMode}</td>
                  </tr>
                  <tr>
                    <td class="cs_row">Cтартовая цена за единицу</td>
                    <td class="cs_data">${this.data.Post.StartPrice}</td>
                  </tr>
                  <tr>
                    <td class="cs_row">Ед. изм.</td>
                    <td class="cs_data">${this.data.Post.Measurment}</td>
                  </tr>
                  <tr>
                    <td class="cs_row">Количество</td>
                    <td class="cs_data">${this.data.Post.Count}</td>
                  </tr>
                  <tr>
                    <td class="cs_row">Документы</td>
                    <td class="cs_data"> ${this.data.Authed ? this.data.Post.Docs : 'Для просмотра <a class="signIn"> войдите в систему</a> или <a href="/sign_up" data-link>зарегестрируйтесь</a>'} </td>
                  </tr>
                </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    }
}