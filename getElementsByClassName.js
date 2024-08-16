const str = `
    <div>
      <h1 class='foo'>Text</h1>
      <div>
        <span class='foo bar'>Span Text</span>
      </div>
    </div>
`;
const parser = new DOMParser();
const doc = parser.parseFromString(str, "text/html");

doc.body; // It gives you body

function getElementsByClassNameCustom(body, className) {
  const output = [];

  function recurse(el) {
    if (el == null) return; //base case
    if (el.classList.contains(className)) {
      output.push(el);
    }
    for (const child of el.children) {
      recurse(child);
    }
  }
  //we need to call recurse on every child of body
  for (const bodyChild of body.children) {
    recurse(bodyChild);
  }
  return output;
}
getElementsByClassNameCustom(doc.body, "foo");
