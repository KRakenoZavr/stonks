export const fetchSavePost = async (newTrade) => {
  // let category = [];
  // document.querySelectorAll("input[type='checkbox']").forEach((el) => {
  //   if (el.checked) category.push(el.value);
  // });
  const resp = await fetch("/savePost", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTrade),
  });
  const check = await resp.json();
  if (check.Status) throw check;
};

export const fetchCommentAdd = async (el) => {
  await fetch(`${location.pathname}/_method=POST`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: el.previousElementSibling.value,
    }),
  });
};

export const fetchCommentDelete = async (el) => {
  await fetch(`${location.pathname}/_method=DELETE`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: el.classList[1],
    }),
  });
};

export const fetchPost = async (el, data) => {
  const resp = await fetch("/rate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: el.classList[1] === "fa-thumbs-up" ? "like" : "dislike",
      target: el.classList[2] === "postRate" ? "post" : "comment",
      targetId: el.classList[3],
      userId: data.User.Id,
    }),
  });
  if (resp.status < 300) return;
  const check = await resp.json();
  if (check.Status) throw check;
};

export const fetchData = async (query) => {
  const response = await fetch(`/api/${query}`);

  if (query === "logout") return;

  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status} `);
  }

  const data = await response.json();
  return data;
};

export const fetchSubmitLogin = async (email, password) => {
  const resp = await fetch("/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname: email,
      password: password,
    }),
  });
  const check = await resp.json();
  if (check.Status) throw check;
};

export const fetchSignUp = async () => {
  const resp = await fetch("/registration", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Email: document.getElementById("email").value,
      Password: document.getElementById("password").value,
      CompanyName: document.getElementById("company_name").value,
      CompanyDirector: document.getElementById("company_director").value,
      CountryId: document.getElementById("country_id").value,
      RegionId: document.getElementById("region_id").value,
      DistrictId: document.getElementById("district_id").value,
      PostalCode: document.getElementById("postal_code").value,
      Address: document.getElementById("registration_address").value,
      BIN: document.getElementById("BIN").value,
      BIK: document.getElementById("bik").value,
      IIK: document.getElementById("iik").value,
      BankName: document.getElementById("bank_name").value,
      ContactName: document.getElementById("contact_name").value,
      ContactPhone: document.getElementById("contact_phone").value,
    }),
  });
  const check = await resp.json();
  if (check.Status) throw check;
};
