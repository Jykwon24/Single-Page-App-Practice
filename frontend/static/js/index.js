import Dashboard from "./views/Dashboard.js"

// This uses the history.pushState create an entry on the browser history URL
const navigateTo = url => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard }
    // { path: "/posts", view: () => console.log('viewing posts') },
    // { path: "/settings", view: () => console.log('viewing settings') }
  ]

  // Testing each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  })

  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  const view = new match.route.view()

  document.querySelector('#app').innerHTML = await view.getHtml()
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault()
      // when we click on the link, prevent default prevents the defaule behavior
      // which is reloading, then we pass in the link element into the navigate function
      // which swaps the page or view withour reloading the window
      navigateTo(e.target.href)
    }
  })
  router()
})
