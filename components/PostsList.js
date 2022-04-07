import { useSelector } from 'react-redux';
import { selectAllPosts } from '../features/posts/postsSlice';

const PostsList = () => {
	const posts = useSelector(selectAllPosts);

	const renderedPosts = posts.map((post) => (
		<article
			key={post.id}
			className="border border-gray-200 rounded-xl w-[600px] my-10"
		>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
		</article>
	));

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	);
};
export default PostsList;
