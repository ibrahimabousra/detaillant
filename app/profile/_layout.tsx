import { Slot } from "expo-router";
//import {RealmProvider} from '@realm/react';

//import { Profile } from "../model/Profile";
export default function ProfileLayout(){
    return (
      <>
        <Slot />
        {/*<RealmProvider schema={[Profile]}></RealmProvider>*/}
      </>
    );
}