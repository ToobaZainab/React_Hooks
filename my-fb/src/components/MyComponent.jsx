import React, { useState } from "react";
export function MyComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const updateMyName = (e) => {
    setName(e.target.value);
  };
  const updateMyEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateMyPhone = (e) => {
    setPhone(e.target.value);
  };
  const updateMyPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          backgroundColor: "#f7f7f7",
          paddingLeft: "350px",
          height: "1000px",
        }}
      >
        <div
          className="col-6"
          style={{ width: "50%", marginTop: "300px", paddingRight: "-150px" }}
        >
          <div style={{ paddingLeft: "80px" }}>
            <h1 style={{ color: "rgb(0, 100, 240)", fontSize: "70px" }}>
              facebook
            </h1>
          </div>
          <div>
            <p
              style={{
                fontSize: "30px",
                paddingLeft: "80px",
                marginTop: "-25px",
              }}
            >
              {[
                "Connect with friends and world",
                <br key="br1" />,
                "around you on Facebook.",
              ]}
            </p>
          </div>
        </div>
        <form action="" onSubmit={saveData}>
          <div className="col-6" style={{ width: "50%" }}>
            <div
              style={{
                width: "450px",
                backgroundColor: "#fff",
                padding: "20px",
                height: "520px",
                marginTop: "300px",
                borderRadius: "7px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.07)",
                border: "1px solid #e0e0e0",
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={updateMyName}
                  style={{
                    width: "447px",
                    height: "60px",
                    borderRadius: "7px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={updateMyEmail}
                  style={{
                    width: "447px",
                    height: "60px",
                    borderRadius: "7px",
                    marginTop: "15px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" Phone Number"
                  autoComplete="off"
                  id="phone"
                  value={phone}
                  onChange={updateMyPhone}
                  style={{
                    width: "447px",
                    height: "60px",
                    borderRadius: "7px",
                    marginTop: "15px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={updateMyPassword}
                  style={{
                    width: "447px",
                    height: "60px",
                    marginTop: "15px",
                    borderRadius: "7px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <button
                style={{
                  width: "420px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  height: "50px",
                  fontSize: "20px",
                  borderRadius: "7px",
                  color: "white",
                  backgroundColor: "#3863d9",
                }}
              >
                Log In
              </button>
              <h5
                style={{
                  marginLeft: "170px",
                  fontSize: "15px",
                  color: "rgb(50, 100, 260)",
                  borderRadius: "7px",
                }}
              >
                Forgot Password
              </h5>
              <hr />
              <div>
                <button
                  onClick={saveData}
                  type="submit"
                  style={{
                    width: "310px",
                    height: "50px",
                    marginLeft: "75px",
                    marginTop: "15px",
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "#8BC34A",
                    borderRadius: "7px",
                  }}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <p>
          <h2>User's Data</h2>
          Username:{" "}
          <li>
            {name}
            {localStorage.getItem("name")}{" "}
          </li>{" "}
          <br />
          Email:
          <li>
            {email}
            {localStorage.getItem("email")}{" "}
          </li>{" "}
          <br />
          Phone:{" "}
          <li>
            {phone}
            {localStorage.getItem("phone")}{" "}
          </li>
          <br />
          Password:
          <li>
            {password}
            {localStorage.getItem("password")}{" "}
          </li>
        </p>
      </div>
    </div>
  );
}
const saveData = () => {
  let name, email, password, phone;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  password = document.getElementById("password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("password", password);
};

export default MyComponent;
