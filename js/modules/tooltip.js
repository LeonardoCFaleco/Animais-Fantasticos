export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item)=>{
        item.addEventListener('mouseover', onMouseOuver)
    })
    
    function onMouseOuver(event) {
        const tooltip = criarTooltip(this);
        onMouseMove.tooltip = tooltip;
        this.addEventListener('mousemove', onMouseMove);
        onMouseLeave.tooltip = tooltip;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }
    
    const onMouseMove = {
        handleEvent(event){
            this.tooltip.style.top = event.pageY + 20 + 'px';
            this.tooltip.style.left = event.pageX + 20 + 'px';
        }    
    }
    const onMouseLeave = {
        tooltip: '',
        element:'',
        handleEvent(){
            this.tooltip.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }
    function criarTooltip(element) {
        const tooltip = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltip.classList.add('tooltip');
        tooltip.innerText = text;
        document.body.appendChild(tooltip);
        return tooltip;
    }
}

