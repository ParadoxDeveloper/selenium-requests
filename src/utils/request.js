let resp = await fetch(arguments[0], {
    method: arguments[1],
    headers: arguments[2],
    body: arguments[3]
})

return {
    ok: resp.ok,
    status_code: resp.status,
    body: resp.text(),
    headers: resp.headers
}