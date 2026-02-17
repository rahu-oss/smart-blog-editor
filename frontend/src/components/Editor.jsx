import { useState, useEffect } from "react";
import { createPost, savePost, generateAI } from "../services/api";

export default function Editor() {

  const [postId, setPostId] = useState(null);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Creating draft...");
  const [summary, setSummary] = useState("");


  // ✅ Create post
  useEffect(() => {

    const init = async () => {

      try {

        const res = await createPost();

        console.log("Created post:", res.data);

        setPostId(res.data.id);

        setStatus("Draft created ✅");

      }

      catch (err) {

        console.error(err);

        setStatus("Error creating draft");

      }

    };

    init();

  }, []);




  // ✅ Auto save
  useEffect(() => {

    if (!postId) return;

    if (content.trim() === "") return;

    setStatus("Saving...");

    const timer = setTimeout(async () => {

      try {

        await savePost(postId, { content });

        setStatus("Saved ✅");

      }

      catch (err) {

        console.error(err);

        setStatus("Error saving");

      }

    }, 2000);

    return () => clearTimeout(timer);

  }, [content, postId]);




  // ✅ Generate summary
  const handleSummary = async () => {

    try {

      setStatus("Generating summary...");

      const res = await generateAI(content);

      setSummary(res.data.summary);

      setStatus("Summary generated ✅");

    }

    catch (err) {

      console.error(err);

      setStatus("Error generating summary");

    }

  };



  // ✅ Publish
  const handlePublish = async () => {

    try {

      await savePost(postId, {

        content,
        status: "published"

      });

      setStatus("Published 🚀");

    }

    catch (err) {

      console.error(err);

      setStatus("Error publishing");

    }

  };



  return (

    <div className="min-h-screen bg-gray-100 p-6">


      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">


        {/* Title */}

        <h1 className="text-2xl font-bold mb-4">

          Smart Blog Editor

        </h1>



        {/* Status */}

        <p className="mb-3 text-gray-600">

          <b>Status:</b> {status}

        </p>



        {/* Textarea */}

        <textarea

          value={content}

          onChange={(e) => setContent(e.target.value)}

          placeholder="Write your blog here..."

          className="w-full h-52 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"

        />



        {/* Buttons */}

        <div className="mt-4">


          <button

            onClick={handleSummary}

            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"

          >

            Generate Summary

          </button>



          <button

            onClick={handlePublish}

            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-3 transition"

          >

            Publish

          </button>


        </div>



        {/* Summary */}

        {

          summary && (

            <div className="mt-5 p-4 bg-gray-100 rounded">

              <h3 className="font-bold mb-2">

                Summary:

              </h3>

              <p>

                {summary}

              </p>

            </div>

          )

        }


      </div>

    </div>

  );

}





