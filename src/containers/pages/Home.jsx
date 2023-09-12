import Header from "components/Home/Header"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"




function Home() {
  return (
    <FullWidthLayout>
        <div className="pt-5">
            <Header/>
        </div>
      
    </FullWidthLayout>
  )
}

export default Home
