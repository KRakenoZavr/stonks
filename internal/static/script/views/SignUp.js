import { fetchSignUp } from "../fetcher/fetcher.js";
import { navigateTo } from "../router/index.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Регистрация");
  }

  checkForm() {
    const qs = document.querySelector.bind(document);
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      mailRegex = /^\S+@\S+\.\S+$/;
    if (!qs("#email").value || !qs("#email").value.match(mailRegex)) {
      this.alerter.show("Пожалуйста, введите правильный email");
      return false;
    }
    if (
      !qs("#password").value ||
      qs("#password").value !== qs("#password2").value
    ) {
      this.alerter.show("Пароли не совпадают");
      return false;
    }
    if (!qs("#company_name").value) {
      this.alerter.show("Введите наименование физ./юр. лица");
      return false;
    }
    if (!qs("#company_director").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#country_id").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#region_id").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#district_id").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#postal_code").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#registration_address").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#BIN").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#bik").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#iik").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#bank_name").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#contact_name").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    if (!qs("#contact_phone").value) {
      this.alerter.show("Заполните все поля");
      return false;
    }
    return true;
  }

  handleBtn() {
    document
      .querySelector("#sign_up_btn")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (!this.checkForm()) return false;

        try {
          await fetchSignUp();
          navigateTo("/");
          this.accepter.show("Вы успешно зарегистрировались");
        } catch (error) {
          console.error("Fetch error: ", error);
          this.alerter.show(error.ErrorText);
        }
      });
  }

  async getHtml() {
    return `
		<div
		class="page-header"
		style="
			background: url(static/assets/images/sign_up.jpg) no-repeat center
				center;
		"
	>
		<div class="container">
			<div class="breadc-box no-line">
				<div class="row">
					<div class="col-md-6">
						<h1 class="page-title">Регистрация</h1>
					</div>
					<div class="col-md-6 mobile-left text-right">
						<ul id="breadcrumbs" class="breadcrumbs none-style">
							<li><a href="/" data-link>Главная</a></li>
							<li class="active">Регистрация</li>
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
												<h5>Регистрация</h5>
												<div class="content-box" style="display: block">
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">email:</h6>
															<p>
																<input
																	id="email"
																	value=""
																	type="email"
																	class="form-control"
																	required
																	placeholder="Введите действующий email адрес ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Пароль:</h6>
															<p>
																<input
																	id="password"
																	type="password"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите пароль ..."
																	autocomplete="new-password"
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Подтверждение пароля:</h6>
															<p>
																<input
																	id="password2"
																	type="password"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите повторно пароль ..."
																	autocomplete="new-password"
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-6">
															<h6 class="font12">
																Наименование физического/юридического лица:
															</h6>
															<p>
																<input
																	id="company_name"
																	value=""
																	type="text"
																	class="form-control"
																	limit="6"
																	required
																	placeholder="Введите наименование физического/юридического лица ..."
																/>
															</p>
														</div>
														<div class="col-sm-6">
															<h6 class="font12">Ф.И.О. первого руководителя:</h6>
															<p>
																<input
																	id="company_director"
																	value=""
																	type="text"
																	class="form-control"
																	limit="5"
																	required
																	placeholder="Введите Ф.И.О. первого руководителя ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">Страна</h6>
															<p>
																<input
																	id="country_id"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Улица, дом, офис ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Область</h6>
															<p>
																<input
																	id="region_id"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите область ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Район</h6>
															<p>
																<input
																	id="district_id"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите район ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">Индекс:</h6>
															<p>
																<input
																	id="postal_code"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Введите индекс ..."
																/>
															</p>
														</div>
														<div class="col-sm-8">
															<h6 class="font12">Улица, дом, офис:</h6>
															<p>
																<input
																	id="registration_address"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Улица, дом, офис ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<h6 class="font12">БИН/ИНН:</h6>
															<p>
																<input
																	id="BIN"
																	type="text"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите БИН/ИНН ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">БИК:</h6>
															<p>
																<input
																	id="bik"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Введите БИК ..."
																/>
															</p>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">ИИК:</h6>
															<p>
																<input
																	id="iik"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Введите ИИК ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-12">
															<h6 class="font12">Обслуживающий банк:</h6>
															<p>
																<input
																	id="bank_name"
																	type="text"
																	class="form-control2"
																	limit="4"
																	required
																	placeholder="Введите название обслуживающего банка ..."
																/>
															</p>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-6">
															<h6 class="font12">Контактное лицо:</h6>
															<p>
																<input
																	id="contact_name"
																	type="text"
																	class="form-control"
																	limit="4"
																	required
																	placeholder="Введите имя контактного лица ..."
																/>
															</p>
														</div>
														<div class="col-sm-6">
															<h6 class="font12">
																Номер телефона контакного лица:
															</h6>
															<p>
																<input
																	id="contact_phone"
																	value=""
																	type="text"
																	data-mask="+7 000 000 0000"
																	class="form-control"
																	limit="8"
																	required
																	placeholder="Введите номер телефона контакного лица: ..."
																/>
															</p>
														</div>
													</div>
													<div class="step_box">
														<a class="btn sign_up_btn" id="sign_up_btn""
															>Регистрация</a
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
