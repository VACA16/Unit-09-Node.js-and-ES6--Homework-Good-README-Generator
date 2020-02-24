const axios = require("axios");

const api = {
    getUser(username) {

        axios
            .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
            .then(function(res) {
                console.log(res.data);
            });

    }
};

module.exports = api;