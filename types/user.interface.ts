export interface UserInfo {
  id?: number,
  username?: string,
  nickname?: string,
  password?: string,
  email?: string,
  phone?: string,
  age?: number,
  gender?: number,
  avatar?: string,
  introduction?: string,
  address?: string,
  roleId?: number
}

export interface UserLoginFormData {
  username: string,
  password: string,
}

export interface UserRegFormData {
  username: string,
  password: string,
  email?: string
}
