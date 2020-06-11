
import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/ping-pong",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer xpwBrHokwY6lZxNvWjhI2l6ES5k7TAsfu7DJCWa7Yk0CAth90Qatsv5tKtm6XCfOidOzcGozsf5HOmEi",
    },
});
