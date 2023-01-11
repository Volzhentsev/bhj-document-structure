function hidenTips() {
    const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

    tooltips.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const tipActive = e.target.querySelector('.tooltip');

            if (!tipActive) {
                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip', 'tooltip_active');
                tooltip.textContent = `${e.target.title}`;
                let coord = el.getBoundingClientRect();
                let left = el.dataset.position === 'right' ? coord.left + (coord.right - coord.left) +'px': coord.left+'px';
                let top = el.dataset.position === 'top' ? coord.top + (coord.top - coord.bottom) +'px' : coord.bottom+'px';
                tooltip.setAttribute('style',`left: ${left}; top: ${top}`);
                e.target.insertAdjacentElement("afterBegin", tooltip);
            } else {
                tipActive.remove();
            };
        });
    });

    const windowEvents = ['scroll', 'resize']
    windowEvents.forEach((event) => {
        window.addEventListener(event, () => {
            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) {
                activeTooltip.classList.remove('tooltip_active');     
            };
        });    
    });
}

hidenTips();