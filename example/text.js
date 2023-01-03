import { listOfPeople } from "./details.js";
export const messageForAll = [];
listOfPeople.map((x) => {
    const newMssg = `Hey ${x}! How are You ?`;
    messageForAll.push(newMssg);
});
