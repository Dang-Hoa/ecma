import { getAll, remove } from "../../api/product"
import HeaderAdmin from "../../components/Header-admin"
import { useEffect, useState } from "../../lib"

export const Management = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))
        getAll().then((data) => setProject(data))
    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = project.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })
                remove(id).then(() => {
                    const newProjectList = project.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }

    })
    return /*html*/`
    <div class="row">
        <div class="container text-center col" style="max-width: 224px;">
            <div class="align-items-start">
            ${HeaderAdmin()}
            </div>
        </div>
        <div class="col-10" style="padding-left:50px">
            <div style="border-left: 2px solid rgb(206, 204, 204);">
            <div style="margin-top:50px">
            <a href="/admin/project/add"><button>Add Project</button></a>
            </div>
            <table>
            <thead>
                <tr>
                <th scope="col">Stt</th>
                <th scope="col">Project Title</th>
                <th scope="col">Project Content</th>
                <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                ${project.map((item, index) => {
        return `
                        <tr>
                            <th scope="row">${index + 1}</th>
                            <td>${item.title}</td>
                            <td>${item.content}</td>
                            <td>${item.img}</td>
                            <td>
                                <button class="btn-remove" data-id="${item.id}">Delete</button>
                                <a href="/admin/project/update/${item.id}"><button>Update</button></a>
                            </td>
                        </tr>
                    `
    }).join("")}
            </tbody>
            </table>
            </div>
        </div>
    </div>
    
        
        
    `
}