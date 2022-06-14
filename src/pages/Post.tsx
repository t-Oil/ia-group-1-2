import axios from 'axios'
import { useEffect, useState } from 'react'
import PostItems from '../components/PostItems';

const Post = () => {
  const [items, setItems] = useState([] as any)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <main>
      <div className="relative pt-16 pb-8 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.lorem.space/images/hotel/.cache/500x180/man-pan-KTSYy-3XVSo-unsplash.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto text-center">
            <h1 className="text-white font-semibold text-5xl uppercase">Posts</h1>
            <div className="w-full mb-8 rounded-lg shadow-lg overflow-y-auto h-75-vh">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Id</th>
                    <th className="px-4 py-3">User Id</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Body</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <PostItems items={items} />
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </main>
  );
};

export default Post;
