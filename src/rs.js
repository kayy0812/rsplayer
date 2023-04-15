import Player from "./player"

export default class RS {
    constructor() {
        this.domList = []
    }

    init() {
        for (var item of this.getList()) {
            var player = new Player(item)
            player.create()

            player.dom.rsplayerOverlay.addEventListener('click', () => {
                if (player.dom.video.paused) {
                    player.play()
                } else {
                    player.pause()
                }
            })

            player.dom.video.addEventListener('ended', () => {
                player.dom.rsplayerOverlay.remove('rsjs__overlay-play-btn--active')
            })
        }
    }

    getList() {
        return this.domList
    }

    setList(list = []) {
        this.domList = list
    }
}