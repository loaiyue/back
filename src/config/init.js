export default {
    dom_init() {
        window.onresize = function () {
            console.log(2,document.documentElement.clientHeight)
            return document.documentElement.clientHeight
        }
    }
}