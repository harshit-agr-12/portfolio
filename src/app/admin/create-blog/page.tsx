"use client"
import React, { useState } from 'react'
type BlockType = "text" | "image" | "embed";
type BlogBlock = { type: "text"; content: string } | { type: "image"; url: string; alt?: string } | { type: "embed"; embedUrl: string };

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [blocks, setBlocks] = useState<BlogBlock[]>([]);

    const addBlock = (type: BlockType) => {
        let newBlock: BlogBlock;
        if (type === "text") newBlock = { type: "text", content: "" };
        else if (type === "image") newBlock = { type: "image", url: "", alt: "" };
        else newBlock = { type: "embed", embedUrl: "" };

        setBlocks([...blocks, newBlock]);
    }

    const updateBlock = (index: number, updatedBlock: BlogBlock) => {
        const newBlocks = [...blocks];
        newBlocks[index] = updatedBlock;

        setBlocks(newBlocks);
    }

    const removeBlock = (index: number) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    }

    const handleSubmit = () => {
        const blogData = { title, author, blocks };
        console.log("Saving blog: ", blogData);
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 p-6">
            <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

            {/* Blog Meta Info */}
            <input
                type="text"
                placeholder="Blog Title"
                className="border p-2 rounded w-full mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Author Name"
                className="border p-2 rounded w-full mb-6"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            {/* Blocks */}
            <div className="space-y-4 mb-6">
                {blocks.map((block, i) => (
                    <div
                        key={i}
                        className="border rounded p-4 shadow-sm bg-gray-50 relative"
                    >
                        {/* Remove Button */}
                        <button
                            onClick={() => removeBlock(i)}
                            className="absolute top-2 right-2 text-red-500"
                        >
                            ✕
                        </button>

                        {/* Render based on type */}
                        {block.type === "text" && (
                            <textarea
                                placeholder="Write your text..."
                                className="w-full p-2 border rounded"
                                value={block.content}
                                onChange={(e) =>
                                    updateBlock(i, { type: "text", content: e.target.value })
                                }
                            />
                        )}

                        {block.type === "image" && (
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    className="w-full p-2 border rounded"
                                    value={block.url}
                                    onChange={(e) =>
                                        updateBlock(i, { ...block, url: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Alt text (optional)"
                                    className="w-full p-2 border rounded"
                                    value={block.alt || ""}
                                    onChange={(e) =>
                                        updateBlock(i, { ...block, alt: e.target.value })
                                    }
                                />
                            </div>
                        )}

                        {block.type === "embed" && (
                            <input
                                type="text"
                                placeholder="Embed URL (YouTube, etc.)"
                                className="w-full p-2 border rounded"
                                value={block.embedUrl}
                                onChange={(e) =>
                                    updateBlock(i, { type: "embed", embedUrl: e.target.value })
                                }
                            />
                        )}
                    </div>
                ))}
            </div>



//done
            {/* Add Block Buttons */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => addBlock("text")}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    + Text
                </button>
                <button
                    onClick={() => addBlock("image")}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    + Image
                </button>
                <button
                    onClick={() => addBlock("embed")}
                    className="px-4 py-2 bg-purple-500 text-white rounded"
                >
                    + Embed
                </button>
            </div>



//done 
            {/* Save Button */}
            <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
                Save Blog
            </button>
        </div>
    );
}
