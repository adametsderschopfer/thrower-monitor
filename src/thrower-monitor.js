import cn from "./styles/styleClassNames";

export function createElement(tagName = "", classnames = []) {
  if (tagName.length === 0) {
    return Error(`The tagName argument was not specified.`);
  }

  const element = document.createElement(tagName);

  if (classnames.length) {
    if (typeof classnames === "string") {
      element.classList.add(classnames.trim());
    } else {
      element.classList.add(...classnames);
    }
  }

  return element;
}

export function throwerMonitor(type = "", desicription = "", content) {
  if (type.length === 0) {
    throw Error("The type argument was not specified.");
  }

  if (content.length === 0) {
    throw Error("The content argument was not specified.");
  }

  const E_main = createElement("div", cn.main);
  const E_container = createElement("div", cn.container);
  const E_monitor = createElement("div", cn.monitor);
  const E_upper_shell = createElement("div", cn.upper_shell);
  const E_upper_shellContainer = createElement("div", cn.upper_shellContainer);
  const E_type = createElement("div", cn.type);
  const E_description = createElement("div", cn.description);
  const E_content = createElement("div", cn.content);

  E_type.innerHTML = `${type.toUpperCase()}`;
  E_description.innerHTML = `${desicription}`;
  E_content.innerHTML = `${content.stack}`;

  document.body.prepend(E_main);
  E_main.append(E_container);
  E_container.append(E_monitor);

  E_monitor.prepend(E_upper_shell);
  E_monitor.append(E_content);

  E_upper_shell.append(E_upper_shellContainer);
  E_upper_shellContainer.append(E_type);
  E_upper_shellContainer.append(E_description);
}

throwerMonitor(
  "error",
  "Something went wrong!",
  new Error("Something went wrong!")
);
