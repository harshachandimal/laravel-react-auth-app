export const checkUserAuthentication =  (isAuthenticated: boolean) => {
return isAuthenticated;
}

export const checkUserTokenNotEmpty = (userToken: string| null) => {
  return userToken !== "";
}

export const checkUserRole = (userRole: number) => {
    return userRole === 1}
