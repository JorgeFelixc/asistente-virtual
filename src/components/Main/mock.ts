import { Exihibition } from "../../interfaces/common";

type DupleExhibition = [Exihibition, Exihibition];
export const MockData: Array<DupleExhibition> = [
  [
    {
      id: 0,
      name: "Example 1",
      description: "lorem ipsum yes",
      img: "https://www.digalix.com/wp-content/uploads/2015/10/Expos_Interactivas_01_.jpg",
    },
    {
      id: 1,
      name: "Example 2",
      description: "lorem ipsum yes",
      img: "https://i0.wp.com/evemuseografia.com/wp-content/uploads/2021/08/EVE03082021.jpg?fit=1170%2C686&ssl=1",
    },
  ],
  [
    {
      id: 2,
      name: "Example 3",
      description: "lorem ipsum yes",
      img: "https://img.chilango.com/2018/06/franz-erhard-walther-en-la-cdmx.jpg",
    },
    {
      id: 3,
      name: "Example 4",
      description: "lorem ipsum yes",
      img: "https://i0.wp.com/evemuseografia.com/wp-content/uploads/2021/08/EVE03082021.jpg?fit=1170%2C686&ssl=1",
    },
  ],
  [
    {
      id: 4,
      name: "Sala Interactiva",
      description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
      `,
      img: "https://www.digalix.com/wp-content/uploads/2015/10/Expos_Interactivas_01_.jpg",
    },
    {
      id: 5,
      name: "Example 2",
      description: "lorem ipsum yes",
      img: "https://i0.wp.com/evemuseografia.com/wp-content/uploads/2021/08/EVE03082021.jpg?fit=1170%2C686&ssl=1",
    },
  ],
];
