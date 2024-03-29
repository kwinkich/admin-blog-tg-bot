export const ButtonDel = ({ click }: { click: () => void }) => {
	return (
		<button className='button-del' onClick={click}>
			X
		</button>
	);
};
