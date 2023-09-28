import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { alertEndPoints } from "../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import DisasterComponent from "../components/DisasterComponent";

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: alertEndPoints.GET_AGENCY_ALERTS_API,
        });
        console.log(response);
        setAlerts(response.alerts);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching disasters");
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  if(loading){
    return (
      <div className="spinner w-full flex items-center justify-center"></div>
    );
  }

  const statesOfIndia = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-11/12 flex flex-col items-center justify-center">
        <h2 className="md:text-5xl sm:text-3xl text-center mt-6 font-bold mb-6 overflow-hidden text-indigo-600">
          Alerts
        </h2>
        <div className="w-6/12">
          <Link to="/createAlert">
            <button className="bg-indigo-500 w-full hover:bg-indigo-600 transition-all duration-200 text-white font-semibold py-2 px-4 rounded-full">
              Add Alert
            </button>
          </Link>
        </div>
        {/* Alert */}
        
        <div className="w-full">
        <div className="overflow-hidden text-center md:h-14 text-indigo-600 font-sans mt-6 text-4xl md:text-5xl font-bold">
          All Alerts
        </div>
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {
              alerts.map((alert) => (
                <div className="ml-10 w-full" key={alert._id}>
                  <h1>{alert.senderAgency}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
