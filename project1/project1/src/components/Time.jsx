function Time() {
  let time = new Date();
  return (
    <div>
      <h3>
        the current time is{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </h3>
    </div>
  );
}

export default Time;
