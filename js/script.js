function initTabNav(){
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    tabContent[0].classList.add('ativo');

    if(tabMenu.length && tabContent.length){
        function activeTab(index){
            tabContent.forEach((content)=>{
                content.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion(){
    const faq = document.querySelectorAll('.js-faq dt');
    if(faq.length){
        faq[0].classList.add('ativo');
        faq[0].nextElementSibling.classList.add('ativo');

        function activeFaq(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }
        faq.forEach((item)=>{
            item.addEventListener('click', activeFaq);
        });
    }
}
initAccordion();
function initiScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    const halfWindow = window.innerHeight*0.6;
    if(sections.length){
        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - halfWindow;
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }
            });
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initiScroll();

import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropMenu from './modules/dropmenu.js';
import initMenuMobile from './modules/mobile-menu.js';
import initDatas from './modules/datas.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

initModal();
initTooltip();
initDropMenu();
initMenuMobile();
initDatas();
initFetchAnimais();
initFetchBitcoin();