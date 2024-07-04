export default function Row(props){
    return(
        <>
                <tr>
                    <td><h5>TimeStamp </h5><br /> <p>{props.date}</p></td> 
                    <td><h5>Name </h5> <br /> <p>{props.name}</p></td>
                    <td><h5>Phone </h5><br /> <p>{props.phone}</p></td>
                    <td><h5>City </h5> <br /> <p>{props.city}</p></td>
                    <td><h5>Address </h5>  <br /> <p>{props.addres}</p></td>
                </tr>
        </>
    )
}