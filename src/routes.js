import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard'


const Roteamento = () => {
    return(
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="*" component={()=>(<div>Pagina 404</div>)}/>
        </Switch>
    )
}

export default Roteamento