import { useState } from 'react';

const AddPostForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	return (
		<section className="flex flex-col">
			<h2>Add a New Post</h2>
			<form className="flex flex-col w-[600px]">
				<label htmlFor="postTitle">Post Title:</label>
				<input
					className="border border-gray-200 h-10"
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>

				<label htmlFor="postContent">Content:</label>
				<textarea
					className="border border-gray-200"
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChanged}
				/>
				<button type="button">Save Post</button>
			</form>
		</section>
	);
};
export default AddPostForm;
