

import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import {connect} from 'react-redux'


const FullWidthLayout = ({children}) => {


    return(
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-w-7xl mx-auto">
                    {children}
                </div>

            </div>
            <Footer/>

        </div>
    )

}
  

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(FullWidthLayout)
