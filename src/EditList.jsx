import data from "./data.json";

function EditList(){
    return (
        <table>
            <th>Day</th>
            <th>Person</th>
            <tbody>
                <tr>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default EditList;