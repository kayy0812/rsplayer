import Player from "./player"

export default class RS {
    constructor() {
        this.domList = []
    }

    init() {
        for (var item of this.getList()) {
            var player = new Player(item)
            var ui = player.getUI()
            ui.renderTheme()

            if (player.isPaused()) {
                ui.setPlayState(false)
            }

            player.getDOM().rsplayerOverlay.addEventListener('click', () => {
                if (player.isPaused()) {
                    player.play()
                } else {
                    player.pause()
                }
            })

            player.getVideo().addEventListener('ended', () => {
                player.getDOM().rsplayerOverlay.remove('rsjs__overlay-play-btn--active')
            })

            player.getVideo().addEventListener('timeupdate', (e) => {
                ui.updateProgress(e)
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