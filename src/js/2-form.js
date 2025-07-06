const formData = {
    email: "",
    message: ""
};

const key = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(key);
if (savedData) {
    const data = JSON.parse(savedData);
    formData.email = data.email || "";
    formData.message = data.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}


form.addEventListener("input", handleInput) 

function handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    formData[name] = value;
    localStorage.setItem(key, JSON.stringify(formData));
}
    



form.addEventListener("submit", handleSubmit) 

function handleSubmit(event){
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(key);

    formData.email = "";
    formData.message = "";
    form.reset();
}
    