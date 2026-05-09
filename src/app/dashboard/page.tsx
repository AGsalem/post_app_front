"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function DB() {
  const [view, setView] = useState<"users" | "posts">("users");
  const [data, setData] = useState<any>(null);
  const [pass, setPass] = useState("");
  const [load, setLoad] = useState(false);
  const [mes, setMes] = useState("");

  const api = async () => {
    try {
      setLoad(true);

      const pass_api = await fetch("http://localhost:5000/user_i", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pass: pass }),
      });

      const resData = await pass_api.json();

      if (!pass_api.ok) {
        setMes(resData.error || "error");
        return;
      }

      setMes("success");
      setData(resData);
    } catch (error) {
      console.error(error);
      setMes("server error");
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      api();
    }, 60000); // كل دقيقة

    return () => clearInterval(interval);
  }, [data]);
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* SIDEBAR (واحدة فقط) */}
      {data && (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-5 hidden md:flex flex-col">
          <h2 className="text-2xl font-bold text-amber-400 mb-8">
            Admin Panel
          </h2>

          <button
            onClick={() => setView("users")}
            className={`text-left px-3 py-2 rounded-lg transition ${
              view === "users" ? "bg-slate-800 text-white" : "text-slate-400"
            }`}
          >
            Users
          </button>

          <button
          
            onClick={() => setView("posts")}
            className={`text-left px-3 py-2 rounded-lg mt-2 transition ${
              view === "posts" ? "bg-slate-800 text-white" : "text-slate-400"
            }`
          }
          >
            Posts
          </button>
        </aside>
      )}

      {/* MAIN */}
      <div className="flex-1 p-4 md:p-8">
        {/* LOGIN (قبل الداتا فقط) */}
        {!data && (
          <div className="flex justify-center mt-20">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <input
                type="password"
                value={pass}
               
                onChange={(e) => setPass(e.target.value)}
                 onKeyDown={(e)=>{
                  if(e.key==='Enter'){
                    api()
                  }
                }}
                placeholder="Enter pass"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-center focus:ring-2 focus:ring-amber-500 outline-none"
              />

              <button
                onClick={api}
                disabled={load}
                className={`w-full mt-4 py-3 rounded-xl font-semibold transition
                  ${
                    load
                      ? "bg-slate-700 cursor-not-allowed"
                      : "bg-amber-500 hover:bg-amber-400 text-black"
                  }`}
              >
                {load ? "Loading..." : "Verify"}
              </button>

              {mes && (
                <p
                  className={`mt-3 text-sm text-center ${
                    mes === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {mes}
                </p>
              )}
            </div>
          </div>
        )}

        {/* LOADING */}
        {load && !data && (
          <div className="space-y-4 mt-10 animate-pulse">
            <div className="h-6 bg-slate-800 rounded w-1/3"></div>
            <div className="h-40 bg-slate-800 rounded-2xl"></div>
            <div className="h-40 bg-slate-800 rounded-2xl"></div>
          </div>
        )}

        {/* DATA VIEW */}
        {data && (
          <div className="space-y-6">
            {/* USERS */}
            {view === "users" && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 font-bold">
                  Users
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-800">
                        {Object.keys(data.user_post[0] || {}).map((key) => (
                          <th key={key} className="text-left p-3">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {data.user_post.map((item: any, index: number) => (
                        <tr key={index} className="border-t border-slate-800">
                          {Object.values(item).map((val: any, i: number) => (
                            <td key={i} className="p-3">
                              {String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* POSTS */}
            {view === "posts" && data?.post && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 font-bold">
                  Posts
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-800">
                        {Object.keys(data.post[0] || {}).map((key) => (
                          <th key={key} className="text-left p-3">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {data.post.map((item: any, index: number) => (
                        <tr key={index} className="border-t border-slate-800">
                          {Object.values(item).map((val: any, i: number) => (
                            <td key={i} className="p-3">
                              {String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
