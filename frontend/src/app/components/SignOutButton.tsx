import {Button} from "flowbite-react";
// @ts-ignore
export function SignOutButton({signOut}) {

    return (
        <>
        <Button onClick={signOut} color="bg:red-600">Sign Out</Button>
        </>
        )
}

