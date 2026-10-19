export default function Home() {
  return (
    <h1>
      Vælg feature branch!
    </h1>
  );
}


<script>
  let likes = 0;

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const span = document.querySelector("span");

    button.addEventListener("click", function () {
  
    });
  });
</script>

<body>
  <button>🔥 Like<span></span></button>
</body>

/**kode fra react læsnings øvelse 

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Here is your cookie!">
       Accept
      </AlertButton>
      </div>)}

*/