import {API} from '../../../Config';

export const posts= ()=>{
    return fetch(`${API}/posts`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const postBy = (userId)=>{
    return fetch(`${API}/post/by/${userId}`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const newPost = (userId,token,post) =>{
    return fetch(`${API}/post/new/${userId}`,
    {method:"POST",
    headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
    },
    body:post
})
.then(response=>{
    return response.json();
})
.catch(error=>console.log(error))
}

export const photoAPI = `${API}/posts/photo/`;

export const singlePost = (postId)=>{
    return fetch(`${API}/post/${postId}`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};

export const deletePost = (postId, token)=>{
    return fetch(`${API}/post/${postId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
    })
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};

export const update = (postId, token, post) => {
    console.log(postId, token, post);
    return fetch(`${API}/post/${postId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const like = (userId, token, postId) => {
    return fetch(`${API}/post/like`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const unlike = (userId, token, postId) => {
    return fetch(`${API}/post/unlike`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
    return fetch(`${API}/post/comment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`${API}/post/uncomment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

/** status */
export const status = ()=>{
    return fetch(`${API}/status/`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const statusBy = (userId)=>{
    return fetch(`${API}/status/${userId}`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const createStatus = (userId,token,status) =>{
    return fetch(`${API}/status/${userId}`,
    {method:"POST",
    headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
    },
    body:status
})
.then(response=>{
    return response.json();
})
.catch(error=>console.log(error))
}
/**** Birthday */
export const birthday = ()=>{
    return fetch(`${API}/birthday/`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const birthdayMonth = ()=>{
    return fetch(`${API}/birthday/month`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};