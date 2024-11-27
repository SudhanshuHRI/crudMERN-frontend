export async function getData(route) {

    const resp = await fetch(`https://crudmern-backend-y7n7.onrender.com${route}`,{credentials: 'include', method: "get"});
    const data = await resp.json();

    return data;

}

export async function postData(route, dataObject) {


    const resp = await fetch(`https://crudmern-backend-y7n7.onrender.com${route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject),
        credentials: 'include'
    });
    const data = await resp.json();

    return data;

}

export async function updateData(route, dataObject) {

    const resp = await fetch(`https://crudmern-backend-y7n7.onrender.com${route}`, {
        method: "PUT",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: dataObject,
        credentials: 'include'
    });
    const data = await resp.json();

    return data;

}

export async function deleteData(route) {

    const resp = await fetch(`https://crudmern-backend-y7n7.onrender.com${route}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    });
    const data = await resp.json();
    return data;

}

