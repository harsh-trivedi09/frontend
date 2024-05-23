import Home from "../components/home";
import {connect} from 'react-redux'
import Addtocart from "../services/actions/Action";

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    addTocartHandler:data=>dispatch(Addtocart(data))
})

export default connect(mapStateToProps,mapDispatchToProps) (Home)