

const initial = {
    graph: {},
    grid:{}
  };
  
  function Reducer(state = initial, action) {
    switch (action.type) {
      case "Graph":
        return { ...state, graph: action.payload };

        case "Grid":
        return { ...state, grid: action.payload };
  
      default:
        return state;
    }
  }
  export default Reducer;
  