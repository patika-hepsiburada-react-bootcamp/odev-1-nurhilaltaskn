import axios from 'axios';

//define async getData function

const getData = async (userId) => {
   try {

    const {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`) 



      return { ...user, postsData }
   } 
        catch (error) {
            console.log(error.message)
                     }
};

export default getData;