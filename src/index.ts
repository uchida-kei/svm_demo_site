export const hello = (name: string): string => {
  return `Hello ${name}`;
};

const component = (name: string): HTMLDivElement => {
  const element = document.createElement('div');

  element.innerHTML = hello(name);

  return element;
};

document.body.appendChild(component('World'));
