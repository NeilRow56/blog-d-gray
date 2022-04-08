import AddPostForm from '../components/addPostForm';
import PostsList from '../components/PostsList';

export default function Home() {
	return (
		<div className=" flex flex-col w-full max-w-[1240px] mx-auto py-16 ">
			{' '}
			<AddPostForm />
			<PostsList />
		</div>
	);
}
