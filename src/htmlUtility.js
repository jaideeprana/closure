const html_tag = (tag) =>
  (message) => {
    const wrapped_text = `<${tag}>${message}</${tag}>`;
    console.log(`${wrapped_text}`);
    return wrapped_text;
  };

const h1Tag = html_tag("h1");
h1Tag("Some heading");
