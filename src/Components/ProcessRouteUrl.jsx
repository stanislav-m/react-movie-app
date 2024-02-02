import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const ProcessRouteUrl = (props) => {
    const {handleRouteUrl, loading } = useContext(GlobalContext);

    console.log(props.action);
    handleRouteUrl(props.action);
    return (
        <div className="process">
        {loading && <span>Loading ... please wait...</span>}
        </div>
    )};

    export default ProcessRouteUrl;