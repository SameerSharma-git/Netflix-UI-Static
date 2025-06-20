let faq_imgs = document.querySelectorAll('.faq_img');
let faq_answers = document.querySelectorAll('.faq-answer')
console.log(faq_answers);
console.log(faq_imgs);
let i = 0;

for (const faq_img_key in faq_imgs) {
    i++
    if (i<=6) {
        const img = faq_imgs[faq_img_key];
        console.log(faq_img_key);
        img.addEventListener("click", ()=>{
            if (img.src.endsWith('Assets/Images/icons/icons8-plus.svg')) {
                img.src = 'Assets/Images/icons/icons8-cross-100.png';
            }
            else {
                img.src = 'Assets/Images/icons/icons8-plus.svg';
            }
            faq_answers[faq_img_key].classList.toggle('disp-none')
        });
    }
}