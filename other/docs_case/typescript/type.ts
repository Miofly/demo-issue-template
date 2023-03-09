type Nullable<T> = T | null;

interface IFtest {
	errorLogInfoList: Nullable<string>;
}

type Ttest = {
	errorLogInfoList: Nullable<string>;
}

const myTest: IFtest = {
	errorLogInfoList: null
}
