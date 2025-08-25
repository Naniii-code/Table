import "./App.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Tooltip } from "@mui/material";
import { allusers } from "./utils/usersData";
import { useState } from "react";
import Slider from "@mui/material/Slider";
const App = () => {
  const [users, setUsers] = useState(allusers);
  const handleDeleteAction = (id) => {
    const usersData = users.filter((item) => item.Id !== id);
    setUsers(usersData);
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="header">
          <div className="headContainer">
            <h3
              style={{
                fontFamily: '"Gill Sans", sans-serif',
                marginLeft: "15px",
                cursor: "pointer",
              }}
            >
              Your Customers
            </h3>

            <Tooltip title="New">
              <button
                className="newBtn"
                style={{
                  width: "50px",
                  height: "20px",
                  border: "1px solid #4f3fcb",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "#4f3fcb",
                  marginTop: "20px",
                  marginRight: "200px",
                  cursor: "pointer",
                }}
              >
                New
              </button>
            </Tooltip>
          </div>
          <div className="btnmainContainer">
          <div className="btnContainer">
            <Tooltip title="Filter">
              <button
                style={{
                  width: "80px",
                  height: "30px",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Filter
              </button>
            </Tooltip>
            <Tooltip title="Settings">
              <button
                style={{
                  width: "80px",
                  height: "30px",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Settings
              </button>
            </Tooltip>
            <Tooltip title="AddUser">
              <button
                className="btn"
                style={{
                  width: "80px",
                  height: "30px",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                AddUser
              </button>
            </Tooltip>
          </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr
              style={{
                borderBottom: "1px solid lightgray",
                boxShadow: "0px 0px 1px 0px lightgray",
                height: "60px",
              }}
            >
              <td
                style={{
                  paddingLeft: "20px",
                  color: "#616578",
                  fontSize: "0.9rem",
                }}
              >
                Full Name
              </td>
              <td style={{ color: "#616578", fontSize: "0.9rem" }}>
                Payment Methods
              </td>
              <td style={{ color: "#616578", fontSize: "0.9rem" }}>Category</td>
              <td style={{ color: "#616578", fontSize: "0.9rem" }}>
                Clickthrough Percentage
              </td>
              <td colSpan="3"></td>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr
                key={item.Id}
                style={{
                  borderBottom: "1px solid lightgray",
                  boxShadow: "0px 0px 1px 0px lightgray",
                  height: "46.2px",
                }}
              >
                <td
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    fontWeight: "bold",
                    color: "#81888c",
                    fontFamily: '"Gill Sans", sans-serif',
                    fontSize: "0.8rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      paddingTop: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={item.Avatar}
                        alt="images"
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {item.name}
                      <span style={{ color: "#8c8e8f", fontWeight: "lighter" }}>
                        {item.subName}
                      </span>
                    </div>
                  </div>
                </td>

                <td style={{ color: "#81888c" }}>
                  <div style={{ display: "flex", gap: "9px" }}>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={item.paymentType}
                      alt="image"
                    />
                    <span style={{ paddingTop: "7px" }}>
                      {item.accountNumber}
                    </span>
                  </div>
                </td>

                <td style={{ color: "#81888c" }}>
                  <button
                    style={{
                      backgroundColor: "#edf3f8",
                      color: "#7168c9",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  >
                    {item.category.categ1}
                  </button>
                  <span style={{ color: "white" }}>-</span>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#fbffe7",
                      borderRadius: "10px",
                      color: "#e2bb77",
                    }}
                  >
                    {item.category.categ2}
                  </button>
                  <span style={{ color: "white" }}>-</span>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#fef0f2",
                      color: "#df89a1",
                      borderRadius: "10px",
                    }}
                  >
                    {item.category.categ3}
                  </button>
                </td>
                <td style={{ display: "flex", gap: "10px", color: "#81888c" }}>
                  <span>
                    <Slider
                      defaultValue={item.range}
                      disabled
                      sx={{
                        width: "200px",
                        height: "8px",
                        "& .MuiSlider-track": {
                          color: "#4f47e7",
                        },

                        "& .MuiSlider-rail": {
                          color: "#d3d3d3",
                        },
                        ".MuiSlider-thumb": {
                          width: "0px",
                          height: "0px",
                        },
                      }}
                    />
                  </span>

                  <span style={{ paddingTop: "8px" }}>
                    {item.percentageValue}
                  </span>
                </td>
                <td>
                  <Tooltip title="Delete">
                    <button
                      style={{
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "white",
                      }}
                      onClick={() => handleDeleteAction(item.Id)}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title="Download">
                    <DownloadIcon />
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title="More">
                    <MoreVertIcon />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    </div>
  );
};

export default App;
