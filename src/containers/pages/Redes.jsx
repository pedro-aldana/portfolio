import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { Link } from "react-router-dom"




function Redes() {
  return (
    <FullWidthLayout>
      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to={'https://github.com/pedro-aldana'}>
                <img className="h-auto max-w-full rounded-lg" src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png" alt="" />
            </Link>
            <Link to={'https://www.linkedin.com/in/pedro-aldana-a6a563203/'}>
                <img className="h-auto max-w-full rounded-lg" src="https://1000marcas.net/wp-content/uploads/2020/01/LinkedIn-Logo-2019.png" alt="" />
            </Link>
            <Link>
                <img className="h-auto max-w-full rounded-lg" src="https://1000logos.net/wp-content/uploads/2017/06/logo-Twitter.png" alt="" />
            </Link>
            
        </div>

      </div>
    </FullWidthLayout>
  )
}

export default Redes
