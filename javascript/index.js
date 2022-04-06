class MobileMenu {
    constructor(mobileMenu, buttonsMenu) {
        this.mobileMenu = document.getElementsByClassName('mobileMenu')[0];
        this.buttonsMenu = document.getElementsByClassName('buttonsMenu')[0];
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this)
        this.buttonsMenu.classList.toggle(this.activeClass)
    }

    clickButton() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.clickButton();
        }
        return this;
    }
}

const mobile = new MobileMenu('.mobileMenu', "buttonsMenu", '.buttonsMenu div')
mobile.init()