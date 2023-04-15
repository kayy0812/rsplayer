import RS from './rs'
import "./css/main.css"

const rs = new RS()
rs.setList(document.querySelectorAll('[rsplayer]'))
rs.init()
