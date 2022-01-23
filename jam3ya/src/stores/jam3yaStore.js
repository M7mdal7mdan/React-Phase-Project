import { makeObservable,observable,action } from "mobx"; 
import axios from "axios";

class Jam3yaStore{
jam3yas =[];
loading = true;

constructor(){

makeObservable(this,{
    jam3yas: observable,
    fetchJam3ya:action,
    createJam3ya: action,
    deleteJam3ya: action,
    updateJam3ya: action,
});
}
fetchJam3ya = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.jam3yas=response.data;
      this.loading=false;
    } catch (error) {
      console.log(error);
    }
  };
    createJam3ya = async (newJam3ya) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newJam3ya
      );
      this.jam3yas.push(newJam3ya)
    } catch (error) {
      console.log(error);
    }
  };

     deleteJam3ya = async (id) => {
    try {
      const response = await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      let tempJam3yas = this.jam3yas.filter((jam3ya) => jam3ya.id !== id);
      this.jam3yas = tempJam3yas;
    } catch (error) {
      console.log(error);
    }
  };

      updateJam3ya = async (updatedJam3ya) => {
    try {
      const response = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${updatedJam3ya.id}`,
        updatedJam3ya
      );
     let tempJam3yas = this.jam3yas.map((jam3ya) =>
        jam3ya.id === updatedJam3ya.id ? response.data : jam3ya
      );
      this.jam3yas= tempJam3yas;
    
    } catch (error) {
      console.log(error);
    }
  };

      



}
const jam3yaStore = new Jam3yaStore()
jam3yaStore.fetchJam3ya();
export default jam3yaStore