// .vitepress/theme/stores/useMainStore.js
import { defineStore } from "pinia";
import { NavLink } from "../types";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      navHistory: [] as NavLink[],
    };
  },
  actions: {
    insertHistory(array: NavLink) {
      // 校验参数
      if (!array || !array.title) {
        console.error("Invalid input: array must have a title property");
        return;
      }

      // 查找索引
      const _Index = this.navHistory.findIndex(
        (item) => item.title === array.title
      );

      // 创建新数组
      let newNavHistory = [...this.navHistory];

      // 删除重复项
      if (_Index !== -1) {
        newNavHistory.splice(_Index, 1);
      }

      // 插入新项
      newNavHistory = [array, ...newNavHistory];

      if (newNavHistory.length > 5) {
        newNavHistory.splice(5);
      }
      // 更新 navHistory
      this.navHistory = newNavHistory;
    },
  },
  persist: true,
});
