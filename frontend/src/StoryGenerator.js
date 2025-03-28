import React, { useState } from "react";
import axios from "axios";

export default function StoryGenerator() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/generate", { prompt });
      setStory(response.data.story);
      setImage(response.data.image);
    } catch (error) {
      console.error("Error generating story:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">AI Story Generator</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        placeholder="Enter a story prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={generateStory}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>
      {story && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Generated Story:</h2>
          <p className="mt-2 p-4 border rounded bg-gray-100">{story}</p>
          {image && <img src={image} alt="Generated Illustration" className="mt-4 rounded" />}
        </div>
      )}
    </div>
  );
}