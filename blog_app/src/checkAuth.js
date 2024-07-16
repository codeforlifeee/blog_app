export function isLogin()
{
    let token = localStorage.getItem('token')
    if(!token){
        return redirect('/admin/login');
    }
    else{
        return null;
        
    }
}























