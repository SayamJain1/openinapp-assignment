// @ts-nocheck
import Image from "next/image";
import { useState } from "react";

export default function Table({ data }) {
  const [selectedTags, setSelectedTags] = useState(Array(data.length).fill([]));

  const handleTagSelect = (i, tag) => {
    const newSelectedTags = [...selectedTags];
    newSelectedTags[i] = [...selectedTags[i], tag];
    setSelectedTags(newSelectedTags);
  };

  const handleRemoveTag = (i, tagIndex) => {
    const newSelectedTags = [...selectedTags];
    newSelectedTags[i] = selectedTags[i].filter((_, i) => i !== tagIndex);
    setSelectedTags(newSelectedTags);
  };

  return (
    <div>
      <h2 className="font-figtree font-semibold text-2xl mb-5">Uploads</h2>

      <table className="min-w-full bg-[#f5f5f5]">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="p-7 rounded-lg">
          {data.map((d, i: number) => (
            <tr key={i} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap">{d.id}</td>
              <td className="px-6 py-4 whitespace-nowrap underline text-blue-400">
                <a href={d.links}>{d.links}</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{d.prefix}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
                    defaultValue=""
                    onChange={(e) => handleTagSelect(i, e.target.value)}
                  >
                    <option disabled hidden value="">
                      Select Tag
                    </option>
                    {d["select tags"]
                      .split(",")
                      .map((tag: string) => tag.trim())
                      .map((option: string, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Image
                      src={"/chevron-down.svg"}
                      width={15}
                      height={15}
                      alt="chevron icon"
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {selectedTags[i].map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-primary rounded-lg px-2 py-0.5 text-sm font-semibold text-white mr-2 mb-2"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(i, tagIndex)}
                      className="ml-2 focus:outline-none text-base"
                    >
                      &#215;
                    </button>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
