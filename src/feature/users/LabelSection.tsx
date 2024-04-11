import { useAppDispatch } from "../../redux/hooks";
import {
	selectAllUsers,
	deselectAllUsers,
} from "../../redux/features/users/userSlice";
import arrow from "../../assets/icons/arrow.svg";

export const LabelSection = () => {
	const dispatch = useAppDispatch();

	const selectAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			return dispatch(selectAllUsers());
		}
		dispatch(deselectAllUsers());
	};

	return (
		<div
			style={{
				display: "inline-flex",
				justifyContent: "space-between",
				width: "100%",
				height: "18px",
				marginBottom: "10px",
			}}
		>
			<div>
				<input
					type="checkbox"
					id="select-all-users"
					onChange={selectAllHandler}
				/>
				<label htmlFor="select-all-users">User</label>
			</div>
			<div>
				<label htmlFor="sort-arrow">Permission</label>
				<button id="sort-arrow">
					<img src={arrow} alt="sort-arrow" />
				</button>
			</div>
		</div>
	);
};
