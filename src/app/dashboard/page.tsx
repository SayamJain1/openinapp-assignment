// @ts-nocheck
"use client";
import Dashboard from "@/component/Dashboard";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Papa from "papaparse";
import Table from "@/component/UI/Table";

const acceptableFiles =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

export default function Page() {
  const [csvFile, setCsvFile] = useState("");
  const [csvFileName, setCsvFileName] = useState("");
  const [data, setData] = useState([]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCsvFile(file);
      setCsvFileName(file.name);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Papa.parse(csvFile, {
      header: true,
      complete: function (results) {
        console.log(results.data);
        setData(results.data);
      },
    });
  };

  const handleRemove = () => {
    setCsvFileName("");
    setData([]);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <Dashboard />
      </div>
      <div className="w-full p-7 font-figtree h-full flex flex-col ">
        <div className="flex justify-between">
          <div className="font-semibold text-2xl">Upload CSV</div>
          <div className="hidden md:block">
            <Image
              src={"/bell-avatar.svg"}
              width={70}
              height={70}
              alt="bell and avatar"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-64  sm:w-80 md:w-96 my-40  h-56 md:h-72 p-2 bg-white rounded-lg flex flex-col gap-4 justify-center self-center items-center">
          <div className="border-dashed py-20 relative border text-center border-gray-400 flex-1 w-full flex flex-col gap-2 items-center justify-center rounded-xl font-normal text-base text-gray-400 ">
            <Image
              src={"/excel.svg"}
              width={40}
              height={40}
              alt="bell and avatar"
              className="cursor-pointer"
            />
            <div>
              {csvFileName ? (
                <p>
                  {`${csvFileName}`}{" "}
                  <span
                    onClick={handleRemove}
                    className="cursor-pointer text-red-600 block"
                  >
                    Remove
                  </span>
                </p>
              ) : (
                "Drop your excel sheet here or"
              )}
              <span>
                <form onSubmit={handleSubmit}>
                  <label
                    className={`text-primary cursor-pointer ${
                      csvFileName && "hidden"
                    }`}
                    htmlFor="file"
                  >
                    browse
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    accept={acceptableFiles}
                    onChange={handleFile}
                    value=""
                  />
                  <button
                    type="submit"
                    className="absolute flex items-center justify-center gap-3 -bottom-12 left-0 font-bold hover:opacity-90 text-base text-white p-2 rounded-lg bg-primary w-full"
                  >
                    <Image src={'/upload-file.svg'} width={25} height={25} alt="upload icon" />
                    Upload
                  </button>
                </form>
              </span>
            </div>
          </div>
        </div>
        {data.length ? <Table data={data} /> : ""}
      </div>
    </div>
  );
}
