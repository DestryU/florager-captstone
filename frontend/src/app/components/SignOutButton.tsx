import {Button} from "flowbite-react";
import {signOut} from "@/utils/actions/sign-out/sign-out.action";
// @ts-ignore
export function SignOutButton() {

    return (
        <>
        <Button className={"bg-green-700"} onClick={async()=>{
           await signOut()
        window.location.href="/"
        }} >Sign Out</Button>
        </>
        )
}

