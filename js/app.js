
console.log('xx');
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});
