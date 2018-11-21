// export default { // custom directive applied to PartSelector.vue, <span/sale // 1st example
//   bind: (element, binding) => {
//     // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
//     if (binding.arg !== 'position') return;
//
//     Object.keys(binding.modifiers).forEach((key) => {
//       element.style[key] = '5px';
//     });
//     element.style.position = 'absolute';
//   },
// };

// function applyStyle(element, binding) { // @nd example
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }
//
// export default { // custom directive applied to PartSelector.vue, <span/sale
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// };

export default function (element, binding) { // 3rd example
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
