import { update } from "../../api/product"
import { router, useEffect, useState } from "../../lib"

export const UpdateProjectPage = ({ id }) => {
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value
            }

            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return /*html*/`
    <div class="row">
        <div class="container text-center col" style="max-width: 224px;">
            <div class="align-items-start">
            ${HeaderAdmin()}
            </div>
        </div>
        <div class="col-10" style="padding-left:50px">
            <div style="border-left: 2px solid rgb(206, 204, 204);margin-top:50px">
            <h1>Update project</h1>
            <form id="update-form">
                <div class="form-group">
                <label for="">Title</label>
                <input type="text" id="title" value="${project.title}" class="form-control" id="title" placeholder="Project title">
                </div>
                <div class="form-group">
                <label for="">Content</label>
                <input type="text" class="form-control" id="content" value="${project.content}" placeholder="Project content">
                </div>
                <div class="form-group">
                <label for="">Image</label>
                <input type="text" class="form-control" id="content" value="${project.img}" placeholder="Project image">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            </div>
        </div>
    </div>
    
    `
}