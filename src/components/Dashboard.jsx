import React, { useState } from "react";
import Jobs from "./Jobs.jsx";
import config from "../config.js"

const Dashboard = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [issues, setIssues] = useState([]);
  const [connects, setConnects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Authenticate admin
      const response = await fetch(`${config.API_URI}/api/authenticate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminId, password }),
      });

      const result = await response.json();
      console.log("result :" , result);

      if (result.status === "pass") {
        setIsAuthenticated(true);
        setLoading(true);

        try {
          // Fetch data
          const [issuesResponse, connectsResponse] = await Promise.all([
            fetch(`${config.API_URI}/api/getIssues`),
            fetch(`${config.API_URI}/api/connects`),
          ]);

          if (!issuesResponse.ok || !connectsResponse.ok) {
            throw new Error("Failed to fetch data");
          }

          const issuesData = await issuesResponse.json();
          const connectsData = await connectsResponse.json();

          setIssues(issuesData);
          setConnects(connectsData);
        } catch (err) {
          setError("Failed to fetch data. Please try again.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("Invalid Admin ID or Password");
      }
    } catch (err) {
      setError("Error during authentication. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-slate-800 text-white min-h-screen flex justify-center items-center">
        <form onSubmit={handleLogin} className="bg-slate-700 p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold text-lightblue-400 mb-4">Admin Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="adminId">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-2 rounded bg-slate-600 text-white focus:outline-lightblue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-slate-600 text-white focus:outline-lightblue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lightblue-500 text-white py-2 rounded hover:bg-lightblue-400"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 text-white min-h-screen p-6">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-lightblue-500 mb-6">Admin Dashboard</h1>
          
          {/* Issues Table */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-lightblue-400 mb-4">Issues</h2>
            <table className="min-w-full table-auto border-separate border-spacing-0 border border-slate-700">
              <thead>
                <tr className="bg-slate-600">
                  <th className="px-4 py-2 text-left text-sm">Name</th>
                  <th className="px-4 py-2 text-left text-sm">Email</th>
                  <th className="px-4 py-2 text-left text-sm">Domain</th>
                  <th className="px-4 py-2 text-left text-sm">Description</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.username} className="bg-slate-700 hover:bg-slate-600">
                    <td className="px-4 py-2">{issue.username}</td>
                    <td className="px-4 py-2">{issue.email}</td>
                    <td className="px-4 py-2">{issue.domain}</td>
                    <td className="px-4 py-2">{issue.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Connects Table */}
          <div>
            <h2 className="text-2xl font-semibold text-lightblue-400 mb-4">Connects</h2>
            <table className="min-w-full table-auto border-separate border-spacing-0 border border-slate-700">
              <thead>
                <tr className="bg-slate-600">
                  <th className="px-4 py-2 text-left text-sm">Name</th>
                  <th className="px-4 py-2 text-left text-sm">Email</th>
                  <th className="px-4 py-2 text-left text-sm">Description</th>
                </tr>
              </thead>
              <tbody>
                {connects.map((connect) => (
                  <tr key={connect.name} className="bg-slate-700 hover:bg-slate-600">
                    <td className="px-4 py-2">{connect.name}</td>
                    <td className="px-4 py-2">{connect.email}</td>
                    <td className="px-4 py-2">{connect.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="mt-3">
          <h2 className="text-2xl font-semibold text-lightblue-400 mb-4">Job Applications</h2>
          <Jobs/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
