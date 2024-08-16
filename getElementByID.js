const str = `
    <div>
      <h1 id='foo'>Text</h1>
      <div>
        <span id='bar'>Span Text</span>
      </div>
    </div>
`;
const parser = new DOMParser();
const doc = parser.parseFromString(str, "text/html");

doc.body; // It gives you body

function getElementByIdCustom(body, id) {
  let output = null;

  function recurse(el) {
    if (el == null) return; // base case
    if (el.id === id) {
      output = el;
      return;
    }
    for (const child of el.children) {
      recurse(child);
      if (output) return; // early exit if the element is found
    }
  }

  // Start the recursion from each child of body
  for (const bodyChild of body.children) {
    recurse(bodyChild);
    if (output) break; // early exit if the element is found
  }

  return output;
}

// Usage example
const element = getElementByIdCustom(doc.body, "foo");
console.log(element);
