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

function getElementByTagNameCustom(body, tag) {
  const output = [];
  function recurse(el) {
    if (el.tagName === null) return;
    if (el.tagName === tag.toUpperCase()) {
      output.push(el);
    }
    for (const child of el.children) {
      recurse(child);
    }
  }
  for (const child of body.children) {
    recurse(child);
  }
  return output;
}

getElementByTagNameCustom(doc.body, "div");
