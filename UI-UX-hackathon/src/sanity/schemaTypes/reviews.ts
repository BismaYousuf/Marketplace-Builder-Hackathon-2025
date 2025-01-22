// export default {
//     name: "food",
//     title: "Food",
//     type: "document",
//     fields: [
//       {
//         name: "name",
//         title: "Name",
//         type: "string",
//       },
//       {
//         name: "price",
//         title: "Price",
//         type: "number",
//       },
//       {
//         name: "image",
//         title: "Image",
//         type: "image",
//         options: {
//           hotspot: true,
//         },
//       },
//       {
//         name: "reviews",
//         title: "Reviews",
//         type: "array",
//         of: [
//           {
//             type: "object",
//             fields: [
//               {
//                 name: "rating",
//                 title: "Rating",
//                 type: "number",
//                 validation: (Rule: any) => Rule.min(1).max(5),
//               },
//               {
//                 name: "comment",
//                 title: "Comment",
//                 type: "string",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };
  