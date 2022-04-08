import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from '../features/posts/postsSlice';
import { selectAllUsers } from '../features/users/usersSlice';

const AddPostForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userId, setUserId] = useState('');
	const [addRequestStatus, setAddRequestStatus] = useState('idle');

	const users = useSelector(selectAllUsers);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);
	const onAuthorChanged = (e) => setUserId(e.target.value);

	const canSave =
		[title, content, userId].every(Boolean) && addRequestStatus === 'idle';

	const onSavePostClicked = () => {
		if (canSave) {
			try {
				setAddRequestStatus('pending');
				dispatch(addNewPost({ title, body: content, userId })).unwrap();

				setTitle('');
				setContent('');
				setUserId('');
			} catch (err) {
				console.error('Failed to save the post', err);
			} finally {
				setAddRequestStatus('idle');
			}
		}
	};

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<section className=" flex flex-col w-[600px] font-bold">
			<h2>Add a New Post</h2>
			<form className="w-[600px] mt-5">
				<label htmlFor="postTitle">Post Title:</label>
				<input
					className="w-[600px] my-5 rounded-lg border border-gray-200 indent-2"
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor="postAuthor">Author:</label>
				<select
					className="w-[600px] my-5 rounded-lg border border-gray-200 indent-2"
					id="postAuthor"
					value={userId}
					onChange={onAuthorChanged}
				>
					<option value=""></option>
					{usersOptions}
				</select>
				<label htmlFor="postContent" className="font-bold ">
					Content:
				</label>
				<textarea
					className="w-[600px] my-5 rounded-lg border border-gray-200 indent-2 "
					id="postContent"
					border
					border-gray-200
					name="postContent"
					value={content}
					onChange={onContentChanged}
				/>
				<div className="flex w-[600px]  justify-center mb-10">
					<button
						className="w-[200px] bg-teal-600 "
						type="button"
						onClick={onSavePostClicked}
						disabled={!canSave}
					>
						Save Post
					</button>
				</div>
			</form>
		</section>
	);
};
export default AddPostForm;
