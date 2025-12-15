import { useState } from "react";
import { Typography, Avatar, Button, Input } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const { TextArea } = Input;

function App() {
  // const avatarUrl = "https://api.dicebear.com/7.x/miniavs/svg?seed=3";
  const [comments, setComments] = useState([]);
  const [avatarSeed, setAvatarSeed] = useState(()=>
    Math.floor(Math.random() * 200)
  )
  const getAvatarUrl = (seed) => `https://api.dicebear.com/7.x/miniavs/svg?seed=${seed}`;
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setComments([
      {
        id: Date.now(),
        avatar : getAvatarUrl(avatarSeed),
        author: "User",
        content: input,
        date: dayjs().fromNow(),
        liked: false,
      },
      ...comments,
    ]);
    setInput("");
    setAvatarSeed(Math.floor(Math.random()*200))
  };

  return (
    <>
      <Typography.Title
        level={2}
        style={{
          marginBottom: "1.5rem",
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "bold",
        }}
      >
        Ant Design 댓글창
      </Typography.Title>

      <div className="w-full max-w-[800px] border border-gray-200 shadow-lg p-8 rounded-xl bg-white mx-auto">
        <div className="flex">
          <Avatar src={getAvatarUrl(avatarSeed)} className="pe-3"/>
          <div className="flex-1">
            <TextArea
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="primary"
              className="mt-3 bg-teal-600 hover:!bg-teal-700"
              onClick={handleSubmit}
            >
              등록
            </Button>
          </div>
        </div>

        <Typography.Title 
        level={5}
        className="mt-6 py-2 border-b border-gray-300 !text-gray-700 !font-wemibold"
        >
          총 <span className="text-teal-600 font-bold">{comments.length}</span>개의 댓글이 있습니다.
        </Typography.Title>

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start space-x-3 p-4 border-b border-gray-200"
          >
            <Avatar src={comment.avatar} />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-900">
                  {comment.author}
                </span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1 text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}

        {/*
          <h1>12.15 Monday</h1>
          <Subject />
          <Terms />
          <Wrapper />
        */}
      </div>
    </>
  );
}

export default App;
