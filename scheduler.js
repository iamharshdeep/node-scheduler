const schedule = require("node-schedule");
const axios = require("axios");

const job = schedule.scheduleJob("*/1 * * * *", async () => {
    try {
        await axios.get("https://node-scheduler-1itw.onrender.com/");
        await axios.get("https://snp-backend-7xuw.onrender.com/");
        await axios.get("https://health-ed-tech-backend-fg9u.onrender.com/");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = job;
