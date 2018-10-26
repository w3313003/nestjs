import { Controller, Post, Body } from "@nestjs/common";
import menus from "../../mockmenus";
@Controller("user")
export class UserController {
    @Post("login")
    login() {
        return {
            code: 0,
            data: {
                menu: menus
            }
        };
    }
}