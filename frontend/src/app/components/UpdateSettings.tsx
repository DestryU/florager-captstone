
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function UpdateSettings() {
    return (
        <form className="flex max-w-md flex-col gap-4 mx-auto">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email"/>
                </div>
                <TextInput id="email1" type="email" placeholder="flowerloverjane@email.com" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password"/>
                </div>
                <TextInput id="password1" type="password" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="pronouns1" value="Pronouns"/>
                </div>
                <TextInput id="pronouns1" type="pronouns" placeholder="e.g., she/they"/>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember"/>
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" className={"bg-green-700"}>Edit | Submit</Button>
        </form>
    );
}
