import Navigo from "navigo";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import { Management } from "./pages/admin/Management";
import { AddProject } from "./pages/admin/AddProject";
import { UpdateProjectPage } from "./pages/admin/Update";

const app = document.querySelector('#app');

const router = new Navigo("/");

const render = (content, container) => {
    return container.innerHTML = content()
}

router.on("", () => render(HomePage, app))
router.on("/about", () => render(AboutPage, app))
router.notFound(() => render(NotFound, app))
//admin
router.on("/admin/project", () => render(Management, app))
router.on("/admin/add", () => render(AddProject, app))
router.on('/admin/update/:id', ({ data }) => {
    return render(() => {
        return UpdateProjectPage(data)
    }, app)
})

router.resolve()