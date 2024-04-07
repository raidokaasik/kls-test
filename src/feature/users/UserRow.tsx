import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectUser, deselectUser } from "../../redux/features/users/userSlice";

export const UserRow = ({ style, user }: any) => {
	const dispatch = useDispatch();
	const [selected, setSelected] = useState<boolean>(false);

	function handleCheckBox(e: any) {
		const checked = e.target.checked;
		setSelected(checked);
		if (checked) {
			dispatch(selectUser(user.id));
		} else {
			dispatch(deselectUser(user.id));
		}
	}

	return (
		<div style={{ ...style, display: "inline-flex" }} key={user.id}>
			<input type="checkbox" onChange={handleCheckBox} />
			<div>
				<p style={{ color: selected ? "blue" : "black" }}>{user.name}</p>
				<p>{user.email}</p>
			</div>
			<p>{user.role}</p>
		</div>
	);
};
