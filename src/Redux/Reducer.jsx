

const initial = {
    graph: {},
    grid:{}
  };
  
  function Reducer(state = initial, action) {
    switch (action.type) {
      case "Graph":
        return { ...state, graph: action.payload };

       
      default:
        return state;
    }
  }
  export default Reducer;
  