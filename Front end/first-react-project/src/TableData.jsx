export default function TableData({col=[], data=[]}){

const colList=col.map((el)=> <th key={el.key}> {el.label} </th>)
const dataList=data.map((el)=>  <tr key={el.id}>     


<td>{el.id}</td>
<td>{el.username}</td>
<td>{el.email}</td>
<td>{el.provider}</td>







</tr>)



return (

<table>

<thead>

<tr>{colList}</tr>

</thead>

<tbody>

{dataList}



</tbody>





</table>





)



}