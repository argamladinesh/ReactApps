import axios from "axios";



export default axios.create({

baseURL: "https://api.unsplash.com",

headers: {

    Authorization: "Client-ID ShKRMUG33Pk_3KbYhaiB16ubm206Q9mkhtsnxaev7qY"
},

});
