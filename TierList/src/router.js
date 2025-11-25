import { Home } from './views/Home';
import { List } from './views/List';
import { Login } from './views/Login';
import { TierList } from './views/TierList';
import { NotFound } from './views/NotFound';
export function router() {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase() || '/';
const routes = {
'/': Home,
'/list': List,
'/tierlist': TierList,
'/login': Login,
};
const screen = routes[route] || NotFound;
view.innerHTML = screen();
}