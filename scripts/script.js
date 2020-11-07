// Variables for Tabs

const tabHeader1 = document.querySelector('#tab-header1');
const tabHeader2 = document.querySelector('#tab-header2');
const tabHeader3 = document.querySelector('#tab-header3');
const tabContent1 = document.querySelector('#tab-1');
const tabContent2 = document.querySelector('#tab-2');
const tabContent3 = document.querySelector('#tab-3');

tabHeader1.addEventListener("click", e => {
    tabContent2.classList.remove('show');
    tabContent3.classList.remove('show');
    tabContent2.classList.add('hide');
    tabContent3.classList.add('hide');
    tabHeader2.classList.remove('active');
    tabHeader3.classList.remove('active');
    tabHeader1.classList.add('active');
    tabContent1.classList.remove('hide');
    tabContent1.classList.add('show');
})

tabHeader2.addEventListener("click", e => {
    tabContent1.classList.remove('show');
    tabContent3.classList.remove('show');
    tabContent1.classList.add('hide');
    tabContent3.classList.add('hide');
    tabHeader1.classList.remove('active');
    tabHeader3.classList.remove('active');
    tabHeader2.classList.add('active');
    tabContent2.classList.remove('hide');
    tabContent2.classList.add('show');
})

tabHeader3.addEventListener("click", e => {
    tabContent1.classList.remove('show');
    tabContent2.classList.remove('show');
    tabContent1.classList.add('hide');
    tabContent2.classList.add('hide');
    tabHeader1.classList.remove('active');
    tabHeader2.classList.remove('active');
    tabHeader3.classList.add('active');
    tabContent3.classList.remove('hide');
    tabContent3.classList.add('show');
})

// Variables for FAQs

const faqHeader1 = document.querySelector('#faq-header1');
const faqHeader2 = document.querySelector('#faq-header2');
const faqHeader3 = document.querySelector('#faq-header3');
const faqHeader4 = document.querySelector('#faq-header4');
const faqContent1 = document.querySelector('#faq-1');
const faqContent2 = document.querySelector('#faq-2');
const faqContent3 = document.querySelector('#faq-3');
const faqContent4 = document.querySelector('#faq-4');

faqHeader1.addEventListener("click", e => {
    faqHeader1.lastElementChild.classList.toggle('open');
    faqHeader1.lastElementChild.firstElementChild.classList.toggle('red-stroke');
    faqContent1.classList.toggle('hide');
    faqContent1.classList.toggle('show');
})

faqHeader2.addEventListener("click", e => {
    faqHeader2.lastElementChild.classList.toggle('open');
    faqHeader2.lastElementChild.firstElementChild.classList.toggle('red-stroke');
    faqContent2.classList.toggle('hide');
    faqContent2.classList.toggle('show');
})

faqHeader3.addEventListener("click", e => {
    faqHeader3.lastElementChild.classList.toggle('open');
    faqHeader3.lastElementChild.firstElementChild.classList.toggle('red-stroke');
    faqContent3.classList.toggle('hide');
    faqContent3.classList.toggle('show');
})

faqHeader4.addEventListener("click", e => {
    faqHeader4.lastElementChild.classList.toggle('open');
    faqHeader4.lastElementChild.firstElementChild.classList.toggle('red-stroke');
    faqContent4.classList.toggle('hide');
    faqContent4.classList.toggle('show');
})

// Variables for Email Input 

const button = document.querySelector('.contact-btn');

const validateEmail = () => {
    const matchEmail = /\S+@\S+.\S+/;
    const input = document.querySelector('input');
    const inputParent = document.querySelector('.email-field');
    const error = document.querySelector('.email-field div');
    const errorIcon = document.querySelector('.email-field img');

    if (matchEmail.test(input.value)) {
        error.classList.add('hide');
        errorIcon.classList.add('hide');
        inputParent.classList.remove('red-bg');
        input.classList.remove('red-bd');
    }
    else {
        error.classList.remove('hide');
        errorIcon.classList.remove('hide');
        error.textContent = "Whoops, make sure it's an email";
        error.classList.add('red-bg', 'white');
        inputParent.classList.add('red-bg');
        input.classList.add('red-bd');
    }
}

button.addEventListener("click", validateEmail);