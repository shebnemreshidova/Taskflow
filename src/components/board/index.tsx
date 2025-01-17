
const Board = ({name,bg}:{name:string,bg:string}) => {
  return (
    <div className={`bg-${bg} w-[200px] rounded-lg h-[200px] shadow cursor-pointer`}>
      <div>{name}</div>
    </div>
  )
}

export default Board