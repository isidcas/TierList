import { Home } from './views/Home';
import { List } from './views/List';
import { Login } from './views/Login';
import { TierList } from './views/TierList';
import { NotFound } from './views/NotFound';
import { ViewTierList } from './views/ViewTierList';

export function router() {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase() || '/';
const parts = route.split("/");
const routes = {
'/': Home,
'/list': List,
'/tierlist': TierList,
'/login': Login,
'/viewtierlist':ViewTierList
};

if (parts[1] === "viewtierlist") {
const id = parts[2];
view.innerHTML = ViewTierList(id);
return;
}

const screen = routes[route] || NotFound;
view.innerHTML = screen();
}