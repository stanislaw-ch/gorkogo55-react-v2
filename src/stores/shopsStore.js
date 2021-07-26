import { makeObservable, observable, action } from 'mobx';

export function shopsStore() {
  return makeObservable({
    isLoading: false,
    data: [],
    searchValue: '',
    setIsLoading(value) {
      this.isLoading = value;
    },
    setData(value) {
      this.data = value;
    },
    setSearchValue(value) {
      this.searchValue = value;
    }
  }, {
    isLoading: observable,
    data: observable,
    searchValue: observable,
    setIsLoading: action,
    setData: action,
    setSearchValue: action,
  });
}
