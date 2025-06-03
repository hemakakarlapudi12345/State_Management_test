// import { useEffect, useState } from "react";

// export default function App() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex h-screen">
//       {/* Left Side (3/4) */}
//       <div className="w-3/4 bg-blue-100 p-4">
//         <div className="flex flex-col h-full space-y-2">
          
//           {/* Section 1: Title + Timer on the same line */}
//           <div className="flex-1 bg-blue-200 p-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-blue-900">Nano ARC-Python</h1>
//             <div className="text-right">
//               <h2 className="text-md font-medium text-gray-800">🕒 Time</h2>
//               <p className="text-lg font-mono text-gray-700">{time.toLocaleTimeString()}</p>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="flex-[4] bg-blue-300 p-4">Section 2 (4)</div>

//           {/* Section 3 */}
//           <div className="flex-[3] bg-blue-400 p-4">Section 3 (3)</div>

//           {/* Section 4 */}
//           <div className="flex-1 bg-blue-500 p-4">Section 4 (1)</div>
//         </div>
//       </div>

//       {/* Right Side (1/4) */}
//       <div className="w-1/4 bg-gray-100 p-4">
//         {/* Right side is now free or can be used for other content */}
//         <p className="text-gray-500">Right section (optional use)</p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Counter: {count}</h1>
        <div className="space-x-2">
          <button className="p-2 border-2 rounded" onClick={handleIncrement}>
            Increment
          </button>
          <button className="p-2 border-2 rounded" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="p-2 border-2 rounded" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}