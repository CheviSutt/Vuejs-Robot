export default { // custom directive applied to PartSelector.vue, <span/sale
  bind: (element) => {
    element.style.position = 'absolute';
    element.style.bottom = '5px';
    element.style.right = '5px';
  },
};
