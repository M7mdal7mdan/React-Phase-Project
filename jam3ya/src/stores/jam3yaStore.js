import { makeObservable, observable, action } from "mobx";
import api from "./api";
class Jam3yaStore {
  jam3yas = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      jam3yas: observable,
      fetchJam3ya: action,
      createJam3ya: action,
      deleteJam3ya: action,
      updateJam3ya: action,
    });
  }
  fetchJam3ya = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yas = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  createJam3ya = async (newJam3ya) => {
    try {
      const response = await api.post("/jam3ya", newJam3ya);
      this.jam3yas.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteJam3ya = async (id) => {
    try {
      await api.delete(`/jam3ya/${id}`);
      let tempJam3yas = this.jam3yas.filter((jam3ya) => jam3ya.id !== id);
      this.jam3yas = tempJam3yas;
    } catch (error) {
      console.log(error);
    }
  };

  updateJam3ya = async (updatedJam3ya) => {
    try {
      const response = await api.put(
        `/jam3ya/${updatedJam3ya.id}`,
        updatedJam3ya
      );
      let tempJam3yas = this.jam3yas.map((jam3ya) =>
        jam3ya.id === updatedJam3ya.id ? response.data : jam3ya
      );
      this.jam3yas = tempJam3yas;
    } catch (error) {
      console.log(error);
    }
  };
  joinJam3ya = async (user, jam3ya) => {
    try {
      const response = await api.post(`/jam3ya/join/${jam3ya._id}`, user);
      jam3ya.users.push(user);
    } catch (error) {
      console.log(
        "🚀 ~ file: jam3yaStore.js ~ line 64 ~ Jam3yaStore ~ joinJam3ya= ~ error",
        error
      );
    }
  };
  leaveJam3ya = async (user, jam3ya) => {
    try {
      await api.post(`/jam3ya/leave/${jam3ya._id}`, user);
      jam3ya.users.map((u) => u._id !== user._id);
    } catch (error) {}
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
