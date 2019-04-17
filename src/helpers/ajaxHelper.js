import {
    convertToUrlEncoded
} from './urlEncodingHelper'

const API_BASE_URL = window.Config.webAdminServiceBase + "api/";

export const HTTP_METHODS = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
}

export const HTTP_CONTENT_TYPES = {
    X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
    JSON: "application/json",
    IMAGE: "image/image"
}

export const buildAjaxRequest = function(requestPath, httpMethod, httpContentType, data, accessToken, slug) {
    const headers = {
        "Content-Type": httpContentType
    };
    if(accessToken !== undefined) {
        headers.Authorization = "Bearer " + accessToken;
    }
    if(slug !== undefined) {
        headers.Slug = slug;
    } 
    

    let url = API_BASE_URL + requestPath;
    let request = {
        method: httpMethod,
        headers
    };

    if(httpMethod === HTTP_METHODS.GET) {
        if(data != null) {
            url = url + '?' + convertToUrlEncoded(data);
        }
    }
    else {
        if(httpContentType === HTTP_CONTENT_TYPES.JSON) {
            request.body = JSON.stringify(data);
        }
        else if(httpContentType === HTTP_CONTENT_TYPES.X_WWW_FORM_URLENCODED) {
            request.body = convertToUrlEncoded(data);
        }
        else {
            request.body = data;
        }
    }



    request.url = url;



    return request;
}