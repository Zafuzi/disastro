import {fail, okay} from "../../serverLib";

interface LoginData {
    username: string;
    password: string;
}

export async function post({request}): Promise<Response> {
    
    const data = await request.json() as LoginData;
    
    const username = data?.username;
    const password = data?.password;
    
    console.log(username, password);
    
    if(!username || !password) {
        return fail("Invalid username or password");
    }
    
    return okay({username, password});
}