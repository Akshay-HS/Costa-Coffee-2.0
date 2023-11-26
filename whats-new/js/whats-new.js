var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetching data from API
function fetchDatas() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://mocki.io/v1/90fed624-07fe-455d-a6b9-8b49e3e1ad24");
            const data = yield response.json();
            console.log(data);
            const users = data; // Replace "any" with a more specific type if possible
            for (let i = 1; i < 4; i++) {
                const ran = Math.floor(Math.random() * 5);
                const offerContainer = document.getElementById(`offer${i}`);
                const img1 = document.createElement("img");
                img1.src = ((_a = users[ran]) === null || _a === void 0 ? void 0 : _a.image) || ""; // Optional chaining here
                img1.className = "images";
                if (offerContainer) {
                    offerContainer.appendChild(img1);
                }
            }
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    });
}
fetchDatas();

// cookie

document.addEventListener("DOMContentLoaded", function () {
    const cookieButton = document.getElementById("cookieButton");
    const acceptButton = document.getElementById("acceptButton");
    const cookieDialog = document.getElementById("cookieDialog");
    if (cookieButton && acceptButton && cookieDialog) {
        function toggleButtonState() {
            if (cookieButton.classList.contains("open")) {
                closeCookieDialog();
            }
            else {
                openCookieDialog();
            }
        }
        function openCookieDialog() {
            if (cookieDialog) {
                cookieDialog.style.display = "block";
                cookieButton.classList.add("open");
            }
        }
        function closeCookieDialog() {
            if (cookieDialog) {
                cookieDialog.style.display = "none";
                cookieButton.classList.remove("open");
            }
        }
        acceptButton.addEventListener("click", function () {
            closeCookieDialog();
        });
        cookieButton.addEventListener("click", toggleButtonState);
    }
});
