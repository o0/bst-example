const SLIDE_DURATION = 2000;

const initScrollGallery = (container, pictures,
                           stages = new Array(pictures.length).fill(`stage-0`)) => {
  const constroller = new ScrollMagic.Controller();
  const animationState = { imageIndex: 0 };
  const image = container.querySelector('img');

  const scene = new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 0,
    duration: SLIDE_DURATION,
  })
    .setPin(container)
    .setTween(TweenMax.to(animationState, 0.5, {
      imageIndex: pictures.length - 1,
      ease: Linear.easeNone,
      roundProps: 'imageIndex',
      repeat: 0,
      immediateRender: true,
      onUpdate: () => {
        image.src = pictures[animationState.imageIndex];

        const activeHighlighter = container.querySelector('.active');

        if (activeHighlighter && !activeHighlighter.classList.contains(stages[animationState.activeIndex])) {
          activeHighlighter.classList.remove('active');
          container.querySelector(`.${stages[animationState.imageIndex]}`).classList.add('active');
        }
      }
    }))
    .addTo(new ScrollMagic.Controller());
};


initScrollGallery(document.all['linear-lookup'], [
  'img/02-linear-lookup/00.png',
  'img/02-linear-lookup/01.png',
  'img/02-linear-lookup/02.png',
  'img/02-linear-lookup/03.png',
  'img/02-linear-lookup/04.png',
  'img/02-linear-lookup/05.png',
  'img/02-linear-lookup/06.png',
  'img/02-linear-lookup/07.png',
], [
  'stage-1',
  'stage-2',
  'stage-3',
  'stage-3',
  'stage-3',
  'stage-3',
  'stage-4',
  'stage-4',
]);


initScrollGallery(document.all['binary-lookup'], [
  'img/03-binary-search/01.png',
  'img/03-binary-search/02.png',
  'img/03-binary-search/03.png',
  'img/03-binary-search/04.png',
  'img/03-binary-search/05.png',
], [
  'stage-1',
  'stage-2',
  'stage-3',
  'stage-4',
  'stage-5',
]);


initScrollGallery(document.all['binary-tree-buildup'], [
  'img/04-binary-search-tree/01.png',
  'img/04-binary-search-tree/02.png',
  'img/04-binary-search-tree/03.png',
], [
  'stage-1',
  'stage-2',
  'stage-3',
]);


initScrollGallery(document.all['binary-tree-insertion'], [
  'img/05-binary-search-tree-insertion/01.png',
  'img/05-binary-search-tree-insertion/02.png',
  'img/05-binary-search-tree-insertion/03.png',
  'img/05-binary-search-tree-insertion/04.png',
  'img/05-binary-search-tree-insertion/05.png',
  'img/05-binary-search-tree-insertion/06.png',
], new Array(6).fill('stage-1'));


initScrollGallery(document.all['binary-inorder'], [
  'img/06-binary-search-tree-inorder/01.png',
  'img/06-binary-search-tree-inorder/02.png',
  'img/06-binary-search-tree-inorder/03.png',
  'img/06-binary-search-tree-inorder/04.png',
], [
  'stage-1',
  'stage-2',
  'stage-3',
  'stage-4',
]);


initScrollGallery(document.all['binary-inorder-big'], [
  'img/07-binary-search-tree-inorder-big/02.png',
  'img/07-binary-search-tree-inorder-big/01.png',
  'img/07-binary-search-tree-inorder-big/03.png',
  'img/07-binary-search-tree-inorder-big/01.png',
  'img/07-binary-search-tree-inorder-big/04.png',
  'img/07-binary-search-tree-inorder-big/05.png',
  'img/07-binary-search-tree-inorder-big/06.png',
  'img/07-binary-search-tree-inorder-big/06.png',
  'img/07-binary-search-tree-inorder-big/07.png',
  'img/07-binary-search-tree-inorder-big/08.png',
  'img/07-binary-search-tree-inorder-big/09.png',
], [
  'stage-1',
  'stage-2',
  'stage-1',
  'stage-2',
  'stage-3',
  'stage-3',
  'stage-3',
  'stage-4',
  'stage-1',
  'stage-3',
  'stage-3',
  'stage-3',
]);
