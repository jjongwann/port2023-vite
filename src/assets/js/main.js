import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () { //window가 load되면 함수 실행!
    smooth();
    link();
    menu();
    port();
});