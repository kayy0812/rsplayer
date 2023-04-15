export default class Options {
    constructor() {
        this.title = false
        this.shortDesc = false
    }

    setOptions(options) {
        this.title = options.title
        this.shortDesc = options.shortDesc
    }
}