import React, { useState } from "react";
import Card from "./Card";
import Link from "next/link";
function Home({ data }) {
  const currentYear = new Date().getFullYear();
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("alumni");
  function filterCompanies() {
    let filtered = [];

    if (selectedFilter === "alumni") {
      filtered = data.filter((company) => company.passyear < currentYear);
    } else if (selectedFilter === "student") {
      filtered = data.filter((company) => company.passyear >= currentYear);
    }

    setFilteredCompanies(filtered);
  }
  React.useEffect(() => {
    filterCompanies();
  }, [selectedFilter]);
  return (
    <>
      <div> 
        <h1 style={{ textAlign: "center" }}>IIT BHU Startup Directory</h1>
        <div style={{textAlign:"center"}}> <span
          onClick={() => setSelectedFilter("alumni")}
          style={{ marginRight: "4rem" }}
           className="buttonName"
        >
          Alumni
        </span>
        <span onClick={() => setSelectedFilter("student")} className="buttonName">Student</span></div>
        <div style={{textAlign:"center",margin:"2rem"}} ><Link href="/startupsform"><span className="buttonName">Fill out the form here to add your startup</span> </Link></div>
      <div className="MainConainerOfCard"> {filteredCompanies.map((data, index) => {
          return (
            <div key={index} >
              <Card data={data}/>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Home;
