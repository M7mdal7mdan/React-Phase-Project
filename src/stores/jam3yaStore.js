import { makeObservable, observable, action, configure } from "mobx";
import api from "./api";
configure({
  enforceActions: "never",
});
class Jam3yaStore {
  jam3yas = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      jam3yas: observable,
      loading: observable,
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

  deleteJam3ya = async (_id) => {
    try {
      await api.delete(`/jam3ya/${_id}`);
      let tempJam3yas = this.jam3yas.filter((jam3ya) => jam3ya._id !== _id);
      this.jam3yas = tempJam3yas;
    } catch (error) {
      console.log(error);
    }
  };

  updateJam3ya = async (updatedJam3ya) => {
    console.log(
      "🚀 ~ file: jam3yaStore.js ~ line 54 ~ Jam3yaStore ~ updateJam3ya= ~ updatedJam3ya",
      updatedJam3ya
    );
    try {
      const response = await api.put(
        `/jam3ya/${updatedJam3ya._id}`,
        updatedJam3ya
      );
      console.log(
        "🚀 ~ file: jam3yaStore.js ~ line 59 ~ Jam3yaStore ~ updateJam3ya= ~ response",
        response
      );
      let tempJam3yas = this.jam3yas.map((jam3ya) =>
        jam3ya._id === updatedJam3ya._id ? response.data : jam3ya
      );
      this.jam3yas = tempJam3yas;
    } catch (error) {
      console.log(error);
    }
  };
  ///jm3iaa
  joinJam3ya = async (user, jam3ya) => {
    try {
      await api.post(`/jam3ya/join/${jam3ya._id}`, user);
      jam3ya.users.push(user);
    } catch (error) {
      console.log(error);
    }
  };
  leaveJam3ya = async (jam3yaId) => {
    try {
      const res = await api.post(`/jam3ya/leave/${jam3yaId}`);
      const yaaay = this.jam3yas.map((jam3ya) =>
        jam3ya._id === res.data._id ? res.data : jam3ya
      );
      this.jam3yas = yaaay;
    } catch (error) {
      console.log(error);
    }
  };
}
let jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
