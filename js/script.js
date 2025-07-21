const menu = document.querySelector('.header-menu-wrapp');
const burger = document.querySelector('.header-burger');

function toggleMenu() {
    menu.classList.toggle('header-menu-wrapp_active');
    burger.classList.toggle('header-burger_active');   
    document.body.classList.toggle('locked', menu.classList.contains('header-menu-wrapp_active'));
}

function logCircleSpacing() {
    const circles = document.querySelectorAll('.component-circle');
    const adjustedDistance = window.innerWidth < 768 ? 6 : 26;

    for (let i = 0; i < circles.length - 1; i++) {
        const circle1 = circles[i];
        const circle2 = circles[i + 1];

        let spaceDiv = circle1.querySelector('.dotted-block-line');
        const distance = circle2.getBoundingClientRect().left - (circle1.getBoundingClientRect().left + circle1.offsetWidth);
        
        if (!spaceDiv) {
            spaceDiv = document.createElement('div');
            spaceDiv.className = 'dotted-block-line';
            spaceDiv.style.width = `${distance}px`;
            circle1.appendChild(spaceDiv);
        } else {
            spaceDiv.innerHTML = '';
            spaceDiv.style.width = `${distance}px`;
        }
        
        const spanCount = Math.floor((distance - adjustedDistance) / 20);
        for (let j = 0; j < spanCount; j++) {
            const span = document.createElement('div');
            span.className = 'dot';
            spaceDiv.appendChild(span);
        }
    }
}

logCircleSpacing();

function showFileInfo() {
    const input = document.getElementById('file-upload');
    const info = document.getElementById('file-info');
    const file = input.files[0];
    if (file) {
        info.innerText = `File name: ${file.name}, File size: ${file.size} bytes`;
    } else {
        info.innerText = '';
    }
}

function updateRangeValue() {
    const rangeInput = document.getElementById('tailmetr');
    const rangeValue = document.getElementById('range-value');
    rangeValue.innerText = `${rangeInput.value}%`;
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        burger.addEventListener('click', () => {
            toggleMenu();
        });

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('header-menu-item-link')) {
                toggleMenu();
            }
        });
    } 

    if (window.innerWidth > 500) {
        window.addEventListener('resize', logCircleSpacing);
    }
});

const choices = new Choices('.select', {
    closeDropdownOnSelect: true,
    searchEnabled: false,
    placeholder: true,
    placeholderValue: 'Выберите тип системы',
    position: 'bottom',
    itemSelectText: "",
    shouldSort: false
});
