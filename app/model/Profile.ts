// import Realm, {BSON,ObjectSchema} from 'realm';

// export class Profile extends Realm.Object<Profile> {
//   _id!: BSON.ObjectId;
//   fullName!: string;
//   phoneNumber!: string;
//   username!: string;
//   static schema: ObjectSchema = {
//     name: "Profile",
//     properties: {
//       _id: "objectId",
//       fullName: { type: "string", indexed: "full-text" },
//       username: { type: "string", indexed: "full-text" },
//       phoneNumber: { type: "string", indexed: "full-text" },
//     },
//     primaryKey: "_id",
//   };
// }

export class Profile{
  constructor(
    public fullName: string,
    public username: string,
    public phoneNumber: string
  ){}
}