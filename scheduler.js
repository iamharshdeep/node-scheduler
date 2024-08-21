const schedule = require("node-schedule");
const axios = require("axios");

const job = schedule.scheduleJob("*/13 * * * *", async () => {
    try {
        await axios.get("https://snp-backend-7xuw.onrender.com/");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = job;
