import Options from "./options"
import UI from "./ui"

export default class Player extends Options {
    constructor(player) {
        super()

        this.player = player
        this.ui = new UI(this.player)

        this.setOptions({
            title: this.player.getAttribute('rs-title') || "",
            shortDesc: this.player.getAttribute('rs-short-desc') || "",
            autoplay: this.player.getAttribute('rs-autoplay') || false
        })
    }

    getOptions() {
        return this.options
    }

    getUI() {
        return this.ui
    }

    getDOM() {
        return this.ui.dom
    }

    getVideo() {
        return this.ui.dom.video
    }

    getSource() {
        return this.ui.dom.source
    }

    play() {
        const video = this.getVideo()
        this.getUI().setPlayState(true)
        video.play()
    }

    pause() {
        const video = this.getVideo()
        this.getUI().setPlayState(false)
        video.pause()
    }

    isPaused() {
        return this.getVideo().paused
    }
}
