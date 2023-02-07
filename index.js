const {fetch} = require("undici");

const {TOKEN, MSG_CONTENT, MSG_CHANNEL, TIME} = process.env;

async function message(content, channelId, token) {
    await fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
        "headers": {
          "authorization": token,
          "content-type": "application/json"
        },
        "body": JSON.stringify({content: content}),
        "method": "POST"
    });
}

function tick() {

    var date = new Date();

    if (`${date.getHours()}:${date.getMinutes()}` == TIME) {
        message(MSG_CONTENT, MSG_CHANNEL, TOKEN);
        console.log("Task completed.");
        process.exit();
    }

}

tick();
setInterval(tick, 60000);
