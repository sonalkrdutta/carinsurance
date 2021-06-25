import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Page from '../components/First';
import OwnershipDetails from '../components/OwnershipDetails';
import AssetDetails from '../components/AssetDetails';
import Insurence from '../components/Insurence';
function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Page />
                </Route>
                <Route exact path="/ownerdetails">
                    <OwnershipDetails />
                </Route>
                <Route exact path="/assetdetails">
                    <AssetDetails />
                </Route>
                <Route exact path="/insurance">
                    <Insurence />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
