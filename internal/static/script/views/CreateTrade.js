import { fetchSavePost } from "../fetcher/fetcher.js";
import { router } from "../router/index.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Создание торга");
  }

  handleBtn() {
    document
      .getElementById("create_torg")
      .addEventListener("click", async () => {
        const newTrade = {
          description: "nope",
          name: "category",
          theme: document.getElementById("theme").value,
          Date1: document.getElementById("Date1").value,
          Date2: document.getElementById("Date2").value,
          Sum: document.getElementById("Sum").value,
          Initiator: document.getElementById("Initiator").value,
          Broker: document.getElementById("Broker").value,
          SaleMode: document.getElementById("SaleMode").value,
          StartPrice: document.getElementById("StartPrice").value,
          Measurment: document.getElementById("Measurment").value,
          Count: document.getElementById("Count").value,
          Docs: document.getElementById("Docs").value,
        };

        try {
          await fetchSavePost(newTrade);
          router();
        } catch (error) {
          this.alerter.show(error);
          console.log("error rate btn", error);
        }
      });
  }

  async getHtml() {
    return `
<div class="page-header">
  <div class="container">
    <div class="breadc-box no-line">
      <div class="row">
        <div class="col-md-6">
          <h1 class="page-title">Создание торга</h1>
        </div>
        <div class="col-md-6 mobile-left text-right">
          <ul id="breadcrumbs" class="breadcrumbs none-style">
            <li><a href="/" data-link>Главная</a></li>
            <li class="active">Создание торга</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="content" class="site-content">
		<div class="entry-content">
			<div class="container">
				<div class="boxed-content">
					<section class="wpb_row row-fluid section-padd no-bot">
						<div class="container">
							<div class="row">
								<div class="wpb_column column_container col-sm-12">
									<div class="column-inner">
										<div class="wpb_wrapper sign_up_box">
											<div class="career-box">
												<h5>Создание торга</h5>
												<div class="content-box" style="display: block">
													<div class="row">
														<div class="col-sm-6">
															<h6 class="font12">Срок подачи заявки</h6>
															<p>
																<input
																	id="Date1"
																	value=""
																	type="text"
																	class="form-control"
																	required
																	placeholder="Введите срок подачи заявки ..."
																/>
															</p>
														</div>
														<div class="col-sm-6">
															<h6 class="font12">Дата торга</h6>
															<p>
																<input
																	id="Date2"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите дата торга ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-6">
															<h6 class="font12">
                                Наименование объявления
															</h6>
															<p>
																<input
																	id="theme"
																	value=""
																	type="text"
																	class="form-control"
																	limit="6"
																	required
																	placeholder="Введите наименование объявления ..."
																/>
															</p>
														</div>
														<div class="col-sm-6">
															<h6 class="font12">Инициатор/Заказчик торга</h6>
															<p>
																<input
																	id="Initiator"
																	value=""
																	type="text"
																	class="form-control"
																	limit="5"
																	required
																	placeholder="Введите Инициатор/Заказчик торга ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">Сумма</h6>
															<p>
																<input
																	id="Sum"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Сумма ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Cтартовая цена за единицу</h6>
															<p>
																<input
																	id="StartPrice"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Cтартовая цена за единицу ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Ед. изм.</h6>
															<p>
																<input
																	id="Measurment"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Ед. изм. ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">Количество</h6>
															<p>
																<input
																	id="Count"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Количество ..."
																/>
															</p>
														</div>
														<div class="col-sm-8">
															<h6 class="font12">Брокер Инициатора/Заказчика торга</h6>
															<p>
																<input
																	id="Broker"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Брокер Инициатора/Заказчика торга ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">Режим торговли</h6>
															<p>
																<input
																	id="SaleMode"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите Режим торговли ..."
																/>
															</p>
														</div>
														<div class="col-sm-8">
															<h6 class="font12">Документы</h6>
															<p>
																<input
																	id="Docs"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Документы ..."
																/>
															</p>
														</div>
													</div>
													<div class="step_box">
														<a class="btn sign_up_btn" id="create_torg""
															>Отправить</a
														>
														<span></span>
													</div>
												</div>
											</div>
											<div class="empty_space_45"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
    `;
  }
}
