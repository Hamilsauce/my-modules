import {diskActivity} from "./diskActivityData.js";
import {csvToJson} from "./csvToJson12.21.js";



const formattedText = document.querySelector('.data-text2');
const unformattedText = document.querySelector('.data-text1');

const mapDom = text => {
    formattedText.innerHTML = text;
    unformattedText.innerHTML = text;
}
mapDom(diskActivity);

const convertCsv = csvData => {
    const convertedData = csvToJson(csvData, "tab");
    return convertedData;
}

mapDom(JSON.stringify(convertCsv(diskActivity),  null, 1));

