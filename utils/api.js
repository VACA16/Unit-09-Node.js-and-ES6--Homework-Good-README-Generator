const fs = require("fs");
const axios = require("axios");
const inquirer = require("/package.json/inquirer");​

const api = {
    getUser(username) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;​

        axios.get(queryUrl).then(function(res) {

            const repoNames = res.data.map((repo) => repo.name);
            console.log('github repos:', repoNames);
            const repoNamesString = repoNames.join("\n");​

            fs.writeFile("repos.txt", repoNamesString, function(err) {
                if (err) {
                    throw err;
                }​
                console.log(`Saved ${repoNames.length} repos`);
            });
        });

    }
};

module.exports = api;