
export const fetchSavePost = async() => {
    let category = [];
    document.querySelectorAll("input[type='checkbox']").forEach(el => { if (el.checked) category.push(el.value) });
    const resp = await fetch('/savePost', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: document.getElementById("description").value,
            name: category,
            theme: document.getElementById("theme").value
        })
    });
    const check = await resp.json()
    if (check.Status) throw check
}

export const fetchCommentAdd = async(el) => {
    await fetch(`${location.pathname}/_method=POST`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: el.previousElementSibling.value
        })
    });
}

export const fetchCommentDelete = async(el) => {
    await fetch(`${location.pathname}/_method=DELETE`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: el.classList[1]
        })
    });
}

export const fetchPost = async(el, data) => {
    const resp = await fetch('/rate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: el.classList[1] === "fa-thumbs-up" ? "like" : "dislike",
            target: el.classList[2] === "postRate" ? "post" : "comment",
            targetId: el.classList[3],
            userId: data.User.Id,
        })
    });
    if (resp.status < 300) return
    const check = await resp.json()
    if (check.Status) throw check
}

export const fetchData = async(query) => {
    const response = await fetch(`/api/${query}`);

    if (query === "logout") return

    if (!response.ok) {
        throw new Error(`An error has occured: ${response.status} `);
    }

    const data = await response.json();
    return data
}

export const fetchSubmitLogin = async () => {
    const resp = await fetch('/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nickname: document.getElementById("login").value,
            password: document.getElementById("password").value
        })
    });
    const check = await resp.json()
    if (check.Status) throw check
}

export const fetchSignUp = async () => {
    const resp = await fetch('/registration', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nickname: document.getElementById("nickname").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("one").checked ? "male" : "female",
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        })
    });
    const check = await resp.json()
    if (check.Status) throw check
}