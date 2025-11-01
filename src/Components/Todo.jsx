import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export default function Todo(props) {
  const [popUpShow, setPopUpShow] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);

  //  Handlers
  const handleTitleChange = (e) => {
    props.handleUpdate(props.id, "title", e.target.value);
  };

  const handleContentChange = (e) => {
    props.handleUpdate(props.id, "note", e.target.value);
  };

  const handleDelete = () => {
    props.handleDelete(props.id);
    setDeletePopUp(false);
    setPopUpShow(false);
  };

  //  Render
  return (
    <div className="flex justify-center items-center relative">
        {/*  Note Card (Preview)*/}
      <div
        onClick={() => setPopUpShow(true)}
        className="group p-4 lg:p-5 w-80 md:w-[550px] max-h-52 lg:max-h-80 
                   bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-500 
                   rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                   overflow-hidden cursor-pointer"
      >
        <div
          className="text-lg lg:text-xl font-semibold mb-2 
                     text-slate-800 dark:text-white truncate 
                     group-hover:text-amber-500 transition-colors duration-300"
        >
          {props.title}
        </div>

        <div
          className="text-sm lg:text-base text-slate-600 dark:text-white 
                     leading-relaxed overflow-hidden text-ellipsis 
                     line-clamp-4 lg:line-clamp-6"
        >
          {props.content}
        </div>
      </div>

       {/*Popup Editor*/}

      {popUpShow && (
        <div className="z-50 fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">

          <div
            className="relative w-full max-w-[600px] max-h-[90vh] 
           bg-white dark:bg-[#1f1f1f] rounded-xl border border-slate-300 
            shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div
              className="sticky top-0 bg-amber-50 dark:bg-amber-950 
                         flex justify-between items-center px-4 py-3 text-2xl 
                         border-b border-amber-200"
            >
              <span className="text-amber-700 dark:text-white font-semibold">
                Edit Note
              </span>

              <div className="flex items-center gap-4">
                <MdDelete
                  onClick={() => setDeletePopUp(true)}
                  className="text-amber-600 dark:text-amber-400 cursor-pointer 
                             hover:text-red-500 transition-colors"
                />
                <IoCloseOutline
                  onClick={() => setPopUpShow(false)}
                  className="text-slate-600 dark:text-white cursor-pointer 
                             hover:text-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <input
                type="text"
                placeholder="Title"
                value={props.title}
                onChange={handleTitleChange}
                className="w-full text-2xl font-semibold mb-3 border-none outline-none 
                           text-slate-800 dark:text-white placeholder:text-slate-400"
              />

              <textarea
                rows={1}
                placeholder="Write your note..."
                value={props.content}
                onChange={handleContentChange}
                className="w-full resize-none border-none outline-none text-base 
                           text-slate-700 dark:text-slate-200 leading-relaxed 
                           overflow-y-auto transition-all duration-300 
                           min-h-[600px] max-h-[600px]"
              />
            </div>
          </div>

          {/* ==========================
              Delete Confirmation Popup
          =========================== */}
          {deletePopUp && (
            <div className="w-full h-screen fixed top-0 left-0 bg-white/60 dark:bg-black/80 
                            backdrop-blur-sm flex justify-center items-center z-50">
              <div className="w-80 bg-white dark:bg-black p-5 rounded-2xl 
                              border border-black/30 dark:border-white/50 shadow-lg">
                <p className="text-center p-2 dark:text-white/90">
                  Are you sure you want to delete this note?
                </p>

                <div className="flex justify-between items-center px-5 mt-10">
                  <button
                    onClick={() => setDeletePopUp(false)}
                    className="px-5 py-2 bg-red-500 rounded-lg text-white 
                               hover:scale-105 duration-300 hover:bg-red-600"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-5 py-2 bg-green-500 rounded-lg text-white 
                               hover:scale-105 duration-300 hover:bg-green-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
