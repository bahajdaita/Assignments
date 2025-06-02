export default function List({items=[]}){

const foodList=items.map((el)=><li key={el.id} >{el.name}</li>)





return (

<>

<ul>

{foodList}



</ul>








</>








)










}