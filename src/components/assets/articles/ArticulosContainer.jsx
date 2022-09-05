import Articulo01 from "./articulo01"
import Articulo02 from "./Articulo02"
import Articulo03 from "./Articulo03"
import Articulo04 from "./Articulo04"
import Articulo05 from "./Articulo05"
import Articulo06 from "./Articulo06"
import Articulo07 from "./Articulo07"
import Articulo08 from "./Articulo08"
import Articulo09 from "./Articulo09"
import Articulo10 from "./Articulo10"

const ArticulosContainer = ({nombre}) => {

  return (
    <>
      <div className="mb-8" style={{maxWidth:950}}>
        {'articulo01' === nombre && <Articulo01/>}
        {'articulo02' === nombre && <Articulo02/>}
        {'articulo03' === nombre && <Articulo03/>}
        {'articulo04' === nombre && <Articulo04/>}
        {'articulo05' === nombre && <Articulo05/>}
        {'articulo06' === nombre && <Articulo06/>}
        {'articulo07' === nombre && <Articulo07/>}
        {'articulo08' === nombre && <Articulo08/>}
        {'articulo09' === nombre && <Articulo09/>}
        {'articulo10' === nombre && <Articulo10/>}
      </div>
    </>
  )
}

export default ArticulosContainer