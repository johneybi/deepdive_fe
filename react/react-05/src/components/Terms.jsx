import { useState } from "react";

function Terms() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <span className="ml-2 text-gray-900">약관동의</span>
      </label>

      <p>상태 : {checked ? "ON" : "OFF"}</p>
    </div>
  );
}

export default Terms;
