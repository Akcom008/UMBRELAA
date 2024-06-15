
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadInput = document.getElementById("logo-upload-input");
const uploadedLogo = document.getElementById("uploaded-logo");
const uploadLoader = document.getElementById("upload-loader");
const uploadButtonText = document.getElementById("upload-button-text");
const logoUploadButton = document.getElementById("logo-upload-button");
const iconName = document.getElementById("icon-name"); // Span for icon name
const iconAfter = document.querySelector(".icon-after"); // X icon element

let logoUploaded = false; 

function showLoader() {
loaderContainer.style.opacity = "1";
uploadLoader.style.display = "flex";
}

function hideLoader() {
loaderContainer.style.opacity = "0";
uploadLoader.style.display = "none";
}

function handleLogoUpload(event) {
const file = event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onloadend = () => {
uploadedLogo.src = reader.result;
uploadedLogo.style.display = "block";
logoUploaded = true; // Set logoUploaded to true
iconName.textContent = file.name; // Display icon name
uploadButtonText.style.display = "none"; // Hide button text
iconName.style.display = "inline"; // Show icon name
iconAfter.style.display = "inline"; // Display X icon
};
}

function handleUploadButtonClick() {
logoUploadInput.click();
}

function removeUploadedLogo() {
if (logoUploaded) {
// Show first popup notification
alert("Logo removed!");

// Refresh the page
location.reload();
}
}

logoUploadInput.addEventListener("change", handleLogoUpload);

function changeTheme(color, imageUrl, buttonColor) {
showLoader();
uploadedLogo.style.display = "none";
logoUploadButton.style.backgroundColor = buttonColor;
setTimeout(() => {
umbrellaImage.style.visibility = "hidden";
document.body.style.backgroundColor = color;
setTimeout(() => {
    umbrellaImage.src = imageUrl;
    umbrellaImage.style.visibility = "visible";
    hideLoader();
    if (logoUploaded) {
        uploadedLogo.style.display = "block";
    }
}, 2000);
}, 0);
}

blueThemeButton.addEventListener("click", () => {
changeTheme("#C5E0DC", "./assets/Blue.png", "#0000FF");
});

yellowThemeButton.addEventListener("click", () => {
changeTheme("#F7E09E", "./assets/Yello.png", "#FFA500");
});

pinkThemeButton.addEventListener("click", () => {
changeTheme("#F4C4C4", "./assets/Pink.png", "#FF00FF");
});

iconAfter.addEventListener("click", removeUploadedLogo);




