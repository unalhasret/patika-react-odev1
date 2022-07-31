import axios from "axios";

const getUser = (userId) => {
    return new Promise (async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
        resolve(data);
    });
};

const getPost = (userId) => {
    return new Promise (async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + userId);
        resolve(data);
    });
};

async function getData(userId){
    try {
        const user = await getUser(userId);
        const posts = await getPost(userId);

        user.posts = posts;
        return user;
    }
    catch(e){
        console.log(e);
    }
}
export default getData;