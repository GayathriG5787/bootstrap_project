const subscribeBtn = document.getElementById('subscribe')
const subscribeToast = document.getElementById('subscribeToast')

subscribeBtn.addEventListener("click", () => {
    
    subscribeToast.classList.remove("d-none");

    const toast = new bootstrap.Toast(subscribeToast);
    toast.show();
});