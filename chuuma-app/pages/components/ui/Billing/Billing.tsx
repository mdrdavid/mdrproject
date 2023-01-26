import React, { useState, createContext, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {}

const UserContext = createContext();

const Billing = (props: Props) => {
	const [user, setUser] = useState("David ");

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	return (
		<>
			<div date-rangepicker className="flex items-center">
				<div className="relative">
					<h1>{`Hello ${user}!`}</h1>

					{/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					</div> */}
					<DatePicker
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						selected={startDate}
						onChange={(date: Date) => setStartDate(date)}
						minDate={new Date()}
						// showTimeSelect
						dateFormat="Pp"
						placeholderText="Select date start"
					/>
					{/* <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/> */}
				</div>
				<span className="mx-4 text-gray-500">to</span>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
					<DatePicker
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						selected={endDate}
						onChange={(date: Date) => setEndDate(date)}
						// showTimeSelect
						minDate={new Date()}
						dateFormat="Pp"
						// dateFormat="MMMM d, yyyy h:mm aa"
						placeholderText="Select date end"
					/>
					{/* <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/> */}
				</div>
				{/* <UserComponent/> */}
			</div>
		</>
	);
};
export default Billing;

const UserComponent = () => {
	const user = useContext(UserContext);
	<UserContext.Provider value={user}>
		<h2>{`Hello ${user} Good Afternoon!`}</h2>
	</UserContext.Provider>;
};

const User1 = () => {};
