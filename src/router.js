export class Router {
  constructor() {
    this.routes = [];
  }
  get(path, handler) {
    this.routes.push({ method: "GET", path, handler });
  }
  handle(request) {
    const url = new URL(request.url);
    const method = request.method;
    for (const route of this.routes) {
      const match = this.match(url.pathname, route.path);
      if (match && method === route.method) {
        return route.handler(request, match.params);
      }
    }
    return new Response("Not found", { status: 404 });
  }
  match(pathname, routePath) {
    const parts = pathname.split("/").filter(Boolean);
    const routeParts = routePath.split("/").filter(Boolean);
    if (parts.length !== routeParts.length) return null;
    const params = {};
    for (let i = 0; i < routeParts.length; i++) {
      const rp = routeParts[i];
      const pp = parts[i];
      if (rp.startsWith(":")) {
        params[rp.slice(1)] = pp;
      } else if (rp !== pp) {
        return null;
      }
    }
    return { params };
  }
}
