export default function Button({ classList, children, ...props }) {
	return (
		<button className={classList} {...props}>
			{children}
		</button>
	);
}
