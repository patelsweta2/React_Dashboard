import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data.json";

const initialState = {
  categories: initialData.categories,
  searchQuery: "",
};
const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    updateWidget: (state, action) => {
      const { categoryId, widgetId, updatedWidget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        const widgetIndex = category.widgets.findIndex(
          (widget) => widget.id === widgetId
        );
        if (widgetIndex !== -1) {
          category.widgets[widgetIndex] = {
            ...category.widgets[widgetIndex],
            ...updatedWidget,
          };
        }
      }
    },
    searchWidget: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
    },
  },
});

export const { addWidget, removeWidget, updateWidget, searchWidget } =
  widgetsSlice.actions;
export default widgetsSlice.reducer;
