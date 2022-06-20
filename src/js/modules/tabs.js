export const tabs = () => {
  const tabs = document.querySelectorAll('.tabs__item');
  const contents = document.querySelectorAll('.content');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => {
        item.classList.remove('tabs__item-active');
      });
      contents.forEach(item => {
        item.classList.add('hide');
      });
      tabs[i].classList.add('tabs__item-active');
      contents[i].classList.remove('hide');
    })
  })
}