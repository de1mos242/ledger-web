export function redirectToLogin() {
    localStorage.setItem("success_redirect", window.location.href)
    window.location.replace(`${window.location.origin}/oauth2/authorization/keycloak`)
}

export async function makeRequest(url: string, options: object = {}, requireLogin = true) {
    const init: RequestInit = {...options, ...{redirect: "manual"}}
    const res = await fetch(url, init)
    if (res.type === "opaqueredirect") {
        if (requireLogin) {
            redirectToLogin();
        }
    } else {
        return res
    }
}

export async function requestLogout() {
    await fetch("/oauth2/logout", {
        method: "POST",
        // redirect: "manual"
    }).catch((e) => {
        console.log("temporary error logging " + e)
    })
}