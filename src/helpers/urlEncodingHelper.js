
export function convertToUrlEncoded(data) {
    return Object.keys(data).map(
        key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    ).join('&');
}

export function convertToQueryString(data) {
    return "?" + convertToUrlEncoded(data);
}

export function convertToObject(urlEncoded) {
    var obj = {};
    var pairs = urlEncoded.split('&');
    for(var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return obj;
}

export function convertQueryStringToObject(queryString) {
    return convertToObject(queryString.substring(1));
}