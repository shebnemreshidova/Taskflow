import Board from "../../components/board"

const Boards = () => {
  const boards=[
    {id:1,name:"board 1",bg:""},
    {id:2,name:"board 2",bg:""},
    {id:3,name:"board 3",bg:""},
  ]
  return (
    <div className="flex flex-wrap gap-5">
      {boards.map((board)=>(
        <Board key={board.id} bg={board.bg} name={board.name}/>
      ))}
    </div>
  )
}

export default Boards