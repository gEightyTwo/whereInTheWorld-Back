const TABLE_NAME = 'comments'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, title: 'Love It!', content: 'Cupcake ipsum dolor sit amet bear claw halvah gummi bears. Dessert croissant sweet icing. Bear claw pudding cake. Jelly beans chocolate bar donut croissant tiramisu chocolate sesame snaps cheesecake. Tootsie roll topping tootsie roll cupcake macaroon jelly icing liquorice tiramisu. Jelly-o candy canes wafer cake bonbon cheesecake. Jelly muffin dessert pie gingerbread apple pie. Carrot cake sweet roll chupa chups gummi bears sweet soufflé. Cake candy canes tootsie roll.', user_id: 1, city_id: 1},
        {id: 2, title: 'Great Tacos', content: 'Cupcake ipsum dolor sit. Amet lemon drops pastry. Wafer cotton candy candy marzipan jelly dessert fruitcake dessert. Jelly-o sugar plum macaroon gingerbread. Cheesecake chocolate jelly jelly beans powder lollipop macaroon dessert lemon drops. Candy sesame snaps wafer candy brownie bear claw jujubes. Cookie danish jelly beans pie sesame snaps.', user_id: 3, city_id: 3},
        {id: 3, title: 'Weather is not good.', content: 'Cupcake ipsum dolor sit amet chocolate brownie. Gingerbread biscuit muffin icing gummi bears gingerbread topping cotton candy marzipan. Candy marzipan biscuit cheesecake dessert. Lollipop caramels wafer jelly-o toffee cheesecake. Pie pastry chupa chups soufflé liquorice. Caramels sesame snaps bonbon tiramisu. Gingerbread fruitcake dessert cotton candy cotton candy topping. Chocolate chupa chups powder icing brownie tart. Apple pie lollipop gummies.',  user_id: 2, city_id: 2}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
