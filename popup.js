class Popup {
    constructor() {
        this.popup = document.querySelector('.js-popup');
        this.content = this.popup.querySelector('.popup__text');
        this.closeBtn = this.popup.querySelector('.popup__close');
    }

    init() {
        if(!this.popup) {
            return;
        }

        this.closeBtn.addEventListener('click', () => {
            this.closePopup();
        })
    }

    setContent(text='') {
        this.content.innerText = text;
    }

    closePopup() {
        this.popup.style.top = '-50px'; // Переместить вверх
    }
}

export default new Popup();