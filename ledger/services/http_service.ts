export async function makeRequest(url: string, options: object = {}) {
    const init: RequestInit = {...options, ...{redirect: "manual"}}
    const res = await fetch(url, init)
    if (res.type === "opaqueredirect") {
        window.location.replace(`${window.location.origin}/oauth2/authorization/keycloak`)
    } else {
        return res
    }
}