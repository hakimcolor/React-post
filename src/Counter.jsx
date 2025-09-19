import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  const [input, setInput] = useState('');

  // Count handlers
  const handleAdd = () => setCount(count + 1);
  const handleRemove = () => {
    if (count > 0) setCount(count - 1);
    else alert('Count cannot go below 0!');
  };
  const handleReset = () => setCount(0);

  // Post handlers
  const handlePostAdd = () => {
    if (input.trim() === '') return;
    const newPost = { text: input, time: new Date().toLocaleString() };
    setPost([newPost, ...post]);
    setInput('');
  };

  const handlePostRemove = (index) => {
    if (window.confirm('Do you want to remove this post?')) {
      const updatedPosts = post.filter((_, i) => i !== index);
      setPost(updatedPosts);
    }
  };

  return (
    <>
      {/* Counter Section */}
      <div className="flex justify-center mt-5">
        <div className="text-center">
          <h1 className="text-2xl mb-4 font-bold">Count: {count}</h1>
          <button
            onClick={handleAdd}
            className="p-3 bg-cyan-500 hover:bg-cyan-200 hover:text-black text-white rounded-lg cursor-pointer transition duration-600"
          >
            Add
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-600 ml-2 h-12 w-20 hover:bg-red-300 hover:text-black cursor-pointer transition duration-600 text-white rounded-lg"
          >
            Remove
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-700 ml-2 h-12 w-20 hover:bg-gray-400 hover:text-black cursor-pointer transition duration-600 text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Post Section */}
      <div className="mt-5 flex flex-col items-center">
        <div>
          <input
            type="text"
            placeholder="Write something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border-black border-2 rounded-xl"
          />
          <button
            onClick={handlePostAdd}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-400 hover:text-black transition duration-600 ml-2"
          >
            Update the post
          </button>
        </div>

        <div className="mt-5 w-[70%] flex flex-col items-center">
          {post.map((p, index) => (
            <div
              key={index}
              className="mb-3 p-3 border border-gray-400 rounded-lg shadow-md hover:shadow-black relative w-full"
            >
              <p className="text-sm text-gray-600 absolute top-0 p-4 right-0">
                🕒 {p.time}
              </p>
              <p className="font-semibold w-[75%] p-4 break-words mt-2">
                {p.text}
              </p>
              <button
                onClick={() => handlePostRemove(index)}
                className="mt-12 mr-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-400 transition duration-300 absolute top-0 right-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
