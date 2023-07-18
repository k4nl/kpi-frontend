export interface IUserData {
  id: Number;
  matricula: number;
  status: number;
  nome: string;
  email: string;
  data_de_admissao: string;
  data_de_rescisao: string;
  cargo: string;
}

export interface AuthContextType {
  userData: IUserData | null;
  isAuthenticated: boolean;
  login: (data: IUserData) => void;
  logout: () => void;
}

