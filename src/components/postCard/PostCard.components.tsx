import { Post } from '../../types/Post';

export const PostCard = ({ data }: { data: Post }) => {
	return (
		<div>
			<div>
				<h1>{data.title}</h1>
				{data.tags.map((tag) => {
					return <span key={tag}>{tag}</span>;
				})}
			</div>
		</div>
	);
};
