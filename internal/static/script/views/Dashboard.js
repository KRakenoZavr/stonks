import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params, data) {
        super(params);
        this.data = data;
        this.setTitle("АО «Универсальная торговая биржа «Астана»");
    }

    async getHtml() {

        return `
        <section class="fullwidthbanner-container">
        <div class="slider-container">
          <ul class="slider-pagi"></ul>
          <div class="slider">
            <div class="slide slide-0 active">
              <div
                class="slide__bg"
                style="
                  background-image: url(static/assets/images/sliders/slider_bg_1.jpg);
                "
              ></div>
              <div class="slide__content">
                <div class="slide__text">
                  <h2 class="slide__text-heading">Биржа по новому</h2>
                  <a class="btn" href="/post/zakon" data-link
                    >Подробнее</a
                  >
                </div>
              </div>
            </div>
            <script>
              document.addEventListener("DOMContentLoaded", function () {
                var $ = jQuery;
                var $slider = $(".slider"),
                  $slideBGs = $(".slide__bg"),
                  diff = 0,
                  curSlide = 0,
                  numOfSlides = $(".slide").length - 1,
                  animating = false,
                  animTime = 500,
                  autoSlideTimeout,
                  autoSlideDelay = 6000,
                  $pagination = $(".slider-pagi");

                function createBullets() {
                  for (var i = 0; i < numOfSlides + 1; i++) {
                    var $li = $("<li class='slider-pagi__elem'></li>");
                    $li.addClass("slider-pagi__elem-" + i).data("page", i);
                    if (!i) $li.addClass("active");
                    $pagination.append($li);
                  }
                }

                createBullets();

                function manageControls() {
                  $(".slider-control").removeClass("inactive");
                  if (!curSlide)
                    $(".slider-control.left").addClass("inactive");
                  if (curSlide === numOfSlides)
                    $(".slider-control.right").addClass("inactive");
                }

                function autoSlide() {
                  autoSlideTimeout = setTimeout(function () {
                    curSlide++;
                    if (curSlide > numOfSlides) curSlide = 0;
                    changeSlides();
                  }, autoSlideDelay);
                }

                autoSlide();

                function changeSlides(instant) {
                  if (!instant) {
                    animating = true;
                    manageControls();
                    $slider.addClass("animating");
                    $slider.css("top");
                    $(".slide").removeClass("active");
                    $(".slide-" + curSlide).addClass("active");
                    setTimeout(function () {
                      $slider.removeClass("animating");
                      animating = false;
                    }, animTime);
                  }
                  window.clearTimeout(autoSlideTimeout);
                  $(".slider-pagi__elem").removeClass("active");
                  $(".slider-pagi__elem-" + curSlide).addClass("active");
                  $slider.css(
                    "transform",
                    "translate3d(" + -curSlide * 100 + "%,0,0)"
                  );
                  $slideBGs.css(
                    "transform",
                    "translate3d(" + curSlide * 50 + "%,0,0)"
                  );
                  diff = 0;
                  autoSlide();
                }

                function navigateLeft() {
                  if (animating) return;
                  if (curSlide > 0) curSlide--;
                  changeSlides();
                }

                function navigateRight() {
                  if (animating) return;
                  if (curSlide < numOfSlides) curSlide++;
                  changeSlides();
                }

                $(document).on(
                  "mousedown touchstart",
                  ".slider",
                  function (e) {
                    if (animating) return;
                    window.clearTimeout(autoSlideTimeout);
                    var startX = e.pageX || e.originalEvent.touches[0].pageX,
                      winW = $(window).width();
                    diff = 0;

                    $(document).on("mousemove touchmove", function (e) {
                      var x = e.pageX || e.originalEvent.touches[0].pageX;
                      diff = ((startX - x) / winW) * 70;
                      if (
                        (!curSlide && diff < 0) ||
                        (curSlide === numOfSlides && diff > 0)
                      )
                        diff /= 2;
                      $slider.css(
                        "transform",
                        "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)"
                      );
                      $slideBGs.css(
                        "transform",
                        "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)"
                      );
                    });
                  }
                );

                $(document).on("mouseup touchend", function (e) {
                  $(document).off("mousemove touchmove");
                  if (animating) return;
                  if (!diff) {
                    changeSlides(true);
                    return;
                  }
                  if (diff > -8 && diff < 8) {
                    changeSlides();
                    return;
                  }
                  if (diff <= -8) {
                    navigateLeft();
                  }
                  if (diff >= 8) {
                    navigateRight();
                  }
                });

                $(document).on("click", ".slider-control", function () {
                  if ($(this).hasClass("left")) {
                    navigateLeft();
                  } else {
                    navigateRight();
                  }
                });

                $(document).on("click", ".slider-pagi__elem", function () {
                  curSlide = $(this).data("page");
                  changeSlides();
                });
              });
            </script>
          </div>
        </div>
      </section>

      <section class="wpb_row row-fluid section-padd bg-first">
        <div class="container">
          <div class="row">
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/23f21dd1f10bd084b7b77fcc570233c4.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Расписание</h4>
                      <p>Расписание предстоящих торгов</p>
                      <a
                        class="link-box pagelink"
                        href="/trade"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/770ebf4d10c52001dd298c4b15e42c3c.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Итоги</h4>
                      <p>Итоги проведенных торгов</p>
                      <a
                        class="link-box pagelink"
                        href="/trade"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/84941767ae2492f344cc0a89bcdfbb5a.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Список Брокеров</h4>
                      <p>Описание</p>
                      <a
                        class="link-box pagelink"
                        href="/members"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/b0a588c847b9b452d3d3da94c57ade75.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Клиринг</h4>
                      <p>Клиринговая организация</p>
                      <a
                        class="link-box pagelink"
                        href="/post/kliringovaya"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/54486bd3a29caaf2b5b7194a3bd5d0e0.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Биржевой арбитраж</h4>
                      <p>Описание</p>
                      <a
                        class="link-box pagelink"
                        href="/arbitrage"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6 col-md-4">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="service-box icon-box ionic hover-box">
                    <img
                      src="static/assets/images/shortcuts/1576bd07512973ac8c8cd342dc9850b7.png"
                      width="70"
                    />
                    <div class="content-box">
                      <h4>Гарантийный и страховой фонд</h4>
                      <p></p>
                      <a
                        class="link-box pagelink"
                        href="/about"
                        target="_self"
                        data-link
                        >Подробнее</a
                      >
                    </div>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wpb_row row-fluid section-padd bg-second row-has-fill">
        <div class="container">
          <div class="row">
            <div class="wpb_column column_container col-sm-6">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <h2 class="custom_heading text-white">Регистрация</h2>
                  <div class="wpb_text_column wpb_content_element text-gray">
                    <div class="wpb_wrapper">
                      <p>
                        Чтобы получить доступ к торгам, пожалуйста
                        зарегестрируйтесь
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column column_container col-sm-6">
              <div class="column-inner">
                <div class="wpb_wrapper">
                  <div class="wpcf7 reg_form">
                    <div class="screen-reader-response"></div>
                    <form action="/sign_up" method="post">
                      <div class="row" style="margin-bottom: 10px">
                        <div class="col-md-6">
                          <input
                            name="company_name"
                            class="post_data"
                            type="text"
                            placeholder="Введите наименование физического/юридического лица ..."
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            name="company_director"
                            class="post_data"
                            type="text"
                            placeholder="Ф.И.О. первого руководителя ..."
                          />
                        </div>
                      </div>
                      <div class="row" style="margin-bottom: 10px">
                        <div class="col-md-6">
                          <input
                            name="email"
                            type="text"
                            class="post_data"
                            placeholder="Введите email ..."
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            name="contact_phone"
                            class="post_data"
                            type="text"
                            placeholder="Введите номер телефона ..."
                          />
                        </div>
                      </div>
                      <p>
                        <input
                          type="submit"
                          value="Регистрация"
                          class="btn reg_post"
                        />
                      </p>
                      <div
                        class="wpcf7-response-output wpcf7-display-none"
                      ></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `;
    }
}


{/* <section class="wpb_row row-fluid section-padd bg-light">
  <div class="container">
    <div class="row">
      <div class="wpb_column column_container col-sm-12 col-md-9">
        <div class="column-inner">
          <div class="wpb_wrapper">
            <div class="section-head">
              <h2 class="section-title">Новости</h2>
            </div>
            <div class="empty_space_30 md-hidden sm-hidden">
              <span class="empty_space_inner"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="wpb_column column_container col-sm-12 col-md-3">
        <div class="column-inner">
          <div class="wpb_wrapper">
            <div
              class="wpb_text_column wpb_content_element text-right mobile-left"
            >
              <div class="wpb_wrapper">
                <p>
                  <a class="pagelink gray" href="/news">Все новости</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wpb_column column_container col-sm-12">
        <div class="column-inner">
          <div class="wpb_wrapper">
            <div
              class="news-slider posts-grid row"
              data-show="3"
              data-auto="true"
            >
              <div>
                <article class="news-item content-area">
                  <div class="inner-item radius-top">
                    <div class="thumb-image">
                      <a
                        href="/post/tseny-na-neft-segodnya-slabo-rastut-posle-neodnoznachnyh-torgov-nakanune-785/"
                      >
                        <img
                          src="static/assets/images/post_items/c5adc082ad0f203027f0c16acffe8ddc.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="inner-post radius-bottom">
                      <div class="entry-meta">
                        <span class="posted-on">
                          <time class="entry-date"
                            >9 желтоқсан, 2020</time
                          >
                        </span>
                      </div>
                      <h4 class="entry-title">
                        <a
                          href="/post/tseny-na-neft-segodnya-slabo-rastut-posle-neodnoznachnyh-torgov-nakanune-785/"
                          >Цены на нефть сегодня слабо растут после
                          неоднозначных торгов накануне</a
                        >
                      </h4>
                      <a
                        class="post-link"
                        href="/post/tseny-na-neft-segodnya-slabo-rastut-posle-neodnoznachnyh-torgov-nakanune-785/"
                        >Подробнее</a
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article class="news-item content-area">
                  <div class="inner-item radius-top">
                    <div class="thumb-image">
                      <a
                        href="/post/s-14-dekabrya-na-kase-nachnutsya-torgi-aktsiyami-chastnogo-zolotohranilisha-784/"
                      >
                        <img
                          src="static/assets/images/post_items/8394fa94176821a6845baa8e736bf148.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="inner-post radius-bottom">
                      <div class="entry-meta">
                        <span class="posted-on">
                          <time class="entry-date"
                            >9 желтоқсан, 2020</time
                          >
                        </span>
                      </div>
                      <h4 class="entry-title">
                        <a
                          href="/post/s-14-dekabrya-na-kase-nachnutsya-torgi-aktsiyami-chastnogo-zolotohranilisha-784/"
                          >С 14 декабря на KASE начнутся торги акциями
                          частного золотохранилища...
                        </a>
                      </h4>
                      <a
                        class="post-link"
                        href="/post/s-14-dekabrya-na-kase-nachnutsya-torgi-aktsiyami-chastnogo-zolotohranilisha-784/"
                        >Подробнее</a
                      >
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article class="news-item content-area">
                  <div class="inner-item radius-top">
                    <div class="thumb-image">
                      <a
                        href="/post/dollar-zakryl-torgi-na-otmetke-420-tenge-783/"
                      >
                        <img
                          src="static/assets/images/post_items/d6eace36ab7cbb37c9c61f98f45c1bcf.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="inner-post radius-bottom">
                      <div class="entry-meta">
                        <span class="posted-on">
                          <time class="entry-date"
                            >9 желтоқсан, 2020</time
                          >
                        </span>
                      </div>
                      <h4 class="entry-title">
                        <a
                          href="/post/dollar-zakryl-torgi-na-otmetke-420-tenge-783/"
                          >Доллар закрыл торги на отметке 420 тенге</a
                        >
                      </h4>
                      <a
                        class="post-link"
                        href="/post/dollar-zakryl-torgi-na-otmetke-420-tenge-783/"
                        >Подробнее</a
                      >
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}