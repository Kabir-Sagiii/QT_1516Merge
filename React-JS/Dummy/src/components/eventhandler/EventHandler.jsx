function EventHandler() {
  function showMessage() {
    alert("Hello State");
  }

  function showName(name) {
    alert(name);
  }

  return (
    <div>
      <button onClick={showMessage}>Event Handler - 1</button>

      <button
        onClick={() => {
          showName("QT");
        }}
      >
        Event Handler - 2
      </button>
    </div>
  );
}

export default EventHandler;
