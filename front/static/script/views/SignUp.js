import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params, data) {
    super(params);
    this.data = data;
    this.setTitle("Регистрация");
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
															<select
																id="country_id"
																class="selectpicker"
																data-live-search="true"
															>
																<option disabled>Выберите страну</option>
																<option value="1">Австралия</option>
																<option value="2">Австрия</option>
																<option value="3">Албания</option>
																<option value="4">Алжир</option>
																<option value="5">Соединенные Штаты</option>
																<option value="6">Американское Самоа</option>
																<option value="7">Ангилья</option>
																<option value="8">Ангола</option>
																<option value="9">Андорра</option>
																<option value="10">Антарктида</option>
																<option value="11">Антигуа и Барбуда</option>
																<option value="12">Аргентина</option>
																<option value="13">Армения</option>
																<option value="14">Аруба</option>
																<option value="15">Афганистан</option>
																<option value="16">Азербайджан</option>
																<option value="17">о-в Св. Елены</option>
																<option value="18">Багамы</option>
																<option value="19">Бангладеш</option>
																<option value="20">Барбадос</option>
																<option value="21">Западная Сахара</option>
																<option value="22">Бахрейн</option>
																<option value="23">Беларусь</option>
																<option value="24">Белиз</option>
																<option value="25">Бельгия</option>
																<option value="26">Бенин</option>
																<option value="27">Бермудские о-ва</option>
																<option value="28">Болгария</option>
																<option value="29">Боливия</option>
																<option value="30">Босния и Герцеговина</option>
																<option value="31">Ботсвана</option>
																<option value="32">Бразилия</option>
																<option value="33">Бруней-Даруссалам</option>
																<option value="34">о-в Буве</option>
																<option value="35">Буркина-Фасо</option>
																<option value="36">Бурунди</option>
																<option value="37">Бутан</option>
																<option value="38">ОАЭ</option>
																<option value="39">Вануату</option>
																<option value="40">Ватикан</option>
																<option value="41">Венгрия</option>
																<option value="42">Венесуэла</option>
																<option value="43">Вьетнам</option>
																<option value="44">Габон</option>
																<option value="45">Гаити</option>
																<option value="46">Гайана</option>
																<option value="47">Гамбия</option>
																<option value="48">Гана</option>
																<option value="49">Гваделупа</option>
																<option value="50">Гватемала</option>
																<option value="51">Гвинея</option>
																<option value="52">Гвинея-Бисау</option>
																<option value="53">Германия</option>
																<option value="54">Гернси</option>
																<option value="55">Гибралтар</option>
																<option value="56">Гондурас</option>
																<option value="57">Греция</option>
																<option value="58">Гренада</option>
																<option value="59">Гренландия</option>
																<option value="60">Грузия</option>
																<option value="61">Гуам</option>
																<option value="62">Дания</option>
																<option value="63">Джерси</option>
																<option value="64">Джибути</option>
																<option value="65">Доминика</option>
																<option value="66">
																	Доминиканская Республика
																</option>
																<option value="67">Новая Зеландия</option>
																<option value="68">Новая Каледония</option>
																<option value="69">Япония</option>
																<option value="70">Замбия</option>
																<option value="71">Зимбабве</option>
																<option value="72">Израиль</option>
																<option value="73">Индонезия</option>
																<option value="74">Иордания</option>
																<option value="75">Ирак</option>
																<option value="76">Иран</option>
																<option value="77">Ирландия</option>
																<option value="78">Исландия</option>
																<option value="79">Испания</option>
																<option value="80">Италия</option>
																<option value="81">Йемен</option>
																<option value="82">Кабо-Верде</option>
																<option value="83">Острова Кайман</option>
																<option value="84">Камбоджа</option>
																<option value="85">Камерун</option>
																<option value="86">Канада</option>
																<option value="87">Катар</option>
																<option value="88">Кения</option>
																<option value="89">Кипр</option>
																<option value="90">Кирибати</option>
																<option value="91">Кокосовые о-ва</option>
																<option value="92">Колумбия</option>
																<option value="93">Коморы</option>
																<option value="94">Конго - Киншаса</option>
																<option value="95">Конго - Браззавиль</option>
																<option value="96">Коста-Рика</option>
																<option value="97">Кот-д’Ивуар</option>
																<option value="98">Куба</option>
																<option value="99">Кувейт</option>
																<option value="100">Острова Кука</option>
																<option value="101">Кюрасао</option>
																<option value="102" selected>Казахстан</option>
																<option value="103">Киргизия</option>
																<option value="104">Китай</option>
																<option value="105">Лаос</option>
																<option value="106">Латвия</option>
																<option value="107">Лесото</option>
																<option value="108">Либерия</option>
																<option value="109">Ливан</option>
																<option value="110">Ливия</option>
																<option value="111">Литва</option>
																<option value="112">Лихтенштейн</option>
																<option value="113">Люксембург</option>
																<option value="114">Маврикий</option>
																<option value="115">Мавритания</option>
																<option value="116">Мадагаскар</option>
																<option value="117">Майотта</option>
																<option value="118">Макао (САР)</option>
																<option value="119">Малави</option>
																<option value="120">Малайзия</option>
																<option value="121">Мали</option>
																<option value="122">Мальдивы</option>
																<option value="123">Мальта</option>
																<option value="124">Марокко</option>
																<option value="125">Мартиника</option>
																<option value="126">Маршалловы Острова</option>
																<option value="127">Мексика</option>
																<option value="128">
																	Федеративные Штаты Микронезии
																</option>
																<option value="129">Мозамбик</option>
																<option value="130">Молдова</option>
																<option value="131">Монако</option>
																<option value="132">Монтсеррат</option>
																<option value="133">Монголия</option>
																<option value="134">Египет</option>
																<option value="135">Мьянма (Бирма)</option>
																<option value="136">о-в Мэн</option>
																<option value="137">Намибия</option>
																<option value="138">Науру</option>
																<option value="139">Непал</option>
																<option value="140">Нигер</option>
																<option value="141">Нигерия</option>
																<option value="142">Нидерланды</option>
																<option value="143">Никарагуа</option>
																<option value="144">Ниуэ</option>
																<option value="145">Норвегия</option>
																<option value="146">о-в Норфолк</option>
																<option value="147">Оман</option>
																<option value="148">
																	Южно-Африканская Республика
																</option>
																<option value="149">Республика Корея</option>
																<option value="150">Южный Судан</option>
																<option value="151">
																	Центрально-Африканская Республика
																</option>
																<option value="152">Узбекистан</option>
																<option value="153">Палау</option>
																<option value="154">
																	Палестинские территории
																</option>
																<option value="155">Панама</option>
																<option value="156">Папуа — Новая Гвинея</option>
																<option value="157">Парагвай</option>
																<option value="158">Пакистан</option>
																<option value="159">Перу</option>
																<option value="160">о-ва Питкэрн</option>
																<option value="161">Польша</option>
																<option value="162">Португалия</option>
																<option value="163">Пуэрто-Рико</option>
																<option value="164">Россия</option>
																<option value="165">Реюньон</option>
																<option value="166">о-в Рождества</option>
																<option value="167">Руанда</option>
																<option value="168">Румыния</option>
																<option value="169">Сальвадор</option>
																<option value="170">Самоа</option>
																<option value="171">Сан-Марино</option>
																<option value="172">Сан-Томе и Принсипи</option>
																<option value="173">Саудовская Аравия</option>
																<option value="174">Эсватини</option>
																<option value="175">Сейшельские Острова</option>
																<option value="176">Сен-Бартелеми</option>
																<option value="177">Сен-Мартен</option>
																<option value="178">Сен-Пьер и Микелон</option>
																<option value="179">Сенегал</option>
																<option value="180">
																	Сент-Винсент и Гренадины
																</option>
																<option value="181">Сент-Китс и Невис</option>
																<option value="182">Сент-Люсия</option>
																<option value="183">Сербия</option>
																<option value="184">Сингапур</option>
																<option value="185">Синт-Мартен</option>
																<option value="186">Сирия</option>
																<option value="187">Словакия</option>
																<option value="188">Словения</option>
																<option value="189">Соломоновы Острова</option>
																<option value="190">КНДР</option>
																<option value="191">Северная Македония</option>
																<option value="192">
																	Северные Марианские о-ва
																</option>
																<option value="193">Сомали</option>
																<option value="194">Судан</option>
																<option value="195">Суринам</option>
																<option value="196">Сьерра-Леоне</option>
																<option value="197">Гонконг (САР)</option>
																<option value="198">Тайвань</option>
																<option value="199">Таиланд</option>
																<option value="200">Танзания</option>
																<option value="201">Таджикистан</option>
																<option value="202">о-ва Тёркс и Кайкос</option>
																<option value="203">Восточный Тимор</option>
																<option value="204">Того</option>
																<option value="205">Токелау</option>
																<option value="206">Тонга</option>
																<option value="207">Тринидад и Тобаго</option>
																<option value="208">Тувалу</option>
																<option value="209">Тунис</option>
																<option value="210">Турция</option>
																<option value="211">Туркменистан</option>
																<option value="212">Уганда</option>
																<option value="213">Украина</option>
																<option value="214">Уоллис и Футуна</option>
																<option value="215">Уругвай</option>
																<option value="216">Великобритания</option>
																<option value="217">
																	Британская территория в Индийском океане
																</option>
																<option value="218">Индия</option>
																<option value="219">Фарерские о-ва</option>
																<option value="220">Фиджи</option>
																<option value="221">Филиппины</option>
																<option value="222">Финляндия</option>
																<option value="223">Фолклендские о-ва</option>
																<option value="224">Франция</option>
																<option value="225">
																	Французские Южные территории
																</option>
																<option value="226">Французская Гвиана</option>
																<option value="227">Французская Полинезия</option>
																<option value="228">
																	о-ва Херд и Макдональд
																</option>
																<option value="229">Хорватия</option>
																<option value="230">Чад</option>
																<option value="231">Черногория</option>
																<option value="232">Чехия</option>
																<option value="233">Чили</option>
																<option value="234">Швейцария</option>
																<option value="235">Швеция</option>
																<option value="236">Шпицберген и Ян-Майен</option>
																<option value="237">Шри-Ланка</option>
																<option value="238">Эквадор</option>
																<option value="239">Экваториальная Гвинея</option>
																<option value="240">Эритрея</option>
																<option value="241">Эстония</option>
																<option value="242">Эфиопия</option>
																<option value="243">Ямайка</option>
															</select>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Область</h6>
															<select id="kato_parent_id">
																<option value="-1">Выберите область</option>
																<option value="1">Акмолинская область</option>
																<option value="1056">Актюбинская область</option>
																<option value="2173">Алматинская область</option>
																<option value="3387">Атырауская область</option>
																<option value="4016">
																	Западно-Казахстанская область
																</option>
																<option value="6053">Жамбылская область</option>
																<option value="6842">
																	Карагандинская область
																</option>
																<option value="8942">Костанайская область</option>
																<option value="9953">
																	Кызылординская область
																</option>
																<option value="10407">
																	Мангистауская область
																</option>
																<option value="10987">
																	Павлодарская область
																</option>
																<option value="11733">
																	Северо-Казахстанская область
																</option>
																<option value="12637">
																	Туркестанская область
																</option>
																<option value="13908">
																	Восточно-Казахстанская область
																</option>
																<option value="16726">г.Нур-Султан</option>
																<option value="16731">г.Алматы</option>
																<option value="16740">г.Шымкент</option>
															</select>
														</div>
														<div class="col-sm-4">
															<h6 class="font12">Район</h6>
															<select id="kato_id">
																<option value="-1">Выберите регион</option>
																<option value="2" class="parent_1">
																	г. Кокшетау
																</option>
																<option value="9" class="parent_1">
																	г. Степногорск
																</option>
																<option value="31" class="parent_1">
																	Аккольский район
																</option>
																<option value="72" class="parent_1">
																	Аршалынский район
																</option>
																<option value="120" class="parent_1">
																	Астраханский район
																</option>
																<option value="174" class="parent_1">
																	Атбасарский район
																</option>
																<option value="229" class="parent_1">
																	Буландынский район
																</option>
																<option value="280" class="parent_1">
																	Егиндыкольский район
																</option>
																<option value="303" class="parent_1">
																	район Биржан сал
																</option>
																<option value="366" class="parent_1">
																	Ерейментауский район
																</option>
																<option value="461" class="parent_1">
																	Есильский район
																</option>
																<option value="518" class="parent_1">
																	Жаксынский район
																</option>
																<option value="570" class="parent_1">
																	Жаркаинский район
																</option>
																<option value="624" class="parent_1">
																	Зерендинский район
																</option>
																<option value="745" class="parent_1">
																	Коргалжынский район
																</option>
																<option value="779" class="parent_1">
																	Сандыктауский район
																</option>
																<option value="841" class="parent_1">
																	Целиноградский район
																</option>
																<option value="914" class="parent_1">
																	Шортандинский район
																</option>
																<option value="958" class="parent_1">
																	Бурабайский район
																</option>
																<option value="1057" class="parent_1056">
																	г. Актобе
																</option>
																<option value="1061" class="parent_1056">
																	Алгинский район
																</option>
																<option value="1136" class="parent_1056">
																	Айтекебийский район
																</option>
																<option value="1185" class="parent_1056">
																	Байганинский район
																</option>
																<option value="1334" class="parent_1056">
																	Каргалинский район
																</option>
																<option value="1372" class="parent_1056">
																	Хобдинский район
																</option>
																<option value="1426" class="parent_1056">
																	Мартукский район
																</option>
																<option value="1489" class="parent_1056">
																	Мугалжарский район
																</option>
																<option value="1564" class="parent_1056">
																	Уилский район
																</option>
																<option value="1658" class="parent_1056">
																	Темирский район
																</option>
																<option value="1743" class="parent_1056">
																	Хромтауский район
																</option>
																<option value="1808" class="parent_1056">
																	Шалкарский район
																</option>
																<option value="2057" class="parent_1056">
																	Иргизский район
																</option>
																<option value="2174" class="parent_2173">
																	г. Талдыкорган
																</option>
																<option value="2186" class="parent_2173">
																	г. Капчагай
																</option>
																<option value="2207" class="parent_2173">
																	г. Текели
																</option>
																<option value="2211" class="parent_2173">
																	Аксуский район
																</option>
																<option value="2278" class="parent_2173">
																	Алакольский район
																</option>
																<option value="2359" class="parent_2173">
																	Балхашский район
																</option>
																<option value="2425" class="parent_2173">
																	Енбекшиказахский район
																</option>
																<option value="2554" class="parent_2173">
																	Жамбылский район
																</option>
																<option value="2644" class="parent_2173">
																	Кегенский район
																</option>
																<option value="2726" class="parent_2173">
																	Кербулакский район
																</option>
																<option value="2806" class="parent_2173">
																	Коксуский район
																</option>
																<option value="2858" class="parent_2173">
																	Каратальский район
																</option>
																<option value="2924" class="parent_2173">
																	Карасайский район
																</option>
																<option value="2995" class="parent_2173">
																	Панфиловский район
																</option>
																<option value="3076" class="parent_2173">
																	Райымбекский район
																</option>
																<option value="3124" class="parent_2173">
																	Саркандский район
																</option>
																<option value="3174" class="parent_2173">
																	Талгарский район
																</option>
																<option value="3233" class="parent_2173">
																	Ескельдинский район
																</option>
																<option value="3278" class="parent_2173">
																	Уйгурский район
																</option>
																<option value="3332" class="parent_2173">
																	Илийский район
																</option>
																<option value="3388" class="parent_3387">
																	г. Атырау
																</option>
																<option value="3427" class="parent_3387">
																	Жылыойский район
																</option>
																<option value="3478" class="parent_3387">
																	Индерский район
																</option>
																<option value="3647" class="parent_3387">
																	Исатайский район
																</option>
																<option value="3698" class="parent_3387">
																	Курмангазинский район
																</option>
																<option value="3767" class="parent_3387">
																	Кзылкогинский район
																</option>
																<option value="3973" class="parent_3387">
																	Макатский район
																</option>
																<option value="3981" class="parent_3387">
																	Махамбетский район
																</option>
																<option value="4017" class="parent_4016">
																	г. Уральск
																</option>
																<option value="4031" class="parent_4016">
																	Акжаикский район
																</option>
																<option value="4292" class="parent_4016">
																	Бурлинский район
																</option>
																<option value="4342" class="parent_4016">
																	Жангалинский район
																</option>
																<option value="4623" class="parent_4016">
																	Жанибекский район
																</option>
																<option value="4768" class="parent_4016">
																	район Бәйтерек
																</option>
																<option value="4879" class="parent_4016">
																	Казталовский район
																</option>
																<option value="5229" class="parent_4016">
																	Каратобинский район
																</option>
																<option value="5315" class="parent_4016">
																	Бокейординский район
																</option>
																<option value="5729" class="parent_4016">
																	Сырымский район
																</option>
																<option value="5834" class="parent_4016">
																	Таскалинский район
																</option>
																<option value="5927" class="parent_4016">
																	Теректинский район
																</option>
																<option value="6005" class="parent_4016">
																	Чингирлауский район
																</option>
																<option value="6054" class="parent_6053">
																	г. Тараз
																</option>
																<option value="6056" class="parent_6053">
																	Байзакский район
																</option>
																<option value="6126" class="parent_6053">
																	Жамбылский район
																</option>
																<option value="6228" class="parent_6053">
																	Жуалынский район
																</option>
																<option value="6309" class="parent_6053">
																	Кордайский район
																</option>
																<option value="6375" class="parent_6053">
																	район Турара Рыскулова
																</option>
																<option value="6514" class="parent_6053">
																	Меркенский район
																</option>
																<option value="6614" class="parent_6053">
																	Мойынкумский район
																</option>
																<option value="6670" class="parent_6053">
																	Сарысуский район
																</option>
																<option value="6731" class="parent_6053">
																	Таласский район
																</option>
																<option value="6784" class="parent_6053">
																	Шуский район
																</option>
																<option value="6843" class="parent_6842">
																	г. Караганда
																</option>
																<option value="6850" class="parent_6842">
																	г. Балхаш
																</option>
																<option value="6857" class="parent_6842">
																	г. Жезказган
																</option>
																<option value="6915" class="parent_6842">
																	г. Каражал
																</option>
																<option value="6919" class="parent_6842">
																	г. Приозерск
																</option>
																<option value="6921" class="parent_6842">
																	г. Сарань
																</option>
																<option value="6925" class="parent_6842">
																	г. Сатпаев
																</option>
																<option value="6930" class="parent_6842">
																	г. Темиртау
																</option>
																<option value="6934" class="parent_6842">
																	г. Шахтинск
																</option>
																<option value="6942" class="parent_6842">
																	Абайский район
																</option>
																<option value="7003" class="parent_6842">
																	Актогайский район
																</option>
																<option value="7360" class="parent_6842">
																	Бухар-Жырауский район
																</option>
																<option value="7468" class="parent_6842">
																	Жанааркинский район
																</option>
																<option value="7587" class="parent_6842">
																	Каркаралинский район
																</option>
																<option value="8066" class="parent_6842">
																	Нуринский район
																</option>
																<option value="8177" class="parent_6842">
																	Осакаровский район
																</option>
																<option value="8258" class="parent_6842">
																	Улытауский район
																</option>
																<option value="8629" class="parent_6842">
																	Шетский район
																</option>
																<option value="8943" class="parent_8942">
																	г. Костанай
																</option>
																<option value="8945" class="parent_8942">
																	г. Аркалык
																</option>
																<option value="9002" class="parent_8942">
																	г. Лисаковск
																</option>
																<option value="9008" class="parent_8942">
																	г. Рудный
																</option>
																<option value="9015" class="parent_8942">
																	Алтынсаринский район
																</option>
																<option value="9055" class="parent_8942">
																	Амангельдинский район
																</option>
																<option value="9124" class="parent_8942">
																	Аулиекольский район
																</option>
																<option value="9183" class="parent_8942">
																	Денисовский район
																</option>
																<option value="9237" class="parent_8942">
																	Жангельдинский район
																</option>
																<option value="9300" class="parent_8942">
																	Житикаринский район
																</option>
																<option value="9335" class="parent_8942">
																	Камыстинский район
																</option>
																<option value="9375" class="parent_8942">
																	Карабалыкский район
																</option>
																<option value="9449" class="parent_8942">
																	Карасуский район
																</option>
																<option value="9520" class="parent_8942">
																	Костанайский район
																</option>
																<option value="9596" class="parent_8942">
																	Мендыкаринский район
																</option>
																<option value="9661" class="parent_8942">
																	Наурзумский район
																</option>
																<option value="9700" class="parent_8942">
																	Сарыкольский район
																</option>
																<option value="9755" class="parent_8942">
																	Тарановский район
																</option>
																<option value="9811" class="parent_8942">
																	Узункольский район
																</option>
																<option value="9881" class="parent_8942">
																	Федоровский район
																</option>
																<option value="9954" class="parent_9953">
																	г. Кызылорда
																</option>
																<option value="9985" class="parent_9953">
																	г. Байконыр
																</option>
																<option value="9987" class="parent_9953">
																	Аральский район
																</option>
																<option value="10070" class="parent_9953">
																	Жалагашский район
																</option>
																<option value="10110" class="parent_9953">
																	Жанакорганский район
																</option>
																<option value="10176" class="parent_9953">
																	Казалинский район
																</option>
																<option value="10244" class="parent_9953">
																	Кармакшинский район
																</option>
																<option value="10288" class="parent_9953">
																	Сырдарьинский район
																</option>
																<option value="10333" class="parent_9953">
																	Чиилийский район
																</option>
																<option value="10408" class="parent_10407">
																	г. Актау
																</option>
																<option value="10412" class="parent_10407">
																	г. Жанаозен
																</option>
																<option value="10420" class="parent_10407">
																	Бейнеуский район
																</option>
																<option value="10533" class="parent_10407">
																	Каракиянский район
																</option>
																<option value="10633" class="parent_10407">
																	Мангистауский район
																</option>
																<option value="10861" class="parent_10407">
																	Мунайлинский район
																</option>
																<option value="10880" class="parent_10407">
																	Тупкараганский район
																</option>
																<option value="10988" class="parent_10987">
																	г. Павлодар
																</option>
																<option value="11003" class="parent_10987">
																	г. Аксу
																</option>
																<option value="11048" class="parent_10987">
																	г. Экибастуз
																</option>
																<option value="11093" class="parent_10987">
																	Актогайский район
																</option>
																<option value="11138" class="parent_10987">
																	Баянаульский район
																</option>
																<option value="11349" class="parent_10987">
																	Железинский район
																</option>
																<option value="11405" class="parent_10987">
																	Иртышский район
																</option>
																<option value="11452" class="parent_10987">
																	район Тереңкөл
																</option>
																<option value="11508" class="parent_10987">
																	район Аққулы
																</option>
																<option value="11546" class="parent_10987">
																	Майский район
																</option>
																<option value="11598" class="parent_10987">
																	Павлодарский район
																</option>
																<option value="11656" class="parent_10987">
																	Успенский район
																</option>
																<option value="11687" class="parent_10987">
																	Щербактинский район
																</option>
																<option value="11734" class="parent_11733">
																	г. Петропавловск
																</option>
																<option value="11736" class="parent_11733">
																	Айыртауский район
																</option>
																<option value="11833" class="parent_11733">
																	Акжарский район
																</option>
																<option value="11871" class="parent_11733">
																	Район Магжана Жумабаева
																</option>
																<option value="11964" class="parent_11733">
																	Есильский район
																</option>
																<option value="12038" class="parent_11733">
																	Жамбылский район
																</option>
																<option value="12114" class="parent_11733">
																	Кызылжарский район
																</option>
																<option value="12206" class="parent_11733">
																	Мамлютский район
																</option>
																<option value="12263" class="parent_11733">
																	Район Шал акына
																</option>
																<option value="12319" class="parent_11733">
																	Аккайынский район
																</option>
																<option value="12365" class="parent_11733">
																	Тайыншинский район
																</option>
																<option value="12470" class="parent_11733">
																	Тимирязевский район
																</option>
																<option value="12512" class="parent_11733">
																	Уалихановский район
																</option>
																<option value="12551" class="parent_11733">
																	Район им.Габита Мусрепова
																</option>
																<option value="12638" class="parent_12637">
																	г. Туркестан
																</option>
																<option value="12640" class="parent_12637">
																	г. Арысь
																</option>
																<option value="12680" class="parent_12637">
																	г. Кентау
																</option>
																<option value="12763" class="parent_12637">
																	район Байдибека
																</option>
																<option value="12854" class="parent_12637">
																	Жетисайский район
																</option>
																<option value="12980" class="parent_12637">
																	Келесский район
																</option>
																<option value="13076" class="parent_12637">
																	Казыгуртский район
																</option>
																<option value="13284" class="parent_12637">
																	Мактааральский район
																</option>
																<option value="13367" class="parent_12637">
																	Ордабасынский район
																</option>
																<option value="13435" class="parent_12637">
																	Отрарский район
																</option>
																<option value="13493" class="parent_12637">
																	Сайрамский район
																</option>
																<option value="13563" class="parent_12637">
																	Сарыагашский район
																</option>
																<option value="13648" class="parent_12637">
																	Сузакский район
																</option>
																<option value="13699" class="parent_12637">
																	Толебийский район
																</option>
																<option value="13767" class="parent_12637">
																	Тюлькубасский район
																</option>
																<option value="13851" class="parent_12637">
																	Шардаринский район
																</option>
																<option value="13909" class="parent_13908">
																	г. Усть-Каменогорск
																</option>
																<option value="13918" class="parent_13908">
																	г. Курчатов
																</option>
																<option value="13920" class="parent_13908">
																	г. Риддер
																</option>
																<option value="13972" class="parent_13908">
																	г. Семей
																</option>
																<option value="14204" class="parent_13908">
																	Абайский район
																</option>
																<option value="14230" class="parent_13908">
																	Аягозский район
																</option>
																<option value="14586" class="parent_13908">
																	Бескарагайский район
																</option>
																<option value="14665" class="parent_13908">
																	Бородулихинский район
																</option>
																<option value="14750" class="parent_13908">
																	Глубоковский район
																</option>
																<option value="14830" class="parent_13908">
																	Жарминский район
																</option>
																<option value="15127" class="parent_13908">
																	Зайсанский район
																</option>
																<option value="15342" class="parent_13908">
																	район Алтай
																</option>
																<option value="15415" class="parent_13908">
																	Кокпектинский район
																</option>
																<option value="15497" class="parent_13908">
																	Курчумский район
																</option>
																<option value="15735" class="parent_13908">
																	Катон-Карагайский район
																</option>
																<option value="15803" class="parent_13908">
																	Тарбагатайский район
																</option>
																<option value="16467" class="parent_13908">
																	Уланский район
																</option>
																<option value="16586" class="parent_13908">
																	Урджарский район
																</option>
																<option value="16670" class="parent_13908">
																	Шемонаихинский район
																</option>
																<option value="16727" class="parent_16726">
																	район Алматы
																</option>
																<option value="16728" class="parent_16726">
																	район Есиль
																</option>
																<option value="16729" class="parent_16726">
																	район Сарыарка
																</option>
																<option value="16730" class="parent_16726">
																	район Байқоңыр
																</option>
																<option value="16732" class="parent_16731">
																	Алмалинский район
																</option>
																<option value="16733" class="parent_16731">
																	Алатауский район
																</option>
																<option value="16734" class="parent_16731">
																	Ауэзовский район
																</option>
																<option value="16735" class="parent_16731">
																	Бостандыкский район
																</option>
																<option value="16736" class="parent_16731">
																	Жетысуский район
																</option>
																<option value="16737" class="parent_16731">
																	Медеуский район
																</option>
																<option value="16738" class="parent_16731">
																	Наурызбайский район
																</option>
																<option value="16739" class="parent_16731">
																	Турксибский район
																</option>
																<option value="16741" class="parent_16740">
																	Абайский район
																</option>
																<option value="16742" class="parent_16740">
																	Аль-Фарабийский район
																</option>
																<option value="16743" class="parent_16740">
																	Енбекшинский район
																</option>
																<option value="16744" class="parent_16740">
																	Каратауский район
																</option>
															</select>
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
														<a class="btn sign_up_btn" href="javascript:;"
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
