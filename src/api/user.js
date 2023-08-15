import request from "@/utils/request";

export function getListArticle(pageNumber,pageSize){
    return request({
        url:`/users/listArticle?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        method:"GET"
    })
}

export function getArticle(articleId){
    return request({
        url:`/users/getArticle/${articleId}`,
        method:"GET"
    })
}

// http://localhost:3000/users/updateViewCount/1
export function updateViewCount(articleId){
    return request({
        url:`users/updateViewCount/${articleId}`,
        method:"POST"
    })
}

// http://localhost:3000/users/getKeyWord?keyword=Vue
export function getKeyWord(keyword){
    return request({
        url:`/users/getKeyWord?keyword=${keyword}`,
        method:"GET"
    })
}

// http://localhost:3000/users/search?keyword=M
export function search(keyword){
    return request({
        url:`/users/search?keyword=${keyword}`,
        method:"GET"
    })
}

// http://localhost:3000/users/getComments/1
export function getComments(articleId){
    return request({
        url:`/users/getComments/${articleId}`,
        method:"GET"
    })
}

// http://localhost:3000/users/submitComment
export function postComments(data){
    return request({
        url:`/users/submitComment`,
        method:"POST",
        data
    })
}