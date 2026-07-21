
// redacted

const superobfuscatedstuff = "dGhpcyBpcyBhY3R1YWxseSBtZWFuaW5nbGVzcyBoYWhh"

async function wikipediaProxy(location) {
    if (location === null) {
        // TODO: make it so a null location gets u a random wikipedia page
        // shouldn't be hard, i think :P
        return null
    }

    const wikipediaProxyRequestThatIsVeryCoolAndAwesome = await fetch("https://poopfart.pacola444.workers.dev/", {headers: {"X-Pawsword": location}})

    if (wikipediaProxyRequestThatIsVeryCoolAndAwesome.status == 200) {
        const data = await wikipediaProxyRequestThatIsVeryCoolAndAwesome.json()
        return data
    }
    return null
}

// cuz i think it'd be funny if u got redirected to a wikipedia page
async function downloadClick() {
    const params = new URLSearchParams(window.location.search)
    const page = params.get("page")
    
    const info = await wikipediaProxy(page)
    if (info !== null && info.get("link")) // if we got a proper wikipedia link
        window.location.href = info["link"] // go to it :P
    else if (info === null) {
        alert("no download functionality yet")
    }
}