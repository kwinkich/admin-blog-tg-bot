import { Post } from '../../types/Post';

export const PostCard = ({
	data,
	...props
}: {
	data: Post;
	className: string;
}) => {
	return (
		<div>
			<div>
				<h1 className={' text-3xl' + props.className}>{data.title}</h1>
				{data.tags.map((tag) => {
					return <span key={tag}>{tag}</span>;
				})}
			</div>
		</div>
	);
};
