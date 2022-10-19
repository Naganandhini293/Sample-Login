import React, { useEffect, useState } from "react";
import LoginLogo from "../asset/loginLogo.png";
import "../Style/HomePage.css";
function HomePage() {
    const [countryData, setCountryData] = useState([]);
    const fetchData = async () => {
        let resultObject = {};
        let headers = {
            "Content-Type": "application/json",
        };
        let data = await fetch(
            "https://restcountries.com/v2/all?fields=name,region,flag",
            {
                method: "GET",
                headers: headers,
            }
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    resultObject = {
                        fetchStatus: "success",
                        result: result,
                    };
                    return resultObject;
                },
                (error) => {
                    resultObject = {
                        fetchStatus: "failure",
                        data: error,
                    };
                    return resultObject;
                }
            );
        console.log(data);
        if (data.fetchStatus == "success") {
            setCountryData(data.result);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="home-container">
            <div className="home-page-header">Country Data</div>
            <div className="home-content-card-ctr">
                {countryData.length > 0 ? (
                    countryData.map((data) => {
                        return (
                            <div className="home-card-container">
                                <img src={data.flag} />

                                <div>Continent: {data.region}</div>
                                <div>Country: {data.name}</div>
                            </div>
                        );
                    })
                ) : (
                    <div className="loading-text">Loading...</div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
