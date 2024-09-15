import {Button} from "flowbite-react";
import {signOut} from "@/utils/actions/sign-out/sign-out.action";
// @ts-ignore
export function SignOutButton() {

    return (
        <>
        <Button onClick={async()=>{
           await signOut()
        // window.location.href="/"
        }} color="bg:red-600">Sign Out</Button>
        </>
        )
}

