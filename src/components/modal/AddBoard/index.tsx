import { AiOutlineClose } from "react-icons/ai";
import AppHandleInput from "../../common/input";
import { SubmitHandler, useForm } from "react-hook-form";
const backgroundImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_vector-1726643083845-7d4c8fdcd4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1730055194055-2ecec719fa5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
];
interface IFormInput{
  bg:string;
  title:string
}
const AddBoard = () => {
 const {handleSubmit}=useForm<IFormInput>();
 const onSubmit: SubmitHandler<IFormInput> = (data) => {
  console.log(data)
 }

  return (
    <div className="fixed right-20 bottom-20 z-10 bg-slate-800 w-[400px] shadow p-4 rounded-lg text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="text-center flex-1 text-gray-100 font-medium">
          Create board{" "}
        </div>
        <button className="self-end cursor-pointer">
          {" "}
          <AiOutlineClose color="#fff" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
      <div>Background</div>
      <div className="flex gap-2 flex-wrap">
        {backgroundImages?.map((bg:string,_i:number)=>(
          <div key={_i} className={`rounded-md w-20 h-[60px] shadow  bg-center bg-cover cursor-pointer`} 
          style={{
            backgroundImage: `url(${bg})`,
          }}
          ></div>
        ))}
      </div>
      {/* <AppHandleInput/> */}

    </div>
  );
};

export default AddBoard;
