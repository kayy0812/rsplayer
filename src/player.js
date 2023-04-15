import Options from "./options"

export default class Player extends Options {
    constructor(player) {
        super()
        this.player = player
        this.dom = []

        this.setOptions({
            title: this.player.getAttribute('rs-title'),
            shortDesc: this.player.getAttribute('rs-short-desc')
        })
    }

    getSource() {
        return this.player.getAttribute('rs-source')
    }

    getOptions() {
        return this.options
    }

    create() {
        // I LIKE USE VANILLA JAVASCRIPT :)
        // Create elm with class = rsjs
        const rsplayer = document.createElement('div')
        rsplayer.classList.add('rsjs')

        // Add overlay elm into rsjs class
        const rsplayerOverlay = document.createElement('div')
        rsplayerOverlay.classList.add('rsjs__overlay')

        // Add play button elm into rsjs class
        const rsplayerOverlayPlayBtn = document.createElement('div')
        rsplayerOverlayPlayBtn.classList.add('rsjs__overlay-play-btn')
        rsplayerOverlayPlayBtn.classList.add('rsjs__overlay-play-btn--active')
        rsplayerOverlayPlayBtn.innerHTML = `
            <svg class="rsjs__overlay-play-btn-svg" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
            <svg class="rsjs__overlay-play-btn-svg" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
            `
        rsplayerOverlay.appendChild(rsplayerOverlayPlayBtn)

        // Add video into rsjs class haha
        const video = document.createElement('video')
        video.classList.add('rsjs__video')

        // Add source to video
        const source = document.createElement('source')
        source.src = this.getSource()

        // Append source into video
        video.appendChild(source)
        if (video.paused) {
            rsplayerOverlayPlayBtn.classList.remove('rsjs__overlay-play-btn--active')
        }

        // Append to parrent
        rsplayer.appendChild(rsplayerOverlay)
        rsplayer.appendChild(video)
        this.player.appendChild(rsplayer)

        this.dom = {
            rsplayerOverlay,
            rsplayerOverlayPlayBtn,
            video
        }
    }

    play() {
        const overlayBtn = this.dom.rsplayerOverlayPlayBtn
        const video = this.dom.video
        overlayBtn.classList.add('rsjs__overlay-play-btn--active')
        video.play()
    }

    pause() {
        const overlayBtn = this.dom.rsplayerOverlayPlayBtn
        const video = this.dom.video
        overlayBtn.classList.remove('rsjs__overlay-play-btn--active')
        video.pause()
    }
}
