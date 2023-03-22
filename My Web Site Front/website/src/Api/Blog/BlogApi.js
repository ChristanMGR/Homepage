import axios from "axios";

const Api = axios.create({ 
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
        "Content-Type": "application/json",}
})


//read function with endpoint for the ListAPIView class
export const getPosts = async (pageNumber) => {
    const respose = await Api.get(`blog/?page=${pageNumber}`)
    return respose.data
}

export const getSinglePost = async () => {
    const respose = await Api.get(`blog/`)
    return respose.data
}

const config = {headers: {"Content-Type": "multipart/form-data"}}
//create function with the endpoint for the RetrieveUpdateDestroyAPIView class
export const addPost = async(post) => {
    return await Api.post("blog/create", post, config)
}


//update function with the endpoint for the RetrieveUpdateDestroyAPIView class
export const updatePost = async(post) => {
    return await Api.patch(`blog/update/${post.id}`, post)
}


//delete function with the endpoint for the RetrieveUpdateDestroyAPIView class
export const deletePost = async({id}) => {
    return await Api.delete(`blog/delete/${id}`, id)
}



//get funktion for the projects
export const getProjList = async(pageParam = 1, options = {}) => {
   const respose = await Api.get(`projects/?page=${pageParam}`, options)
   return respose.data
}




export const getImgs = async () => {
    const respose = await Api.get(`images/`)
    return respose.data
}







export default Api



