

const initial = {
    graph: {},
    
  };
  
  function Reducer(state = initial,{type,payload}) {
    switch (type) {
      case "Graph":
        return { ...state, graph: payload };

       
      default:
        return state;
    }
  }
  export default Reducer;
  