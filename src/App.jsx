import "./App.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Tooltip } from "@mui/material";
import { allusers } from "./utils/usersData";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
            <button
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
              • New
            </button>
          </div>
          <div className="btnContainer">
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
            <button className="btn"
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
          </div>
        </div>
        <div className="mainSection">
          <table className="table">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid lightgray",
                  boxShadow: "0px 0px 1px 0px lightgray",
                  height: "60px",
                }}
              >
                <td>Full Name</td>
                <td>Payment Methods</td>
                <td>Category</td>
                <td>ClickthroughPercentage</td>
                <td colSpan="3"></td>
              </tr>
            </thead>
            <tbody>
              {allusers.map((item) => (
                <tr
                  key={item.Id}
                  style={{
                    borderBottom: "1px solid lightgray",
                    boxShadow: "0px 0px 1px 0px lightgray",
                  }}
                >
                  <td style={{fontWeight:'bold',color:'#81888c'}}> {item.name}<br />
                      <span style={{color:'#8c8e8f'}}>{item.subName}</span></td>
                  <td style={{color:'#81888c'}}>{item.paymentType}</td>
                  <td  style={{color:'#81888c'}}>{item.category}</td>
                  <td  style={{color:'#81888c'}}>{item.percentageValue}</td>
                  <td>
                    <Tooltip title="Delete">
                      <DeleteOutlineIcon />
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
    </div>
  );
};

export default App