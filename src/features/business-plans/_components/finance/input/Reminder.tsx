import { FiInfo } from "react-icons/fi";

function Reminder() {
  return (
    <div className="border-blue-200 bg-blue-50 mb-6 p-4 rounded-sm border-1">
      <div className="flex gap-3">
        <FiInfo className="w-5 h-5 text-blue-600" />
        <p className="text-sm text-blue-900">
          Select a part and year to enter financial data. Total fields (shown in
          blue) are automatically calculated from input fields whenever you make
          changes.
        </p>
      </div>
    </div>
  );
}

export default Reminder;
