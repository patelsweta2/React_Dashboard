import { createStore } from "redux";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "This is Widget 1" },
        { id: 2, name: "Widget 2", text: "This is Widget 2" },
      ],
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
