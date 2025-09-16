function TodoItem(props) {
  return (
    <li className="item">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span>{props.item} </span>
      </span>

      <p>...</p>
    </li>
  );
}
export default TodoItem;

//completed ek boolean property h , yha pe humne use kiya kyuki agar task ho gya toh checkbox hide karo else show karo
