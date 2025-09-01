export const checkUserAuthentication =  (isAuthenticated: boolean) => {
return isAuthenticated;
}

export const checkUserTokenNotEmpty = (userToken: string| null) => {
  return userToken !== "";
}

