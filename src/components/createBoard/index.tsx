import { useEffect, useRef, useState } from "react";
import AddBoard from "../modal/AddBoard";

const CreateBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => setShowModal((prevState) => !prevState)}
        className="bg-slate-500 rounded-lg w-[200px] h-[200px] flex items-center justify-center text-gray-100 font-medium font-poppins cursor-pointer"
      >
        Create new board
      </div>
      {showModal && (
        <div ref={modalRef}>
          <AddBoard />
        </div>
      )}
    </>
  );
};

export default CreateBoard;
