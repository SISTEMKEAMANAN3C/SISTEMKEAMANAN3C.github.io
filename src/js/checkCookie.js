import { getCookie} from "./cookies.js";

export default function checkCookie() {
    let user = getCookie("token");
    let username = getCookie("username");
	if (user != "" || user == null || user == undefined) {
	alert("Welcome " + username);
	} else {
		window.location.href="../../";
	}
}