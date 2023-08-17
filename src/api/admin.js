import request from "@/utils/request";

// http://localhost:3000/v1/getProfile
export function getProfile(){
    return request({
        url:`/v1/getProfile`,
        method:"GET"
    })
}

// http://localhost:3000/v1/deleteImage/bruce-tang-nKO_1QyFh9o-unsplash.jpg
export function delImg(imgName){
    return request({
        url:`/v1/deleteImage/${imgName}`,
        method:"DELETE"
    })
}

// http://localhost:3000/v1/createArticle
export function publishArticles(data){
    return request({
        url:`/v1/createArticle`,
        method:"POST",
        data
    })
}

// http://localhost:3000/v1/listArticle?pageNumber=1&sizePage=5
export function getArticle(pageNumber, sizePage){
    return request({
        url:`/v1/listArticle?pageNumber=${pageNumber}&sizePage=${sizePage}`,
        method:"GET"
    })
}
// http://localhost:3000/v1/getAllComments
export function getAllComments(){
    return request({
        url:`/v1/getAllComments`,
        method:"GET"
    })
}