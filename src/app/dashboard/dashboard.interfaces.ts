export interface IData {
  id: number;
  data_de_admissao: Date ;
  data_de_rescisao: Date | null;
  nome: string;
  status: boolean;
}

export interface IMonthData {
  data: {
    start: IData[],
    end: IData[],
    inactives: IData[],
    middle: IData[],
    average: number;
  },
}

export interface IInitialData {
  month: string;
  monthData: IMonthData;
}
